import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const NavContainer = styled.nav<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  z-index: 1000;
  backdrop-filter: ${({ scrolled }) => (scrolled ? "blur(10px)" : "none")};
  background-color: ${({ scrolled }) =>
    scrolled ? "rgba(255, 255, 255, 0.85)" : "transparent"};
  box-shadow: ${({ scrolled }) =>
    scrolled ? "0 5px 20px rgba(0, 0, 0, 0.1)" : "none"};
  transition: var(--transition);

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: var(--heading-color);
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const NavLinks = styled.ul<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    width: 70%;
    max-width: 300px;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
    box-shadow: -5px 0 10px rgba(0, 0, 0, 0.1);
    transition: right 0.3s ease-in-out;
    z-index: 1000;
  }
`;

const NavItem = styled.li`
  position: relative;
  margin: 0;
  padding: 0;
`;

interface NavLinkProps {
  isActive?: boolean;
}

const NavLinkStyled = styled(Link)<NavLinkProps>`
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-color);
  padding: 10px 0;
  cursor: pointer;
  position: relative;
  text-decoration: none;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: ${({ isActive }) => (isActive ? "100%" : "0")};
    height: 2px;
    background-color: var(--primary-color);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    display: block;
    padding: 15px 0;
    font-size: 1.2rem;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  z-index: 1001;

  svg {
    font-size: 1.8rem;
    color: var(--heading-color);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const NavbarWithRouter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <NavContainer scrolled={scrolled}>
        <Logo to="/" onClick={closeMenu}>
          Daniel Sedarous
        </Logo>
        <HamburgerIcon onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </HamburgerIcon>
        <NavLinks isOpen={isOpen}>
          <NavItem>
            <NavLinkStyled
              to="/"
              isActive={location.pathname === "/"}
              onClick={closeMenu}
            >
              Home
            </NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled
              to="/about"
              isActive={location.pathname === "/about"}
              onClick={closeMenu}
            >
              About
            </NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled
              to="/experience"
              isActive={location.pathname === "/experience"}
              onClick={closeMenu}
            >
              Experience
            </NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled
              to="/projects"
              isActive={location.pathname === "/projects"}
              onClick={closeMenu}
            >
              Projects
            </NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled
              to="/contact"
              isActive={location.pathname === "/contact"}
              onClick={closeMenu}
            >
              Contact
            </NavLinkStyled>
          </NavItem>
        </NavLinks>
      </NavContainer>
      <Overlay isOpen={isOpen} onClick={closeMenu} />
    </>
  );
};

export default NavbarWithRouter;
