import Header from './components/Layout/Header';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from './Pages/Login';
import SignUp from './Pages/Signup';
import NewProject from './Pages/NewProject';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/projects" element={<p>Projects</p>} />
        <Route path="/projects/new" element={<NewProject />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </Router>
  );
}

export default App;
