"use client";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import WorkIcon from "@mui/icons-material/Work";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { personalInfo, navLinks } from "@/lib/data";

export default function Footer() {
  const socialLinks = [
    { icon: GitHubIcon, href: personalInfo.social.github },
    { icon: LinkedInIcon, href: personalInfo.social.linkedin },
    { icon: TelegramIcon, href: personalInfo.social.telegram },
    { icon: WorkIcon, href: personalInfo.social.upwork },
  ];

  return (
    <footer className="border-t border-card-border bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <a href="#" className="text-xl font-bold tracking-tight inline-block mb-3">
              <span className="text-accent">{personalInfo.name.split(" ")[0]}</span>
              <span className="text-muted font-light">.dev</span>
            </a>
            <p className="text-sm text-muted leading-relaxed">
              Building scalable fintech systems and exceptional digital experiences.
              Always learning, always shipping.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted hover:text-accent transition-colors"
                >
                  <Icon sx={{ fontSize: 20 }} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-card-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <FavoriteIcon sx={{ fontSize: 12 }} className="text-red-400" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
