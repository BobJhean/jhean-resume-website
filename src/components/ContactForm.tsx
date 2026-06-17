"use client";
import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", accessKey ?? "");
    formData.append("subject", "New message from your Solutionist website");
    formData.append("from_name", "jhean-resume-website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-[#12151e] border border-[#00d4ff]/30 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-white font-bold text-xl mb-2">Message sent.</h3>
        <p className="text-[#8892a4]">
          Thanks for reaching out — I&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#12151e] border border-[#2a2f42] rounded-2xl p-6 md:p-8 text-left"
    >
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-[#8892a4] text-xs mb-1.5 uppercase tracking-wide">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="w-full bg-[#0a0b0f] border border-[#2a2f42] rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-[#5a6478] focus:border-[#00d4ff] focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-[#8892a4] text-xs mb-1.5 uppercase tracking-wide">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="you@company.com"
            className="w-full bg-[#0a0b0f] border border-[#2a2f42] rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-[#5a6478] focus:border-[#00d4ff] focus:outline-none transition-colors"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-[#8892a4] text-xs mb-1.5 uppercase tracking-wide">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="What problem can I help you solve?"
          className="w-full bg-[#0a0b0f] border border-[#2a2f42] rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-[#5a6478] focus:border-[#00d4ff] focus:outline-none transition-colors resize-none"
        />
      </div>

      {/* Honeypot spam trap */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white font-semibold hover:opacity-90 transition-opacity glow disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>

      {status === "error" && (
        <p className="text-red-400 text-sm mt-3 text-center">
          Something went wrong. Please email me directly at{" "}
          <a href="mailto:jhean@bluethoughtech.com" className="underline">
            jhean@bluethoughtech.com
          </a>
          .
        </p>
      )}
    </form>
  );
}
