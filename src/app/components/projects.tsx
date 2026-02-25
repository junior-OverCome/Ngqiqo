"use client";

import React from "react";

const projects = [
  {
    title: "Ngqiqo Portfolio",
    description: "Personal portfolio that presents my work, growth path, and frontend craft.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://ngqiqo.vercel.app",
  },
   {
    title: "Ngqiqo Portfolio",
    description: "Personal portfolio that presents my work, growth path, and frontend craft.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://ngqiqo.vercel.app",
  },
  {
    title: "Network Operations Showcase",
    description: "Practical workflow examples for secure setups, diagnosis, and reliable routing.",
    stack: ["Troubleshooting", "Security", "TCP/IP"],
    href: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="mb-8 space-y-3">
        <p className="section-kicker">Projects</p>
        <h2 className="section-title">Expanding Tech</h2>
        <p className="section-subtitle uppercase">Projects that push my boundaries</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="rounded-2xl border border-stone-200 bg-white/80 p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-xl font-bold text-stone-900">{project.title}</h3>
            <p className="mt-2 text-sm text-stone-600">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="pill">
                  {item}
                </span>
              ))}
            </div>
            <a
              href={project.href}
              target={project.href.startsWith("http") ? "_blank" : undefined}
              rel={project.href.startsWith("http") ? "noreferrer" : undefined}
              className="mt-6 inline-flex text-sm font-semibold text-orange-700 hover:text-orange-900"
            >
              View project
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
