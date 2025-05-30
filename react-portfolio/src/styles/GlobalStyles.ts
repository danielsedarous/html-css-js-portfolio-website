import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

  :root {
    --primary-color: #2978b5;
    --secondary-color: #8e44ad;
    --background-color: #f8f9fa;
    --text-color: #333;
    --heading-color: #222;
    --accent-color: #e74c3c;
    --light-gray: #f1f1f1;
    --dark-gray: #777;
    --white: #fff;
    --box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease-in-out;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.6;
    overflow-x: hidden;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 80px;
  }

  section {
    padding: 100px 0;
    position: relative;
  }

  a {
    text-decoration: none;
    color: var(--text-color);
    transition: var(--transition);
  }

  a:hover {
    color: var(--primary-color);
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--heading-color);
    margin-bottom: 1.5rem;
    font-weight: 600;
    line-height: 1.2;
  }

  p {
    margin-bottom: 1rem;
    color: var(--text-color);
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ul, ol {
    list-style-position: inside;
    margin-bottom: 1rem;
  }

  button {
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .section-title {
    position: relative;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    text-align: center;
    color: var(--heading-color);
  }

  .section-title::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -10px;
    width: 70px;
    height: 4px;
    background: var(--primary-color);
  }

  @media (max-width: 768px) {
    .section-title {
      font-size: 2rem;
    }
    
    section {
      padding: 70px 0;
    }
  }

  @media (max-width: 576px) {
    .section-title {
      font-size: 1.8rem;
    }

    section {
      padding: 50px 0;
    }

    .container {
      padding: 0 1rem;
    }
  }
`;

export default GlobalStyles;
