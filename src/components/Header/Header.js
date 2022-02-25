import { Dropdown, Nav, Navbar, NavDropdown, } from 'react-bootstrap';
import Container from './../../../node_modules/react-bootstrap/esm/Container';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { UserContext } from '../../App';
import { NavLink } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { getStoredCart } from '../../utilities/fakedb';
import { useEffect } from 'react';







const Header = () => {

    const { value1 } = useContext(UserContext);
    const [loggedInUser] = value1;

    const { email, name, photo } = loggedInUser;
    
    
    const { value2 } = useContext(UserContext);
    const [cart] = value2;
    


    return (

        // This is Header container
        <header>



            {/* Fixed Navbar */}
            <Navbar variant="" expand="md" fixed="top" className="bg-color">
                <Container>
                    <NavLink to="/" className="header navbar-brand">
                        <img src="https://i.ibb.co/JpN3VhM/asdf.png" alt="" />
                    </NavLink>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto d-flex align-items-center"
                        >
                            <NavLink to="/" className="text-dark nav-link">Home</NavLink>
                            <NavLink to="/find" className="text-dark  nav-link">Find Rooftop</NavLink>
                            <NavLink to="/product" className="text-dark  nav-link">Product</NavLink>
                            <NavLink to="/blog" className="text-dark  nav-link">Blog</NavLink>
                            <NavLink to="/contact" className="text-dark  nav-link">Contact</NavLink>
                            <NavLink to="/cart" className="text-dark  nav-link">
                                <FontAwesomeIcon icon={faCartPlus} /> {cart.length}
                            </NavLink>


                            <Dropdown>
                                <Dropdown.Toggle variant="none" id="dropdown-scroll">
                                    <Avatar alt="Remy Sharp" src={photo} />
                                </Dropdown.Toggle>

                                {
                                    email ? (<Dropdown.Menu>
                                        <NavDropdown.Item>{name}</NavDropdown.Item>
                                        {email === 'admin@gmail.com' && <NavLink className="dropdown-item text-dark" to="/dashboard">Dashboard</NavLink>}
                                        {email === 'entrepreneur@gmail.com' && <NavLink className="dropdown-item text-dark" to="/entrepreneur">Entrepreneur</NavLink>}
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/">Logout</NavDropdown.Item>

                                    </Dropdown.Menu>)
                                        :
                                        (
                                            <Dropdown.Menu>
                                                <NavLink className="dropdown-item text-dark" to="/login">User or Customer</NavLink>
                                                <NavLink className="dropdown-item text-dark" to="/entrepreneur">Entrepreneur Dashboard</NavLink>
                                                <NavLink className="dropdown-item text-dark" to="/dashboard">Admin Dashboard</NavLink>
                                            </Dropdown.Menu>
                                        )

                                }




                            </Dropdown>



                        </Nav>


                    </Navbar.Collapse>
                </Container>
            </Navbar>





        </header>




    );


}















export default Header;
