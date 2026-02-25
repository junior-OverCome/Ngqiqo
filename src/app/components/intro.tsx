import Image from "next/image";
import React from "react";

function Intro() {
  return (
    <section id="about" className="section-shell grid grid-cols-1 items-center gap-8 md:grid-cols-[1.2fr,0.8fr]">
      <div className="space-y-4">
        <p className="section-kicker">Intro</p>
        <h2 className="section-title">Who Am I</h2>
        <p className="section-subtitle uppercase">Should you even care?</p>
        <p className="max-w-xl text-base leading-relaxed text-stone-700 md:text-lg">
          I&apos;m Ngqiqo, a frontend developer on a journey to create, learn, and improve with each build. If shaping useful digital experiences excites you, we&apos;ll get along well.
        </p>
      </div>

      <div className="flex justify-center md:justify-end">
        <div className="relative">
          <div className="absolute -inset-2 rounded-full bg-orange-200 blur-xl" />
          <Image
            src="/boy.png"
            alt="Ngqiqo portrait"
            width={220}
            height={220}
            className="relative h-44 w-44 rounded-full border-4 border-white object-cover shadow-xl md:h-56 md:w-56"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default Intro;
