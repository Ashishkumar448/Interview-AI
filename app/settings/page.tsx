"use client";
import React from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const SettingsPage = () => {
    const { userData, isAuthenticated } = useAuth();
    const router = useRouter();

    if (!isAuthenticated) {
        router.push("/login");
        return null;
    }

    return (
        <div className="min-h-screen pt-24 px-8 sm:px-20">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-white mb-8">Settings</h1>

                <div className="space-y-6">
                    <section className="bg-surface border border-border rounded-2xl p-8">
                        <h2 className="text-xl font-semibold text-white mb-6">General Preferences</h2>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-zinc-900/50 rounded-xl border border-border">
                                <div>
                                    <h3 className="text-white font-medium">Email Notifications</h3>
                                    <p className="text-zinc-400 text-sm">Receive updates about your interviews</p>
                                </div>
                                <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
                                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-zinc-900/50 rounded-xl border border-border opacity-50">
                                <div>
                                    <h3 className="text-white font-medium">AI Suggestions</h3>
                                    <p className="text-zinc-400 text-sm">Real-time feedback during practice</p>
                                </div>
                                <div className="w-12 h-6 bg-zinc-700 rounded-full relative cursor-not-allowed">
                                    <div className="absolute left-1 top-1 w-4 h-4 bg-zinc-400 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-surface border border-border rounded-2xl p-8">
                        <h2 className="text-xl font-semibold text-white mb-6">Account Security</h2>
                        <div className="space-y-4">
                            <button className="w-full text-left p-4 bg-zinc-900/50 rounded-xl border border-border hover:border-primary transition-colors text-white font-medium">
                                Change Password
                            </button>
                            <button className="w-full text-left p-4 bg-zinc-900/50 rounded-xl border border-border hover:border-primary transition-colors text-white font-medium">
                                Two-Factor Authentication
                            </button>
                        </div>
                    </section>

                    <section className="bg-surface border border-zinc-900 rounded-2xl p-8 border-t-4 border-t-red-500/50">
                        <h2 className="text-xl font-semibold text-white mb-6">Danger Zone</h2>
                        <p className="text-zinc-400 mb-6 text-sm">Once you delete your account, there is no going back. Please be certain.</p>
                        <button className="px-6 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/50 rounded-xl font-semibold transition-all">
                            Delete Account
                        </button>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
