import courses from '../data/courses'
import { Link } from 'react-router-dom'

const Courses = () => {
  return (
    <>
      <h1>All Courses</h1>
      {courses.map((course) => {
        return (
          <>
            <Link key={course.id} to={course.slug}>
              {course.title}
            </Link>
            <br />
          </>
        )
      })}
    </>
  )
}

export default Courses
