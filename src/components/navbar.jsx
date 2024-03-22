import React from 'react'
import'./navbar.css'
import logo_light from '../assets/imgo.png'
import search_icon_light from '../assets/search-w.png'



const Navbar = () => {

  return (
    <div className='navbar'>
        <img src={logo_light}
         alt="" className='logo' /> 
        <ul>
            <li>Home</li>
             <li>About</li>
              <li>Courses</li>
               <li>Contact</li>
               <li className='A'>JOIN US</li>
              
        </ul>
       
        <div className='search-box'>
            <input type="text" placeholder='search' />
            <img src={search_icon_light} alt="" />
        </div>
        <div className='form'>
          <h2>Login Here</h2>
          <input type='email' name='email' placeholder='Enter Email Here'></input>
          <input type='password' name='' placeholder='Enter Password Here'></input>
          <button className='btnn'><a href='#'>Login</a></button>
          <p className='link'>Don't have accont<br />
          <a href='#'>Sign Up </a>Here</p> 
          <p className='liw'>Log in with</p>
        </div>
        
        
    </div>
  )
}

export default Navbar