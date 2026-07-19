import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { theme } from "../theme";

const Home = ({ setCurrentSection }) => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
  const [viewportHeight, setViewportHeight] = React.useState(
    window.innerHeight
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setViewportHeight(window.innerHeight);
    };
    setViewportHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { id: "about", label: "About", index: "01" },
    { id: "projects", label: "Projects", index: "02" },
    { id: "experience", label: "Experience", index: "03" },
    { id: "contact", label: "Contact", index: "04" },
  ];

  return (
    <div
      style={{
        width: "100vw",
        height: `${viewportHeight}px`,
        position: "relative",
        overflow: "hidden",
        background: theme.pageBg.home,
        display: "flex",
        alignItems: "center",
        fontFamily: "var(--font-body)",
      }}
    >
      <div className="home-grid" aria-hidden="true" />
      <div className="home-orb home-orb--teal" aria-hidden="true" />
      <div className="home-orb home-orb--copper" aria-hidden="true" />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "1180px",
          margin: "0 auto",
          padding: isMobile ? "28px 22px" : "48px 40px",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1.15fr 0.85fr",
          gap: isMobile ? "40px" : "64px",
          alignItems: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            style={{
              fontSize: "0.85rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: theme.teal,
              fontWeight: 600,
              marginBottom: "18px",
            }}
          >
            Software Engineering · McMaster University
          </motion.p>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: isMobile
                ? "clamp(2.8rem, 14vw, 3.6rem)"
                : "clamp(3.8rem, 7vw, 5.6rem)",
              fontWeight: 800,
              lineHeight: 0.95,
              color: theme.ink,
              margin: "0 0 20px 0",
              letterSpacing: "-0.03em",
            }}
          >
            Tridib
            <br />
            Banik
          </h1>

          <div
            style={{
              fontSize: isMobile ? "1.05rem" : "1.25rem",
              color: theme.muted,
              marginBottom: "18px",
              minHeight: "1.6em",
            }}
          >
            <Typewriter
              words={[
                "Building systems that outlive the demo.",
                "EV battery management systems.",
                "Reinforcement learning.",
                "Maintainable code. Shipped on time.",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={55}
              deleteSpeed={30}
              delaySpeed={2400}
            />
          </div>

          <p
            style={{
              fontSize: isMobile ? "0.95rem" : "1.05rem",
              color: theme.ink,
              maxWidth: "34rem",
              lineHeight: 1.55,
              opacity: 0.85,
              margin: 0,
            }}
          >
            Level 4 Software Engineering student focused on EV battery systems,
            connected & automated vehicles, and software people actually use.
          </p>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Primary"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? "4px" : "6px",
            borderLeft: isMobile ? "none" : `2px solid ${theme.teal}33`,
            paddingLeft: isMobile ? 0 : "28px",
          }}
        >
          {links.map((link, i) => (
            <motion.button
              key={link.id}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 + i * 0.08 }}
              whileHover={{
                x: 6,
                backgroundColor: "rgba(15, 118, 110, 0.12)",
                transition: { duration: 0.15, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setCurrentSection(link.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                background: "transparent",
                border: "none",
                borderBottom: `1px solid ${theme.teal}22`,
                borderRadius: "6px",
                padding: isMobile ? "14px 12px" : "16px 14px",
                cursor: "pointer",
                textAlign: "left",
                width: "100%",
              }}
            >
              <span
                style={{
                  fontSize: isMobile ? "1rem" : "1.15rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  color: theme.copper,
                  fontFamily: "var(--font-body)",
                  minWidth: "2.2rem",
                }}
              >
                {link.index}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: isMobile ? "1.55rem" : "1.85rem",
                  fontWeight: 700,
                  color: theme.ink,
                  flex: 1,
                }}
              >
                {link.label}
              </span>
              <span
                style={{
                  color: theme.teal,
                  fontSize: "1.25rem",
                  fontWeight: 500,
                }}
                aria-hidden="true"
              >
                →
              </span>
            </motion.button>
          ))}
        </motion.nav>
      </div>
    </div>
  );
};

export default Home;
