const Pagination = ({nPages, currentPage,setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1) //array that holds all the page numbers from 1 to nPages

  const nextPage = () => {
    if(currentPage !== nPages) {
      setCurrentPage(currentPage + 1)
    }
  }
  const prevPage = () => {
    if(currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  console.log(pageNumbers)
  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a className="page-link" onClick={prevPage} href="#"> 
            Previous 
          </a>
        </li>
        {pageNumbers? pageNumbers.map(pgNumber => {
          return(
            <li key={pgNumber} className={`page-item ${currentPage == pgNumber ? 'active' : '' } `} >
            <a onClick={() => setCurrentPage(pgNumber)} className='page-link' href='#' >{pgNumber}</a>
          </li>
          )
        }): null}
        <li className="page-item">
          <a className="page-link" onClick={nextPage} href="#"> 
            Next 
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination