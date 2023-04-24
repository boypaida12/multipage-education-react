import React from 'react'

function CategoriesComponent() {
  return (
    <div>
         <section className="categories-section">
            <div className="main-categories-container">
                <div className="categories-content" data-aos="zoom-in-up" data-aos-easing="linear"
                data-aos-duration="1000">
                    <h2>Categories</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur enim labore, iure nostrum totam quia dolores aliquam? Molestiae, similique magni.</p>
                    <button className="learn-more-btn">Learn More</button>
                </div>
                <div className="cards" data-aos="zoom-in-down" data-aos-easing="linear"
                data-aos-duration="1000">
                    <div className="card">
                        <img src="../images/blockchain-1.svg" alt="blockchain" width="150"/>
                        <h4>Blockchain</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="card">
                        <img src="../images/blockchain-1.svg" alt="blockchain" width="150"/>
                        <h4>Blockchain</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                    <div className="card">
                        <img src="../images/blockchain-1.svg" alt="blockchain" width="150"/>
                        <h4>Blockchain</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="card">
                        <img src="../images/blockchain-1.svg" alt="blockchain" width="150"/>
                        <h4>Blockchain</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                    <div className="card">
                        <img src="../images/blockchain-1.svg" alt="blockchain" width="150"/>
                        <h4>Blockchain</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
                    </div>
                    <div className="card">
                        <img src="../images/blockchain-1.svg" alt="blockchain" width="150"/>
                        <h4>Blockchain</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
            
        </section>
    </div>
  )
}

export default CategoriesComponent