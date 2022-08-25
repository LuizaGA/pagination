const Records = ({data}) => {
  return(
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Gender</th>
        </tr>
      </thead>
      <tbody>
        {data ? data.map( (item) => {
          return(
            <tr>
            <td>{item.id}</td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.gender}</td>
          </tr>
          )}) : null}
      </tbody>
    </table>
  )
}

export default Records