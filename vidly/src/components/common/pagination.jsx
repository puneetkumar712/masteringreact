import React from "react";
import PropTypes from 'prop-types'
const Pagination = (props) => {
    const {pageSize, itemCount, currentPage, onPageChange} = props;
    const pageCount = Math.ceil(itemCount / pageSize);
    if(pageCount === 1) return null;
    let pages = range(pageCount);

    return ( 
        <nav aria-label="Page navigation example">
        <ul className="pagination">
            {pages.map(page => {
                return (
                <li key={page} className={page === currentPage? "page-item active": "page-item"}>
                <a className="page-link" onClick={()=> onPageChange(page)}>
                  {page}
                </a>
              </li>
                )      
            })}
        </ul>
      </nav>
     );
}

Pagination.propTypes = {
  pageSize : PropTypes.number.isRequired,
  itemCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
}

export default Pagination;

function range(pageCount) {
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return pages;
}

