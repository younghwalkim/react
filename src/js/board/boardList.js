import React, { useEffect, useState } from 'react';

function BoardList() {

  const [boards, setBaord] = useState([]);

  useEffect(() => {
    fetch("/boards")
        .then((res) => {
          return res.json();
        })
        .then(function (result) {
          setBaord(result);
      })
  },[]);

  return (
    <div className="table-board">
        {boards.map((board) => (
          <li key={board.boardNum}>
            <span className="cellno">{board.boardNum}</span>
            <span className="cellheadertitle"><a href={'/boards/'+board.boardNum}>{board.boardTitle}</a></span>
            <span className="cell">{board.boardWriter}</span>
            <span className="cell">{board.boardDate}</span>
            <span className="cell">{board.boardReadCount}</span>
          </li>          
        ))}        
    </div>
  );
}

export default BoardList;


