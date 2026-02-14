"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-surface border-t border-border py-16 px-8 sm:px-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="md:col-span-2">
                    <Link href="/" className="flex items-center gap-3 mb-6">
                        <Image width={30} height={30} src="/images/logo.svg" alt="Logo" />
                        <h2 className="text-2xl font-bold text-white tracking-tight">interwise</h2>
                    </Link>
                    <p className="text-zinc-400 max-w-sm leading-relaxed">
                        Revolutionizing interview preparation with AI-driven insights and personalized practice platforms. Join thousands of pros who've aced their dream jobs.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6 text-lg">Product</h4>
                    <ul className="space-y-4 text-zinc-400">
                        <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
                        <li><Link href="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link></li>
                        <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                        <li><Link href="/contacts" className="hover:text-primary transition-colors">Help Center</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6 text-lg">Legal</h4>
                    <ul className="space-y-4 text-zinc-400">
                        <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-6xl mx-auto pt-12 mt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-zinc-500 text-sm">
                    © 2026 Interwise AI. All rights reserved.
                </p>
                <div className="flex gap-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
                    <Image width={24} height={24} src="/images/Vector.svg" alt="Social" />
                    <Image width={24} height={24} src="/images/Vector.svg" alt="Social" />
                    <Image width={24} height={24} src="/images/Vector.svg" alt="Social" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
