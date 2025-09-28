import React from "react";
import { motion } from "motion/react";

export function TestimonialSection() {
  return (
    <section className="py-12 sm:py-20 bg-gradient-to-r from-[#0f0f23] to-[#1a0a2e] overflow-hidden relative flex justify-center">
      <div className="relative z-10 w-full max-w-4xl">
        {/* Main Display */}
        <motion.div
          className="relative bg-card  p-6 shadow-professional-lg border border-muted"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-background rounded-xl overflow-hidden border border-muted">
            {/* Browser Chrome */}
            <div className="flex items-center justify-between px-4 py-3 bg-card border-b border-muted">
              <div className="text-muted text-sm font-mono">omega-dev.com</div>
              <div className="w-16"></div>
            </div>

            {/* Content Area with video */}
            <div className="relative h-64 lg:h-96">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-b-xl"
              >
                <source src="/video1-browser.webm" type="video/webm" />
              </video>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent"></div>

              {/* Bottom caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-muted text-sm">Web/App development Agency</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0f0f23] to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#1a0a2e] to-transparent z-20 pointer-events-none" />
    </section>
  );
}


