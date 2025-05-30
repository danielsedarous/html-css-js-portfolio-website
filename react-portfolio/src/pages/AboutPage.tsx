import React, { useEffect } from "react";
import About from "../components/About";
import styled from "styled-components";
import { motion } from "framer-motion";

const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 50px;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  max-width: 1200px;
  margin: 0 auto 4rem;
  padding: 0 2rem;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: var(--heading-color);
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PageDescription = styled.p`
  font-size: 1.2rem;
  color: var(--text-color);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageContainer>
      <PageHeader>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <PageTitle>About Me</PageTitle>
          <PageDescription>
            Get to know more about who I am, my background, and what drives me.
            Below you'll find details about my journey, passions, and the values
            that guide my work as a software engineer and problem solver.
          </PageDescription>
        </motion.div>
      </PageHeader>

      <About />
    </PageContainer>
  );
};

export default AboutPage;
