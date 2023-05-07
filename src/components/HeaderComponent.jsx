import React from 'react'


function HeaderComponent() {
  return (
    <div>
        <header>
        <h1> EGATOR</h1>
        <span className="menu-open" id="menuOpen">&#9776;</span>
        <nav className="desktop-nav">
            <a href="../html_pages/home.html">Home</a>
            <a href="../html_pages/about.html">About</a>
            <a href="../html_pages/courses.html">Courses</a>
            <a href="../html_pages/contact.html">Contact</a>
        </nav>
         
        <div className="transparent-background" id="transparentBackground">
            <div className="mobile-nav-container">
                <span className="menu-close" id="menuClose">&#120;</span>
                <nav className="mobile-nav">
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Courses</a>
                    <a href="/">Contact</a>
                </nav>
            </div>
        </div>
    </header>
    </div>
  )
}

export default HeaderComponent

