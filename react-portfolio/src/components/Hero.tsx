import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 80px;
  overflow: hidden;
`;

const HeroContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 0 2rem;

  @media (max-width: 992px) {
    flex-direction: column-reverse;
    justify-content: center;
    text-align: center;
    padding-top: 3rem;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  max-width: 600px;

  @media (max-width: 992px) {
    margin-top: 2rem;
  }
`;

const HeroImageWrapper = styled(motion.div)`
  flex: 1;
  max-width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 992px) {
    max-width: 300px;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  border: 5px solid rgba(255, 255, 255, 0.5);
`;

const HeroGreeting = styled(motion.p)`
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`;

const HeroName = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--heading-color);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroRoleWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--text-color);
  margin-bottom: 1.5rem;
  height: 40px;

  @media (max-width: 768px) {
    justify-content: center;
    font-size: 1.2rem;
  }
`;

const HeroTypeAnimation = styled(TypeAnimation)`
  color: var(--primary-color);
  font-weight: 600;
  margin-left: 0.5rem;
`;

const HeroBio = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  color: var(--dark-gray);
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 992px) {
    justify-content: center;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled(motion.button)`
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:focus {
    outline: none;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: var(--primary-color);
  color: white;
  border: 2px solid var(--primary-color);

  &:hover {
    background-color: transparent;
    color: var(--primary-color);
  }
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: var(--text-color);
  border: 2px solid var(--text-color);

  &:hover {
    background-color: var(--text-color);
    color: white;
  }
`;

const SocialContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const SocialIcon = styled(motion.a)`
  font-size: 1.5rem;
  color: var(--dark-gray);
  transition: var(--transition);

  &:hover {
    color: var(--primary-color);
    transform: translateY(-3px);
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;

  svg {
    font-size: 2rem;
    color: var(--primary-color);
  }
`;

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <HeroSection id="home">
      <HeroContainer>
        <HeroContent>
          <HeroGreeting
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hello, I'm
          </HeroGreeting>

          <HeroName
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Daniel Sedarous
          </HeroName>

          <HeroRoleWrapper>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              I'm a
            </motion.span>
            <HeroTypeAnimation
              sequence={[
                "Fullstack Developer",
                1000,
                "UI/UX Designer",
                1000,
                "CS Student at Brown",
                1000,
                "Problem Solver",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </HeroRoleWrapper>

          <HeroBio
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Passionate about creating innovative web solutions with expertise in
            JavaScript, React, Java, and Python. Currently pursuing Computer
            Science and Applied Math at Brown University.
          </HeroBio>

          <ButtonContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <PrimaryButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open("/assets/Sedarous_Daniel_Resume.pdf", "_blank")
              }
            >
              Download CV
            </PrimaryButton>

            <SecondaryButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
            >
              Contact Me
            </SecondaryButton>
          </ButtonContainer>

          <SocialContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <SocialIcon
              href="https://github.com/danielsedarous"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
            >
              <FaGithub />
            </SocialIcon>
            <SocialIcon
              href="https://linkedin.com/in/daniel-sedarous-317ba7262"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
            >
              <FaLinkedin />
            </SocialIcon>
          </SocialContainer>
        </HeroContent>

        <HeroImageWrapper
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <HeroImage src="/assets/danny_profile.png" alt="Daniel Sedarous" />
        </HeroImageWrapper>
      </HeroContainer>

      <ScrollIndicator
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
        as={ScrollLink}
        to="about"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
      >
        <FaArrowDown />
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;
