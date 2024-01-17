import BookingPage from './BookingPage'
import Logo from './images/Logo.svg'
import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './HomePage'

export default function Nav(){
  return(
    <div className='navbar'>
      <nav>
        <div className='logo'>
          <Link to='/' className='nav-item'><img src={Logo} alt='logo-little'/></Link>
        </div>
          <div className='nav-link'>
          <Link to='/' className='nav-item'>Home</Link>
          <Link to='/booking' className='nav-item'>Booking</Link>
          <button type='btn'>Login</button>
        </div>
      </nav>
        <Routes>
          <Route path='HomePage' element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>
    </div>
  )
}