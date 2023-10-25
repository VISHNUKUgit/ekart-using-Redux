import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { Card, Button } from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addToCart, addToWishlist } from '../redux/wishlistSlice'

function Home() {
  const data = useFetch('https://dummyjson.com/products')
  const dispatch = useDispatch()
  return (
    <>
      <Header />
      <div style={{ display: 'flex', flexWrap:'wrap',justifyContent:'center'}}>
        {data?.length > 0 ? data.map((product, index) => (
        <Card style={{ width: '18rem', margin: '10px', }} key={index}>
          <Card.Img variant="top" src={product?.thumbnail}  style={{height:'200px'}}/>
          <Card.Body>
            <Card.Title>{product?.title}</Card.Title>
            <Card.Text>
              {product?.description.slice(0,50)}...
              <br />
              <span style={{fontWeight:'bold'}}>price:₹{product.price}</span>
            </Card.Text>
            <div className='d-flex justify-content-between'>
              <button variant="primary" style={{fontWeight:"800",padding:'0 2px',backgroundColor:'black',color:'white'}} onClick={()=>dispatch(addToWishlist(product))}  >add to wishlist</button>
              <button variant="primary"style={{fontWeight:"800",padding:'0 2px',backgroundColor:'white',color:'Black', border:'1px solid black'}} onClick={()=>dispatch(addToCart(product))} >add to cart</button>
            </div>

          </Card.Body>
        </Card>
        ))
        :""}
      </div>
      <Footer />
    </>
  )
}

export default Home