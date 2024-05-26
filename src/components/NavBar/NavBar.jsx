import React from 'react'

import "./Navbar.css"
const NavBar = () => {
  return (
    <div className='navbar'>
      
         <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
         <img className="avatar"  src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
         <h3 className='text' style={{color:'white'}}>Home</h3>
         <h5 className='text1' style={{color:'white'}}>TV Shows</h5>
         <h5 className='text2' style={{color:'white'}}>Movies</h5>
         <h5 className='text3' style={{color:'white'}}>Recently Added</h5>
         <h5 className='text4' style={{color:'white'}}>My List</h5>


    </div>
  )
}

export default NavBar