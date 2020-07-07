import React from 'react'
import './Pagination.css'

export default function Pagination({transactionsPerPage, totalTransactions, paginate}) {
    const pageNumbers = [];
    for(let i=1; i<=Math.ceil(totalTransactions/transactionsPerPage); i++){
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className="pagination pagination-center">
                {pageNumbers.map(number => 
                    <li key={number} className="page-item">
                        <button onClick={() => paginate(number)} className="page-link">
                            {number}
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    )
}
