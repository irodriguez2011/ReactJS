import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Success from './components/success'
import Failure from './components/failure'



function Forms() {

  
const [inputUsername, setInputUsername] = useState('')
const [inputPassword, setInputPassword] = useState('')
const [isauthenticated, setIsAuthenticated] = useState(false)
const [login, setLogin] = useState(0)

const password = 'ilikeicecream' 
const username = 'iRodriguez'


function handleInputUsernameChange(e) { 
  setInputUsername(e.target.value)

}

function handlePswdChange(e) {
   setInputPassword(e.target.value)
}



function handleAuthentication(user,pw) {
     if (user === username && pw === password) {
        setIsAuthenticated(true)
        setLogin(1)
     } else  {
        setIsAuthenticated(false)
        setLogin(-1)
     }
      

}



  return (
    <section>
    

<h3>Login Form</h3>
<p>Try to submit the form.</p>

<div class="container">

    <label for="usrname">Username</label>
    <input type="text" id="usrname" name="usrname" value={inputUsername} onChange={handleInputUsernameChange}  required/>
         
    <label for="psw">Password</label>
    <input type="password" id="psw" name="psw" value={inputPassword} onChange={handlePswdChange} required/>
    
    <div className="submitDiv"> 
       <input type="submit" value="Submit" onClick={()=> (handleAuthentication(inputUsername,inputPassword))} />
    </div>
    
          </div>  
            {login === 0 ? '' : login > 0 ?  <Success  username= {inputUsername}/> : <Failure /> }
 
         
    </section>

  );


}



export default Forms;

