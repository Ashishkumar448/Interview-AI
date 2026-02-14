import React from "react";

const ServicesPage = () => {
    const services = [
        {
            title: "AI Interview Simulation",
            description: "Practice with realistic, industry-specific interview scenarios. Our AI adapts to your responses for a personalized challenge.",
            icon: "🤖",
            color: "border-primary"
        },
        {
            title: "Real-time Feedback",
            description: "Receive instant analysis on your body language, tone of voice, and answer quality to refine your performance.",
            icon: "⚡",
            color: "border-secondary"
        },
        {
            title: "Resume Refinement",
            description: "Upload your resume and get AI-driven suggestions to improve its impact and pass applicant tracking systems (ATS).",
            icon: "📄",
            color: "border-emerald-500"
        },
        {
            title: "Career Path Mapping",
            description: "Let our AI analyze your skills and interests to suggest the most promising career trajectories and required preparations.",
            icon: "🗺️",
            color: "border-orange-500"
        }
    ];

    return (
        <div className="min-h-screen pt-24 px-8 sm:px-20">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-5xl font-extrabold text-white mb-4">Our Services</h1>
                <p className="text-zinc-400 text-lg mb-16 max-w-2xl mx-auto">
                    Empowering your professional journey with state-of-the-art AI tools designed for modern career challenges.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className={`bg-surface border-t-4 ${service.color} p-8 rounded-2xl shadow-xl hover:translate-y-[-5px] transition-all duration-300 flex flex-col items-center`}>
                            <div className="text-4xl mb-6 bg-zinc-900 w-16 h-16 flex items-center justify-center rounded-full border border-border">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                            <p className="text-zinc-400 text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
