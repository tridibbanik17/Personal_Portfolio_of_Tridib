import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { theme } from "../theme";

const Navbar = ({ currentSection, setCurrentSection }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

  const navBtnStyle = {
    border: "none",
    cursor: "pointer",
    borderRadius: "2px",
    background: "transparent",
    color: theme.teal,
    fontWeight: 600,
    fontFamily: "var(--font-body)",
  };

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed",
        top: "16px",
        left: "0",
        right: "0",
        width: "min(92%, 1040px)",
        margin: "0 auto",
        zIndex: 1000,
        background: "rgba(247, 250, 248, 0.88)",
        backdropFilter: "blur(16px)",
        borderRadius: "4px",
        padding: "10px 12px",
        boxShadow: "0 10px 30px rgba(16, 42, 35, 0.08)",
        border: `1px solid ${theme.teal}22`,
        borderBottom: `3px solid ${theme.teal}`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "var(--font-body)",
        gap: "8px",
      }}
    >
      <motion.button
        whileHover={{ backgroundColor: theme.teal, color: "#fff" }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setCurrentSection("home")}
        style={{
          ...navBtnStyle,
          flex: 1,
          textAlign: "left",
          fontWeight: 700,
          fontSize: isMobile ? "1rem" : "1.1rem",
          padding: "8px 14px",
          fontFamily: "var(--font-display)",
        }}
      >
        {isMobile ? "TB" : "Tridib Banik"}
      </motion.button>

      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: theme.ink,
          fontWeight: 600,
          fontSize: "0.95rem",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
        }}
      >
        {capitalizeFirstLetter(currentSection)}
      </div>

      <motion.button
        onClick={() => setCurrentSection("home")}
        whileHover={{ backgroundColor: theme.teal, color: "#fff" }}
        whileTap={{ scale: 0.97 }}
        style={{
          ...navBtnStyle,
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          padding: "8px 14px",
          fontSize: "0.95rem",
        }}
      >
        {isMobile ? "↑" : "← Home"}
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;
