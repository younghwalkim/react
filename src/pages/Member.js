import React from 'react';
import { Link } from 'react-router-dom';

const Member = (props) => {

	return (
		<>
         <ul>
            <Link to="/home"><li>Home</li></Link>
			   <Link to="/notice"><li>Notice</li></Link>
				<Link to="/board"><li>Board</li></Link>
				<Link to="/member"><li>Member</li></Link>
			</ul>
			
         <h3>Member</h3>
      </>
	);
  
};

export default Member;
