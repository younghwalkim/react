import React from 'react';
import { Link } from 'react-router-dom';

import BoardList from '../js/board/boardList';

const Board = (props) => {

	return (
		<>
         <ul>
            <Link to="/home"><li>Home</li></Link>
			   <Link to="/notice"><li>Notice</li></Link>
				<Link to="/board"><li>Board</li></Link>
				<Link to="/member"><li>Member</li></Link>
			</ul>
			
         <h3>Board</h3>
         
         <ul className="table-board">
         <li>
            <span className="cellno">번호</span>
            <span className="cellheadertitle">제목</span>
            <span className="cell">글쓴이</span>
            <span className="cell">등록일</span>
            <span className="cell">조회수</span>
         </li>
         </ul>
         <BoardList />                  
      </>
	);
  
};

export default Board;
