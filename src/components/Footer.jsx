import React from "react";
import { motion } from "framer-motion";
import { FileEarmarkText, Download } from "react-bootstrap-icons";

const Footer = ({ currentSection, setCurrentSection }) => {
  const links = [
    { path: "contact", label: "Contact" },
    { path: "about", label: "About" },
    { path: "experience", label: "Experience" },
    { path: "projects", label: "Projects" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      style={{
        width: "100%",
        textAlign: "center",
        position: "relative",
        color: "rgba(255, 255, 255, 0.9)",
        marginTop: "60px",
        padding: "40px 20px 10px 20px",
      }}
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        style={{
          width: "60%",
          height: "2px",
          background:
            "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
          margin: "0 auto 40px",
          transformOrigin: "center",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          {links.map((link) => {
            const isActive = currentSection === link.path;
            return (
              <motion.button
                key={link.path}
                onClick={() => setCurrentSection(link.path)}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  color: "#14B8A6",
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: isActive
                    ? "rgba(255, 255, 255, 0.2)"
                    : "rgba(255, 255, 255, 0.1)",
                  borderRadius: "25px",
                  padding: "12px 24px",
                  color: isActive ? "white" : "rgba(255, 255, 255, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  cursor: "pointer",
                  fontSize: "1rem",
                  fontWeight: "500",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(10px)",
                }}
              >
                {link.label}
              </motion.button>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          <motion.a
            href="https://drive.google.com/file/d/1GL61aKcA1eyFZCbKJDv39hklQtJaO_Lg/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              y: -3,
              boxShadow: "0 10px 30px rgba(15, 118, 110, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: "linear-gradient(135deg, #0F766E, #B45309)",
              borderRadius: "30px",
              padding: "16px 32px",
              color: "white",
              textDecoration: "none",
              fontSize: "1.1rem",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              transition: "all 0.3s ease",
              boxShadow: "0 8px 25px rgba(15, 118, 110, 0.22)",
              border: "2px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <FileEarmarkText style={{ fontSize: "1.3rem" }} />
            <span>View Resume</span>
            <Download style={{ fontSize: "1rem", opacity: 0.8 }} />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          style={{
            padding: "20px",
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "15px",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <p
            style={{
              fontSize: "0.95rem",
              margin: 0,
              color: "rgba(255, 255, 255, 0.7)",
              fontWeight: "400",
            }}
          >
            &copy; {new Date().getFullYear()} Tridib Banik. All rights reserved.
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            style={{
              fontSize: "0.85rem",
              margin: "10px 0 0 0",
              color: "rgba(255, 255, 255, 0.5)",
              fontStyle: "italic",
            }}
          >
            Designed & built by Tridib Banik
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: "80px",
          height: "80px",
          background: "linear-gradient(45deg, #14B8A6, #4facfe)",
          borderRadius: "50%",
          zIndex: -1,
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, delay: 1.7 }}
        style={{
          position: "absolute",
          bottom: "20%",
          left: "10%",
          width: "60px",
          height: "60px",
          background: "linear-gradient(45deg, #0F766E, #B45309)",
          borderRadius: "50%",
          zIndex: -1,
        }}
      />
    </motion.footer>
  );
};

export default Footer;
