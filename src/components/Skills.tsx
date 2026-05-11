"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import WebIcon from "@mui/icons-material/Web";
import StorageIcon from "@mui/icons-material/Storage";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import { skills } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

type Category = keyof typeof skills;

const categoryConfig: Record<Category, { label: string; icon: React.ComponentType<{ sx?: object; className?: string }> }> = {
  frontend: { label: "Frontend", icon: WebIcon },
  backend: { label: "Backend", icon: StorageIcon },
  devops: { label: "DevOps & Tools", icon: BuildCircleIcon },
};

export default function Skills() {
  const [active, setActive] = useState<Category>("frontend");

  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />
      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeading
          label="Tech Stack"
          title="Skills & Technologies"
          subtitle="The tools and technologies I use to bring ideas to life"
        />

        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12">
            {(Object.keys(skills) as Category[]).map((cat) => {
              const { label, icon: Icon } = categoryConfig[cat];
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium rounded-xl transition-colors ${
                    active === cat ? "text-white" : "text-muted hover:text-foreground"
                  }`}
                >
                  {active === cat && (
                    <motion.span
                      layoutId="activeSkillTab"
                      className="absolute inset-0 bg-accent rounded-xl"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <Icon sx={{ fontSize: 18 }} className="relative z-10" />
                  <span className="relative z-10">{label}</span>
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        <div className="grid gap-4">
          {skills[active].map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-card-border hover:border-accent/30 transition-all duration-300"
            >
              <span className="w-28 shrink-0 text-sm font-medium">{skill.name}</span>
              <div className="flex-1 h-2 bg-background rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full"
                />
              </div>
              <span className="w-10 text-right text-xs text-muted font-mono">
                {skill.level}%
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
