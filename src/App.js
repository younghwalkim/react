import React from 'react';
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Notice from "./pages/Notice";
import Board from "./pages/Board";
import Member from "./pages/Member";

// import { ThemeProvider } from "styled-components";
// import GlobalStyles from "./styles/global";


function App() {
  return (
      <div className="App">        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/notice" element={<Notice />} /> 
            <Route path="/board" element={<Board />} />
            <Route path="/member" element={<Member />} /> 
        </Routes>
      </div>
   
  );
}

export default App;

