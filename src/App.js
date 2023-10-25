import { Route, Routes } from 'react-router-dom';
import './index.css'
import Home from './Pages/Home'
import Cart from './Pages/Cart';
import Wishlist from './Pages/Wishlist'
function App() {
  return (
    
    < >
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Wishlist' element={<Wishlist/>}/>
      </Routes>
    </>
  );
}

export default App;
