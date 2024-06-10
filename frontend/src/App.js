import React from 'react';
import {Link, BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import './basic.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'survey-core/defaultV2.min.css';

import Home from './pages/Home';
import SurveyList from "./pages/SurveyList";

function App() {
  return (
    <Router>
      <div className="bg-image"/>
      <Row className="subNavBar font-comfortaa p-3">
          <Col/>
          <Col className="text-center text-white" xs={12} md={4}>
              <Link className="ms-2 me-1" to={`/`}><strong>Home</strong></Link> •
              <Link className="ms-2 me-1" to={`/surveys`}><strong>Surveys</strong></Link> •
              <Link className="ms-2 me-1" to={`/`}><strong>Account?</strong></Link>
          </Col>
      </Row>

      <Routes>
        <Route exact path="/" element={<React.Suspense><Home/></React.Suspense>}/>
        <Route exact path="/surveys" element={<React.Suspense><SurveyList/></React.Suspense>}/>
      </Routes>
    </Router>
  );
}

export default App;
