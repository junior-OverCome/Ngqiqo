'use client'
import './globals.css';
import Intro from "./components/intro";
import Greetings from "./components/greetings";
import Scroll from "./components/scroll";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Connect from "./components/connect";
import { useState, useEffect } from "react";
import Loading from "./loading";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center gap-10 px-4 pb-16 pt-10 sm:px-6 md:pt-14">
      <Greetings />
      <Scroll />
      <Intro />
      <Projects />
      <Skills />
      <Connect />
    </main>
  );
}
