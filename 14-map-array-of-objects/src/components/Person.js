function Person({ firstName, lastName, email, img }) {
  //   const { id, firstName, lastName, email, img } = person
  console.log(firstName)
  return (
    <div className="card">
      <img src={img} />
      <div>
        {firstName} {lastName}
      </div>
      <div>{email}</div>
    </div>
  )
}

export default Person
