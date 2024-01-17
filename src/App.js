import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import foodimage from './images/restauranfood.jpg'
import Logo from './images/Logo.svg'

function Nav(){
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

function HomePage(){
  return(
    <div className="hero">
    <div className="hero-container global-max-width">
      <div className="hero-left">
        <h1>Little Lemon</h1>
        <h2>Fort-Liberte</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on
          traditional recipes served with a modern twist.
        </p>
        <NavLink to="/reservation">
          <button className="reserve-btn">Reserve a Table</button>
        </NavLink>
      </div>

      <div className="hero-right">
        <div className="hero-image">
          <img src={foodimage} alt="Serving delicious dish" />
        </div>
      </div>
    </div>
  </div>
  )
}

function Specials(){
  return <h1>Special components</h1>
}

function CustomerSay(){
  return <h1>customerSay</h1>
}

function Chicago(){
  return <h1>Chicago</h1>
}

function BookingPage(){
  return(
    <div>
      <h1>BookingPage</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Nav />
      <HomePage />
      <Specials/>
      </div>
  )
}

export default App;

