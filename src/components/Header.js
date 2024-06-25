import React from 'react';

import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" responsive>
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    </Container>
  </Navbar>
  )};

export default Header