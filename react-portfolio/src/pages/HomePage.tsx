import React from "react";
import Hero from "../components/Hero";
import styled from "styled-components";
import ParticleBackground from "../components/ParticleBackground";

const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
`;

const HomePage: React.FC = () => {
  return (
    <PageContainer>
      <Hero />
    </PageContainer>
  );
};

export default HomePage;
