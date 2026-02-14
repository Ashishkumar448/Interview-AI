"use client";
import React from "react";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
    const { userData, isAuthenticated } = useAuth();
    const router = useRouter();

    if (!isAuthenticated) {
        router.push("/login");
        return null;
    }

    return (
        <div className="min-h-screen pt-24 px-8 sm:px-20">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-white mb-8">My Profile</h1>

                <div className="bg-surface border border-border rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden bg-zinc-800 border-2 border-primary">
                        {userData?.avatar ? (
                            <Image src={userData.avatar} alt="Avatar" fill className="object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-4xl text-zinc-500 font-bold">
                                {userData?.name?.charAt(0) || "U"}
                            </div>
                        )}
                    </div>

                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-2xl font-semibold text-white mb-1">{userData?.name}</h2>
                        <p className="text-zinc-400 mb-6">{userData?.email}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                            <div className="bg-zinc-900/50 p-4 rounded-xl border border-border">
                                <span className="text-zinc-500 block mb-1">Account Status</span>
                                <span className="text-emerald-400 font-medium">Active</span>
                            </div>
                            <div className="bg-zinc-900/50 p-4 rounded-xl border border-border">
                                <span className="text-zinc-500 block mb-1">Member Since</span>
                                <span className="text-white font-medium">February 2026</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-surface border border-border rounded-2xl p-6 hover:border-primary transition-colors cursor-pointer">
                        <h3 className="text-lg font-semibold text-white mb-2">Interview History</h3>
                        <p className="text-zinc-400 text-sm">View your past interview sessions and performance analysis.</p>
                    </div>
                    <div className="bg-surface border border-border rounded-2xl p-6 hover:border-primary transition-colors cursor-pointer">
                        <h3 className="text-lg font-semibold text-white mb-2">Resume Score</h3>
                        <p className="text-zinc-400 text-sm">Check your current resume strength and AI suggestions.</p>
                    </div>
                    <div className="bg-surface border border-border rounded-2xl p-6 hover:border-primary transition-colors cursor-pointer" onClick={() => router.push('/settings')}>
                        <h3 className="text-lg font-semibold text-white mb-2">Account Settings</h3>
                        <p className="text-zinc-400 text-sm">Manage your personal information and preferences.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
