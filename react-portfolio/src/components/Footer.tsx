import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const FooterSection = styled.footer`
  background-color: #222;
  color: white;
  padding-top: 3rem;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  padding-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterColumn = styled.div``;

const FooterLogo = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #fff;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 50px;
    height: 3px;
    background: var(--primary-color);

    @media (max-width: 768px) {
      left: calc(50% - 25px);
    }
  }
`;

const FooterDesc = styled.p`
  font-size: 1rem;
  color: #bbb;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 0 auto 1.5rem;
  }
`;

const FooterSocial = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background-color: #444;
  color: #fff;
  border-radius: 50%;
  font-size: 1rem;
  transition: var(--transition);

  &:hover {
    background-color: var(--primary-color);
    transform: translateY(-5px);
  }
`;

const FooterTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #fff;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 30px;
    height: 2px;
    background: var(--primary-color);

    @media (max-width: 768px) {
      left: calc(50% - 15px);
    }
  }
`;

const FooterLinks = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 0.8rem;
`;

const FooterNavLink = styled(Link)`
  color: #bbb;
  font-size: 1rem;
  transition: var(--transition);
  cursor: pointer;

  &:hover {
    color: var(--primary-color);
    padding-left: 5px;
  }
`;

const FooterContact = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const FooterContactIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background-color: #444;
  color: var(--primary-color);
  border-radius: 50%;
  font-size: 1rem;
`;

const FooterContactText = styled.p`
  color: #bbb;
  font-size: 0.9rem;
`;

const FooterBottom = styled.div`
  background-color: #111;
  padding: 1.5rem 0;
  text-align: center;
  position: relative;
`;

const FooterCopyright = styled.p`
  color: #bbb;
  font-size: 0.9rem;
`;

const ScrollToTop = styled(motion.div)`
  position: absolute;
  right: 2rem;
  bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: var(--transition);

  &:hover {
    background-color: white;
    color: var(--primary-color);
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterContent>
          <FooterColumn>
            <FooterLogo>Daniel Sedarous</FooterLogo>
            <FooterDesc>
              A passionate Fullstack Developer and Computer Science student
              based in Providence, RI.
            </FooterDesc>
            <FooterSocial>
              <SocialLink
                href="mailto:daniel.sedarous@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
              >
                <FaEnvelope />
              </SocialLink>
              <SocialLink
                href="https://github.com/danielsedarous"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
              >
                <FaGithub />
              </SocialLink>
              <SocialLink
                href="https://linkedin.com/in/daniel-sedarous-317ba7262"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
              >
                <FaLinkedin />
              </SocialLink>
            </FooterSocial>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLinks>
              <FooterLink>
                <FooterNavLink
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  Home
                </FooterNavLink>
              </FooterLink>
              <FooterLink>
                <FooterNavLink
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  About
                </FooterNavLink>
              </FooterLink>
              <FooterLink>
                <FooterNavLink
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  Experience
                </FooterNavLink>
              </FooterLink>
              <FooterLink>
                <FooterNavLink
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  Projects
                </FooterNavLink>
              </FooterLink>
              <FooterLink>
                <FooterNavLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  Contact
                </FooterNavLink>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Contact Info</FooterTitle>
            <FooterContact>
              <FooterContactIcon>
                <FaEnvelope />
              </FooterContactIcon>
              <FooterContactText>daniel.sedarous@gmail.com</FooterContactText>
            </FooterContact>
            <FooterContact>
              <FooterContactIcon>
                <FaGithub />
              </FooterContactIcon>
              <FooterContactText>@danielsedarous</FooterContactText>
            </FooterContact>
            <FooterContact>
              <FooterContactIcon>
                <FaLinkedin />
              </FooterContactIcon>
              <FooterContactText>daniel-sedarous-317ba7262</FooterContactText>
            </FooterContact>
          </FooterColumn>
        </FooterContent>
      </FooterContainer>

      <FooterBottom>
        <FooterCopyright>
          Copyright &copy; {new Date().getFullYear()} Daniel Sedarous. All
          Rights Reserved
        </FooterCopyright>

        <Link to="home" spy={true} smooth={true} offset={-80} duration={800}>
          <ScrollToTop whileHover={{ y: -5 }}>
            <FaArrowUp />
          </ScrollToTop>
        </Link>
      </FooterBottom>
    </FooterSection>
  );
};

export default Footer;
