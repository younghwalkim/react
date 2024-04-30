import React, { useEffect, useState } from 'react';

function Top3Board() {

  const [boards, setBaord] = useState([]);

  useEffect(() => {
    fetch("/boards/btop3")
        .then((res) => {
          return res.json();
        })
        .then(function (result) {
          setBaord(result);
      })
  },[]);

  return (
    <div className="Top3Board">
        {boards.map((board) => (
          <li key={board.boardNum}>
            <span className="cellno">{board.boardNum}</span>
            <span className="celltitle"><a href={'/boards/'+board.boardNum}>{board.boardTitle}</a></span>
            <span className="cell">{board.boardReadCount}</span>
          </li>          
        ))}        
    </div>
  );
}

export default Top3Board;


