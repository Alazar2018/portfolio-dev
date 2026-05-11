"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { testimonials } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />
      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeading
          label="Testimonials"
          title="What Clients Say"
          subtitle="Feedback from people I've had the pleasure of working with"
        />

        <AnimatedSection delay={0.1}>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-card border border-card-border p-8 sm:p-12">
              <FormatQuoteIcon sx={{ fontSize: 48 }} className="text-accent/20 mb-4" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed mb-8 italic">
                    &ldquo;{testimonials[current].content}&rdquo;
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">
                      {testimonials[current].name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonials[current].name}</div>
                      <div className="text-sm text-muted">{testimonials[current].role}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prev}
                className="p-2 rounded-lg border border-card-border hover:border-accent/50 text-muted hover:text-foreground transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeftIcon />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === current ? "bg-accent w-6" : "bg-card-border"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-2 rounded-lg border border-card-border hover:border-accent/50 text-muted hover:text-foreground transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRightIcon />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
