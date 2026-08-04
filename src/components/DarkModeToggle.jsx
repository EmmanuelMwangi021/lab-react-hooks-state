import React from 'react'

const DarkModeToggle = ({darkMode, setDarkMode}) => {
  return (
    <button onClick={() => setDarkMode(!darkMode)}> Toggle {darkMode ? "Light Mode" : "Dark Mode"} </button>
  );
};

export default DarkModeToggle;
