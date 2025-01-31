import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Smart URL Shortening",
      description: "Create concise, memorable links instantly with our intelligent shortening algorithm.",
      icon: "⚡"
    },
    {
      title: "Advanced Analytics",
      description: "Track clicks, analyze user behavior, and optimize your link performance.",
      icon: "📊"
    },
    {
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee for your links.",
      icon: "🔒"
    },
    {
      title: "Custom Branding",
      description: "Personalize your short links with your brand name and custom domains.",
      icon: "✨"
    }
  ];

  return (
      <div className="min-h-[calc(100vh-80px)] bg-slate-100">
        <div className="container mx-auto px-6 py-16">
          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
                Transform Your Links into
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 to-purple-900">
                {" "}Powerful Insights
              </span>
              </h1>
              <p className="text-gray-700 text-lg mb-8">
                Simplify your URL sharing while gaining valuable analytics. Track, measure, and optimize your links with Linklytics.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                    onClick={() => navigate("/dashboard")}
                    className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-300"
                >
                  Get Started
                </button>
                <button
                    onClick={() => navigate("/dashboard")}
                    className="border-2 border-indigo-900 text-indigo-900 px-8 py-3 rounded-full font-semibold hover:bg-indigo-900 hover:text-white transition-all duration-300"
                >
                  Learn More
                </button>
              </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-purple-900 rounded-2xl blur-2xl opacity-20"></div>
              <img
                  src="/images/img2.png"
                  alt="Linklytics Dashboard"
                  className="relative rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Features Section */}
          <div className="pt-16">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold text-gray-900 text-center mb-12"
            >
              Features that make us special
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default LandingPage;
