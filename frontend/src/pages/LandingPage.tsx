import { Link } from "react-router-dom";
import InfoSection from '../components/InfoSection/InfoSection';
import HeroSection from '../components/Landing/HeroSection';

export default function LandingPage() {
  return (
    <>
      <HeroSection />

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
