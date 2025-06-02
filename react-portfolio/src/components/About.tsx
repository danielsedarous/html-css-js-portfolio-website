import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { getAssetPath } from "../utils/assetUtils";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaUserTie,
  FaDumbbell,
  FaBook,
  FaGuitar,
} from "react-icons/fa";

const AboutSection = styled.section`
  padding: 100px 0;
  background-color: var(--light-gray);
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const AboutHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const AboutSubtitle = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--primary-color);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--heading-color);
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const AboutContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const AboutImageContainer = styled(motion.div)`
  flex: 1;
  max-width: 450px;
  position: relative;

  @media (max-width: 992px) {
    max-width: 350px;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  z-index: 2;
  position: relative;
`;

const ImageDecoration = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 4px solid var(--primary-color);
  border-radius: 20px;
  top: 20px;
  left: 20px;
  z-index: 1;
`;

const AboutTextContent = styled.div`
  flex: 1;
  max-width: 600px;
`;

const AboutDescription = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-color);
  margin-bottom: 2rem;
`;

const AboutInfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 2.5rem;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const AboutInfoItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const AboutInfoIcon = styled.div`
  font-size: 1.8rem;
  color: var(--primary-color);
`;

const AboutInfoText = styled.div``;

const AboutInfoTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--heading-color);
  margin-bottom: 0.5rem;
`;

const AboutInfoDescription = styled.p`
  font-size: 1rem;
  color: var(--text-color);
  line-height: 1.5;
`;

const HobbiesTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--heading-color);
  margin-bottom: 1.5rem;
`;

const HobbiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const HobbyItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  min-width: 100px;
`;

const HobbyIcon = styled.div`
  font-size: 1.8rem;
  color: var(--primary-color);
`;

const HobbyName = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-color);
`;

const About: React.FC = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const scaleInVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <AboutSection id="about">
      <AboutContainer>
        <AboutHeader>
          <InView threshold={0.3} triggerOnce>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeInUpVariants}
                transition={{ duration: 0.6 }}
              >
                <AboutSubtitle>Get To Know</AboutSubtitle>
                <AboutTitle>About Me</AboutTitle>
              </motion.div>
            )}
          </InView>
        </AboutHeader>

        <AboutContent>
          <InView threshold={0.3} triggerOnce>
            {({ inView, ref }) => (
              <AboutImageContainer
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={scaleInVariants}
                transition={{ duration: 0.8 }}
              >
                <AboutImage
                  src={getAssetPath("/assets/brown-profile-pic.jpeg")}
                  alt="Daniel Sedarous"
                />
                <ImageDecoration />
              </AboutImageContainer>
            )}
          </InView>

          <AboutTextContent>
            <InView threshold={0.3} triggerOnce>
              {({ inView, ref }) => (
                <AboutDescription
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeInUpVariants}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Hi, I'm Daniel Sedarous, a motivated Applied Mathematics and
                  Computer Science student at Brown University. I am eager to
                  contribute to innovative projects with expertise in Java,
                  Python, JavaScript, and React. Currently, I am working as a
                  Software Development Intern at Siemens Digital Industries for
                  the summer of 2025, let's connect and explore possibilities!
                </AboutDescription>
              )}
            </InView>

            <AboutInfoContainer>
              <InView threshold={0.3} triggerOnce>
                {({ inView, ref }) => (
                  <AboutInfoItem
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeInUpVariants}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <AboutInfoIcon>
                      <FaGraduationCap />
                    </AboutInfoIcon>
                    <AboutInfoText>
                      <AboutInfoTitle>Education</AboutInfoTitle>
                      <AboutInfoDescription>
                        Computer Science & Applied Math at Brown University
                        <br />
                        Expected Graduation: 2026
                      </AboutInfoDescription>
                    </AboutInfoText>
                  </AboutInfoItem>
                )}
              </InView>

              <InView threshold={0.3} triggerOnce>
                {({ inView, ref }) => (
                  <AboutInfoItem
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeInUpVariants}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <AboutInfoIcon>
                      <FaLaptopCode />
                    </AboutInfoIcon>
                    <AboutInfoText>
                      <AboutInfoTitle>Experience</AboutInfoTitle>
                      <AboutInfoDescription>
                        2+ Years Fullstack Development
                        <br />
                        Software Development Intern at Siemens
                      </AboutInfoDescription>
                    </AboutInfoText>
                  </AboutInfoItem>
                )}
              </InView>

              <InView threshold={0.3} triggerOnce>
                {({ inView, ref }) => (
                  <AboutInfoItem
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeInUpVariants}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <AboutInfoIcon>
                      <FaUserTie />
                    </AboutInfoIcon>
                    <AboutInfoText>
                      <AboutInfoTitle>Specialization</AboutInfoTitle>
                      <AboutInfoDescription>
                        Web Development, Software Engineering
                        <br />
                        Machine Learning, Data Science
                      </AboutInfoDescription>
                    </AboutInfoText>
                  </AboutInfoItem>
                )}
              </InView>
            </AboutInfoContainer>

            <InView threshold={0.3} triggerOnce>
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeInUpVariants}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <HobbiesTitle>My Hobbies</HobbiesTitle>

                  <HobbiesContainer>
                    <HobbyItem whileHover={{ y: -5 }}>
                      <HobbyIcon>
                        <FaDumbbell />
                      </HobbyIcon>
                      <HobbyName>Fitness</HobbyName>
                    </HobbyItem>

                    <HobbyItem whileHover={{ y: -5 }}>
                      <HobbyIcon>
                        <FaBook />
                      </HobbyIcon>
                      <HobbyName>Reading</HobbyName>
                    </HobbyItem>

                    <HobbyItem whileHover={{ y: -5 }}>
                      <HobbyIcon>
                        <FaGuitar />
                      </HobbyIcon>
                      <HobbyName>Guitar</HobbyName>
                    </HobbyItem>
                  </HobbiesContainer>
                </motion.div>
              )}
            </InView>
          </AboutTextContent>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
