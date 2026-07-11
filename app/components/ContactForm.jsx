"use client";

import { useState } from "react";
import { Button } from "./ui/button";

const ContactForm = ({ onClose }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={form.name}
        onChange={handleChange}
        required
        className="bg-transparent border-b border-white/20 py-2 outline-none focus:border-accent transition-colors"
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        value={form.email}
        onChange={handleChange}
        required
        className="bg-transparent border-b border-white/20 py-2 outline-none focus:border-accent transition-colors"
      />
      <textarea
        name="message"
        placeholder="Your message"
        value={form.message}
        onChange={handleChange}
        required
        rows={4}
        className="bg-transparent border-b border-white/20 py-2 outline-none focus:border-accent transition-colors resize-none"
      />

      <Button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send message"}
      </Button>

      {status === "sent" && (
        <p className="text-green-400 text-sm">Message sent! I'll get back to you soon.</p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm">Something went wrong. Try again, or email me directly.</p>
      )}
    </form>
  );
};

export default ContactForm;