import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import HeroComponent from '../components/HeroComponent'
import CategoriesComponent from '../components/Categories/CategoriesComponent'
import PopularCourses from '../components/Popular Courses/PopularCourses'
import FaqComponent from '../components/Faq/FaqComponent'

function HomePage() {
  return (
    <div>
        <HeaderComponent/>
        <HeroComponent/>
        <CategoriesComponent/>
        <PopularCourses/>
        <FaqComponent/>
    </div>
  );
}

export default HomePage