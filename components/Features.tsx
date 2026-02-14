"use client";
import React from "react";

const Features = () => {
    const features = [
        {
            title: "AI-Powered Questions",
            description: "Get industry-standard questions tailored specifically to your target role and experience level.",
            icon: "🧠",
        },
        {
            title: "Real-time Sentiment Analysis",
            description: "Our AI analyzes your tone and body language to provide actionable insights on your confidence.",
            icon: "📈",
        },
        {
            title: "Comprehensive Reports",
            description: "Receive a detailed breakdown of your performance with specific suggestions for improvement.",
            icon: "📋",
        },
        {
            title: "ATS Resume Scan",
            description: "Ensure your resume passes through automated filters with our AI-driven optimization tool.",
            icon: "🔍",
        },
    ];

    return (
        <section className="py-24 px-8 sm:px-20 bg-background relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Core Features</h2>
                    <h3 className="text-4xl sm:text-5xl font-extrabold text-white">Elevate Your Preparation</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="group p-8 rounded-3xl bg-surface border border-border hover:border-primary transition-all duration-300">
                            <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{feature.icon}</div>
                            <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                            <p className="text-zinc-500 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
