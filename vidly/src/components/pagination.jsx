import React, { Component } from "react";

const Pagination = (props) => {
    const {pageSize, itemCount, currentPage} = props;
    const pageCount = Math.ceil(itemCount / pageSize);
    console.log('page count - ', pageCount);
    if(pageCount === 1) return null;
    let pages = range(pageCount);

    return ( 
        <nav aria-label="Page navigation example">
        <ul className="pagination">
            {pages.map(page => {
                return (
                <li key={page} className={page === currentPage? "page-item active": "page-item"}>
                <a className="page-link" href="#" onClick={()=> props.onPageChange(page)}>
                  {page}
                </a>
              </li>
                )      
            })}
        </ul>
      </nav>
     );
}
 
export default Pagination;

function range(pageCount) {
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return pages;
}

