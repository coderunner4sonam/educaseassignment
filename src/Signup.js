import React from 'react'

const inputbuttonStyle={
  width:"80%",
  height:"45px",
  borderRadius:"25px",
  marginBottom:"18px",
  padding:"0px 25px"
}

const signupbuttonStyle={
  width:"93%",
  height:"45px",
  borderRadius:"25px",
  marginBottom:"18px",
  backgroundColor:"#E70B89",
  color:"white",
  padding:"0px 25px"
}
function Signup() {
  return (
    <div style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
     
    
        <input placeholder='Enter Name'style={inputbuttonStyle} className="inputbutton"/>
    
        <input placeholder='Email Address'style={inputbuttonStyle} className="inputbutton"/>
    
        <input placeholder='Password'style={inputbuttonStyle} className="inputbutton"/>
  
        <button style={signupbuttonStyle}>SIGN UP</button>
      <p>or login with</p>

    </div>
  )
}

export default Signup
