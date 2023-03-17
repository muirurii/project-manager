import Header from './components/Layout/Header';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from './Pages/Login';
import SignUp from './Pages/Signup';
import NewProject from './Pages/NewProject';
import HomePage from './Pages/HomePage';
import Projects from './Pages/Projects';
import Project from './Pages/Project';
import Layout from './components/Layout';
import {ApolloProvider,ApolloClient,InMemoryCache,createHttpLink} from "@apollo/client";


const link = createHttpLink({
  uri:"http://localhost:5000/graphql",
})

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});


function App() {
  return (
    <Router>
      <ApolloProvider client={client} >
      <Header />
      <Layout>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/projectId" element={<Project />} />
        <Route path="/projects/new" element={<NewProject />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
      </Layout>
      </ApolloProvider>
    </Router>
  );
}

export default App;
