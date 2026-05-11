import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Alazar Tilahun — Senior Full Stack Engineer",
    short_name: "Alazar.dev",
    description:
      "Senior Full Stack Engineer building scalable fintech systems and web applications.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0f",
    theme_color: "#6366f1",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
