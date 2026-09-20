"use client";
import React, { useEffect } from "react";
import {
  MainBanner,
  About,
  Skills,
  Background,
  Testimonials,
  Projects,
} from "@/components";
import Aos from "aos";
import "aos/dist/aos.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://sthajeevan.com.np/#person",
      name: "Jeevan Shrestha",
      url: "https://sthajeevan.com.np",
      image: "https://sthajeevan.com.np/assets/images/banner/banner-right-image.jpg",
      jobTitle: "Frontend Developer",
      description:
        "Frontend Developer specializing in React, Next.js, and modern web technologies based in Kathmandu, Nepal.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kathmandu",
        addressCountry: "NP",
      },
      sameAs: [
        "https://github.com/Jeevan1",
        "https://www.linkedin.com/in/jeevan-shrestha-34a3b01a5",
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "Django",
        "React Native",
      ],
      email: "shresthaj1986@gmail.com",
    },
    {
      "@type": "WebSite",
      "@id": "https://sthajeevan.com.np/#website",
      url: "https://sthajeevan.com.np",
      name: "Jeevan Shrestha | Portfolio",
      description: "Portfolio of Jeevan Shrestha — Frontend Developer",
      author: { "@id": "https://sthajeevan.com.np/#person" },
    },
  ],
};

const Home = () => {
  useEffect(() => {
    Aos.init({
      delay: 10,
      offset: 100,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MainBanner />
      <About />
      <Skills />
      <Background />
      <Testimonials />
      <Projects />
      {/* <Contact /> */}
    </>
  );
};

export default Home;
