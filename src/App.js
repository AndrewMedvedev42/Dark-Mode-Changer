import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article.jsx'

function App() {
  const [theme, setTheme] = useState("light-theme")

  useEffect(()=>{
    document.documentElement.className = theme
  },[theme])

  const toggleTheme = () =>{
    if(theme === "light-theme"){
      setTheme("dark-theme")
    } else{
      setTheme("light-theme")
    }
  }

  return <section>
    <nav>
      <div className="nav-center">
        <h1>Dark Mode Page</h1>
        <button className="btn" onClick={toggleTheme}>Change Theme</button>
      </div>
    </nav>
    <div className="articles">
      {data.map((item)=>{
        return <Article key={item.id}{...item}/>
      })}
    </div>
  </section>
}

export default App
