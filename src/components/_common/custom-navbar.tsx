
import Link from 'next/link'
import { Button, Container, Form, FormControl, Nav, NavDropdown } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { useRouter } from 'next/router';
import { BsFillGearFill, BsFillBellFill, BsSearch, BsCalendarEventFill, BsFillFileEarmarkPlusFill, BsGrid3X3GapFill } from "react-icons/bs"

import Image from 'next/image'
import logo from '../../../public/logo-light.svg'

import SearchGlobal from './searchGlobal'
import { CanActive } from 'auth/CanActive';
import { routes } from 'pages/routes';



function CustomNavbar() {
    const router = useRouter();

    const handleLogout = () => {
      localStorage.removeItem('auth');
      router.push('/login')
    }

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
              {
                routes.map((index:any) => (
                  <>
                    {!index?.hideNavbar && (
                      <>
                        {CanActive(index?.view) && (
                          <Nav.Link>
                            <Link href={index.url}><span style={{color:'white'}}>{index.title}</span></Link>
                          </Nav.Link>
                        )} 
                      </>
                    )}
                  </>
                  
                )) 
              }
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
              <Nav.Link onClick={handleLogout}>
                <BsFillGearFill className='icons-navbar' />
              </Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <BsFillGearFill className='icons-navbar' />
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
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