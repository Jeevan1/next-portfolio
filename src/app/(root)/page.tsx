"use client";
import React, { useEffect } from "react";
import {
  MainBanner,
  About,
  Skills,
  Background,
  Testimonials,
  Projects,
  Contact,
} from "@/components";
import Aos from "aos";
import "aos/dist/aos.css";

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
      <MainBanner />
      <About />
      <Skills />
      <Background />
      <Testimonials />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
