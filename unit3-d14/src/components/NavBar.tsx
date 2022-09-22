import { Navbar, Nav} from "react-bootstrap"
import { FaSpaceShuttle } from "react-icons/fa"
import { Link } from "react-router-dom";


const NavBar = () => (

      <Navbar style={{backgroundColor: "black"}} expand="lg">
      <Navbar.Brand className="text-light" href="#home">
            <FaSpaceShuttle 
            className="ml-3"
            size={35}/>
             </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Link className="nav-link mr-3 text-light text-monospace" style={{letterSpacing: "3px"}} to="/">
              HOME
            </Link>
            <Link className="nav-link mr-3 text-light text-monospace" style={{letterSpacing: "2px"}} to="/articles">
              ARTICLES
            </Link>
            </Nav>
          </Navbar.Collapse>
    </Navbar>

  );

export default NavBar