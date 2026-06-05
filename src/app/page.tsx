import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alazar Tilahun",
  url: "https://alazar-dev.vercel.app",
  jobTitle: "Senior Full Stack Engineer",
  worksFor: [
    { "@type": "Organization", name: "Arifpay Financial Technologies" },
    { "@type": "Organization", name: "Mindsight Performance Institute" },
  ],
  knowsAbout: [
    "Java", "Spring Boot", ".NET", "React", "Next.js", "TypeScript",
    "Node.js", "PostgreSQL", "Docker", "Fintech", "Payment Integration",
  ],
  sameAs: [
    "https://github.com/Alazar2018",
    "https://www.linkedin.com/in/alazar-tilahun",
    "https://www.upwork.com/freelancers/~01b075e61bda176e8d",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Addis Ababa",
    addressCountry: "ET",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Mekelle University",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
