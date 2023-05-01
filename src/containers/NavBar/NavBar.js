import React, { useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap'; 
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

import Logo from '../../assets/images/logo.png'
import Cart from '../../assets/images/cart.png'
import appRoutes from '../../shared/appRoutes';
import './NavBar.css';

function NavBar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <hr className='nav-red-line'/>
      <Navbar>
        <NavbarBrand tag={RouterNavLink} to={appRoutes.home}>
          <img src={Logo} alt='logo' className='nav-logo'/>
        </NavbarBrand>
        <NavbarText className="headerStyle">Scotty Shirts U Illustrate (SSUI)</NavbarText>
        <NavbarBrand className='shopping-cart' tag={RouterNavLink} to={appRoutes.my_cart}>
          <img src={Cart} alt='cart' style={{ height: '40px'}} />
          <span>{args.total_quantity}</span>
        </NavbarBrand>
      </Navbar>
      <hr style={{margin: '0px'}}/>
      <Navbar expand='md' style={{padding: '5px'}}>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="md-auto menu" navbar>
            <NavItem className='menu-font'>
              <NavLink tag={RouterNavLink} to={appRoutes.products}>
                T-SHIRTS
              </NavLink>
            </NavItem>
            <NavItem className='menu-font'>
              <NavLink tag={RouterNavLink} to={appRoutes.not_implemented}>
                CREATE FROM PICTURE
              </NavLink>
            </NavItem>
            <NavItem className='menu-font'>
              <NavLink tag={RouterNavLink} to={appRoutes.not_implemented}>
                CREATE YOUR OWN
              </NavLink>
            </NavItem>
            <NavItem className='menu-font'>
              <NavLink tag={RouterNavLink} to={appRoutes.not_implemented}>
                ABOUT US
              </NavLink>
            </NavItem>
            <NavItem className='menu-font'>
              <NavLink tag={RouterNavLink} to={appRoutes.not_implemented}>
                LOG IN
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <hr style={{margin: '0px'}}/>
    </div>
  );
}

export default NavBar;