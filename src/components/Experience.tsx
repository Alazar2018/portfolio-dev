"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { experiences } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggle = (i: number) =>
    setExpandedIndex((prev) => (prev === i ? null : i));

  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          label="Career Path"
          title="Work Experience"
          subtitle="My professional journey building fintech, enterprise, and web solutions"
        />

        <div className="relative pl-8 sm:pl-10">
          {/* timeline line */}
          <div className="absolute left-[11px] sm:left-[15px] top-0 bottom-0 w-px bg-card-border" />

          {experiences.map((exp, i) => {
            const isOpen = expandedIndex === i;
            const isCurrent = exp.period.includes("Present");

            return (
              <AnimatedSection key={exp.company} delay={i * 0.06} className="relative mb-3 last:mb-0">
                {/* timeline dot */}
                <div
                  className={`absolute -left-8 sm:-left-10 top-4 w-3 h-3 rounded-full ring-4 ring-background z-10 transition-colors ${
                    isCurrent ? "bg-accent" : "bg-card-border"
                  } ${isOpen ? "bg-accent" : ""}`}
                />

                {/* card */}
                <motion.div
                  className={`rounded-xl border transition-colors duration-200 cursor-pointer ${
                    isOpen
                      ? "bg-card border-accent/30"
                      : "bg-card/50 border-card-border hover:border-accent/20"
                  }`}
                  onClick={() => toggle(i)}
                >
                  {/* collapsed header — always visible */}
                  <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-accent text-xs font-mono flex items-center gap-1.5 shrink-0">
                          <BusinessIcon sx={{ fontSize: 13 }} />
                          {exp.company}
                        </span>
                        {isCurrent && (
                          <span className="px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-accent/10 text-accent rounded">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="text-sm font-semibold mt-0.5 truncate">{exp.role}</h3>
                      <div className="flex items-center gap-3 mt-0.5 text-xs text-muted">
                        <span>{exp.period}</span>
                        <span className="flex items-center gap-0.5">
                          <LocationOnIcon sx={{ fontSize: 11 }} />
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-muted shrink-0"
                    >
                      <ExpandMoreIcon sx={{ fontSize: 20 }} />
                    </motion.div>
                  </div>

                  {/* expandable details */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 border-t border-card-border/50 pt-3">
                          <p className="text-sm text-muted leading-relaxed mb-3">
                            {exp.description}
                          </p>

                          {exp.highlights && (
                            <ul className="space-y-1.5 mb-3">
                              {exp.highlights.map((h) => (
                                <li key={h} className="flex items-start gap-2 text-xs text-muted">
                                  <CheckCircleIcon sx={{ fontSize: 13 }} className="text-accent shrink-0 mt-0.5" />
                                  <span>{h}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          <div className="flex flex-wrap gap-1.5">
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-0.5 text-[11px] font-mono text-accent/80 bg-accent/5 border border-accent/10 rounded"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
