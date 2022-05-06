
import Link from 'next/link'
import { Button, Container, Form, FormControl, Nav, NavDropdown } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { BsFillGearFill, BsFillBellFill, BsSearch, BsCalendarEventFill, BsFillFileEarmarkPlusFill, BsGrid3X3GapFill } from "react-icons/bs"
import SearchGlobal from './searchGlobal'

import Image from 'next/image'
import logo from '../../../public/logo.svg'

function CustomNavbar() {
  // const saved = localStorage.getItem("auth");
  // const initialValue = JSON.parse(saved);
  // console.log(initialValue);

    return (
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" style={{ padding: 0 }}>
        <Container fluid>
          <Navbar.Brand href="/">
            <Image
              src={logo}
              alt="Imágen inválida"
              width={200} 
              height={40} 
              objectFit="contain"
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link href="/contacts"><span style={{color:'white'}}>Contactos</span></Link>
              </Nav.Link>
              <Nav.Link>
                <Link href="/companies"><span style={{color:'white'}}>Empresas</span></Link>
              </Nav.Link>
              <Nav.Link>
                <Link href="/cases"><span style={{color:'white'}}>Casos</span></Link>
              </Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>

            <Nav>
              <SearchGlobal />
              <Nav.Link>
                <BsSearch className='icons-navbar' />
              </Nav.Link>
              <Nav.Link href="#deets">
                <BsFillBellFill className='icons-navbar' />
              </Nav.Link>
              <Nav.Link href="#deets">
                <BsFillFileEarmarkPlusFill className='icons-navbar' />
              </Nav.Link>
              <Nav.Link href="#deets">
                <BsCalendarEventFill className='icons-navbar' />
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <BsFillGearFill className='icons-navbar' />
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <BsGrid3X3GapFill className='icons-navbar' />
              </Nav.Link>
              
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
  
  export default CustomNavbar