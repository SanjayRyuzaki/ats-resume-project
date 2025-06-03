import { Link } from "react-router-dom";
import InfoSection from '../components/InfoSection/InfoSection';

export default function LandingPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              ATS Resume Checker
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Get your resume ATS-ready with instant scoring
            </p>
            <div className="space-x-4">
              <Link to="/upload">
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
                  Get Started
                </button>
              </Link>
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold border border-indigo-600 hover:bg-indigo-50 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Info Section follows */}
      <InfoSection
        primary
        lightBg={false}
        topLine="Top Features"
        lightTopLine
        headline="Instant Resume Scoring"
        lightText
        lightTextDesc
        description="Upload your resume and get instant feedback based on the job description using our smart AI system."
        buttonLabel="Get Started"
        img="/info1.png"
        alt="Resume Illustration"
        imgStart={false}
        start={false}
      />
    </>
  );
}
