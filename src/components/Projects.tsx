import React from "react";
import { projects } from "../data";
import { ProjectsProps } from "@/models";
import Image from "next/image";

const ProjectItem = ({ projectsItem }: { projectsItem: ProjectsProps[] }) => {
  return projectsItem.map((project, idx) => (
    <li data-aos="fade-up" key={idx}>
      <div className="top__image border">
        <a href="#">
          <Image src={project.image} alt="project" height={1200} width={1200} />
        </a>
      </div>
      <div className="bottom__content">
        <a href="#">
          <h4>{project.title}</h4>
        </a>
        <p>{project.description}</p>
        <div className="links flex gap-2 mt-3">
          <div className="  cyan__button">
            <a href={project.live}>Watch Live</a>
          </div>
          <div className="red__button">
            <a href={project.source}>View Code</a>
          </div>
        </div>
      </div>
    </li>
  ));
};
function Projects() {
  return (
    <div id="projects" className="projects section ">
      <div className="container mx-auto px-4">
        <div className="row flex flex-wrap">
          <div className="col-lg-6 w-full lg:w-1/2 position-relative  lg:mb-0">
            <div className="left__content" data-aos="fade-right">
              <div className="section__heading sticky top-0">
                <h3 className="text-3xl font-bold ">
                  My <span className="text-cyan-500">Projects</span>
                </h3>
                <p className="text-gray-600">
                  A showcase of my diverse projects, all built with React's
                  cutting-edge capabilities. Witness the power of React in
                  action as it brings web applications to life with
                  interactivity and elegance.
                </p>
              </div>
              <div className="mt-6">
                <Image
                  src="/assets/images/projects/oneup.png"
                  alt="img"
                  className="w-full h-auto rounded-lg shadow-lg"
                  width={1200}
                  height={1200}
                />
                <div className="info mt-4">
                  <div className="inner__content bg-white p-4 rounded-lg shadow-md">
                    <a href="#">
                      <h4 className="text-xl font-semibold text-cyan-500">
                        SEO Agency &amp; Digital Marketing
                      </h4>
                    </a>
                    <p className="text-gray-600 mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Praesentium eius soluta pariatur quos nihil recusandae
                      velit earum vel laudantium iure...
                    </p>
                    <div className="links flex gap-2 mt-3">
                      <div className="cyan__button bg-cyan-500 text-white px-4 py-2 rounded-lg">
                        <a href="#">Watch Live</a>
                      </div>
                      <div className="red__button bg-red-500 text-white px-4 py-2 rounded-lg">
                        <a href="#">View Code</a>
                      </div>
                    </div>
                    <div className="more cyan__button bg-cyan-500 text-white px-4 py-2 rounded-lg mt-3">
                      <a href="#">Discover More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 w-full lg:w-1/2">
            <div className="section__image mb-4" data-aos="fade-up">
              <Image
                src="/assets/images/projects/project-bg.png"
                alt="img"
                className="w-full h-auto rounded-lg shadow-lg"
                width={500}
                height={500}
              />
            </div>
            <div className="right__content mt-8 lg:mt-0">
              <ul className="">
                <ProjectItem projectsItem={projects} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
