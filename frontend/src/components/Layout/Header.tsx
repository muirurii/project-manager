import NavBar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
    <NavBar as="ul" style={{listStyle:"none"}} className="bg-light text-dark px-4">
        <Nav.Item as="li" className="mx-2">
          <Link className="nav-link" to="/">
            <Nav.Link className="" as="span">Home</Nav.Link>
        </Link>
        </Nav.Item>
        <Nav.Item as="li" className="mx-2">
          <Link className="nav-link" to="/projects">
            <Nav.Link className="" as="span">Projects</Nav.Link>
        </Link>
        </Nav.Item>
        <Nav.Item as="li" className="mx-2">
          <Link className="nav-link" to="/projects/new">
            <Nav.Link className="" as="span">New project</Nav.Link>
        </Link>
        </Nav.Item>
        <Nav.Item as="li" className="mx-2">
          <Link className="nav-link" to="/login">
            <Nav.Link className="" as="span">Login</Nav.Link>
        </Link>
        </Nav.Item>
        <Nav.Item as="li" className="mx-2">
          <Link className="nav-link" to="/signup">
            <Nav.Link className="" as="span">Signup</Nav.Link>
        </Link>
        </Nav.Item>
    </NavBar>
    </header>
  )
}

export default Header