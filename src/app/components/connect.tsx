"use client";

import React, { useState } from "react";
import EmailJS from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Connect = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    user_email: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_dh4tkai";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_ec4ft7r";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "k_kO26QQCd1vAZFof";

    try {
      const res = await EmailJS.sendForm(serviceId, templateId, e.currentTarget, publicKey);

      if (res.status === 200) {
        setStatus("Message sent successfully.");
        setFormData({ from_name: "", user_email: "", message: "" });
        return;
      }

      setStatus("Message not sent. Please try again.");
    } catch (error) {
      setStatus("An error occurred. Please try again.");
      console.error("EmailJS Error:", error);
    }
  };

  return (
    <section id="connect" className="section-shell">
      <div className="mb-8 space-y-3">
        <p className="section-kicker">Connect</p>
        <h2 className="section-title">Let&apos;s Chat</h2>
        <p className="section-subtitle uppercase">Impressed yet? Let&apos;s connect.</p>
      </div>

      <div className="rounded-2xl border border-stone-200 bg-white/80 p-5">
        <button onClick={() => setShowForm((prev) => !prev)} className="primary-btn w-full">
          {showForm ? "Close Form" : "Open Contact Form"}
        </button>

        {showForm && (
          <div className="mt-5">
            {status && <p className="mb-4 text-sm font-medium text-green-700">{status}</p>}
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="from_name" className="mb-1 block text-sm font-medium text-stone-700">
                  Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-orange-400"
                />
              </div>
              <div>
                <label htmlFor="user_email" className="mb-1 block text-sm font-medium text-stone-700">
                  Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-orange-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-stone-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="What do you want to talk about?"
                  rows={4}
                  className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-orange-400"
                />
              </div>
              <button type="submit" className="primary-btn w-full">
                Send Message
              </button>
            </form>
          </div>
        )}
      </div>

      <div className="mt-6 flex items-center gap-4">
        <a href="https://github.com/junior-OverCome" target="_blank" rel="noreferrer" aria-label="GitHub profile">
          <FaGithub className="h-8 w-8 text-stone-700 transition hover:text-orange-700" />
        </a>
        <a
          href="https://www.linkedin.com/in/mphumzi-mathanjana-92ba78246"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
        >
          <FaLinkedin className="h-8 w-8 text-stone-700 transition hover:text-orange-700" />
        </a>
      </div>
    </section>
  );
};

export default Connect;
