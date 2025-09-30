'use client'
import React, { useEffect, useState } from 'react'
import { FiSun, FiMoon } from "react-icons/fi";

const Theme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const handleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Apply theme colors dynamically
  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'dark') {
      root.style.setProperty('--background', '#0a0a0a');
      root.style.setProperty('--foreground', '#ededed');
    } else {
      root.style.setProperty('--background', '#ffffff');
      root.style.setProperty('--foreground', '#171717');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Button styles based on theme
  const buttonBg = theme === 'dark' ? '#ededed/70' : '#ccc';
  const buttonText = theme === 'dark' ? '#fff' : '#171717';
  const iconColor = theme === 'dark' ? '#FFD700' : '#FF8C00'; // Sun/Moon icon color

  return (
    <button
      onClick={handleTheme}
      style={{ backgroundColor: buttonBg, color: buttonText }}
      className="cursor-pointer rounded-full w-12 h-12 flex justify-center items-center transition-colors duration-300"
    >
      {theme === 'dark' ? <FiSun size={20} color={iconColor} /> : <FiMoon size={20} color={iconColor} />}
    </button>
  );
};

export default Theme;
