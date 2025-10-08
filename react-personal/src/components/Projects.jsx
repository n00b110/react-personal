import webScreenshot from "../assets/web-screenshot.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProjectCard = ({
  title,
  description,
  image,
  demoLink,
  githubLink,
  technologies,
}) => {
  return (
    <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-200 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs bg-white/20 rounded-full backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:text-cyan-300 transition-colors"
              >
                Live Demo →
              </a>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:text-cyan-300 transition-colors"
              >
                GitHub →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Finance Web App",
      description:
        "A comprehensive financial management application with real-time tracking and analytics.",
      image: webScreenshot,
      demoLink: "https://n00b110.pythonanywhere.com/",
      githubLink: "https://github.com/n00b110/bank-project",
      technologies: ["Python", "Bootstrap", "Flask", "SQLite"],
    },
    {
      title: "ZapScheduler",
      description: "Developed a full-stack social media scheduling platform that automates post timing across multiple platforms",
      image: webScreenshot,
      demoLink: "#",
      githubLink: "#",
      technologies: ["Svelte", "Supabase", "Tailwind CSS"],
    },
    {
      title: "Project 3",
      description: "Description of your third project goes here.",
      image: webScreenshot,
      demoLink: "#",
      githubLink: "#",
      technologies: ["TypeScript", "Next.js", "Tailwind CSS"],
    },
  ];

  return (
    <div className="bg-gradient-to-l from-cyan-700 to-slate-500 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="text-2xl absolute rotate-180 rounded-full p-8 top-0 left-0 animate-pulse hover:scale-110 transition-transform"
        >
          →
        </Link>
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Projects
        </h2>
        <p className="text-white/80 text-center text-lg mb-12">
          Here are some of the projects I've worked on recently.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
