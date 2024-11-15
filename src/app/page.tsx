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
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate 2s load
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;
  return (
    <main className="flex flex-col sm:mx-10 md:mx-12 h-full items-center justify-center pt-20 sm:pt-20 md:pt-28 px-4">
      <Greetings />
      <Scroll />
      <Intro />
      <Projects />
      <Skills />
      <Connect />
      
    </main>
  );
}
