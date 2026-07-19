import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer.jsx";
import bwcPhoto from "../assets/bwc_group.jpg";
import headshot from "../assets/Photo_Tridib_Magenta.jpg";

const About = ({ currentSection, setCurrentSection }) => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const beyondItems = [
    {
      icon: "🔬",
      parts: [
        { text: "Participation in " },
        {
          text: "100+ research studies",
          href: "https://docs.google.com/spreadsheets/d/1bZXxqMxS-8lzOE0ALt6_Xbh9obGKvllp/edit?usp=sharing&ouid=113795648261631060006&rtpof=true&sd=true",
        },
        { text: " since November 2022" },
      ],
    },
    {
      icon: "🗣️",
      parts: [{ text: "Trilingual: English, Bengali, Hindi" }],
    },
    {
      icon: "🌍",
      parts: [
        { text: "Met at least 1 person from " },
        {
          text: "68 different countries",
          href: "https://docs.google.com/spreadsheets/d/1eQ0XPKDfu-N9BzW8KTMV-KkElQoXqML4/edit?usp=sharing&ouid=113795648261631060006&rtpof=true&sd=true",
        },
        { text: ", all in Ontario, Canada, since May 2022" },
      ],
    },
    {
      icon: "🧘",
      parts: [
        {
          text: "One-year diploma in Yoga & Health Education",
          href: "https://drive.google.com/file/d/1GjkpSiDUE5CboeV9ujKMmOU09nb-4FEK/view?usp=sharing",
        },
        { text: " (" },
        {
          text: "Grade A",
          href: "https://drive.google.com/file/d/1kOeZIpsOcbl-YkQObOygBIvWA30MCpgI/view?usp=sharing",
        },
        { text: ")" },
      ],
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: "120px",
        paddingBottom: "50px",
        background: "linear-gradient(155deg, #0F766E 0%, #115E59 42%, #1C1917 100%)",
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <motion.div
          variants={sectionVariants}
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: "700",
              color: "white",
              marginBottom: "20px",
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            About Me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              fontSize: "1.15rem",
              color: "rgba(255, 255, 255, 0.92)",
              maxWidth: "640px",
              margin: "0 auto",
              textAlign: "center",
              lineHeight: 1.55,
            }}
          >
            Software Engineering student focused on EV battery systems simulation & verification, 
            connected & automated vehicles, automation & agentic AI, and building 
            software that scales, stays maintainable, and is shaped by user feedback
          </motion.p>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          style={{
            background: "rgba(255, 255, 255, 0.95)",
            borderRadius: "25px",
            padding: isMobile ? "30px 20px" : "40px",
            marginBottom: "40px",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "30px" : "40px",
            alignItems: "center",
          }}
        >
          <motion.div
            variants={imageVariants}
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
            }}
          >
            <img
              src={headshot}
              alt="Tridib headshot"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: "700",
                color: "#0F766E",
                marginBottom: "20px",
                background: "linear-gradient(135deg, #0F766E, #B45309)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Building Systems That Last
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                color: "#4a4a4a",
                marginBottom: "20px",
                textAlign: "left",
              }}
            >
              I'm passionate about software that outlives the demo, work that
              helps someone move through their day a little easier. From
              TrafficLightRL, built to reduce up to 29.55% wait times and cut up to 35.56% CO2 emissions,
              to PrepPush, a Chrome extension already used by 76 people to turn
              practice into a portfolio, I care about products people actually
              use. The same drive shapes the safety-critical Battery Management System software
              I've spent 20+ months building for the Battery Workforce Challenge:
              it has to be clear, reliable, and ready for the real world.
              Teaching first-year engineering students and leading on technical teams has
              taught me that the best innovations come from solving real
              problems, which ultimately benefit the world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              {[
                "Model-Based Design",
                "Battery Engineering",
                "Applied RL",
                "User-Facing Design",
                "Technical Leadership",
              ].map((skill, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{
                    scale: 1.06,
                    y: -2,
                    backgroundColor: "#0F766E30",
                  }}
                  transition={{ type: "spring", stiffness: 380, damping: 20 }}
                  style={{
                    background: "#0F766E20",
                    color: "#0F766E",
                    padding: "6px 12px",
                    borderRadius: "20px",
                    fontSize: "0.9rem",
                    fontWeight: "500",
                    border: "1px solid #0F766E40",
                    cursor: "default",
                    display: "inline-block",
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          style={{
            background: "rgba(255, 255, 255, 0.95)",
            borderRadius: "25px",
            padding: isMobile ? "30px 20px" : "40px",
            marginBottom: "40px",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "30px" : "40px",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: "700",
                color: "#0F766E",
                marginBottom: "20px",
                background: "linear-gradient(135deg, #0F766E, #B45309)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Beyond the Code
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                color: "#4a4a4a",
                marginBottom: "20px",
                textAlign: "left",
              }}
            >
              Outside of engineering coursework and projects, I stay curious by
              contributing to research studies, practicing wellness through
              yoga, and connecting across languages and cultures.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr",
                gap: "15px",
              }}
            >
              {beyondItems.map((interest, idx) => {
                const linkStyle = {
                  color: "#0F766E",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                  fontWeight: "600",
                };

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 1.2 + idx * 0.1,
                      type: "spring",
                      stiffness: 380,
                      damping: 20,
                    }}
                    whileHover={{
                      y: -3,
                      scale: 1.01,
                      backgroundColor: "#eef6f3",
                      borderColor: "#0F766E55",
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      background: "#f8f9fa",
                      padding: "12px 16px",
                      borderRadius: "12px",
                      border: "1px solid #e9ecef",
                      cursor: "default",
                    }}
                  >
                    <span style={{ fontSize: "1.2rem" }}>{interest.icon}</span>
                    <span
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        color: "#333",
                      }}
                    >
                      {interest.parts.map((part, partIdx) =>
                        part.href ? (
                          <a
                            key={partIdx}
                            href={part.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Opens in a new tab"
                            style={linkStyle}
                          >
                            {part.text}
                            <span
                              style={{
                                fontSize: "0.75em",
                                marginLeft: "2px",
                                opacity: 0.85,
                              }}
                              aria-hidden="true"
                            >
                              ↗
                            </span>
                          </a>
                        ) : (
                          <span key={partIdx}>{part.text}</span>
                        )
                      )}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            variants={imageVariants}
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
            }}
          >
            <img
              src={bwcPhoto}
              alt="Tridib with the Battery Workforce Challenge team"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <Footer
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
    </div>
  );
};

export default About;
