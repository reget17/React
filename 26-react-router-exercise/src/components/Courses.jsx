import courses from '../data/courses'
import { Link } from 'react-router-dom'

const Courses = () => {
  return (
    <>
      <h1>All Courses</h1>
      {courses.map((course) => (
        <div key={course.id}>
          <Link to={course.slug}>{course.title}</Link>
          <br />
        </div>
      ))}
    </>
  )
}

export default Courses
