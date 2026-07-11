"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// UI Components
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectLabel,
  SelectValue,
} from "@/app/components/ui/select";

// Pure JavaScript object configuration (safely parsed by .jsx files)
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91 8592032757",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "fathimae2000@gmail.com",
  },
];

const Contact = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (value) => {
    setForm({ ...form, service: value });
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
      setForm({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="min-h-[80vh] flex items-center py-12 xl:py-24">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[60px] items-start">
          
          {/* Form Section */}
          <div className="w-full xl:w-[55%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-white/5 rounded-2xl border border-white/5">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
              >
                <h3 className="text-4xl font-bold mb-2">Let's work together</h3>
                <p className="text-white/60 text-sm mb-4">
                  Fill out the form below to discuss your project requirements or career opportunities.
                </p>
              </motion.div>
              
              {/* Input Grid */}
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  value={form.firstname}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-white/10 focus:border-accent text-white"
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  value={form.lastname}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-white/10 focus:border-accent text-white"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-white/10 focus:border-accent text-white"
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={handleChange}
                  className="bg-transparent border-white/10 focus:border-accent text-white"
                />
              </motion.div>

              {/* Select dropdown */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                <Select value={form.service} onValueChange={handleServiceChange}>
                  <SelectTrigger className="w-full bg-transparent border-white/10 focus:border-accent text-white">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900 border-white/10 text-white">
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="web">Web Development</SelectItem>
                      <SelectItem value="mobile">Mobile App Development</SelectItem>
                      <SelectItem value="uiux">UI/UX Design</SelectItem>
                      <SelectItem value="seo">SEO Optimization</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </motion.div>

              {/* Textarea & Button */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
                className="flex flex-col gap-6"
              >
                <Textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="h-[180px] bg-transparent border-white/10 focus:border-accent text-white resize-none"
                  placeholder="Type your message here."
                />
                <Button
                  size="lg"
                  type="submit"
                  disabled={status === "sending"}
                  className="uppercase max-w-max px-6"
                >
                  {status === "sending" ? "Sending..." : "Send message"}
                </Button>

                {status === "sent" && (
                  <p className="text-green-400 text-sm">
                    Message sent! I'll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-400 text-sm">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}
              </motion.div>
            </form>
          </div>

          {/* Info Details Section */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 w-full">
            <ul className="flex flex-col gap-10 w-full xl:max-w-md">
              {info.map((item, index) => {
                return (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 * index, ease: "easeOut" }}
                    className="flex items-center gap-6"
                  >
                    <div className="w-[54px] h-[54px] xl:w-[72px] xl:h-[72px] border border-accent/40 rounded-full flex justify-center items-center text-accent text-2xl bg-white/5 shadow-sm">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60 text-sm uppercase tracking-wider">{item.title}</p>
                      <h3 className="text-xl font-semibold mt-0.5 text-white">{item.description}</h3>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;