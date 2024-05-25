// Pagination.jsx
import './Restaurants.scss'

const Pagination = ({ totalPages, currentPage, handlePageChange }) => {
  const renderPageNumbers = () => {
    let pages = []

    // Add the '<<' button to navigate to the first page
    if (currentPage > 2) {
      pages.push(
        <button key='first' onClick={() => handlePageChange(1)}>
          {'First'}
        </button>
      )
    }

    // Determine the range of page numbers to display
    const startPage = Math.max(1, currentPage - 1)
    const endPage = Math.min(totalPages, currentPage + 1)

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button key={i} onClick={() => handlePageChange(i)} className={currentPage === i ? 'active' : ''}>
          {i}
        </button>
      )
    }

    // Add the '>>' button to navigate to the last page
    if (currentPage + 1 < totalPages) {
      pages.push(
        <button key='last' onClick={() => handlePageChange(totalPages)}>
          {'Last'}
        </button>
      )
    }
    return pages
  }

  return <div className='pagination'>{renderPageNumbers()}</div>
}

export default Pagination
