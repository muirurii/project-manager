import NavBar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectUser } from "../../features/user/userSlice";
import { BiUser } from "react-icons/bi";

const Header = () => {
  const user = useAppSelector(selectUser);

  return (
    <header>
      <Nav
        variant="tabs"
        as="ul"
        fill
        style={{ listStyle: "none" }}
        className=" px-4 pt-1 container"
      >
        <Nav.Item as="li" className="mx-2">
          <Link className="nav-link text-dark py-3" to="/">
            Home
          </Link>
        </Nav.Item>
        <Nav.Item as="li" className="mx-2">
          <Link className="nav-link text-dark py-3" to="/projects">
            Projects
          </Link>
        </Nav.Item>
        <Nav.Item as="li" className="mx-2">
          <Link className="nav-link text-dark py-3" to="/projects/new">
            New project
          </Link>
        </Nav.Item>
        {user.isLogged ? (
          <Nav.Item as="li" className="mx-2">
            <button className="nav-link text-dark py-3 d-flex align-items-center justify-content-center gap-2">
              <BiUser />
             <span>{user.username}</span>
             <span>{user.projects.length}</span>
            </button>
          </Nav.Item>
        ) : (
          <>
            <Nav.Item as="li" className="mx-2">
              <Link className="nav-link text-dark py-3" to="/login">
                Login
              </Link>
            </Nav.Item>
            <Nav.Item as="li" className="mx-2">
              <Link className="nav-link text-dark py-3" to="/signup">
                Signup
              </Link>
            </Nav.Item>
          </>
        )}
      </Nav>
    </header>
  );
};

export default Header;
