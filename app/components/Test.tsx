import { getCourses } from '@/queries/courses'
import React from 'react'

const Test = async () => {
    const courses = await getCourses();
    console.log("Courses ", courses);
  return (
    <div>Test</div>
  )
}

export default Test