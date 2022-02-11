import { Button, Nav, Navbar } from 'react-bootstrap';
import Container from './../../../node_modules/react-bootstrap/esm/Container';


import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react';
import { UserContext } from '../../App';







const Header = () => {
    
    const {value1} = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = value1;

    const {value2} = useContext(UserContext);
    const [cart, setCart] = value2;

    const [cartCount, setCartCount] = useState([]);

   const length = cart.length;
   
    
    

    
    
    return (

        // This is Header container
        <header>
            {/* Fixed Navbar */}
            <Navbar variant="" expand="md" fixed="top" className="bg-color bg-light">
                <Container>
                    <Navbar.Brand href="/" className="header">
                        <img className="img-fluid" src="https://i.ibb.co/NCnsL9f/rooftop-farm-logo.png" alt="" />

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/" className="text-info">Home</Nav.Link>
                            <Nav.Link href="/contact" className="text-info">Contact</Nav.Link>
                            <Nav.Link href="/blog" className="text-info">Blog</Nav.Link>
                            <Nav.Link href="/product" className="text-info">Product</Nav.Link>
                            <Nav.Link href="/find" className="text-info">Find Rooftop</Nav.Link>
                            <Nav.Link href="/cart" className="text-info"> 
                               <FontAwesomeIcon icon={faCartPlus} /> {length}
                            </Nav.Link>

                            
                            {
                               ! loggedInUser.name ? <Button variant="outline-info" href='/login'>Login</Button> :
                               <Button variant="outline-info" href='/login'>Log Out</Button>
                            }
                            

                            
                        </Nav>
                        
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </header>




    );


}















export default Header;
