import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactSection = styled.section`
  padding: 100px 0;
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const ContactSubtitle = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--primary-color);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--heading-color);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactDescription = styled.p`
  font-size: 1.1rem;
  color: var(--text-color);
  max-width: 600px;
  margin: 0 auto;
`;

const ContactContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ContactInfo = styled.div``;

const ContactCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const ContactCard = styled(motion.div)`
  background-color: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: var(--transition);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const ContactCardIcon = styled.div`
  font-size: 1.5rem;
  color: var(--primary-color);
  background-color: rgba(41, 120, 181, 0.1);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactCardContent = styled.div``;

const ContactCardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--heading-color);
  margin-bottom: 0.5rem;
`;

const ContactCardValue = styled.p`
  font-size: 0.9rem;
  color: var(--text-color);

  a {
    color: var(--text-color);
    transition: var(--transition);

    &:hover {
      color: var(--primary-color);
    }
  }
`;

const ContactSocials = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: white;
  font-size: 1.2rem;
  transition: var(--transition);

  &:hover {
    background-color: var(--text-color);
    transform: translateY(-5px);
  }
`;

const Contact: React.FC = () => {
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <ContactHeader>
          <InView threshold={0.3} triggerOnce>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
              >
                <ContactSubtitle>Get In Touch</ContactSubtitle>
                <ContactTitle>Contact Me</ContactTitle>
                <ContactDescription>
                  Feel free to reach out through any of these channels if you'd
                  like to connect or discuss potential opportunities.
                </ContactDescription>
              </motion.div>
            )}
          </InView>
        </ContactHeader>

        <ContactContent>
          <InView threshold={0.3} triggerOnce>
            {({ inView, ref }) => (
              <ContactInfo
                ref={ref}
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
              >
                <ContactCardContainer>
                  <ContactCard whileHover={{ y: -5 }}>
                    <ContactCardIcon>
                      <FaEnvelope />
                    </ContactCardIcon>
                    <ContactCardContent>
                      <ContactCardTitle>Email</ContactCardTitle>
                      <ContactCardValue>
                        <a href="mailto:daniel.sedarous@gmail.com">
                          daniel.sedarous@gmail.com
                        </a>
                      </ContactCardValue>
                    </ContactCardContent>
                  </ContactCard>

                  <ContactCard whileHover={{ y: -5 }}>
                    <ContactCardIcon>
                      <FaLinkedin />
                    </ContactCardIcon>
                    <ContactCardContent>
                      <ContactCardTitle>LinkedIn</ContactCardTitle>
                      <ContactCardValue>
                        <a
                          href="https://linkedin.com/in/daniel-sedarous-317ba7262"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Connect on LinkedIn
                        </a>
                      </ContactCardValue>
                    </ContactCardContent>
                  </ContactCard>

                  <ContactCard whileHover={{ y: -5 }}>
                    <ContactCardIcon>
                      <FaMapMarkerAlt />
                    </ContactCardIcon>
                    <ContactCardContent>
                      <ContactCardTitle>Location</ContactCardTitle>
                      <ContactCardValue>Providence, RI</ContactCardValue>
                    </ContactCardContent>
                  </ContactCard>

                  <ContactCard whileHover={{ y: -5 }}>
                    <ContactCardIcon>
                      <FaGithub />
                    </ContactCardIcon>
                    <ContactCardContent>
                      <ContactCardTitle>GitHub</ContactCardTitle>
                      <ContactCardValue>
                        <a
                          href="https://github.com/danielsedarous"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          @danielsedarous
                        </a>
                      </ContactCardValue>
                    </ContactCardContent>
                  </ContactCard>
                </ContactCardContainer>

                <ContactSocials>
                  <SocialLink
                    href="mailto:daniel.sedarous@gmail.com"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaEnvelope />
                  </SocialLink>
                  <SocialLink
                    href="https://linkedin.com/in/daniel-sedarous-317ba7262"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaLinkedin />
                  </SocialLink>
                  <SocialLink
                    href="https://github.com/danielsedarous"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub />
                  </SocialLink>
                </ContactSocials>
              </ContactInfo>
            )}
          </InView>
        </ContactContent>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
