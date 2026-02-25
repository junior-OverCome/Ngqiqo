"use client";

import React from "react";

const frontendSkills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive UI", "UX-focused builds"];
const networkingSkills = ["Configuration", "Diagnosis", "Security Protocols", "TCP/IP Routing"];

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="mb-8 space-y-3">
        <p className="section-kicker">Skills</p>
        <h2 className="section-title">Climbing The Tech Ladder</h2>
        <p className="section-subtitle uppercase">Constant learning, new tech every time</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-stone-200 bg-white/80 p-6">
          <h3 className="text-lg font-bold text-stone-900">Development</h3>
          <p className="mt-2 text-sm text-stone-600">Creating performant and polished interfaces with modern frontend tooling.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {frontendSkills.map((skill) => (
              <span key={skill} className="pill">
                {skill}
              </span>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-stone-200 bg-white/80 p-6">
          <h3 className="text-lg font-bold text-stone-900">Networking</h3>
          <p className="mt-2 text-sm text-stone-600">Maintaining secure and reliable connectivity with practical troubleshooting discipline.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {networkingSkills.map((skill) => (
              <span key={skill} className="pill">
                {skill}
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
