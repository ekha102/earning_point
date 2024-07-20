import { Link, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Layout() {
  return (
    <div className="container-fluid">
    <Navbar
      expand="md"
      className="bg-body-tertiary mb-3"
      bg="primary" data-bs-theme="dark"
    >
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Home</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    <Outlet />
  </div>
  )
}













// import React from 'react'

// interface LayoutProps {
//   firstName: string;
// }

// export default function Layout( {firstName}:LayoutProps ) {
//   return (
//     <div>
//       <h1>{firstName}</h1>
//     </div>
//   )
// }

