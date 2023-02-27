import { useParams } from 'react-router-dom'
import courses from '../data/courses'

const Course = () => {
  const { slug } = useParams()
  const [course] = courses.filter((course) => course.slug === slug)
  console.log(course)

  return (
    <>
      <h1>Course: {course.title}</h1>
    </>
  )
}

export default Course
