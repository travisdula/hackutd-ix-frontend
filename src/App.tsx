import React from 'react';
import Home from './components/Home';
import Detail from './components/Detail';
import Results from './components/Results'
import Details from './components/Details'

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
            path="/"
            element={<Home/>}>
        </Route>
        <Route
            path="/results/:ideal/:destination/:radius"
            element={<Results/>}>
        </Route>
        <Route
            path="/detail/:zipcode"
            element={<Detail/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
