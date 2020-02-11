import React, { Component } from 'react';
import Like from './like';
const TableBody = (props) => {
    // const data = [
    //     {
    //         _id: 1,
    //         title: 5
    //     }
    // ]
    const {tableData, onHandleLike, onDeleteMovies} = props;
    return (  
        <tbody>
              {tableData.map(data => {
                return (
                  <tr key={data._id}>
                    <td>{data.title}</td>
                    <td>{data.genre.name}</td>
                    <td>{data.numberInStock}</td>
                    <td>{data.dailyRentalRate}</td>
                    <td>
                      <Like like={data.like} onLike={() => onHandleLike(data)} />
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => onDeleteMovies(data._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
    );
}
 
export default TableBody;