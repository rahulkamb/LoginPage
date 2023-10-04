import React, { useState } from 'react';
import PropTypes from   'prop-types'
import './Login.css';
import './Registration';
import { Route,Routes,BrowserRouter,Navigate} from 'react-router-dom';

async function LoginUser(credentials){
    return fetch('http://localhost:8080/login',{
        method:'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(credentials)        
    })
    .then(data => data.json())
}



export default function Login({setToken}) {
    const [username , setUsername] = useState();
    const [password , setPassword] = useState();
    const [resetAllfiled,setResetAllfiled] = useState(false);
    //console.log(username,password);
    //const navigate = useNavigate();

    if(resetAllfiled){
        console.log(resetAllfiled);
        <Navigate to="/login"/>;
    }
    

    const handleSubmit = async e =>{
       e.preventDefault();
        if((username === null || username === undefined) && (password ===null || password === undefined )){          
        }
        else{
            const token = await LoginUser({
                username,
                password
            });
            //console.log(token); 
            if(password === 'India@123' && username === 'RAHUL.X.KAMBLE'){
                setToken(token);
            }
            else{                
                console.log("empty token");
            }
            
        }
    }

    // const handleReset = () =>{
    //     //e.preventDefault();
    //     // let resetVariable = document.getElementsByClassName("btn-reset");
    //     // resetVariable.value = '';
    //     navigate('/dashboard');
        
    // }


    return (
        <div className="login-wrapper">
            <h1 className='div-welcome'>Welcome Back to YouTube</h1>
            <form className='div-form'>
                <label>
                    {/* <p>Username</p> */}
                    <input type="text" id='user-name' placeholder='Enter Your Username' size={100} onChange={e => setUsername(e.target.value.toUpperCase())}></input>
                    {/* <p>Password</p> */}
                    <br></br><br></br>
                    <input type="password" id='pass-word' placeholder='Enter Your Password' onChange={e=>setPassword(e.target.value)}></input>
                </label>
                <br></br><br></br>
                <div>
                    <button type="submit" className='button-1' onClick={handleSubmit}><b>Login</b></button>                   
                    <button type="submit" className='button-2 btn-reset' onClick={()=>setResetAllfiled(true)}><b>Reset</b></button>
                </div>
                <div className='div-register'>
                    <p className='div-hyperlink'>Don't have an account?<a href='/Registration'> Sign up</a></p>
                </div>
            </form>
        </div>
    )
}

Login.prototype = {
    setToken:PropTypes.func.isRequired
}