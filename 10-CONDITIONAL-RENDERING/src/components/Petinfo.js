function Petinfo({ petname, years, hasPet }) {
  // const text = hasPet
  //   ? `My ${petname} is ${years} years old`
  //   : "I don't have an animal"

  return hasPet ? (
    <h1>{`My ${petname} is ${years} years old`}</h1>
  ) : (
    <h2>I don't have an animal</h2>
  )
}

export default Petinfo
