import React from 'react';
import { Link } from 'react-router-dom';

import Top3Board from '../js/Top3Board';
import Top3Notice from '../js/Top3Notice';

const Home = (props) => {

	return (
		<>
      <ul>
        <Link to="/home"><li>Home</li></Link>
			  <Link to="/notice"><li>Notice</li></Link>
				<Link to="/board"><li>Board</li></Link>
				<Link to="/member"><li>Member</li></Link>
			</ul>

      <h4>새로운 공지</h4>
        <ul className="table-like">
        <li>
          <span className="cellno">번호</span>
          <span className="cellheadertitle">제목</span>
          <span className="cell">등록일</span>
        </li>
        <Top3Board />
        </ul>

        <h4>인기 게시글</h4>
        <ul className="table-like">
        <li>
          <span className="cellno">번호</span>
          <span className="cellheadertitle">제목</span>
          <span className="cell">조회수</span>
        </li>
        <Top3Notice />
        </ul>
		</>
	);
  
};

export default Home;
