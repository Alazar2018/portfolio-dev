"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import { projects, type ProjectDetail } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import ProjectShowcase from "./ProjectShowcase";

function StatusBadgeSmall({ status }: { status: ProjectDetail["status"] }) {
  const config = {
    deployed: {
      label: "Live",
      dotClass: "bg-emerald-500",
      pillClass:
        "text-emerald-950 bg-emerald-100/95 border-emerald-200/80 dark:text-emerald-50 dark:bg-emerald-950/90 dark:border-emerald-500/30",
    },
    upcoming: {
      label: "Coming Soon",
      dotClass: "bg-amber-500",
      pillClass:
        "text-amber-950 bg-amber-100/95 border-amber-200/80 dark:text-amber-50 dark:bg-amber-950/90 dark:border-amber-500/30",
    },
    completed: {
      label: "Completed",
      dotClass: "bg-blue-500",
      pillClass:
        "text-blue-950 bg-blue-100/95 border-blue-200/80 dark:text-blue-50 dark:bg-blue-950/90 dark:border-blue-500/30",
    },
  };
  const { label, dotClass, pillClass } = config[status];
  return (
    <span
      className={`absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold border backdrop-blur-md rounded-full shadow-sm ${pillClass}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotClass}`} />
      {label}
    </span>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const visibleProjects = showAll ? projects : projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="My Work"
          title="Featured Projects"
          subtitle="A selection of projects that showcase my skills and experience"
        />

        <div className={`grid gap-6 ${showAll ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2"}`}>
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 0.1}>
                <motion.div
                  layout
                  whileHover={{ y: -4 }}
                  onClick={() => setSelectedProject(project)}
                  className="group h-full flex flex-col rounded-2xl bg-card border border-card-border hover:border-accent/30 overflow-hidden transition-all duration-300 cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <StatusBadgeSmall status={project.status} />
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  </div>

                  <div className="flex-1 p-6 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex gap-2 shrink-0 ml-3">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 text-muted hover:text-accent transition-colors"
                            aria-label="View source code"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <GitHubIcon sx={{ fontSize: 18 }} />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 text-muted hover:text-accent transition-colors"
                            aria-label="View live site"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <LaunchIcon sx={{ fontSize: 18 }} />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-mono text-accent bg-accent/10 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </AnimatePresence>
        </div>

        {projects.length > 3 && (
          <AnimatedSection className="text-center mt-10" delay={0.3}>
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 border border-card-border hover:border-accent/50 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-card"
            >
              {showAll ? "Show Less" : `View All Projects (${projects.length})`}
            </button>
          </AnimatedSection>
        )}
      </div>

      {selectedProject && (
        <ProjectShowcase
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
