import { useState, useEffect } from 'react'
import axios from 'axios'
import Records from './Records'
import Pagination from './Paginationc'

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const [currentPage, setCurrentPage] = useState(1)
  const [recordsPerPage] = useState(10)

  const indexOfLastRecord = currentPage * recordsPerPage //So, indexOfLastRecord = 17 * 10 = 170 (The index of last record on page 17 is 169 as the array is zero-indexed, but you don’t need to subract one, reason you will find out soon) and indexOfFirstRecord = 170–10 = 160.
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord) //Records to be displayed on the current page
  const nPages = Math.ceil(data.length / recordsPerPage) //Use the ceil function to fit the remainder of the records on a new page if the total number of records is not evenly divisible by recordsPerPage.

  useEffect(() => {
    axios
      .get('MOCK_DATA.json')
      .then(res => {
        setData(res.data)
        setLoading(false)
      })
      .catch(e => {
        console.log(e.message)
      })
  }, [])

  return (
    <div className="container">
      <Records data={currentRecords} />
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}

export default App
