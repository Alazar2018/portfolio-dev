"use client";

import { useState, FormEvent, useRef } from "react";
import { motion } from "framer-motion";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import WorkIcon from "@mui/icons-material/Work";
import { personalInfo, services } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { useTheme } from "./ThemeProvider";

const serviceOptions = [
  { value: "", label: "Select a service you're interested in" },
  ...services.map((s) => ({ value: s.title, label: s.title })),
  { value: "Other", label: "Other" },
];

const budgetOptions = [
  { value: "", label: "Estimated budget (optional)" },
  { value: "25K - 50K ETB", label: "25K - 50K ETB" },
  { value: "50K - 100K ETB", label: "50K - 100K ETB" },
  { value: "100K - 250K ETB", label: "100K - 250K ETB" },
  { value: "250K - 500K ETB", label: "250K - 500K ETB" },
  { value: "500K+ ETB", label: "500K+ ETB" },
  { value: "Let's discuss", label: "Let's discuss" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha>(null);
  const { theme } = useTheme();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setStatus("sending");

    try {
      const payload: Record<string, string> = {
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "",
        from_name: `${formData.name} via alazar-dev.vercel.app`,
        replyto: formData.email,
        subject: `New Inquiry: ${formData.service || "General"} — ${formData.name}`,
        "Full Name": formData.name,
        "Email Address": formData.email,
        ...(formData.phone && { "Phone Number": formData.phone }),
        "Service Interested In": formData.service || "Not specified",
        "Budget Range": formData.budget || "Not specified",
        "Message": formData.message,
        "h-captcha-response": captchaToken || "",
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("sent");
        setFormData({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
        setCaptchaToken(null);
        captchaRef.current?.resetCaptcha();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 5000);
  };

  const contactItems = [
    { icon: EmailIcon, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: PhoneIcon, label: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: LocationOnIcon, label: personalInfo.location, href: undefined },
  ];

  const socialLinks = [
    { icon: GitHubIcon, href: personalInfo.social.github },
    { icon: LinkedInIcon, href: personalInfo.social.linkedin },
    { icon: TelegramIcon, href: personalInfo.social.telegram },
    { icon: WorkIcon, href: personalInfo.social.upwork },
  ];

  const selectClasses =
    "w-full px-4 py-3 rounded-xl bg-card border border-card-border text-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/25 transition-all appearance-none cursor-pointer";

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Get In Touch"
          title="Let's Work Together"
          subtitle="Have a project in mind? Let's discuss how I can help bring your vision to life"
        />

        <div className="grid lg:grid-cols-5 gap-12">
          <AnimatedSection className="lg:col-span-2 space-y-8" delay={0.1}>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-4">
                {contactItems.map(({ icon: Icon, label, href }) => {
                  const Wrapper = href ? "a" : "div";
                  return (
                    <Wrapper
                      key={label}
                      {...(href ? { href, target: href.startsWith("mailto") ? undefined : "_blank" } : {})}
                      className="flex items-center gap-3 text-muted hover:text-accent transition-colors"
                    >
                      <div className="p-2.5 rounded-lg bg-card border border-card-border">
                        <Icon sx={{ fontSize: 18 }} />
                      </div>
                      <span className="text-sm">{label}</span>
                    </Wrapper>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Social Links</h3>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-card border border-card-border text-muted hover:text-accent hover:border-accent/30 transition-all"
                  >
                    <Icon sx={{ fontSize: 20 }} />
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-purple-500/5 border border-accent/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-sm font-medium text-accent">Currently Available</span>
              </div>
              <p className="text-sm text-muted">
                Open to freelance projects and full-time opportunities. Let&apos;s talk!
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-3" delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-card border border-card-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/25 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-card border border-card-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/25 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone <span className="text-muted text-xs">(optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-card-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/25 transition-all"
                  placeholder="+251 9XX XXX XXXX"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service Interested In
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className={`${selectClasses} ${!formData.service ? "text-muted/50" : ""}`}
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-card text-foreground">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                        <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-2">
                    Budget Range
                  </label>
                  <div className="relative">
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className={`${selectClasses} ${!formData.budget ? "text-muted/50" : ""}`}
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-card text-foreground">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                        <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-card-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/25 transition-all resize-none"
                  placeholder="Tell me about your project, timeline, and goals..."
                />
              </div>

              <div className="flex justify-center sm:justify-start">
                <HCaptcha
                  ref={captchaRef}
                  sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                  onVerify={(token) => setCaptchaToken(token)}
                  onExpire={() => setCaptchaToken(null)}
                  theme={theme}
                />
              </div>

              {status === "sent" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm"
                >
                  <CheckCircleIcon sx={{ fontSize: 18 }} />
                  Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}

              {status === "error" && !captchaToken && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                >
                  <ErrorIcon sx={{ fontSize: 18 }} />
                  Please complete the captcha verification first.
                </motion.div>
              )}

              {status === "error" && captchaToken && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                >
                  <ErrorIcon sx={{ fontSize: 18 }} />
                  Something went wrong. Please try again or email me directly.
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 bg-accent hover:bg-accent-light text-white rounded-xl font-medium transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {status === "sending" ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <SendIcon sx={{ fontSize: 18 }} />
                  </>
                )}
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
