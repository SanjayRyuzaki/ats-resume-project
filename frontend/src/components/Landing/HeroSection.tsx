import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import scanAnimation from "@/assets/scan-resume.json"; // download & place a Lottie JSON

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-24 flex items-center justify-center bg-gradient-to-br from-white to-blue-50 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left: Text Content */}
        <div className="space-y-6">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get Your Resume ATS-Ready in Seconds 🚀
          </motion.h1>

          <p className="text-lg text-gray-700">
            Trusted by 1,200+ students. Upload your resume and get a free ATS match score instantly.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition"
              onClick={() => {
                const uploadSection = document.getElementById("upload-anchor");
                uploadSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Upload Resume
            </motion.button>

            <span className="text-sm text-gray-600">No login required • 100% Free</span>
          </div>
        </div>

        {/* Right: Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Lottie animationData={scanAnimation} loop={true} className="w-full h-auto max-w-md mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
