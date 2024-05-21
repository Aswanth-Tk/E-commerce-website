import React, { useContext } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { samplecontext } from './App'
import { IoMdHome } from "react-icons/io";
import { GiShoppingBag } from "react-icons/gi";
import { PiShoppingCartSimple } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const Navbars = () => {
  const { addcard, hide } = useContext(samplecontext)

  return (
    <div className='saa'>
      <Navbar expand="lg" className='navbar'>
        <Container className='d-flex'>
          <Navbar.Brand className='navtitle' >

            <p className='navhead'>Market<GiShoppingBag className='shopicon' />Hub</p>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-dark">
              {hide === true ?
                <div className='d-flex'>
                  <Link to={"/cart"} >
                    <PiShoppingCartSimple className='carticon' />
                  </Link>
                  <p className='cartnumber' >{addcard.length !== 0 ? addcard.length : ""}</p>
                </div> :
                <Link to={"/"}>
                  <IoMdHome className='carticon' />
                </Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbars