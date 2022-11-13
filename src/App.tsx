import React from 'react';
import Home from './components/Home';

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Results() {
    return (<br/>);
}

function App() {
  return (
    <Router>
      <Routes>
        <Route
            path="/"
            element={<Home/>}>
        </Route>
        <Route
            path="/results/:origin/:destination"
            element={<Results/>}>
        </Route>
      </Routes>
    </Router>
    
  );
}

export default App;
