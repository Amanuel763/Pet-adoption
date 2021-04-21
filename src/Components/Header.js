import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { MdPets } from 'react-icons/md'
import { LinkContainer } from 'react-router-bootstrap'


const Header = () => {
    return (
        <>
              <Navbar collapseOnSelect bg="light" variant="light">
              <LinkContainer to='/'>
                <Navbar.Brand href="#home"> <MdPets /> PETLOVER</Navbar.Brand>
              </LinkContainer>
                <Nav className="mr-auto">
                    <LinkContainer to='/'>
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/cats'>
                        <Nav.Link>Adoptable Cats</Nav.Link>
                    </LinkContainer>                
                    <LinkContainer to='dogs'>
                        <Nav.Link>Adoptable Dogs</Nav.Link>
                    </LinkContainer>                
                </Nav>
            </Navbar>
        </>
    )
}

export default Header
