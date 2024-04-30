import React, { useEffect, useState } from 'react';

function Top3Notice() {

  const [notices, setNotice] = useState([]);

  useEffect(() => {
    fetch("/notices/ntop3")
        .then((res) => {
          return res.json();
        })
        .then(function (result) {
          setNotice(result);
      })
  },[]);

  return (
    <div className="Top3Notice">
        {notices.map((notice) => (
          <li key={notice.noticeNo}>
          <span className="cellno">{notice.noticeNo}</span>
          <span className="celltitle"><a href={'/notices/'+notice.noticeNo}>{notice.noticeTitle}</a></span>
          <span className="cell">{notice.noticeDate}</span>
        </li>  
        ))}    
    </div>
  );
}

export default Top3Notice;

