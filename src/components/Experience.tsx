"use client";

import { motion } from "framer-motion";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { experiences } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          label="Career Path"
          title="Work Experience"
          subtitle="My professional journey building fintech, enterprise, and web solutions"
        />

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-card-border md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <AnimatedSection
              key={exp.company}
              delay={i * 0.1}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-accent rounded-full -translate-x-[5px] md:-translate-x-[6px] mt-8 ring-4 ring-background z-10" />

              <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-14"} pl-10 md:pl-0`}>
                <motion.div
                  whileHover={{ y: -2 }}
                  className="p-6 rounded-2xl bg-card border border-card-border hover:border-accent/30 transition-all duration-300"
                >
                  <div className={`flex items-center gap-2 mb-1 text-accent text-sm font-mono ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    <BusinessIcon sx={{ fontSize: 14 }} />
                    <span>{exp.company}</span>
                  </div>

                  <h3 className="text-base font-semibold mb-1">{exp.role}</h3>

                  <div className={`flex items-center gap-4 mb-4 text-xs text-muted ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    <span>{exp.period}</span>
                    <span className="flex items-center gap-1">
                      <LocationOnIcon sx={{ fontSize: 12 }} />
                      {exp.type}
                    </span>
                  </div>

                  <p className="text-sm text-muted leading-relaxed mb-3">
                    {exp.description}
                  </p>

                  {exp.highlights && (
                    <ul className={`space-y-1.5 mb-4 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.highlights.slice(0, 3).map((h) => (
                        <li key={h} className={`flex items-start gap-2 text-xs text-muted ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                          <CheckCircleIcon sx={{ fontSize: 14 }} className="text-accent shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono text-accent/80 bg-accent/5 border border-accent/10 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="hidden md:block flex-1" />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
