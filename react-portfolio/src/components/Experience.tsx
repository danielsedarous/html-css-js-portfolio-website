import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNode,
  FaPython,
  FaJava,
  FaGithub,
  FaGitAlt,
  FaDatabase,
  FaGraduationCap,
} from "react-icons/fa";
import { SiTypescript, SiJavascript } from "react-icons/si";

const ExperienceSection = styled.section`
  padding: 100px 0;
`;

const ExperienceContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ExperienceHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const ExperienceSubtitle = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--primary-color);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const ExperienceTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--heading-color);
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

const Tab = styled.button<{ active: boolean }>`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  background: ${({ active }) =>
    active ? "var(--primary-color)" : "transparent"};
  color: ${({ active }) => (active ? "white" : "var(--text-color)")};
  border-radius: 30px;
  cursor: pointer;
  transition: var(--transition);
  margin: 0 0.5rem;

  &:hover {
    background: ${({ active }) => (active ? "var(--primary-color)" : "#eee")};
  }

  @media (max-width: 576px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: var(--transition);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  }
`;

const SkillCardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const SkillIcon = styled.div`
  font-size: 3rem;
  margin-right: 1rem;
  color: var(--primary-color);
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--heading-color);
`;

const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const SkillItemIcon = styled.div`
  font-size: 1.2rem;
  color: var(--primary-color);
`;

const SkillItemContent = styled.div``;

const SkillItemTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: var(--heading-color);
  margin-bottom: 0.2rem;
`;

const SkillItemLevel = styled.p`
  font-size: 0.8rem;
  color: var(--dark-gray);
`;

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState("skills");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <ExperienceSection id="experience">
      <ExperienceContainer>
        <ExperienceHeader>
          <InView threshold={0.3} triggerOnce>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
              >
                <ExperienceSubtitle>Explore My</ExperienceSubtitle>
                <ExperienceTitle>Skills & Expertise</ExperienceTitle>
              </motion.div>
            )}
          </InView>
        </ExperienceHeader>

        <TabsContainer>
          <Tab
            active={activeTab === "skills"}
            onClick={() => setActiveTab("skills")}
          >
            Technical Skills
          </Tab>
          <Tab
            active={activeTab === "education"}
            onClick={() => setActiveTab("education")}
          >
            Education
          </Tab>
        </TabsContainer>

        {activeTab === "skills" && (
          <InView threshold={0.1} triggerOnce>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <SkillsGrid>
                  <SkillCard variants={cardVariants}>
                    <SkillCardHeader>
                      <SkillIcon>
                        <FaReact />
                      </SkillIcon>
                      <SkillTitle>Frontend Development</SkillTitle>
                    </SkillCardHeader>
                    <SkillsList>
                      <SkillItem>
                        <SkillItemIcon>
                          <FaHtml5 />
                        </SkillItemIcon>
                        <SkillItemContent>
                          <SkillItemTitle>HTML</SkillItemTitle>
                          <SkillItemLevel>Experienced</SkillItemLevel>
                        </SkillItemContent>
                      </SkillItem>

                      <SkillItem>
                        <SkillItemIcon>
                          <FaCss3Alt />
                        </SkillItemIcon>
                        <SkillItemContent>
                          <SkillItemTitle>CSS</SkillItemTitle>
                          <SkillItemLevel>Experienced</SkillItemLevel>
                        </SkillItemContent>
                      </SkillItem>

                      <SkillItem>
                        <SkillItemIcon>
                          <SiTypescript />
                        </SkillItemIcon>
                        <SkillItemContent>
                          <SkillItemTitle>TypeScript</SkillItemTitle>
                          <SkillItemLevel>Experienced</SkillItemLevel>
                        </SkillItemContent>
                      </SkillItem>

                      <SkillItem>
                        <SkillItemIcon>
                          <SiJavascript />
                        </SkillItemIcon>
                        <SkillItemContent>
                          <SkillItemTitle>JavaScript</SkillItemTitle>
                          <SkillItemLevel>Experienced</SkillItemLevel>
                        </SkillItemContent>
                      </SkillItem>

                      <SkillItem>
                        <SkillItemIcon>
                          <FaReact />
                        </SkillItemIcon>
                        <SkillItemContent>
                          <SkillItemTitle>React</SkillItemTitle>
                          <SkillItemLevel>Experienced</SkillItemLevel>
                        </SkillItemContent>
                      </SkillItem>
                    </SkillsList>
                  </SkillCard>

                  <SkillCard variants={cardVariants}>
                    <SkillCardHeader>
                      <SkillIcon>
                        <FaNode />
                      </SkillIcon>
                      <SkillTitle>Backend Development</SkillTitle>
                    </SkillCardHeader>
                    <SkillsList>
                      <SkillItem>
                        <SkillItemIcon>
                          <FaPython />
                        </SkillItemIcon>
                        <SkillItemContent>
                          <SkillItemTitle>Python</SkillItemTitle>
                          <SkillItemLevel>Experienced</SkillItemLevel>
                        </SkillItemContent>
                      </SkillItem>

                      <SkillItem>
                        <SkillItemIcon>
                          <FaJava />
                        </SkillItemIcon>
                        <SkillItemContent>
                          <SkillItemTitle>Java</SkillItemTitle>
                          <SkillItemLevel>Experienced</SkillItemLevel>
                        </SkillItemContent>
                      </SkillItem>

                      <SkillItem>
                        <SkillItemIcon>
                          <FaNode />
                        </SkillItemIcon>
                        <SkillItemContent>
                          <SkillItemTitle>Node.js</SkillItemTitle>
                          <SkillItemLevel>Intermediate</SkillItemLevel>
                        </SkillItemContent>
                      </SkillItem>

                      <SkillItem>
                        <SkillItemIcon>
                          <FaDatabase />
                        </SkillItemIcon>
                        <SkillItemContent>
                          <SkillItemTitle>SQL/NoSQL</SkillItemTitle>
                          <SkillItemLevel>Intermediate</SkillItemLevel>
                        </SkillItemContent>
                      </SkillItem>
                    </SkillsList>
                  </SkillCard>

                  <SkillCard variants={cardVariants}>
                    <SkillCardHeader>
                      <SkillIcon>
                        <FaGithub />
                      </SkillIcon>
                      <SkillTitle>Tools & Methodologies</SkillTitle>
                    </SkillCardHeader>
                    <SkillsList>
                      <SkillItem>
                        <SkillItemIcon>
                          <FaGithub />
                        </SkillItemIcon>
                        <SkillItemContent>
                          <SkillItemTitle>GitHub</SkillItemTitle>
                          <SkillItemLevel>Experienced</SkillItemLevel>
                        </SkillItemContent>
                      </SkillItem>

                      <SkillItem>
                        <SkillItemIcon>
                          <FaGitAlt />
                        </SkillItemIcon>
                        <SkillItemContent>
                          <SkillItemTitle>Git</SkillItemTitle>
                          <SkillItemLevel>Intermediate</SkillItemLevel>
                        </SkillItemContent>
                      </SkillItem>

                      <SkillItem>
                        <SkillItemIcon>
                          <FaGraduationCap />
                        </SkillItemIcon>
                        <SkillItemContent>
                          <SkillItemTitle>Agile</SkillItemTitle>
                          <SkillItemLevel>Intermediate</SkillItemLevel>
                        </SkillItemContent>
                      </SkillItem>
                    </SkillsList>
                  </SkillCard>
                </SkillsGrid>
              </motion.div>
            )}
          </InView>
        )}

        {activeTab === "education" && (
          <InView threshold={0.1} triggerOnce>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
              >
                <SkillsGrid>
                  <SkillCard>
                    <SkillCardHeader>
                      <SkillIcon>
                        <FaGraduationCap />
                      </SkillIcon>
                      <SkillTitle>Brown University</SkillTitle>
                    </SkillCardHeader>
                    <motion.div>
                      <h4>Computer Science & Applied Mathematics</h4>
                      <p>2022 - 2026 (Expected)</p>
                      <br />
                      <p>
                        Pursuing a dual concentration in Computer Science and
                        Applied Mathematics with a focus on software development
                        and algorithms.
                      </p>
                      <br />
                      <p>
                        <strong>Relevant Coursework:</strong>
                      </p>
                      <ul style={{ paddingLeft: "20px" }}>
                        <li>Data Structures and Algorithms</li>
                        <li>Software Engineering</li>
                        <li>Machine Learning</li>
                        <li>Linear Algebra</li>
                        <li>Calculus</li>
                      </ul>
                    </motion.div>
                  </SkillCard>
                </SkillsGrid>
              </motion.div>
            )}
          </InView>
        )}
      </ExperienceContainer>
    </ExperienceSection>
  );
};

export default Experience;
 