"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { MagicButton } from "@/components/ui/magic-button";
import { cn } from "@/lib/utils";

export const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        How It Works —{" "}
        <span className="text-purple">Simple 3-Step Flow</span>
      </h1>

      <div className="my-20 flex flex-col items-center justify-center gap-4 lg:flex-row">
        <Card
          title="Create & Share"
          icon={<MagicButton title="Step 1" asChild />}
          description="Post jobs instantly and share application links anywhere — careers page, social media, or direct outreach. Get candidates flowing in within minutes."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>

        <Card
          title="Automate & Interview"
          icon={<MagicButton title="Step 2" asChild />}
          description="Candidates apply, upload resumes, and interviews are automatically scheduled — no manual coordination. AI conducts structured sessions at scale, simultaneously."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
        </Card>

        <Card
          title="Evaluate & Hire"
          icon={<MagicButton title="Step 3" asChild />}
          description="AI analyzes candidate performance, generates intelligent scores, and shortlists top talent — so you make smarter, faster, bias-free hiring decisions."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

type CardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
};

function usePointerHover() {
  const [hasFinePointerHover, setHasFinePointerHover] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setHasFinePointerHover(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return hasFinePointerHover;
}

const Card = ({ title, description, icon, children }: CardProps) => {
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const hasFinePointerHover = usePointerHover();

  useEffect(() => {
    if (hasFinePointerHover) return;

    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const open =
          entry.isIntersecting && entry.intersectionRatio >= 0.2;
        setInView(open);
      },
      { rootMargin: "-8% 0px -8% 0px", threshold: [0, 0.1, 0.2, 0.35, 0.5, 0.75, 1] }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasFinePointerHover]);

  const revealed = hasFinePointerHover ? hovered : inView;

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => hasFinePointerHover && setHovered(true)}
      onMouseLeave={() => hasFinePointerHover && setHovered(false)}
      className="group/canvas-card relative mx-auto flex w-full max-w-sm items-center justify-center rounded-3xl border border-black/[0.2] p-4 dark:border-white/[0.2] lg:h-[35rem]"
    >
      <Icon className="absolute -left-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -right-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -right-3 h-6 w-6 text-black dark:text-white" />

      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 h-full w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div
          className={cn(
            "absolute left-[50%] top-[50%] mx-auto flex w-full -translate-x-[50%] -translate-y-[50%] items-center justify-center text-center transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0",
            revealed && "-translate-y-4 opacity-0"
          )}
        >
          {icon}
        </div>

        <h2
          className={cn(
            "relative z-10 mt-4 text-3xl font-bold text-black opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 dark:text-white",
            revealed && "-translate-y-2 text-white opacity-100"
          )}
        >
          {title}
        </h2>

        <p
          className={cn(
            "relative z-10 mt-4 text-sm font-bold text-black opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 dark:text-white",
            revealed && "-translate-y-2 text-white opacity-100"
          )}
          style={{
            color: "#e4ecff",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...props }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
