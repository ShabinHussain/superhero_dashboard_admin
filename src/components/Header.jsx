import React from 'react'
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faBell, faCircleDown, faCircleQuestion, faClipboard, faGear, faHeart, faMagnifyingGlass, faMessage, faRightToBracket, faTableColumns, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';
import '../pages/common.css'


function Header({searchKey}) {
    const navigate= useNavigate()



    const handleLogout = () => {
        sessionStorage.removeItem("existingUser");
        sessionStorage.removeItem("token");
        navigate('/'); // Redirect to login or homepage
      };


  return (
    <>
       <Navbar expand="lg" className="bg-light shadow w-100">
                <Container >
                    <Navbar.Brand href=""><Link to={'/'} className='ms-5 text-decoration-none text-warning'><b className='fs-1'>Panther</b></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                          
                            <Nav.Link href="#link" className='d-flex'>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1 },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                    className='t2'
                                >
                                    <TextField id="outlined-basic" label="Search Location" variant="outlined" className='' onChange={(e)=>searchKey(e.target.value)}/>


                                </Box>
                                <Button className=''><FontAwesomeIcon icon={faMagnifyingGlass} size='xl'/></Button>

                            </Nav.Link>
                            
                            <Nav.Link href="" className='mt-3'>
                                <Button className='border bg-secondary text-white ' onClick={handleLogout}>LogOut</Button>
                            </Nav.Link>
                            
                            <Nav.Link href="" className='mt-3 ms-5 '>
                                <h2 className='heading1'>The Man Without Fear</h2>
                            </Nav.Link>
                           
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    
    </>
  )
}

export default Header