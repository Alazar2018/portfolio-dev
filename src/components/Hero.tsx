"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import WorkIcon from "@mui/icons-material/Work";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DownloadIcon from "@mui/icons-material/Download";
import { personalInfo } from "@/lib/data";

function useTypewriter(words: string[], typingSpeed = 100, deletingSpeed = 50, pause = 2000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.slice(0, text.length + 1));
          if (text.length + 1 === currentWord.length) {
            setTimeout(() => setIsDeleting(true), pause);
          }
        } else {
          setText(currentWord.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return text;
}

export default function Hero() {
  const typedText = useTypewriter(personalInfo.taglines);

  const socialLinks = [
    { icon: GitHubIcon, href: personalInfo.social.github, label: "GitHub" },
    { icon: LinkedInIcon, href: personalInfo.social.linkedin, label: "LinkedIn" },
    { icon: TelegramIcon, href: personalInfo.social.telegram, label: "Telegram" },
    { icon: WorkIcon, href: personalInfo.social.upwork, label: "Upwork" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/15 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[200px]" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-20 lg:pt-0 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs sm:text-sm font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            {personalInfo.availability}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3 sm:mb-4"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-accent via-accent-light to-purple-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="min-h-[2.5rem] flex items-center lg:justify-start justify-center mb-6"
          >
            <span className="text-lg sm:text-xl md:text-2xl font-light text-muted">
              {typedText}
              <span className="animate-pulse text-accent">|</span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base text-muted max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
          >
            I build exceptional fintech systems and web applications — from payment
            platforms processing 50K+ transactions to scalable enterprise solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 mb-10"
          >
            <a
              href="#projects"
              className="group px-7 py-3 bg-accent hover:bg-accent-light text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
            >
              View My Work
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3 border border-card-border hover:border-accent/50 rounded-xl font-medium transition-all duration-300 hover:bg-card"
            >
              <DownloadIcon sx={{ fontSize: 18 }} />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center lg:justify-start justify-center gap-4"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 text-muted hover:text-accent border border-transparent hover:border-card-border rounded-xl transition-all duration-300 hover:bg-card"
              >
                <Icon sx={{ fontSize: 22 }} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative shrink-0"
        >
          <div className="relative w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 via-purple-500/20 to-accent/10 blur-2xl" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-accent/20 shadow-2xl shadow-accent/10">
              <Image
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                fill
                className="object-cover object-[center_35%]"
                priority
              />
            </div>
            <div className="absolute -bottom-2 -right-2 px-4 py-2 bg-card border border-card-border rounded-xl text-xs font-medium shadow-lg">
              <span className="text-accent">4+</span> Years Experience
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" aria-label="Scroll down">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <KeyboardArrowDownIcon sx={{ fontSize: 28 }} className="text-muted" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
