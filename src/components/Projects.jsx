import React from "react";
import { motion } from "framer-motion";
import { FaGitlab } from "react-icons/fa";
import Footer from "./Footer.jsx";
import trafficLightVideo from "../assets/trafficlightrl.mp4";
import prepPushImg from "../assets/Photo_PrepPush_marquee_ready.png";
import ciModelImg from "../assets/ci_model_verification.png";

const Projects = ({ currentSection, setCurrentSection }) => {
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
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const projects = [
    {
      title: "TrafficLightRL",
      github: "https://github.com/tridibbanik17/TrafficLightRL",
      conferencePaper:
        "https://drive.google.com/file/d/1n-7jgm9qGarI7IDBWDkTRew6KTPYBkIa/view?usp=sharing",
      video: trafficLightVideo,
      description:
        "Reinforcement learning for adaptive traffic-signal control, trained against a fixed-cycle baseline across 3 traffic densities.",
      highlights: [
        "Up to 29.55% lower vehicle wait times",
        "Up to 35.56% CO₂ reduction",
        "Presented to 320+ attendees at CUCAI 2025",
      ],
      technologies: [
        "Python",
        "Reinforcement Learning",
        "Gymnasium",
        "Stable-Baselines3",
      ],
      color: "#0F766E",
      order: 1,
    },
    {
      title: "PrepPush",
      github: "https://github.com/tridibbanik17",
      chromeStore:
        "https://chromewebstore.google.com/detail/lkbbmepdmkokiapildnhkimcgnofokdd?utm_source=item-share-cb",
      image: prepPushImg,
      description:
        "Chrome extension that auto-captures accepted HackerRank solutions, pushes them to GitHub, and adds Gemini interview notes (Big-O + key tricks) in each file header.",
      highlights: [
        "76 active Chrome Web Store users",
        "Organizes commits by language, difficulty, and problem",
        "SHA-256 fingerprinting blocks duplicate commits on 100% of identical re-submits",
      ],
      technologies: [
        "JavaScript",
        "Chrome Extension API",
        "GitHub API",
        "Gemini API",
      ],
      color: "#0F766E",
      order: 2,
    },
    {
      title: "Simulink Model Verification",
      gitlab: "https://gitlab.com/bwc_devops/ci",
      image: ciModelImg,
      description:
        "For the Battery Workforce Challenge software team, every GitLab push runs a 5-stage pipeline that verifies Simulink models and ships a report artifact per stage, catching issues before code hits the microcontroller.",
      highlights: [
        "On every push: verify → build → test → package → deploy",
        "Artifacts each stage: Model Advisor, build report, test results, summary package",
        "Ended the team’s manual open–test–fix–rerun cycle in MATLAB",
      ],
      technologies: [
        "GitLab CI/CD",
        "GitLab Runner",
        "Simulink Test",
        "MATLAB",
        "Model Advisor",
      ],
      color: "#0F766E",
      order: 3,
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: "120px",
        paddingBottom: "50px",
        background: "linear-gradient(150deg, #0F766E 0%, #44403C 48%, #78350F 100%)",
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <motion.div
          variants={projectVariants}
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
            Featured Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              fontSize: "1.2rem",
              color: "rgba(255, 255, 255, 0.9)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            A focused set of projects spanning RL, product shipping, and DevOps.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            marginBottom: "40px",
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={projectVariants}
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                borderRadius: "20px",
                padding: "30px",
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                display: "grid",
                gridTemplateColumns:
                  (project.image || project.video) && !isMobile
                    ? "1fr 2fr"
                    : "1fr",
                gap: isMobile ? "20px" : "30px",
                alignItems: "center",
              }}
            >
              {(project.image || project.video) && (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  style={{
                    width: "100%",
                    height: "220px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    order: 1,
                  }}
                >
                  {project.video ? (
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      aria-label={`${project.title} demo`}
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                        objectPosition: "center",
                        borderRadius: "15px",
                        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                      }}
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                        objectPosition: "center",
                        borderRadius: "15px",
                        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                      }}
                    />
                  )}
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                style={{
                  order:
                    (project.image || project.video) && isMobile ? 2 : 1,
                }}
              >
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                    fontWeight: "700",
                    color: project.color,
                    marginBottom: "15px",
                  }}
                >
                  {project.title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    color: "#4a4a4a",
                    marginBottom: "20px",
                  }}
                >
                  {project.description}
                </motion.p>

                {project.highlights.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    style={{ marginBottom: "20px" }}
                  >
                    <h4
                      style={{
                        fontSize: "1rem",
                        fontWeight: "600",
                        color: "#333",
                        marginBottom: "10px",
                      }}
                    >
                      Key Achievements:
                    </h4>
                    <ul
                      style={{
                        fontSize: "0.9rem",
                        color: "#666",
                        paddingLeft: "20px",
                        margin: 0,
                        lineHeight: "1.5",
                      }}
                    >
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} style={{ marginBottom: "5px" }}>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  style={{ marginBottom: "25px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                    }}
                  >
                    {project.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{
                          scale: 1.06,
                          y: -2,
                          backgroundColor: `${project.color}30`,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 20,
                        }}
                        style={{
                          background: `${project.color}20`,
                          color: project.color,
                          padding: "4px 12px",
                          borderRadius: "20px",
                          fontSize: "0.8rem",
                          fontWeight: "500",
                          border: `1px solid ${project.color}40`,
                          cursor: "default",
                          display: "inline-block",
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    flexWrap: "wrap",
                  }}
                >
                  {project.chromeStore && (
                    <motion.a
                      href={project.chromeStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        background: "linear-gradient(135deg, #4285f4, #34a853)",
                        color: "white",
                        padding: "10px 20px",
                        borderRadius: "25px",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        fontWeight: "600",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        boxShadow: "0 4px 15px rgba(66, 133, 244, 0.3)",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      Chrome Store
                    </motion.a>
                  )}

                  {project.conferencePaper && (
                    <motion.a
                      href={project.conferencePaper}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        background: "linear-gradient(135deg, #0F766E, #14B8A6)",
                        color: "white",
                        padding: "10px 20px",
                        borderRadius: "25px",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        fontWeight: "600",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        boxShadow: "0 4px 15px rgba(99, 102, 241, 0.3)",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                      </svg>
                      Conference Paper
                    </motion.a>
                  )}

                  {project.gitlab && (
                    <motion.a
                      href={project.gitlab}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        background: "linear-gradient(135deg, #FC6D26, #E24329)",
                        color: "white",
                        padding: "10px 20px",
                        borderRadius: "25px",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        fontWeight: "600",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        boxShadow: "0 4px 15px rgba(252, 109, 38, 0.35)",
                      }}
                    >
                      <FaGitlab size={16} />
                      GitLab
                    </motion.a>
                  )}

                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        background: "linear-gradient(135deg, #333, #666)",
                        color: "white",
                        padding: "10px 20px",
                        borderRadius: "25px",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        fontWeight: "600",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                      </svg>
                      GitHub
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{ textAlign: "center", marginBottom: "40px" }}
        >
          <a
            href="https://github.com/tridibbanik17?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              fontSize: "1.1rem",
              fontWeight: "600",
              textDecoration: "underline",
            }}
          >
            View more projects on GitHub →
          </a>
        </motion.div>
      </motion.div>

      <Footer
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
    </div>
  );
};

export default Projects;
