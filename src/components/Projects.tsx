import React from "react";
import { projects } from "../data";
import { ProjectsProps } from "@/models";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ projectsItem }: { projectsItem: ProjectsProps[] }) => {
  return projectsItem.map((project, idx) => (
    <li data-aos="fade-up" key={idx}>
      <div className="top__image border">
        <Link href="#">
          <Image src={project.image} alt="project" height={1200} width={1200} />
        </Link>
      </div>
      <div className="bottom__content">
        <a href="#">
          <h4>{project.title}</h4>
        </a>
        <p>{project.description}</p>
        <div className="links flex gap-2 mt-3">
          <div className=" cyan__button">
            <Link href={project.live} target="_blank">
              Watch Live
            </Link>
          </div>
          <div className="red__button">
            <Link href={project.source} target="_blank">
              View Code
            </Link>
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
          <div className="col-lg-6 w-full lg:w-1/2 relative  lg:mb-0">
            <div className="left__content gap-0" data-aos="fade-right">
              <div className="section__heading mb-0 sticky top-0">
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
                <div className="top__image">
                  <Image
                    src="/assets/images/projects/geostore.png"
                    alt="company"
                    className="w-full h-auto rounded-lg shadow-lg"
                    width={1200}
                    height={1200}
                  />
                </div>
                <div className="info">
                  <div className="inner__content bg-white p-4 rounded-lg shadow-md">
                    <Link href="https://nextgeostore.netlify.app/">
                      <h4 className="text-xl font-semibold text-cyan-500">
                        Next-Geostore (Next.js)
                      </h4>
                    </Link>
                    <p className="text-gray-600 mt-0">
                      Geomart is an e-commerce platform designed to enhance
                      online shopping with convenience and innovation. It
                      features curated product selections across categories like
                      fashion, electronics, and home essentials. The platform
                      focuses on API integrations and Firebase for backend
                      support.
                    </p>
                    <div className="links flex gap-2 mt-3">
                      <div className="cyan__button ">
                        <Link
                          href="https://nextgeostore.netlify.app/"
                          target="_blank"
                        >
                          Watch Live
                        </Link>
                      </div>
                      <div className="red__button ">
                        <Link
                          href="https://github.com/Jeevan1/next-geostore"
                          target="_blank"
                        >
                          View Code
                        </Link>
                      </div>
                    </div>
                    <div className="more cyan__button  mt-3 ms-3">
                      <Link href="#">Discover More</Link>
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
