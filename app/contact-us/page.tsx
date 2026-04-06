"use client";

import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";

import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { MagicButton } from "@/components/ui/magic-button";
import { FloatingNav } from "@/components/ui/floating-nav";
import { Footer } from "@/components/footer";
import { navItems } from "@/data";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsSubmitting(false);

    // Clear form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-black-100 px-5 sm:px-10">
      <FloatingNav navItems={navItems} />

      <div className="w-full max-w-7xl">
        {/* Hero Section */}
        <div className="pb-20 pt-36">
          <div>
            <Spotlight
              className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
              fill="white"
            />
            <Spotlight
              className="left-full top-10 h-[80vh] w-[50vw]"
              fill="purple"
            />
            <Spotlight
              className="left-80 top-28 h-[80vh] w-[50vw]"
              fill="blue"
            />
          </div>

          <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black-100 dark:bg-grid-white/[0.03]">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
          </div>

          <div className="relative z-10 my-20 flex justify-center">
            <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
              <h2 className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">
                Get in Touch
              </h2>

              <TextGenerateEffect
                className="text-center text-[40px] md:text-5xl lg:text-6xl"
                words="Transform Your Hiring Today"
              />

              <p className="mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl">
                Ready to experience bias-free, intelligent hiring? Let's discuss
                how D360 ACE can revolutionize your recruitment process.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="relative z-10 mx-auto mb-20 max-w-4xl">
          <div className="border-purple-500/20 rounded-2xl border bg-black-200/50 p-8 backdrop-blur-lg md:p-12">
            {isSubmitted ? (
              <div className="py-12 text-center">
                <div className="mb-6 text-6xl">✅</div>
                <h3 className="mb-4 text-2xl font-bold text-white">
                  Thank you for reaching out!
                </h3>
                <p className="text-lg text-gray-300">
                  We've received your message and will get back to you within 24
                  hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-purple-500/20 focus:border-purple-500 focus:ring-purple-500/20 w-full rounded-lg border bg-black-300/50 px-4 py-3 text-white placeholder-black backdrop-blur-sm transition-colors focus:outline-none focus:ring-2"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-purple-500/20 focus:border-purple-500 focus:ring-purple-500/20 w-full rounded-lg border bg-black-300/50 px-4 py-3 text-white placeholder-black backdrop-blur-sm transition-colors focus:outline-none focus:ring-2"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="border-purple-500/20 focus:border-purple-500 focus:ring-purple-500/20 w-full rounded-lg border bg-black-300/50 px-4 py-3 text-white placeholder-black backdrop-blur-sm transition-colors focus:outline-none focus:ring-2"
                    placeholder="Acme Corporation"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="border-purple-500/20 focus:border-purple-500 focus:ring-purple-500/20 w-full resize-none rounded-lg border bg-black-300/50 px-4 py-3 text-white placeholder-black backdrop-blur-sm transition-colors focus:outline-none focus:ring-2"
                    placeholder="Tell us about your hiring challenges and how we can help..."
                  />
                </div>

                <div className="flex justify-center">
                  <MagicButton
                    title={isSubmitting ? "Sending..." : "Send Message"}
                    icon={<FaLocationArrow />}
                    position="right"
                    handleClick={() =>
                      document.querySelector("form")?.requestSubmit()
                    }
                    otherClasses={
                      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }
                  />
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Additional Information */}
        <div className="relative z-10 mx-auto mb-20 max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="border-purple-500/20 rounded-xl border bg-black-200/50 p-6 backdrop-blur-lg">
              <div className="mb-4 text-3xl">📧</div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                Email Us
              </h3>
              <p className="text-gray-300">info@pcongrp.com</p>
              {/* <p className="text-sm text-gray-400">
                We respond within 24 hours
              </p> */}
            </div>
            <div className="border-purple-500/20 rounded-xl border bg-black-200/50 p-6 backdrop-blur-lg">
              <div className="mb-4 text-3xl">📱</div>
              <h3 className="mb-2 text-xl font-semibold text-white">Call Us</h3>
              <p className="text-gray-300">877-317-1680</p>
              <p className="text-sm text-gray-400">Mon-Fri, 9AM-6PM EST</p>
            </div>
            <a href="https://piazza-website-beta.vercel.app/">
              <div className="border-purple-500/20 rounded-xl border bg-black-200/50 p-6 backdrop-blur-lg">
                <div className="mb-4 text-3xl">💬</div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  Powered By
                </h3>

                <a
                  href="https://piazza-website-beta.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 text-gray-300 transition-colors duration-200"
                >
                  Piazza Consulting Group
                </a>

                <p className="mt-2 text-sm text-gray-400">
                  Visit our official website
                </p>
              </div>
            </a>
          </div>
        </div>
        {/* 
        <Footer /> */}
      </div>
    </main>
  );
};

export default ContactUsPage;
