import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { getAssetPath } from "../utils/assetUtils";

const ProjectsSection = styled.section`
  padding: 100px 0;
  background-color: var(--light-gray);
`;

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ProjectsHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const ProjectsSubtitle = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--primary-color);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const ProjectsTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--heading-color);
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.6rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  border: none;
  background: ${({ active }) => (active ? "var(--primary-color)" : "white")};
  color: ${({ active }) => (active ? "white" : "var(--text-color)")};
  border-radius: 30px;
  cursor: pointer;
  transition: var(--transition);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

  &:hover {
    background: ${({ active }) =>
      active ? "var(--primary-color)" : "#f5f5f5"};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: var(--transition);
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 220px;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: var(--transition);

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectCategory = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--primary-color);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--heading-color);
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: var(--text-color);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const ProjectTechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--primary-color);
  background-color: rgba(41, 120, 181, 0.1);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--heading-color);
  transition: var(--transition);

  svg {
    font-size: 1.1rem;
  }

  &:hover {
    color: var(--primary-color);
    transform: translateY(-2px);
  }
`;

const Projects: React.FC = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Brown Bites",
      category: "Web App",
      image: getAssetPath("/assets/Screen Shot 2024-01-03 at 2.30.49 AM.jpeg"),
      description:
        "A food delivery platform designed specifically for the Brown University community, connecting students with local restaurants and on-campus dining options.",
      techStack: ["React", "Node.js", "MongoDB", "Express"],
      githubLink:
        "https://github.com/cs0320-f23/term-project-ssoufan-cpbryant-dsedarou-aye15",
      demoLink: "",
      filter: ["all", "web", "frontend", "backend"],
    },
    {
      id: 2,
      title: "Maps",
      category: "Software",
      image: getAssetPath("/assets/Maps-image (2).png"),
      description:
        "A mapping application that provides directions and location services with customized algorithms for finding the shortest path between destinations.",
      techStack: ["Java", "Algorithms", "Data Structures"],
      githubLink: "https://github.com/danielsedarous/Maps.git",
      demoLink: "",
      filter: ["all", "software", "backend"],
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "Web Design",
      image: getAssetPath("/assets/danny_final.png"),
      description:
        "A modern React-based portfolio website showcasing projects and skills with interactive UI elements and animations.",
      techStack: ["React", "TypeScript", "Styled Components", "Framer Motion"],
      githubLink:
        "https://github.com/danielsedarous/html-css-js-portfolio-website",
      demoLink: "",
      filter: ["all", "web", "frontend"],
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.filter.includes(filter));

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <ProjectsHeader>
          <InView threshold={0.3} triggerOnce>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
              >
                <ProjectsSubtitle>Browse My Recent</ProjectsSubtitle>
                <ProjectsTitle>Projects</ProjectsTitle>
              </motion.div>
            )}
          </InView>
        </ProjectsHeader>

        <FilterContainer>
          <FilterButton
            active={filter === "all"}
            onClick={() => setFilter("all")}
          >
            All
          </FilterButton>
          <FilterButton
            active={filter === "web"}
            onClick={() => setFilter("web")}
          >
            Web
          </FilterButton>
          <FilterButton
            active={filter === "software"}
            onClick={() => setFilter("software")}
          >
            Software
          </FilterButton>
          <FilterButton
            active={filter === "frontend"}
            onClick={() => setFilter("frontend")}
          >
            Frontend
          </FilterButton>
          <FilterButton
            active={filter === "backend"}
            onClick={() => setFilter("backend")}
          >
            Backend
          </FilterButton>
        </FilterContainer>

        <InView threshold={0.1} triggerOnce>
          {({ inView, ref }) => (
            <ProjectsGrid ref={ref}>
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectImageContainer>
                    <ProjectImage src={project.image} alt={project.title} />
                    <ProjectOverlay>
                      {project.demoLink && (
                        <motion.a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          style={{
                            margin: "0 10px",
                            background: "white",
                            borderRadius: "50%",
                            width: "40px",
                            height: "40px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <FaExternalLinkAlt color="#333" />
                        </motion.a>
                      )}
                      {project.githubLink && (
                        <motion.a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          style={{
                            margin: "0 10px",
                            background: "white",
                            borderRadius: "50%",
                            width: "40px",
                            height: "40px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <FaGithub color="#333" />
                        </motion.a>
                      )}
                    </ProjectOverlay>
                  </ProjectImageContainer>

                  <ProjectContent>
                    <ProjectCategory>{project.category}</ProjectCategory>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDescription>
                      {project.description}
                    </ProjectDescription>

                    <ProjectTechStack>
                      {project.techStack.map((tech, i) => (
                        <TechTag key={i}>{tech}</TechTag>
                      ))}
                    </ProjectTechStack>

                    <ProjectLinks>
                      {project.githubLink && (
                        <ProjectLink
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub /> GitHub
                        </ProjectLink>
                      )}
                      {project.demoLink && (
                        <ProjectLink
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaExternalLinkAlt /> Live Demo
                        </ProjectLink>
                      )}
                    </ProjectLinks>
                  </ProjectContent>
                </ProjectCard>
              ))}
            </ProjectsGrid>
          )}
        </InView>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
