import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import {BrowserRouter ,Route, Routes} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const content={
  display:"flex",
  justifyContent:"center",
  alignItems: "center",
  
}
const inner_style={
  display: "flex",
  justifyContent:"space-evenly",
  alignItems: "center",
  flexDirection:"column"
}

function App() {

  return (
    <BrowserRouter>
      <div style={content} >
        <div style={{border:"1px solid grey",boxShadow:" 5px 5px 5px 5px #c9c3c3",width:"400px",padding:"5px"}}>
              <Header/>
              <div style={inner_style}>
                <Routes>
                  <Route path="/" element={<Login/>}/>
                  <Route path="/signup" element={<Signup/>}/>
                </Routes>
              </div>
              <Footer/>
          </div>
      </div>

    </BrowserRouter>
  );
}

export default App;
