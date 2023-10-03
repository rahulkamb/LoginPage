
import React, { Fragment , useState } from "react";
import axios from "axios";

function Registration() {
    
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const handleNameChange = (value) => {
        setName(value);
    }

    const handleUsernameChange = (value) => {
        setEmail(value);
    }

    const handlePasswordChange = (value) => {
        setPassword(value);
    }

    const handleSaveChange = () => {
        const data = {
            Name : name,
            EmailId : email,
            Password : password,
            IsActive : 1
        }
        const url='http://localhost:5278/api/Login/Registration';
        axios.post(url,data).then((result) => {
            //console.log("ok1");
            console.log(result.data);
            if(result.data === "Ok"){
                //console.log("ok2");
                alert("Registred Successfully");
            }
            else{
                alert(result.data);
            }
        }).catch((error) => {
            alert(error);
        })
    }

    return (
        <Fragment>
            <div>Registration Form</div>
            <label>Name</label>
            <input type="text" id="yourname" placeholder="Enter Your Name" onChange={(e) => handleNameChange(e.target.value)} /> <br></br><br></br>
            <label>Email Id</label>
            <input type="text" id="username" placeholder="Enter Your Email" onChange={(e) => handleUsernameChange(e.target.value)} /> <br></br><br></br>
            <label>Password</label>
            <input type="text" id="password" placeholder="Enter Your Password" onChange={(e) => handlePasswordChange(e.target.value)} /> <br></br><br></br>
            <button id="saveButton" onClick={() => handleSaveChange()}>Submit</button>
        </Fragment>
    )
}

export default Registration;