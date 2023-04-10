import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Logo from '../photos/Logo.png'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className="logo">
            <img src={Logo} alt="web site logo" className='logo-image'/>
            {/* <div style={{marginLeft:'10px'}}><Link to='/Buying' className='list-text' >Buy Cars </Link></div> */}
            {/* <div style={{marginLeft:'20px'}}><Link to='/selling' className='list-text'> Sell Cars</Link></div> */}
        </div>
        <div className="list">
            <ul className='list_li'><li><Link to='/Home' className='list-text'>Home</Link></li></ul>
            <ul className='list_li'><li><Link to="/Contactus" className='list-text'>Contact US</Link></li></ul> 
            <ul className='list_li'><li><Link to='/Aboutus' className='list-text'>About Us</Link></li></ul> 
            {/* 'list-text'>Contact US</Link></li></ul>  */}
            <ul className='list_li'><li><button className='btn'><Link to='/login' className='list-text'>LogIn</Link></button></li></ul>
            <ul className='list_li'><li><button className='btn'><Link to='/SignUp' className='list-text'>SignUp</Link></button></li></ul> 
            {/* <ul className='list_li'><li><button className='btn'><Link to='/Contactus' className='list-text'>Contactus</Link></button></li></ul>  */}
        </div>
    </div>
  )
}

export default Navbar