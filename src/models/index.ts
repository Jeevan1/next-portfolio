import { Url } from "next/dist/shared/lib/router/router";

export type NavLinks = {
  id: number;
  title: string;
  active?: string;
  path: string;
};

export type About = {
  id: number;
  title: string;
  icon: string;
  detail: string;
  link: Url;
};

export type Interest = {
  id: number;
  title: string;
  icon: string;
};

export type Education = {
  id: number;
  title: string;
  degree: string;
  durations: string;
  description: string;
};

export type Experience = {
  id: number;
  title: string;
  durations: string;
  description: string;
  degree: string;
};

export type Skills = {
  id: number;
  title: string;
  image: string;
  percentage: number;
};

export type ProjectsProps = {
  id: number;
  title: string;
  image: string;
  description: string;
  live: string;
  source: string;
};

export type Testimonial = {
  id: number;
  name: string;
  image: string;
  designation: string;
  content: string;
};
