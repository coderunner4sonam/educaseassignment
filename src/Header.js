import React from 'react'
import react_logo from "./react_logo.png"
import {Link} from 'react-router-dom';

const logoStyle={
    width:"280px",
    height:"180px",
  }
function Header() {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems: "center",flexDirection:"column"}}>
      <img src={react_logo} style={logoStyle}/>
          <p>SOME RANDOM TEXT, SOME RANDOM</p>
          <p>TEXT,SOME RANDOM TEXT, SOME RANDOM TEXT</p>

          <div  style={{ display:"flex",justifyContent:"space-evenly",alignItems:"center" ,width:"100%"}}>
            <div className='login'>
            <Link to="/" style={{textDecoration: "none"}} >Login</Link>
            </div>
            
             <div className='signup'>
             <Link to="/signup" style={{textDecoration: "none"}}>Signup</Link>
            </div>
             
          </div>
    </div>
  )
}

export default Header
