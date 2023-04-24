import React, { Component } from 'react'

export class HeroComponent extends Component {
  render() {
    return (
      <div>
        <section className="hero-section">   
                <div className="home-content">
                    <h1>Grow your skills to advance your career path</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quis illum aliquam suscipit? Ipsam saepe sit placeat id ipsum dolor sit amet.</p>

                    <button className="button">Get Started</button>   
                </div>
                <div className="image-container">
                    <img src="../images/Collab.gif" alt="students at a desk"/>
                </div>

        </section>
      </div>
    )
  }
}

export default HeroComponent