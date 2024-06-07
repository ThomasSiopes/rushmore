import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'survey-core/defaultV2.min.css';

import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<React.Suspense><Home/></React.Suspense>}/>
      </Routes>
    </Router>
  );
}

export default App;
