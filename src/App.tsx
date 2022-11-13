import React from 'react';
import Home from './components/Home';
import Results from './components/Results'
import Details from './components/Details'

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Details/>
    // <Router>
    //   <Routes>
    //     <Route
    //         path="/"
    //         element={<Home/>}>
    //     </Route>
    //     <Route
    //         path="/results/:origin/:destination"
    //         element={<Results/>}>
    //     </Route>
    //     <Route
    //         path="/results/:origin/:destination/:zip"
    //         element={<Details/>}>
    //     </Route>
    //   </Routes>
    // </Router>
  );
}

export default App;
