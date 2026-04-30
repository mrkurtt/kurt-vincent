import React from "react";
import SectionTitle from "../components/SectionTitle";
import { myprojects } from "../utils/projects";
import ProjectCard from "../components/ProjectCard";
import Container from "../components/Container";

const Projects = () => {
  return (
    <section id="projects">
      <Container>
        <SectionTitle title={"my projects"} />{" "}
        <p className="text-center mb-6 font-light">
          Here you will find some of the personal and clients projects that I
          created.
        </p>
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid w-full auto-rows-fr grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-11 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
            {myprojects.map((pr) => (
              <ProjectCard
                key={pr.title}
                title={pr.title}
                description={pr.description}
                url={pr.link}
                image={pr.image}
                stack={pr.techStack}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
