import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { getPostsByCategory } from "@/lib/blog";

const Experience = dynamic(() => import("@/components/Experience"));
const AITools = dynamic(() => import("@/components/AITools"));
const Writing = dynamic(() => import("@/components/Writing"));
const Podcasts = dynamic(() => import("@/components/Podcasts"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function Home() {
  const caseStudies = getPostsByCategory("case-study");
  const summaries = getPostsByCategory("summary");

  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <AITools />
      <Writing caseStudies={caseStudies} summaries={summaries} />
      <Podcasts />
      <Contact />
      <Footer />
    </>
  );
}
