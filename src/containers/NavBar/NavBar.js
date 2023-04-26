import React, { useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
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
import appRoutes from '../../shared/appRoutes';
import './NavBar.css';

function Example(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      
      <Navbar>
        <hr className='nav-red-line'/>

        <NavbarBrand className='nav-logo' tag={RouterNavLink} to={appRoutes.home}>
          <img src={Logo} alt='logo' style={{ height: '80px' }} />
        </NavbarBrand>

        {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={RouterNavLink} to={appRoutes.home} exact>
                T-SHIRTS
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RouterNavLink} to={appRoutes.not_implemented}>
                CREATE FROM PICTURE
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RouterNavLink} to={appRoutes.not_implemented}>
                CREATE YOUR OWN
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RouterNavLink} to={appRoutes.not_implemented}>
                ABOUT US
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RouterNavLink} to={appRoutes.not_implemented}>
                LOG IN
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;