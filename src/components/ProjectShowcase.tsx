"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import type { ProjectDetail } from "@/lib/data";

interface Props {
  project: ProjectDetail;
  onClose: () => void;
}

function StatusBadge({ status }: { status: ProjectDetail["status"] }) {
  const config = {
    deployed: { label: "Live", dotClass: "bg-emerald-400", textClass: "text-emerald-400" },
    upcoming: { label: "Coming Soon", dotClass: "bg-amber-400", textClass: "text-amber-400" },
    completed: { label: "Completed", dotClass: "bg-blue-400", textClass: "text-blue-400" },
  };
  const { label, dotClass, textClass } = config[status];
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${textClass}`}>
      <span className={`w-2 h-2 rounded-full ${dotClass} animate-pulse`} />
      {label}
    </span>
  );
}

function ImageSlideshow({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrent((prev) => (prev + dir + images.length) % images.length);
    },
    [images.length],
  );

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [images.length, paginate]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-background/50 group/slide">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[current]}
            alt={`${title} screenshot ${current + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            onClick={() => paginate(-1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-background/70 text-foreground opacity-0 group-hover/slide:opacity-100 transition-opacity hover:bg-background"
            aria-label="Previous image"
          >
            <ChevronLeftIcon sx={{ fontSize: 20 }} />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-background/70 text-foreground opacity-0 group-hover/slide:opacity-100 transition-opacity hover:bg-background"
            aria-label="Next image"
          >
            <ChevronRightIcon sx={{ fontSize: 20 }} />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > current ? 1 : -1);
                  setCurrent(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === current ? "bg-accent w-6" : "bg-foreground/40 hover:bg-foreground/60"
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function AppShowcase({ project, onClose }: Props) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
      <div className="lg:w-1/2 shrink-0">
        <ImageSlideshow images={project.images} title={project.title} />

        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 text-xs font-mono text-accent bg-accent/10 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-accent text-white rounded-lg hover:bg-accent-light transition-colors"
            >
              <LaunchIcon sx={{ fontSize: 16 }} />
              Visit Live Site
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-card-border rounded-lg hover:border-accent/50 transition-colors"
            >
              <GitHubIcon sx={{ fontSize: 16 }} />
              Source Code
            </a>
          )}
        </div>
      </div>

      <div className="lg:w-1/2 space-y-6 overflow-y-auto max-h-[60vh] lg:max-h-none pr-1">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <h2 className="text-xl sm:text-2xl font-bold">{project.title}</h2>
            <StatusBadge status={project.status} />
          </div>
          <p className="text-sm text-muted leading-relaxed">{project.longDescription}</p>
        </div>

        <div>
          <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent mb-3">
            <CheckCircleOutlinedIcon sx={{ fontSize: 18 }} />
            Features
          </h3>
          <ul className="grid grid-cols-1 gap-2">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {project.security && project.security.length > 0 && (
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent mb-3">
              <ShieldOutlinedIcon sx={{ fontSize: 18 }} />
              Security
            </h3>
            <ul className="grid grid-cols-1 gap-2">
              {project.security.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.architecture && (
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent mb-3">
              <ArchitectureIcon sx={{ fontSize: 18 }} />
              Architecture
            </h3>
            <p className="text-sm text-muted leading-relaxed">{project.architecture}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function WebsiteShowcase({ project }: Omit<Props, "onClose">) {
  return (
    <div className="space-y-6">
      <ImageSlideshow images={project.images} title={project.title} />

      <div className="flex items-center gap-3 mb-1">
        <h2 className="text-xl sm:text-2xl font-bold">{project.title}</h2>
        <StatusBadge status={project.status} />
      </div>

      <p className="text-sm text-muted leading-relaxed">{project.longDescription}</p>

      <div>
        <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent mb-3">
          <CheckCircleOutlinedIcon sx={{ fontSize: 18 }} />
          Key Highlights
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {project.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="flex flex-wrap gap-2 flex-1">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 text-xs font-mono text-accent bg-accent/10 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-accent text-white rounded-lg hover:bg-accent-light transition-colors shrink-0"
          >
            <LaunchIcon sx={{ fontSize: 16 }} />
            Visit Website
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProjectShowcase({ project, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card border border-card-border p-6 sm:p-8 shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-muted hover:text-foreground hover:bg-card-hover transition-colors z-10"
            aria-label="Close"
          >
            <CloseIcon sx={{ fontSize: 22 }} />
          </button>

          {project.type === "app" ? (
            <AppShowcase project={project} onClose={onClose} />
          ) : (
            <WebsiteShowcase project={project} />
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
