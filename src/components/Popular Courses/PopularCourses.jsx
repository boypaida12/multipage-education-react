import React from 'react'
import Card from './Card'

function PopularCourses() {
  return (
    <div>
        <section className="popular-courses-main">
            <h2>Our Popular Courses</h2>
            <div className="course-cards">
            <Card imgSrc="../images/Social Dashboard-cuate.png" title="Responsive Social Media Website UI Design"/>
            <Card imgSrc="../images/Social Dashboard-amico.png" title="Responsive Ecommerce Website UI Design"/>
            <Card imgSrc="../images/Social Dashboard-pana.png" title="Responsive Portfolio Website UI Design"/> 
            </div>
        </section>
    </div>
  )
}

export default PopularCourses