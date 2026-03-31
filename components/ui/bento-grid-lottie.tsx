"use client";

import { useEffect, useRef } from "react";
import Lottie from "react-lottie";

import animationData from "@/data/confetti.json";

interface BentoGridLottieProps {
  copied: boolean;
}

const BentoGridLottie = ({ copied }: BentoGridLottieProps) => {
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    return () => {
      // Cleanup on unmount
      if (lottieRef.current && lottieRef.current.destroy) {
        try {
          lottieRef.current.destroy();
        } catch (error) {
          console.warn("Lottie cleanup error:", error);
        }
      }
    };
  }, []);

  return (
    <button
      tabIndex={-1}
      className="pointer-events-none absolute -bottom-5 right-0 cursor-default"
    >
      {copied && (
        <Lottie
          lottieRef={lottieRef}
          options={{
            loop: copied,
            autoplay: copied,
            animationData,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          height={100}
          width={100}
        />
      )}
    </button>
  );
};

export default BentoGridLottie;
