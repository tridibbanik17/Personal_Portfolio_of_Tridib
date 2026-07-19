import React, { useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Navbar from "./components/Navbar.jsx";

const SECTIONS = ["home", "about", "contact", "experience", "projects"];

const pathToSection = (pathname) => {
  const segment = pathname.replace(/^\//, "").split("/")[0];
  if (!segment) return "home";
  return SECTIONS.includes(segment) ? segment : null;
};

const sectionToPath = (section) => (section === "home" ? "/" : `/${section}`);

const ease = [0.22, 1, 0.36, 1];

const getTransitionVariants = (section) => {
  const slide = {
    about: { x: -28, y: 0 },
    projects: { x: 28, y: 0 },
    contact: { x: 0, y: 28 },
    experience: { x: 0, y: 28 },
    home: { x: 0, y: 12 },
  }[section] || { x: 0, y: 16 };

  return {
    initial: {
      opacity: 0,
      x: slide.x,
      y: slide.y,
      filter: "blur(4px)",
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.45,
        ease,
      },
    },
    exit: {
      opacity: 0,
      x: slide.x * -0.4,
      y: slide.y * -0.4,
      filter: "blur(3px)",
      transition: {
        duration: 0.28,
        ease,
      },
    },
  };
};

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentSection = pathToSection(location.pathname) || "home";

  const setCurrentSection = useCallback(
    (section) => {
      navigate(sectionToPath(section));
    },
    [navigate]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const pageProps = { currentSection, setCurrentSection };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#EEF6F3",
        color: "#102A23",
        overflow: currentSection === "home" ? "hidden" : "auto",
        fontFamily: "var(--font-body)",
        position: "relative",
      }}
    >
      {currentSection !== "home" && (
        <Navbar
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
      )}

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          variants={getTransitionVariants(currentSection)}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            minHeight: "100vh",
            willChange: "transform, opacity, filter",
          }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home {...pageProps} />} />
            <Route path="/about" element={<About {...pageProps} />} />
            <Route path="/contact" element={<Contact {...pageProps} />} />
            <Route path="/experience" element={<Experience {...pageProps} />} />
            <Route path="/projects" element={<Projects {...pageProps} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;
