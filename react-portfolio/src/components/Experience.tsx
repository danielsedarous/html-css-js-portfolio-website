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
import { BsBuilding, BsBook } from "react-icons/bs";
import { getAssetPath } from "../utils/assetUtils";

const ExperienceSection = styled.section`
  padding: 100px 0;
`;

const ExperienceContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionHeader = styled.div`
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

const ExperienceCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  margin-bottom: 2.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  }
`;

const ExperienceCardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
`;

const CompanyLogo = styled.div`
  font-size: 2.5rem;
  margin-right: 1.5rem;
  color: var(--primary-color);
  opacity: 0.9;
  min-width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ExperienceInfo = styled.div`
  flex: 1;
`;

const CompanyName = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--heading-color);
  margin-bottom: 0.75rem;
  line-height: 1.3;
`;

const Position = styled.h4`
  font-size: 1.2rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.4;
`;

const Duration = styled.p`
  font-size: 1rem;
  color: var(--dark-gray);
  font-weight: 400;
`;

const ExperienceDescription = styled.div`
  margin-top: 1.5rem;
  color: var(--text-color);
  line-height: 1.6;
`;

const BulletList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-top: 1rem;
`;

const BulletItem = styled.li`
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
  line-height: 1.6;
  color: var(--text-color);
  font-size: 1.05rem;

  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: var(--primary-color);
    font-weight: bold;
  }

  strong {
    color: var(--heading-color);
    font-weight: 600;
  }
`;

const ResearchPoster = styled.img`
  width: 100%;
  max-width: 800px;
  height: auto;
  border-radius: 12px;
  margin: 2rem auto 0;
  display: block;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
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
        <SectionHeader>
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
        </SectionHeader>

        <TabsContainer>
          <Tab
            active={activeTab === "skills"}
            onClick={() => setActiveTab("skills")}
          >
            Technical Skills
          </Tab>
          <Tab
            active={activeTab === "work"}
            onClick={() => setActiveTab("work")}
          >
            Work Experience
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

        {activeTab === "work" && (
          <InView threshold={0.1} triggerOnce>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <ExperienceCard variants={cardVariants}>
                  <ExperienceCardHeader>
                    <CompanyLogo>
                      <BsBuilding />
                    </CompanyLogo>
                    <ExperienceInfo>
                      <CompanyName>
                        Siemens Digital Industries Software
                      </CompanyName>
                      <Position>Software Development Intern</Position>
                      <Duration>May 2024 - Present</Duration>
                    </ExperienceInfo>
                  </ExperienceCardHeader>
                  <ExperienceDescription>
                    <BulletList>
                      <BulletItem>
                        Currently enhancing{" "}
                        <strong>Teamcenter's AI Copilot</strong> with advanced
                        features including like/dislike feedback system,
                        real-time text streaming capabilities, and an optimized
                        loading interface, resulting in a projected{" "}
                        <strong>40% improvement</strong> in user satisfaction.
                      </BulletItem>
                      <BulletItem>
                        Previously developed and integrated an innovative{" "}
                        <strong>AI Copilot</strong> into Siemens' Teamcenter
                        product lifecycle management suite using{" "}
                        <strong>React</strong> and <strong>JavaScript</strong>,
                        which improved end-user workflow efficiency by{" "}
                        <strong>50%</strong>.
                      </BulletItem>
                      <BulletItem>
                        Architected a versatile UI component framework capable
                        of hosting{" "}
                        <strong>10 distinct AI-driven features</strong>,
                        establishing a foundation for scalable AI integration
                        within Teamcenter.
                      </BulletItem>
                      <BulletItem>
                        Received distinguished recognition by winning{" "}
                        <strong>3rd place among 200 interns</strong> at the
                        Siemens Intern Impact Awards for innovative
                        contributions to AI design and implementation.
                      </BulletItem>
                    </BulletList>
                  </ExperienceDescription>
                </ExperienceCard>

                <ExperienceCard variants={cardVariants}>
                  <ExperienceCardHeader>
                    <CompanyLogo>
                      <BsBook />
                    </CompanyLogo>
                    <ExperienceInfo>
                      <CompanyName>Brown University</CompanyName>
                      <Position>
                        Research Assistant - Department of Computer Science
                      </Position>
                      <Duration>January 2025 - Present</Duration>
                    </ExperienceInfo>
                  </ExperienceCardHeader>
                  <ExperienceDescription>
                    <BulletList>
                      <BulletItem>
                        Collaborating with{" "}
                        <strong>Professor Diana Freed</strong> on groundbreaking
                        research investigating the impact of{" "}
                        <strong>AI-generated deepfakes</strong> on teenage
                        digital safety and well-being.
                      </BulletItem>
                      <BulletItem>
                        Designed and implemented{" "}
                        <strong>three comprehensive qualitative surveys</strong>{" "}
                        to gather data on the psychological and behavioral
                        effects of deepfake technology on teenagers.
                      </BulletItem>
                      <BulletItem>
                        Contributing to the development of strategies and
                        recommendations for protecting teenagers in an
                        increasingly AI-driven digital landscape.
                      </BulletItem>
                    </BulletList>
                  </ExperienceDescription>
                </ExperienceCard>

                <ExperienceCard variants={cardVariants}>
                  <ExperienceCardHeader>
                    <CompanyLogo>
                      <BsBook />
                    </CompanyLogo>
                    <ExperienceInfo>
                      <CompanyName>
                        Wake Forest University School of Medicine
                      </CompanyName>
                      <Position>
                        Research Assistant - Department of Plastic and
                        Reconstructive Surgery
                      </Position>
                      <Duration>July 2024 - September 2024</Duration>
                    </ExperienceInfo>
                  </ExperienceCardHeader>
                  <ExperienceDescription>
                    <BulletList>
                      <BulletItem>
                        Developed an extensive suite of{" "}
                        <strong>
                          over 30 sophisticated data visualizations
                        </strong>{" "}
                        using <strong>Python</strong>, <strong>Pandas</strong>,{" "}
                        <strong>Vega-Altair</strong>, and{" "}
                        <strong>Seaborn</strong> to analyze and communicate
                        cleft palate surgical outcomes.
                      </BulletItem>
                      <BulletItem>
                        Created innovative visualization techniques including
                        traffic light strip plots, box-and-whisker plots, and
                        histograms to effectively communicate patient outcomes
                        across different age groups.
                      </BulletItem>
                      <BulletItem>
                        Co-authored a research poster that earned{" "}
                        <strong>3rd place among 150 submissions</strong> at the
                        prestigious American Cleft Palate Craniofacial
                        Association Conference.
                      </BulletItem>
                    </BulletList>
                    <ResearchPoster
                      src={getAssetPath("/assets/Cleft-Poster.jpeg")}
                    />
                  </ExperienceDescription>
                </ExperienceCard>
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
