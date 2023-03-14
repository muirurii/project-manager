import NavBar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
    <Nav variant="tabs" as="ul" fill
    style={{listStyle:"none"}} className=" px-4 pt-1 container">
        <Nav.Item as="li" className="mx-2">
          <Link className="nav-link py-3" to="/">Home</Link>
        </Nav.Item>
        <Nav.Item as="li" className="mx-2">
          <Link className="nav-link py-3" to="/projects">Projects</Link>
        </Nav.Item>
        <Nav.Item as="li" className="mx-2">
          <Link className="nav-link py-3" to="/projects/new">New project</Link>
        </Nav.Item>
        <Nav.Item as="li" className="mx-2">
          <Link className="nav-link py-3" to="/login">Login
        </Link>
        </Nav.Item>
        <Nav.Item as="li" className="mx-2">
          <Link className="nav-link py-3" to="/signup">Signup</Link>
        </Nav.Item>
    </Nav>
    </header>
  )
}

export default Header