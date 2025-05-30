# Daniel Sedarous - Modern Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Styled Components. This portfolio showcases a sleek design with animations, interactive elements, and a professional layout.

## Features

- **Modern React Architecture**: Built with React, TypeScript, and Styled Components
- **Responsive Design**: Optimized for all device sizes
- **Interactive UI Components**: Utilizes Framer Motion for smooth animations and transitions
- **Particle Background**: Dynamic particle background with interactive canvas
- **Smooth Scrolling**: Implements react-scroll for smooth navigation
- **Contact Form**: Functional contact form implementation
- **Projects Filtering**: Filter projects by category
- **Intersection Observer API**: Reveals components as they enter the viewport
- **Type Animation**: Dynamic text typing effect on the hero section

## Technologies Used

- React
- TypeScript
- Styled Components
- Framer Motion
- React Icons
- React Intersection Observer
- AOS (Animate On Scroll)
- React Type Animation
- React Scroll

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open your browser and visit `http://localhost:3000`

## Project Structure

```
src/
├── components/         # React components
├── styles/             # Global styles
├── assets/             # Static assets
├── hooks/              # Custom React hooks
├── App.tsx             # Main App component
└── index.tsx           # Entry point
```

## Deployment

This project can be deployed on platforms like Vercel, Netlify, or GitHub Pages.

### Build for production

```bash
npm run build
```

## Customization

1. **Colors**: Edit the CSS variables in `src/styles/GlobalStyles.ts` to change the color scheme.
2. **Content**: Update your personal information in each component.
3. **Projects**: Modify the projects array in the `Projects.tsx` file to showcase your work.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Styled Components](https://styled-components.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [AOS](https://michalsnik.github.io/aos/)
