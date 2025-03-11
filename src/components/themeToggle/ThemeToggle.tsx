"use client";

import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useThemeContext } from "@/hooks/useThemeContext";

const ThemeToggle: React.FC = () => {
  const { darkThemeOn, toggle } = useThemeContext();

  return (

    <button
      onClick={() => toggle(darkThemeOn ? false : true)}
      className={`theme-toggle ${darkThemeOn? "dark-toggle":null}`}
    >
      <motion.div
        animate={{
          rotate: darkThemeOn ? 180 : 0,
          scale: darkThemeOn ? 0.8 : 1,
        }}
        transition={{ duration: 0.3 }}
        className={`theme-icon ${darkThemeOn? "dark-icon":null}`}
        // style={{paddingBottom: 10}}
      >
        {darkThemeOn ? (
          <Sun size={26} style={{color: "#facc15", fontWeight: "bolder"}} />
        ) : (
          <Moon size={26} />
        )}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
