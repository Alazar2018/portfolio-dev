"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupsIcon from "@mui/icons-material/Groups";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import PaymentsIcon from "@mui/icons-material/Payments";
import { personalInfo, achievements, education } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const statIcons = [EmojiEventsIcon, GroupsIcon, RocketLaunchIcon, PaymentsIcon];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="About Me"
          title="Turning Ideas Into Reality"
          subtitle="Hands-on Tech Lead building fintech platforms, distributed systems, and cloud-native apps"
        />

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <AnimatedSection className="lg:col-span-2 flex justify-center" delay={0.1}>
            <div className="relative">
              <div className="relative w-52 h-64 sm:w-64 sm:h-80 md:w-72 md:h-[22rem] rounded-2xl overflow-hidden border border-card-border shadow-xl shadow-accent/5">
                <Image
                  src={personalInfo.speakingImage}
                  alt={`${personalInfo.name} speaking`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-52 sm:w-64 md:w-72 h-64 sm:h-80 md:h-[22rem] rounded-2xl border border-accent/20 -z-10" />
              <div className="absolute -top-3 -left-3 px-4 py-2 bg-card border border-card-border rounded-xl text-xs font-medium shadow-lg">
                <SchoolIcon sx={{ fontSize: 14 }} className="text-accent mr-1" />
                {education.degree}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-3 space-y-6" delay={0.2}>
            <p className="text-muted leading-relaxed text-lg">
              {personalInfo.bio}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="flex items-center gap-1.5 text-accent">
                <LocationOnIcon sx={{ fontSize: 16 }} />
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-1.5 text-muted">
                <SchoolIcon sx={{ fontSize: 16 }} />
                {education.university} ({education.period})
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {achievements.map((stat, i) => {
                const Icon = statIcons[i];
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="p-4 rounded-xl bg-card border border-card-border text-center hover:border-accent/30 transition-colors"
                  >
                    <Icon sx={{ fontSize: 20 }} className="text-accent mx-auto mb-2" />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-xs text-muted mt-1">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
