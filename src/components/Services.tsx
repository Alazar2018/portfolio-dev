"use client";

import { motion } from "framer-motion";
import CodeIcon from "@mui/icons-material/Code";
import PaymentsIcon from "@mui/icons-material/Payments";
import CloudIcon from "@mui/icons-material/Cloud";
import GroupsIcon from "@mui/icons-material/Groups";
import { services } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const iconMap: Record<string, React.ComponentType<{ sx?: object; className?: string }>> = {
  code: CodeIcon,
  payment: PaymentsIcon,
  store: CloudIcon,
  leadership: GroupsIcon,
};

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          label="What I Do"
          title="How I Deliver"
          subtitle="Hands-on technical leadership across distributed systems, fintech, and cloud-native platforms"
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group p-8 rounded-2xl bg-card border border-card-border hover:border-accent/30 transition-all duration-300 h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                    {Icon && <Icon sx={{ fontSize: 26 }} className="text-accent" />}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted leading-relaxed">{service.description}</p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
