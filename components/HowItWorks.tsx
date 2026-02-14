"use client";
import React from "react";

const HowItWorks = () => {
    const steps = [
        {
            number: "01",
            title: "Upload Your Resume",
            description: "Let our AI analyze your professional background and skills to prepare relevant questions.",
        },
        {
            number: "02",
            title: "Select Your Role",
            description: "Choose from hundreds of positions or define a custom role for a targeted practice session.",
        },
        {
            number: "03",
            title: "Practice with AI",
            description: "Engage in a realistic interview with our AI, receiving real-time cues and feedback.",
        },
        {
            number: "04",
            title: "Analyze & Improve",
            description: "Review your detailed performance metrics and refine your answers for the real thing.",
        },
    ];

    return (
        <section className="py-24 px-8 sm:px-20 bg-background border-t border-border/50">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="lg:w-1/3 sticky top-32">
                        <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Simple Process</h2>
                        <h3 className="text-4xl font-extrabold text-white mb-6">How Interwise Works</h3>
                        <p className="text-zinc-400 leading-relaxed">
                            We've simplified interview preparation into four easy steps. Our goal is to make high-quality practice accessible to everyone, anywhere.
                        </p>
                    </div>

                    <div className="lg:w-2/3 space-y-12">
                        {steps.map((step, index) => (
                            <div key={index} className="flex gap-8 group">
                                <div className="text-5xl font-black text-white/5 opacity-20 group-hover:text-primary group-hover:opacity-100 transition-all duration-500">
                                    {step.number}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                                    <p className="text-zinc-500">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
