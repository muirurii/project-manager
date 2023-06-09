import Header from "./components/Layout/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/Signup";
import NewProject from "./Pages/NewProject";
import HomePage from "./Pages/HomePage";
import Projects from "./Pages/Projects";
import Project from "./Pages/Project";
import Layout from "./components/Layout";
import { ApolloProvider} from "@apollo/client";
import {client} from "./graphQL/apolloconfig"


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Layout>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:projectId" element={<Project />} />
            <Route path="/projects/new" element={<NewProject />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Layout>
      </Router>
    </ApolloProvider>
  );
}

export default App;
