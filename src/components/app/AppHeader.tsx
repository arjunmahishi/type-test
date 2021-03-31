import React, { useState, useEffect } from 'react';
import GitHubButton from "react-github-btn"

const AppHeader = () => {
  const storedTheme = localStorage.theme || "dark"
  const [checked, setChecked] = useState(storedTheme === "dark")

  useEffect(() => {
    document
      ?.querySelector("HTML")
      ?.setAttribute("data-theme", storedTheme)
  }, [storedTheme])

  const toggleTheme = () => {
    localStorage.setItem("theme", checked ?  "light" : "dark");
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", checked ? "light" : "dark")
    setChecked(!checked)
  }

  return (
    <>
      <div className="gitBtn">
      <GitHubButton href="https://github.com/arjunmahishi/type-test" 
        data-color-scheme="no-preference: light; light: light; dark: dark;" 
        data-icon="octicon-star" data-size="large" data-show-count={true} 
        aria-label="Star arjunmahishi/type-test on GitHub">Star</GitHubButton>
      </div>
      <label className="switch">
        <input
          type="checkbox"
          checked={checked}
          onChange={toggleTheme}/>
        <span className="slider round" />
      </label>
      <h1 className="appName">type-test</h1>
    </>
  )
}

export default AppHeader
