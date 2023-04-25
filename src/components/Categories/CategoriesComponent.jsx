import React from 'react'
import CategoriesCard from './CategoriesCard'

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
                    <CategoriesCard imgSrc="../images/blockchain-1.svg" title="Blockchain" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." width="150" altText="Blockchain logo"/>
                    <CategoriesCard imgSrc="../images/apple-music.svg" title="Music" description="Aspernatur enim labore, iure nostrum totam" width="150" altText="Apple Music logo"/>
                    <CategoriesCard imgSrc="../images/business-insider-1.svg" title="Business" description="Labore iure nostrum totam quia dolores" width="100" altText="Business Insider logo"/>
                    <CategoriesCard imgSrc="../images/google-finance.svg" title="Finance" description="Molestiae, similique magni aliquam totam quia dolores aliquam" width="100" altText="Google Finance logo"/>
                    <CategoriesCard imgSrc="../images/graphic.svg" title="Graphic Design" description="Consectetur adipi elit. Aspernatur enim labore, iure nostrum" width="100" altText="Graphic Design Logo"/>
                    <CategoriesCard imgSrc="../images/google-marketing-platform.svg" title="Marketing" description="Consectetur adipi elit. Aspernatur enim labore, iure nostrum" width="95" altText="Marketing Logo"/>
                </div>
            </div>
            
        </section>
    </div>
  )
}

export default CategoriesComponent