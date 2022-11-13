import Home from './components/Home';
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
            path="/details/:origin/:destination/:zipCode"
            element={<Details/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
