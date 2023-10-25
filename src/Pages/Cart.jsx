import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { Card, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/wishlistSlice'
import { Link } from 'react-router-dom'
function Cart() {
  const dispatch =useDispatch()
  const data = useSelector((state)=>state.wishListReducer.cart)
  return (
    <>
    <Header/>
    <div className='text-center p-2'><h1>Your Cart</h1></div>
    <div style={{ display: 'flex', flexWrap:'wrap',justifyContent:'center'}}>
        {data?.length > 0 ? data.map((product, index) => (
        <Card style={{ width: '18rem', margin: '10px', }} key={index}>
          <Card.Img variant="top" src={product?.thumbnail}  style={{height:'200px'}}/>
          <Card.Body>
            <Card.Title>{product?.title}</Card.Title>
            <Card.Text>
              {product?.description.slice(0,50)}...
            </Card.Text>
            <div className='d-flex justify-content-between'>
              
              <Button variant="primary" >buy now</Button>
              <Button variant="primary" onClick={()=>dispatch(removeFromCart(index))}  >remove</Button>
            </div>

          </Card.Body>
        </Card>
        ))
        :<div className='d-flex flex-column align-items-center justify-content-center'>
            <img src="https://cdnl.iconscout.com/lottie/premium/thumb/shopping-bag-6866084-5624247.gif" alt="" />
            <h1 className='pb-5'>Your cart is empty</h1>
        </div>}
        <div>
          
        </div>
      </div>
      <div className='d-flex justify-content-center p-5'>
          <Link to={'/'}>
            <button className='btn btn-success'>Back to Home</button>
           </Link>
      </div>
    <Footer/>
    </>
  )
}

export default Cart