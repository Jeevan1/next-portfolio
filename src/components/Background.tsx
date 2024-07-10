import React from "react";
import { education, experience } from "../data";

function Background() {
  const Title = () => {
    return (
      <>
        <span>Educaction</span> &amp; <span>Experience</span>
      </>
    );
  };
  return (
    <div className="background section " id="education">
      <div className="container mx-auto px-4">
        <div className="row flex justify-center">
          <div className="col-lg-6  lg:w-1/2 mb-8">
            <div
              className="section__heading text-center sticky"
              data-aos="zoom-in"
            >
              <h3>
                <span>Education</span> &amp; <span>Experience</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row flex flex-wrap">
          <div className="col-lg-6  lg:w-1/2">
            <div className="education">
              <div
                className="section__heading education__heading "
                data-aos="zoom-in"
              >
                <h4>Education</h4>
              </div>
              <div className="background__items">
                {education.map((edu, i) => (
                  <div className="background__item " data-aos="fade-up" key={i}>
                    <div className="shadow px-4 py-3 ml-5">
                      <p>{edu.durations}</p>
                      <h5>
                        {edu.title} (<small>{edu.degree}</small>)
                      </h5>
                      <span>{edu.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6  lg:w-1/2">
            <div className="experience">
              <div
                className="section__heading experience__heading "
                data-aos="zoom-in"
              >
                <h4>Experience</h4>
              </div>
              <div className="background__items">
                {experience.map((exp, i) => (
                  <div
                    className="background__item mb-4"
                    data-aos="fade-up"
                    key={i}
                  >
                    <div className="shadow px-4 py-3 ml-5">
                      <p className="text-gray-600">{exp.durations}</p>
                      <h5>
                        {exp.title} (<small>{exp.degree}</small>)
                      </h5>
                      <span>{exp.description}</span>
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

export default Background;
