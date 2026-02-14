import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-24 px-8 sm:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-6 underline decoration-primary underline-offset-8">About Interwise</h1>

        <div className="space-y-8 text-zinc-300 text-lg leading-relaxed">
          <p>
            Welcome to <span className="text-white font-bold text-xl">Interwise</span>, where your career growth meets cutting-edge AI technology. We are dedicated to bridging the gap between talent and opportunity by providing the tools you need to excel in the modern job market.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="bg-surface border border-border p-6 rounded-2xl">
              <h3 className="text-primary font-bold text-xl mb-3">Our Mission</h3>
              <p className="text-sm">To democratize interview preparation and career advancement through accessible, high-quality AI mentorship.</p>
            </div>
            <div className="bg-surface border border-border p-6 rounded-2xl">
              <h3 className="text-secondary font-bold text-xl mb-3">Our Vision</h3>
              <p className="text-sm">To become the world's most trusted partner for individuals seeking to navigate their professional journey with confidence.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Why Choose Us?</h2>
          <p>
            Traditional interview coaching is expensive and often inaccessible. Interwise provides a real-time, interactive environment where you can practice, receive feedback, and improve without the high costs or scheduling conflicts of human coaching.
          </p>

          <ul className="list-disc pl-6 space-y-3">
            <li>AI-powered sentiment and tone analysis</li>
            <li>Real-time technical and behavioral feedback</li>
            <li>Resume optimization and ATS-compatibility scoring</li>
            <li>Customized practice paths based on target roles</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
