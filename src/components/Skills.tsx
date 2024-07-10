import React from "react";
import { skills } from "../data";
import SectionHeading from "./SectionHeading";
import Image from "next/image";

function Skills() {
  const Title = () => {
    return (
      <>
        Core <span>Skills</span> &amp; <span>Tech.</span>
      </>
    );
  };
  return (
    <div id="skills" className="our__skills section">
      <div className="container mx-auto px-4">
        <div className="row flex flex-wrap justify-center">
          <div className="col-lg-6 lg:w-1/2  lg:mb-0">
            <div className="left__image" data-aos="fade-right">
              <Image
                src="/assets/images/skills/skills-left.png"
                alt="skills img"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="col-lg-6 lg:w-1/2">
            <div className="right__skill flex flex-col" data-aos="fade-left">
              <SectionHeading
                title={<Title />}
                description={`This section provides an overview of my core competencies and proficiency in relevant technologies, demonstrating my expertise and capabilities in various aspects of software development.`}
              />

              <div className="progress__section">
                {skills.map((skill, index) => (
                  <div className="progress__bar " key={skill.id}>
                    <div className="skill__image ">
                      <Image
                        src={skill.image}
                        alt={skill.image}
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="skill__content">
                      <h4>{skill.title}</h4>
                      <span>{skill.percentage}%</span>
                      <div className="filled__bar">
                        <div
                          className="filled__bar "
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                        <div className="full__bar"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
