import React from "react";

const Greetings = () => {
  return (
    <section className="section-shell flex flex-col gap-8 md:gap-10">
      <div className="inline-flex w-fit rounded-full border border-orange-200 bg-orange-100 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-orange-900">
        Frontend Portfolio
      </div>

      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          Hi, I&apos;m Ngqiqo.
          <span className="block text-orange-700">I build clean, human-first web experiences.</span>
        </h1>
        <p className="max-w-2xl text-base text-stone-600 sm:text-lg">
          Frontend developer focused on useful interfaces, strong fundamentals, and continuously shipping better work.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <a href="#projects" className="primary-btn">
          View Projects
        </a>
        <a href="#connect" className="secondary-btn">
          Let&apos;s Connect
        </a>
      </div>
    </section>
  );
};

export default Greetings;
