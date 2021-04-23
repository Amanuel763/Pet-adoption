import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { MdPets } from 'react-icons/md'
import { LinkContainer } from 'react-router-bootstrap'


const Header = () => {
    return (
        <>
    <Navbar collapseOnSelect bg="light" expand="lg">
            <LinkContainer to='/'>
                <Navbar.Brand> <MdPets />  PETLOVER</Navbar.Brand>        
            </LinkContainer>    
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to='/'>
                        <Nav.Link>Home</Nav.Link>                
                    </LinkContainer>
                    <LinkContainer to='/cats'>
                        <Nav.Link>Adoptable Cats</Nav.Link>                
                    </LinkContainer>                    
                    <LinkContainer to='/dogs'>
                        <Nav.Link>Adoptable Dogs</Nav.Link>                
                    </LinkContainer>
                </Nav>  
   
            </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header


/*
 <Navbar collapseOnSelect bg="light" expand="lg">
            <LinkContainer to='/'>
                <Navbar.Brand> <MdPets />  PETLOVER</Navbar.Brand>        
            </LinkContainer>    
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to='/'>
                        <Nav.Link>Home</Nav.Link>                
                    </LinkContainer>
                    <LinkContainer to='/cats'>
                        <Nav.Link>Adoptable Cats</Nav.Link>                
                    </LinkContainer>                    
                    <LinkContainer to='/dogs'>
                        <Nav.Link>Adoptable Dogs</Nav.Link>                
                    </LinkContainer>
                </Nav>  
   
            </Navbar.Collapse>
            </Navbar>
        </>


*/