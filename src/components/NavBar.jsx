import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link , useLocation} from 'react-router-dom';
import ContactMe from './ContactMe';
import { useEffect, useState} from 'react';

function NavBar() {
    // const [bkColor,setBkColor] = useState('light');

    const location = useLocation();

    // useEffect(()=>{
    //     if(location.pathname === '/' || location.pathname === '/achievement'){
    //         setBkColor('light');
    //         document.body.style.backgroundColor = 'white';
    //     }else{
    //         setBkColor('dark');
    //         document.body.style.backgroundColor = 'black';
    //     }
    // },[location.pathname]);

  return (
    <Navbar expand="lg" 
    className={`bg-dark text-white`}>
      <Container fluid>
      <Navbar.Brand to="/">
            <img
              src="https://pranavsutar.netlify.app/logo.png"
              width="50"
              height="30"
              className="d-inline-block align-top"
              alt="Code"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center w-100">
            <Nav.Link as={Link} to="/" className={`mx-3 ${location.pathname === '/' ? 'active' :''}`}
             style={{
                color:'white'
              }}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className={`mx-3 ${location.pathname === '/about' ? 'active' :''}`}
            style={{
                color:'white'
              }}>About</Nav.Link>
            <Nav.Link as={Link} to='/resume'className={`mx-3 ${location.pathname === '/resume' ? 'active' :''}`}
            style={{
                color:'white'
              }}>Resume</Nav.Link>
            <Nav.Link as={Link} to='/achievement'className={`mx-3 ${location.pathname === '/achievement' ? 'active' :''}`}
            style={{
                color:'white'
              }}>Achievement / Extra Curriculars</Nav.Link>
            <form>
                <ContactMe/>  
            </form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;