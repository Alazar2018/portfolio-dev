"use client";

import AnimatedSection from "./AnimatedSection";

interface Props {
  title: string;
  subtitle: string;
  label: string;
}

export default function SectionHeading({ title, subtitle, label }: Props) {
  return (
    <AnimatedSection className="text-center mb-10 sm:mb-16">
      <span className="text-accent text-sm font-mono font-medium tracking-wider uppercase">
        {label}
      </span>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 mb-3 sm:mb-4">{title}</h2>
      <p className="text-sm sm:text-base text-muted max-w-xl mx-auto">{subtitle}</p>
    </AnimatedSection>
  );
}
