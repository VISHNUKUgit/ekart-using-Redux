import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
 

function Header() {
    const wishlist1 = useSelector((state)=>state.wishListReducer.wish);
    const cartCount = useSelector((state)=>state.wishListReducer.cart);
        return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container >
                    <Navbar.Brand className='d-flex'>
                        <Link to={'/'} style={{ textDecoration: 'none' }}>
                        <h2><i class="fa-brands fa-shopify fa-2xl" style={{color: "#ffffff"}}></i>Ekart</h2>
                        </Link>
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link >
                            <Link to={'/Wishlist'}>
                                <Button className='rounded' variant="primary">
                                    Wishlist <Badge pill bg="secondary">{wishlist1.length}</Badge>
                                    
                                </Button>
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to={'/Cart'}>
                                <Button className='rounded' variant="primary">
                                    Cart <Badge pill bg="secondary">{cartCount.length}</Badge>   
                                </Button>
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
        </>
    )
}

export default Header