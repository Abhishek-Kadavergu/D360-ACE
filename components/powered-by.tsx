"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export const PoweredBy = () => {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center gap-5"
      >
        <TextGenerateEffect
          className="text-center text-2xl uppercase tracking-widest md:text-6xl lg:text-4xl"
          words="Powered By"
        />

        <Link
          href="https://yourcompany.com"
          target="_blank"
          rel="noreferrer noopener"
          className="transition-all duration-300"
        >
          <Image
            src="/piazza-logo-bg.png"
            alt="D360 ACE"
            width={600}
            height={212}
            className="h-48 w-auto object-contain opacity-75 transition-all duration-300 hover:scale-105 hover:opacity-100 hover:drop-shadow-[0_0_15px_rgba(203,172,249,0.4)]"
          />
        </Link>
      </motion.div>
    </section>
  );
};
