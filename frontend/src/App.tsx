// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Upload from './pages/Upload';
import Score from './pages/Score';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from "./pages/Dashboard";
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<Upload />} />
        
        {/* Protected routes */}
        <Route
          path="/score"
          element={
            <ProtectedRoute>
              <Score />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
