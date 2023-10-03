import React, { Fragment , useState } from "react";

function login() {

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const handleUsernameChange = (value) => {
        setEmail(value);
    }

    const handlePasswordChange = (value) => {
        setPassword(value);
    }

    const handleLoginChange = () => {
       const data = {
        
       }
    }



    return (

        <Fragment>
            <div>Registration Form</div>
            <label>Username</label>
            <input type="text" id="yourname" placeholder="Enter Email Id" onChange={(e) => handleUsernameChange(e.target.value)} /> <br></br><br></br>
            <label>Password</label>
            <input type="text" id="password" placeholder="Enter Your Password" onChange={(e) => handlePasswordChange(e.target.value)} /> <br></br><br></br>
            <button id="saveButton" onClick={() => handleLoginChange()}>Login</button>        
        </Fragment>
        
            
    )
}

export default login;