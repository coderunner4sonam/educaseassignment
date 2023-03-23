import React from 'react'
import google from "./google.png"
import facebook from "./facebook.png"
import twitter from "./twitter.png"

function Footer() {
  return (
    <>
    <div  style={{ display:"flex",justifyContent:"center",alignItems:"center"}}>
      <img src={google} style={{height:"60px"}}/>
      <img src={facebook} style={{height:"60px"}}/>
      <img src={twitter} style={{height:"60px"}}/>
    </div>
    <div style={{display:"flex",justifyContent:"center",alignItems: "center",flexDirection:"column"}}>

      <div>
          <span>Don't have an Account?</span>
          <span style={{color:"#E70B89"}}> Create new now!</span>
      </div>
      <div>
          <span>By signing up, you agree with our </span>
          <span style={{ textDecoration: "underline",color:"#E70B89"}}> Terms & Conditions</span>
      </div>
    </div>
    </>
  )
}

export default Footer
