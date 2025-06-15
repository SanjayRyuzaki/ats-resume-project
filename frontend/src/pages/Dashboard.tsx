import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ResumeCard from '@/components/ResumeCard';
import GreetingHeader from '@/components/GreetingHeader';
import { useAuth } from '@/hooks/useAuth';

interface ScoreHistoryItem {
  id: number;
  title: string;
  uploadDate: string;
  score: number;
}

export default function Dashboard() {
  const [history, setHistory] = useState<ScoreHistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchHistory = async () => {
      setLoading(true);
      setError(null);
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/api/checks', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setHistory(res.data.history);
      } catch (err: any) {
        setError(err.response?.data?.error || 'Failed to load history.');
      } finally {
        setLoading(false);
      }
    };
    fetchHistory();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Dashboard
          </h1>
          <GreetingHeader name={user?.name} />
          <div className="bg-white rounded-lg shadow-lg p-8">
            {loading ? (
              <div className="text-center text-gray-500 py-8">Loading...</div>
            ) : error ? (
              <div className="text-center text-red-600 py-8">{error}</div>
            ) : history.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                <p>No resume uploads yet.</p>
                <a href="/upload" className="mt-4 inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
                  Upload Your First Resume
                </a>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {history.map(item => (
                  <ResumeCard key={item.id} title={item.title} uploadDate={item.uploadDate} score={item.score} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
