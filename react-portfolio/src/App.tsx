import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

// Component Imports
import NavbarWithRouter from "./components/NavbarWithRouter";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";

// Page Imports
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

// Global styles
const AppContainer = styled.div`
  font-family: "Poppins", sans-serif;
`;

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Router>
      <AppContainer>
        <ParticleBackground />
        <NavbarWithRouter />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
