import { getCourses } from '@/queries/courses'
import React from 'react'

const Home = async () => {
    const courses = await getCourses();
    console.log("Courses ", courses);
  return (
    <div>Home</div>
  )
}

export default Home;