"use client";
import React from "react";

const ContactPage = () => {
    const [formData, setFormData] = React.useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [error, setError] = React.useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess(false);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (res.ok) {
                setSuccess(true);
                setFormData({ name: "", email: "", message: "" });
            } else {
                setError(data.message || "Something went wrong.");
            }
        } catch (err) {
            setError("Failed to send message.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen pt-24 px-8 sm:px-20">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold text-white mb-4">Get In Touch</h1>
                    <p className="text-zinc-400 text-lg">Have questions? We're here to help you succeed.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-surface border border-border p-8 rounded-3xl">
                        <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label className="text-sm text-zinc-500 mb-1 block">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-zinc-900 border border-border rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="text-sm text-zinc-500 mb-1 block">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-zinc-900 border border-border rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="text-sm text-zinc-500 mb-1 block">Message</label>
                                <textarea
                                    rows={4}
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-zinc-900 border border-border rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-all resize-none"
                                    placeholder="How can we help?"
                                ></textarea>
                            </div>
                            {error && <p className="text-red-500 text-sm">{error}</p>}
                            {success && <p className="text-emerald-500 text-sm">Message sent successfully!</p>}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 disabled:opacity-50"
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>

                    <div className="flex flex-col justify-center space-y-8">
                        <div className="flex items-start gap-6">
                            <div className="bg-primary/10 p-4 rounded-2xl border border-primary/20 text-primary text-2xl">
                                📍
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-xl mb-1">Our Location</h3>
                                <p className="text-zinc-500">Tech Hub, Silicon Valley, CA</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="bg-secondary/10 p-4 rounded-2xl border border-secondary/20 text-secondary text-2xl">
                                ✉️
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-xl mb-1">Email Us</h3>
                                <p className="text-zinc-500">support@interwise.ai</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="bg-emerald-500/10 p-4 rounded-2xl border border-emerald-500/20 text-emerald-500 text-2xl">
                                📞
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-xl mb-1">Call Us</h3>
                                <p className="text-zinc-500">+1 (555) 123-4567</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
