import { Dropdown, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import Container from './../../../node_modules/react-bootstrap/esm/Container';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { UserContext } from '../../App';







const Header = () => {

    const { value1 } = useContext(UserContext);
    const [loggedInUser] = value1;

    const { email, name } = loggedInUser;




    const { value2 } = useContext(UserContext);
    const [cart] = value2;




    return (

        // This is Header container
        <header>
            {/* Fixed Navbar */}
            <Navbar variant="" expand="md" fixed="top" className="bg-color">
                <Container>
                    <Navbar.Brand href="/" className="header">
                       <img src="https://i.ibb.co/JpN3VhM/asdf.png" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/" className="text-dark">Home</Nav.Link>
                            <Nav.Link href="/find" className="text-dark">Find Rooftop</Nav.Link>
                            <Nav.Link href="/product" className="text-dark">Product</Nav.Link>
                            <Nav.Link href="/blog" className="text-dark">Blog</Nav.Link>
                            <Nav.Link href="/contact" className="text-dark">Contact</Nav.Link>
                            <Nav.Link href="/cart" className="text-dark">
                                <FontAwesomeIcon icon={faCartPlus} /> {cart.length}
                            </Nav.Link>





                            {
                                email ?
                                <Nav.Link href="/login" className="text-dark">Logout</Nav.Link>
                                :
                                    <Dropdown>
                                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                            Login
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="/login">User or Customer</Dropdown.Item>
                                            <Dropdown.Item href="/login">Entrepreneur</Dropdown.Item>
                                            <Dropdown.Item href="/login">Admin</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                            }


                            {
                                email ?
                                    <Nav.Link href="#" className="text-dark">{email}</Nav.Link>
                                    :
                                    <Nav.Link href="/signup" className="text-dark">Register</Nav.Link>
                            }



                            <Nav.Link href="/" className="text-dark">{ }</Nav.Link>

                        </Nav>


                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </header>




    );


}















export default Header;
