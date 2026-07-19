import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "./Footer.jsx";
import { FaGithub, FaLinkedin, FaEnvelope, FaYoutube } from "react-icons/fa";

const Contact = ({ currentSection, setCurrentSection }) => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
  const [status, setStatus] = useState("idle");

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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
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

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/tridibbanik17",
      description: "Check out my code and projects",
      color: "#333",
      hoverColor: "#0F766E",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://linkedin.com/in/tridib-banik17",
      description: "Connect with me professionally",
      color: "#0077b5",
      hoverColor: "#0F766E",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=tridib.perfect@gmail.com",
      description: "Send me a direct message",
      color: "#ea4335",
      hoverColor: "#0F766E",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      url: "https://www.youtube.com/@baniktracks5786",
      description: "Watch my videos and tracks",
      color: "#ff0000",
      hoverColor: "#0F766E",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xrbqdarz", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: "120px",
        paddingBottom: "50px",
        background: "linear-gradient(160deg, #115E59 0%, #0F766E 48%, #102A23 100%)",
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
            marginBottom: "60px",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: "700",
              color: "white",
              marginBottom: "20px",
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            Let's Connect
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              fontSize: "1.2rem",
              color: "rgba(255, 255, 255, 0.9)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Always open to discussing new opportunities, collaborations, 
            or just having a chat about Software Engineering!
          </motion.p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: "40px",
            alignItems: "start",
            marginBottom: "60px",
          }}
        >
          {/* Contact Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            style={{
              background: "rgba(247, 250, 248, 0.96)",
              borderRadius: "12px",
              padding: isMobile ? "28px 22px" : "36px 32px",
              boxShadow: "0 15px 40px rgba(0, 0, 0, 0.2)",
              border: "1px solid rgba(15, 118, 110, 0.25)",
              borderTop: "4px solid #0F766E",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <h2
              style={{
                color: "#102A23",
                textAlign: "center",
                fontSize: "1.6rem",
                fontWeight: "700",
                margin: "0 0 8px 0",
                fontFamily: "var(--font-display)",
              }}
            >
              Send Me a Message
            </h2>

            <label
              style={{
                color: "#102A23",
                fontWeight: "600",
                fontSize: "0.95rem",
              }}
            >
              Name
              <input
                type="text"
                name="name"
                required
                style={{
                  display: "block",
                  width: "100%",
                  marginTop: "6px",
                  padding: "12px 14px",
                  borderRadius: "8px",
                  border: "1px solid rgba(15, 118, 110, 0.3)",
                  background: "#EEF6F3",
                  fontSize: "1rem",
                  boxSizing: "border-box",
                  color: "#102A23",
                }}
              />
            </label>

            <label
              style={{
                color: "#102A23",
                fontWeight: "600",
                fontSize: "0.95rem",
              }}
            >
              Email
              <input
                type="email"
                name="_replyto"
                required
                style={{
                  display: "block",
                  width: "100%",
                  marginTop: "6px",
                  padding: "12px 14px",
                  borderRadius: "8px",
                  border: "1px solid rgba(15, 118, 110, 0.3)",
                  background: "#EEF6F3",
                  fontSize: "1rem",
                  boxSizing: "border-box",
                  color: "#102A23",
                }}
              />
            </label>

            <label
              style={{
                color: "#102A23",
                fontWeight: "600",
                fontSize: "0.95rem",
              }}
            >
              Message
              <textarea
                name="message"
                required
                rows={5}
                style={{
                  display: "block",
                  width: "100%",
                  marginTop: "6px",
                  padding: "12px 14px",
                  borderRadius: "8px",
                  border: "1px solid rgba(15, 118, 110, 0.3)",
                  background: "#EEF6F3",
                  fontSize: "1rem",
                  resize: "vertical",
                  boxSizing: "border-box",
                  fontFamily: "inherit",
                  color: "#102A23",
                }}
              />
            </label>

            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                marginTop: "8px",
                background: "#0F766E",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "14px",
                fontSize: "1.1rem",
                fontWeight: "700",
                cursor: status === "sending" ? "wait" : "pointer",
                opacity: status === "sending" ? 0.7 : 1,
              }}
            >
              {status === "sending" ? "Sending..." : "Send"}
            </motion.button>

            {status === "success" && (
              <p
                style={{
                  color: "#0F766E",
                  textAlign: "center",
                  margin: 0,
                  fontWeight: "600",
                }}
              >
                Message sent — thank you!
              </p>
            )}
            {status === "error" && (
              <p
                style={{
                  color: "#B45309",
                  textAlign: "center",
                  margin: 0,
                  fontWeight: "600",
                }}
              >
                Something went wrong. Please try email instead.
              </p>
            )}
          </motion.form>

          {/* Social Links */}
          <motion.div
            variants={containerVariants}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.03,
                    y: -8,
                    boxShadow: `0 20px 40px ${social.hoverColor}25`,
                  }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    background: "rgba(255, 255, 255, 0.95)",
                    borderRadius: "20px",
                    padding: "24px 18px",
                    textDecoration: "none",
                    color: "inherit",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    transition: "all 0.3s ease",
                    minHeight: "140px",
                  }}
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    style={{
                      fontSize: "2rem",
                      color: social.color,
                      marginBottom: "12px",
                    }}
                  >
                    <IconComponent />
                  </motion.div>

                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      color: "#1a1a1a",
                      margin: "0 0 6px 0",
                    }}
                  >
                    {social.name}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "#666",
                      margin: 0,
                      textAlign: "center",
                      lineHeight: "1.4",
                    }}
                  >
                    {social.description}
                  </p>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </motion.div>

      <Footer
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
    </div>
  );
};

export default Contact;
