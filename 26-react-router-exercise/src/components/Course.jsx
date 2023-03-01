import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import courses from '../data/courses'
// import NotFound from './NotFound'

const Course = () => {
  const { slug } = useParams()
  //   const [course] = courses.filter((course) => course.slug === slug)
  const navigate = useNavigate()
  const course = courses.find((course) => course.slug === slug)

  useEffect(() => {
    if (!course) {
      navigate('..', { relative: 'path' })
    }
  }, [course, navigate])

  //   if (!course) {
  //     return <NotFound />
  //   }

  return (
    <>
      <h1>Course: {course?.title}</h1>
      <Link to=".." relative="path">
        All courses
      </Link>
    </>
  )
}

export default Course
