import React from "react";
import { about, interest } from "../data";
import SectionHeading from "./SectionHeading";
import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <div
      className="about__us section "
      style={{ backgroundImage: `url('./assets/images/about/about-bg.png')` }}
      id="about"
    >
      <div className="container mx-auto px-4">
        <div className="row flex flex-wrap items-center">
          <div className="col-lg-4 lg:w-1/3">
            <div className="left__image" data-aos="fade-right">
              <Image
                src="/assets/images/about/about.png"
                alt="about img"
                className="w-full"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="col-lg-8 lg:w-2/3" data-aos="fade-right">
            <div className="right__services">
              <div className="section__heading mb-4">
                <h2 className="text-3xl font-bold mb-2">About Me</h2>
                <p className="text-gray-700 ">
                  Hi, I'm Jeevan Shrestha, a software developer specializing in
                  creating seamless and optimized web applications. With a
                  passion for front-end development, I focus on delivering
                  visually stunning and highly functional user interfaces. I'm
                  always eager for opportunities to grow and innovate in a
                  dynamic environment.
                </p>
              </div>
              <div className="about__detail">
                <div className="contact flex flex-wrap">
                  {about.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-center my-1 mr-3 p-1"
                    >
                      <Link
                        href={item.link}
                        target="_self"
                        className="icon text-primary"
                      >
                        <i className={`fa ${item.icon}`}></i>
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="interest mt-4">
                  <h5 className="text-xl font-semibold mb-2">My Interests</h5>
                  <div className="row flex flex-wrap gap-4">
                    {interest.map((item, index) => (
                      <div
                        className="col flex items-center  md:w-1/2 lg:w-1/3 mb-2"
                        key={index}
                      >
                        <i className={`fa ${item.icon} text-primary mr-2`}></i>
                        <span className="text-gray-700">{item.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
