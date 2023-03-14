import React from 'react';
import Header from './components/Layout/Header';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Cards from './components/Cards';
import Login from './components/Login';
import SignUp from './components/Signup';
import NewProject from './components/NewProject';

function App() {
  return (
    <Router>
      <div className=" h-full">
      <Header />
      <Routes>
        <Route path="/" element={<Cards/>} />
        <Route path="/projects" element={<p>Projects</p>} />
        <Route path="/projects/new" element={<NewProject />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
