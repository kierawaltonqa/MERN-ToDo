import { Link } from 'react-router-dom';
import React, { useState } from 'react';
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
    NavbarText
} from 'reactstrap';

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md" id="navbar">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href='/' >Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/about' >About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="http://github.com/kierawaltonqa" >Github</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Movies
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Film Listings
                                </DropdownItem>
                                <DropdownItem>
                                    New Releases
                                </DropdownItem>
                                <DropdownItem>
                                    Film Classification
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}
export default Navigation;