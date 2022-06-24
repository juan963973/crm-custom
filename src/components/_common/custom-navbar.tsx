
import Link from 'next/link'
import { Button, Container, Form, FormControl, Nav, NavDropdown } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { useRouter } from 'next/router';
import { BsFillGearFill, BsFillBellFill, BsSearch, BsCalendarEventFill, BsFillFileEarmarkPlusFill, BsGrid3X3GapFill, BsPersonCircle } from "react-icons/bs"

import Image from 'next/image'
import logo from '../../../public/logo-light.svg'

import SearchGlobal from './searchGlobal'
import { CanActive } from 'auth/CanActive';
import { routes } from 'pages/routes';
import { useEffect, useState } from 'react';



function CustomNavbar() {
    const router = useRouter();
    const [user, setUser] = useState('')

    useEffect(() => {
      let auth:any = localStorage?.getItem('auth')
      auth = JSON.parse(auth);
      setUser(auth?.user?.userName)
    }, [])

    const handleLogout = () => {
      setUser('');
      localStorage.removeItem('auth');
      router.push('/login')
    }

    const styles = {
        backgroundColor: '#1d70b7',
        padding: 0
    }

    return (
      <Navbar expand="lg" fixed="top" style={ styles }>
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
              <NavDropdown 
                title={<BsPersonCircle className='icons-navbar-user' />}
                align="end"
                id="basic-nav-dropdown">
                <div style={{padding: "0 10px", color: "#1675e0" }}>{user}</div>
                {/* <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>Cerrar sesión</NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link eventKey={2} href="#memes">
                <BsGrid3X3GapFill className='icons-navbar' />
              </Nav.Link> */}
              
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
  
  export default CustomNavbar