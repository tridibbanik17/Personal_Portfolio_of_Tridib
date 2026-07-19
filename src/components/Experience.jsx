import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer.jsx";

const Experience = ({ currentSection, setCurrentSection }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Timeline axis: Sep 2024 (month 0) → Apr 2027 (month 31)
  const TIMELINE_START = 0;
  const TIMELINE_END = 31;
  const TIMELINE_SPAN = TIMELINE_END - TIMELINE_START;

  const workExperience = [
    {
      title: "Software Team Member",
      company: "McMaster–Mohawk Battery Workforce Challenge",
      location: "Hamilton, Ontario",
      duration: "Sep 2024 – Apr 2026",
      startMonth: 0,
      endMonth: 19,
      shortLabel: "BWC",
      achievements: [
        "95%+ unit-test pass rate across 100% of assigned software requirements",
        "Built 5-stage GitLab CI for Simulink verify → build → test → package → deploy",
        "$6,500 scholarship; team finished 2nd of 12 North American universities",
      ],
      technologies: [
        "Simulink",
        "MATLAB",
        "GitLab CI/CD",
        "CAN Communication",
        "Model-in-the-Loop",
      ],
      color: "#0F766E",
    },
    {
      title: "Research Assistant",
      company: "CMHT Lab, McMaster Automotive Resource Centre",
      location: "Hamilton, Ontario",
      duration: "Jun 2025 – Aug 2025",
      startMonth: 9,
      endMonth: 11,
      shortLabel: "RA",
      achievements: [
        "BMS core logic: 0.99% flash · 9.23% RAM on NXP MCU",
        "Simulink model of full 105s34p pack for safe pre-deploy verification",
        "308-slide onboarding package that sped up 5+ new members",
      ],
      technologies: [
        "Simulink",
        "Simscape",
        "Embedded Systems",
        "Memory Profiling",
        "Research",
      ],
      color: "#f093fb",
    },
    {
      title: "Teaching Assistant, ENGINEER 1P13",
      company: "McMaster University",
      location: "Hamilton, Ontario",
      duration: "Jan 2026 – Apr 2026",
      startMonth: 16,
      endMonth: 19,
      shortLabel: "TA",
      achievements: [
        "Mentored 23 students across 5 teams through 6 design milestones",
      ],
      technologies: ["Mentorship", "Engineering Design", "Engineering Leadership"],
      color: "#4facfe",
    },
    {
      title: "IT Projects Analyst",
      company: "Magenta Capital Corporation",
      location: "Toronto, Ontario",
      duration: "May 2026 – Aug 2026",
      startMonth: 20,
      endMonth: 23,
      shortLabel: "Magenta",
      achievements: [
        "Automating internal workflows with Power Platform, Python & Azure",
        "Savings of CA$1631 per month by identifying & reducing software license waste",
      ],
      technologies: [
        "Power Automate",
        "Copilot Studio",
        "PowerShell",
        "Python",
        "Azure",
      ],
      color: "#43e97b",
    },
    {
      title: "Incoming Instructional Assistant Intern",
      company: "McMaster University · ENGINEER 1P13",
      location: "Hamilton, Ontario",
      duration: "Aug 2026 – Apr 2027",
      startMonth: 23,
      endMonth: 31,
      shortLabel: "IA",
      achievements: [
        "Will help instruct 1000+ first-year engineering students",
      ],
      technologies: ["Teaching", "Mentorship", "Engineering Design", "Engineering Leadership"],
      color: "#B45309",
      incoming: true,
    },
    {
      title: "Incoming CAV Team Member",
      company: "McMaster EcoCAR Innovation Challenge",
      location: "Hamilton, Ontario",
      duration: "Aug 2026 – Apr 2027",
      startMonth: 23,
      endMonth: 31,
      shortLabel: "EcoCAR",
      achievements: [
        "Joining connected & automated vehicle software for ADAS work",
      ],
      technologies: ["C++", "Computer Vision", "ADAS", "CAN"],
      color: "#fa709a",
      incoming: true,
    },
  ];

  const education = [
    {
      institution: "McMaster University",
      degree: "Software Engineering (Co-op)",
      status: "Level 4 Undergraduate",
      location: "Hamilton, Ontario",
      graduation: "2028",
      CGPA: "3.9 / 4.0",
      highlights: [
        "Dean's Honour List for 3 consecutive years",
        "Relevant coursework: DSA · Databases · OS · Software Design I–III · Testing · Requirements & Security · Computer Architecture · Digital Systems · Concurrent Systems · Controls · Signals & Systems · Linear Optimization",
      ],
      color: "#0F766E",
    },
  ];

  const techSkills = {
    Languages: [
      { name: "Python", icon: "🐍" },
      { name: "Java", icon: "☕" },
      { name: "C/C++", icon: "⚙️" },
      { name: "JavaScript", icon: "🟨" },
      { name: "SQL", icon: "🗄️" },
      { name: "MATLAB", icon: "📐" },
    ],
    Frameworks: [
      { name: "React", icon: "⚛️" },
      { name: "Node.js", icon: "🟢" },
      { name: "Flask", icon: "🌶️" },
      { name: "Django", icon: "🌿" },
      { name: "TensorFlow", icon: "🧠" },
      { name: "Simulink", icon: "🔋" },
    ],
    Tools: [
      { name: "GitLab CI/CD", icon: "🦊" },
      { name: "Docker", icon: "🐳" },
      { name: "Cursor", icon: "✨" },
      { name: "VS Code", icon: "💻" },
      { name: "Azure", icon: "☁️" },
      { name: "Power Platform", icon: "⚡" },
      { name: "Linux", icon: "🐧" },
    ],
  };

  const yearTicks = [
    { label: "Sep '24", month: 0 },
    { label: "2025", month: 3 },
    { label: "2026", month: 15 },
    { label: "Apr '27", month: 31 },
  ];

  const barStyle = (job) => {
    const left = ((job.startMonth - TIMELINE_START) / TIMELINE_SPAN) * 100;
    const width =
      ((job.endMonth - job.startMonth) / TIMELINE_SPAN) * 100;
    return {
      left: `${left}%`,
      width: `${Math.max(width, 3)}%`,
    };
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: "120px",
        paddingBottom: "50px",
        background: "linear-gradient(155deg, #134E4A 0%, #292524 52%, #1C1917 100%)",
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
          variants={itemVariants}
          style={{
            textAlign: "center",
            marginBottom: "40px",
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
              marginBottom: "16px",
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            Experience
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{
              fontSize: "1.15rem",
              color: "rgba(255, 255, 255, 0.9)",
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            Bars show how roles overlap in time from Sep 2024 to Apr 2027
          </motion.p>
        </motion.div>

        {/* Gantt overview — makes overlaps obvious */}
        <motion.div
          variants={itemVariants}
          style={{
            background: "rgba(255, 255, 255, 0.12)",
            borderRadius: "20px",
            padding: "22px 20px 18px",
            marginBottom: "36px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(12px)",
            overflowX: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "14px",
              minWidth: "640px",
              paddingLeft: "110px",
            }}
          >
            {yearTicks.map((tick) => (
              <span
                key={tick.label}
                style={{
                  fontSize: "0.75rem",
                  fontWeight: "600",
                  color: "rgba(255,255,255,0.8)",
                  letterSpacing: "0.04em",
                }}
              >
                {tick.label}
              </span>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              minWidth: "640px",
            }}
          >
            {workExperience.map((job, index) => {
              const pos = barStyle(job);
              return (
                <div
                  key={`gantt-${job.shortLabel}-${job.duration}`}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "100px 1fr",
                    gap: "12px",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: "600",
                      color: "rgba(255,255,255,0.9)",
                      textAlign: "right",
                    }}
                  >
                    {job.shortLabel}
                  </span>
                  <div
                    style={{
                      position: "relative",
                      height: "28px",
                      background: "rgba(255,255,255,0.08)",
                      borderRadius: "8px",
                    }}
                  >
                    <motion.div
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{
                        duration: 0.7,
                        delay: 0.35 + index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      style={{
                        position: "absolute",
                        top: "4px",
                        bottom: "4px",
                        left: pos.left,
                        width: pos.width,
                        transformOrigin: "left",
                        background: job.incoming
                          ? `repeating-linear-gradient(135deg, ${job.color}, ${job.color} 6px, ${job.color}cc 6px, ${job.color}cc 12px)`
                          : job.color,
                        borderRadius: "6px",
                        boxShadow: `0 4px 12px ${job.color}55`,
                      }}
                      title={`${job.title} · ${job.duration}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          style={{
            fontSize: "1.5rem",
            fontWeight: "700",
            color: "white",
            marginBottom: "20px",
          }}
        >
          Roles
        </motion.h2>

        <motion.div
          variants={containerVariants}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "22px",
            marginBottom: "60px",
          }}
        >
          {workExperience.map((job) => {
            const pos = barStyle(job);
            return (
              <motion.div
                key={`${job.title}-${job.company}`}
                variants={itemVariants}
                whileHover={{
                  y: -4,
                  boxShadow: `0 18px 36px ${job.color}30`,
                }}
                style={{
                  background: "rgba(255, 255, 255, 0.95)",
                  borderRadius: "18px",
                  padding: "22px 24px",
                  boxShadow: "0 12px 28px rgba(0, 0, 0, 0.1)",
                  border: job.incoming
                    ? `1px dashed ${job.color}80`
                    : "1px solid rgba(255, 255, 255, 0.2)",
                  borderLeft: `5px solid ${job.color}`,
                  position: "relative",
                }}
              >
                {job.incoming && (
                  <span
                    style={{
                      position: "absolute",
                      top: "14px",
                      right: "14px",
                      fontSize: "0.7rem",
                      fontWeight: "700",
                      letterSpacing: "0.04em",
                      color: job.color,
                      background: `${job.color}18`,
                      padding: "4px 10px",
                      borderRadius: "999px",
                      border: `1px solid ${job.color}40`,
                    }}
                  >
                    INCOMING
                  </span>
                )}

                <h2
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "700",
                    color: job.color,
                    margin: "0 0 4px 0",
                    paddingRight: job.incoming ? "90px" : 0,
                  }}
                >
                  {job.title}
                </h2>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "#333",
                    margin: "0 0 4px 0",
                  }}
                >
                  {job.company}
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#666",
                    margin: "0 0 10px 0",
                  }}
                >
                  {job.location} · {job.duration}
                </p>

                {/* Duration strip — where this role sits on the axis */}
                <div
                  style={{
                    position: "relative",
                    height: "8px",
                    background: "#eef1f6",
                    borderRadius: "999px",
                    marginBottom: "14px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      left: pos.left,
                      width: pos.width,
                      background: job.color,
                      borderRadius: "999px",
                    }}
                  />
                </div>

                {job.achievements.length > 0 && (
                  <ul
                    style={{
                      fontSize: "0.92rem",
                      color: "#444",
                      paddingLeft: "18px",
                      margin: "0 0 14px 0",
                      lineHeight: "1.45",
                    }}
                  >
                    {job.achievements.map((item) => (
                      <li key={item} style={{ marginBottom: "6px" }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {job.technologies.length > 0 && (
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                    }}
                  >
                    {job.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{
                          scale: 1.06,
                          y: -2,
                          backgroundColor: `${job.color}28`,
                        }}
                        transition={{ type: "spring", stiffness: 380, damping: 20 }}
                        style={{
                          background: `${job.color}18`,
                          color: job.color,
                          padding: "4px 11px",
                          borderRadius: "20px",
                          fontSize: "0.78rem",
                          fontWeight: "500",
                          border: `1px solid ${job.color}35`,
                          cursor: "default",
                          display: "inline-block",
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        <motion.h2
          variants={itemVariants}
          style={{
            fontSize: "1.5rem",
            fontWeight: "700",
            color: "white",
            marginBottom: "20px",
          }}
        >
          Education
        </motion.h2>

        <motion.div
          variants={containerVariants}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            marginBottom: "60px",
          }}
        >
          {education.map((edu) => (
            <motion.div
              key={edu.institution}
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: `0 20px 40px ${edu.color}25`,
              }}
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                borderRadius: "20px",
                padding: "30px",
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <div style={{ marginBottom: "16px" }}>
                <h2
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    color: edu.color,
                    margin: "0 0 5px 0",
                  }}
                >
                  {edu.degree}
                </h2>
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    color: "#333",
                    margin: "0 0 5px 0",
                  }}
                >
                  {edu.institution}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#666",
                    margin: 0,
                  }}
                >
                  {edu.status} · {edu.location} · Graduating {edu.graduation} ·
                  CGPA {edu.CGPA}
                </p>
              </div>

              <ul
                style={{
                  fontSize: "0.9rem",
                  color: "#555",
                  paddingLeft: "20px",
                  margin: 0,
                  lineHeight: "1.55",
                }}
              >
                {edu.highlights.map((highlight) => (
                  <li key={highlight} style={{ marginBottom: "6px" }}>
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          style={{
            background: "rgba(255, 255, 255, 0.95)",
            borderRadius: "20px",
            padding: "30px",
            boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <h2
            style={{
              fontSize: "1.8rem",
              fontWeight: "700",
              color: "#0F766E",
              marginBottom: "28px",
              textAlign: "center",
            }}
          >
            Technical Skills
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "28px",
            }}
          >
            {Object.entries(techSkills).map(([category, skills]) => (
              <div key={category}>
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: "600",
                    color: "#333",
                    marginBottom: "12px",
                  }}
                >
                  {category}
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                  }}
                >
                  {skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{
                        scale: 1.06,
                        y: -2,
                        backgroundColor: "#0F766E18",
                        borderColor: "#0F766E55",
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 20 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        background: "#f8f9fa",
                        padding: "8px 12px",
                        borderRadius: "15px",
                        border: "1px solid #e9ecef",
                        cursor: "default",
                      }}
                    >
                      <span style={{ fontSize: "1.15rem" }}>{skill.icon}</span>
                      <span
                        style={{
                          fontSize: "0.9rem",
                          fontWeight: "500",
                          color: "#333",
                        }}
                      >
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <Footer
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
    </div>
  );
};

export default Experience;
