'use client'
import React from 'react'
import {useState, useEffect} from 'react'
import Courses from './components/Courses'
import LoadingPage from './loading'
import Link from 'next/link'
import CourseSearch from './components//CourseSearch'

const HomePage = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCourses = async() => {
      const res = await fetch('/api/courses')
      const data = await res.json()
      setCourses(data)
      setLoading(false)
    }

    fetchCourses()
  }, [])

  if(loading){
    return <LoadingPage />
  }
  return (
    <div>
      <h1>
        Welcome to nextjs.
        <CourseSearch getSearchResults={(results) => setCourses(results)}/>
<Courses courses={courses}/>
      </h1>
    </div>
  )
}

export default HomePage
