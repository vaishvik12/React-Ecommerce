import {useState} from 'react';
import "../../Login.css"

export function Login(){
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className = "login-container">
    <h2>Hello, welcome to my website</h2>
   
    <input placeholder = "Email"
    type = "email" className = 'login-input'/>
    <div className = "password-container">
    <input  placeholder = "Password"
     type = {showPassword ? "text" : "password"} className = 'login-input'/>
     <button
      className = "show-bttn"
      onClick = {() => {
        if(showPassword){
        setShowPassword(false)
      }else{
        setShowPassword(true);
      }
      }}
      >{showPassword ? "Hide" : "Show"}</button>
      </div>
    <button className = "login-bttn">Login</button>
    <button className = "login-bttn">Sign up</button>
    </div>
  )
}



