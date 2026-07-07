"use client";
import Preloader from "../components/Preloader";
import Constellation from "../components/Constellation";
import Nav from "../components/Nav";
import CommandPalette from "../components/CommandPalette";
import Hero from "../components/Hero";
import Manifesto from "../components/Manifesto";
import Stats from "../components/Stats";
import About from "../components/About";
import Skills from "../components/Skills";
import Work from "../components/Work";
import Chronology from "../components/Chronology";
import Gallery from "../components/Gallery";
import Credentials from "../components/Credentials";
import Writing from "../components/Writing";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Hatch() {
  return (
    <div className="mx-auto max-w-container px-5 sm:px-8 lg:px-[72px]">
      <div className="hatch" aria-hidden="true" />
    </div>
  );
}

export default function Page() {
  return (
    <>
      <Preloader />
      <Constellation />
      <div className="grain" aria-hidden="true" />
      <Nav />
      <CommandPalette />
      <main id="top" className="relative z-10">
        {/* 2 · Hero */}
        <Hero />
        {/* 3 · Transition manifesto */}
        <Manifesto />
        <Stats />
        {/* 4 · About (01) */}
        <About />
        <Hatch />
        {/* 5 · Skills & tech stack */}
        <Skills />
        {/* 6 · Selected work (02) */}
        <Work />
        {/* 7 · Experience & education (03 / chronology) */}
        <Chronology />
        <Hatch />
        {/* extras — gallery & credentials archive */}
        <Gallery />
        <Hatch />
        <Credentials />
        <Hatch />
        <Writing />
        {/* 8 · Contact (04) */}
        <Contact />
      </main>
      {/* 9 · Footer */}
      <Footer />
    </>
  );
}
