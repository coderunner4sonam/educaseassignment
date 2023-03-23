import React from 'react'

const forgetbuttonStyle={
    alignSelf:"flex-end",
    color:"#E70B89"
}
const inputbuttonStyle={
    width:"80%",
    height:"45px",
    borderRadius:"25px",
    marginBottom:"18px",
    padding:"0px 25px"
}

const loginbuttonStyle={
  width:"93%",
  height:"45px",
  borderRadius:"25px",
  marginBottom:"18px",
  backgroundColor:"#E70B89",
  color:"white",
  padding:"0px 25px"
}

function Login() {
  return (
    <div style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
  
        <input placeholder='Email Address' style={inputbuttonStyle} className="inputbutton"/>
        <input placeholder='Password' style={inputbuttonStyle} className="inputbutton"/>
        <button style={loginbuttonStyle}>LOGIN</button>
        <p style={forgetbuttonStyle}>Forget Password ?</p>
     
      <p >or login with</p>
    </div>
  )
}

export default Login
