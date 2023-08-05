import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login=()=>{
    const [ username,setUsername] = useState('');
    const[password,setPassword] = useState('');
    const[hasError,setHasError] = useState(false);
    const[error,setError] = useState('');
    let navigate = useNavigate();
    const submitHandler = (event)=>{
     event.preventDefault();
    //  setLoading
     axios.post('http://localhost:3000/user/login',{
        username:username,
        password:password
     })
     .then(res=>{
        console.log(res.data);
        localStorage.setItem('token',res.data.token)
        setHasError(false);
        navigate('/student');
     })
     .catch(err=>{
        console.log(err);
        // setLoading(false);
        setHasError(true);
        navigate('/login');
        setError(err.response.data.msg);
     })
    }
    return(
       <>
       { <div>
            <h1>Login Account</h1>
            <form onSubmit={submitHandler}>
                <input type='text' placeholder='username' onChange={(e)=>setUsername(e.target.value)}/>
                <br/>
                <input type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
                <br/>
             
                <button type='submit'>Login</button>
            </form>
            </div>}
     {hasError &&<div>
        <p style={{color:"red"}}>{error}</p>
    </div>}
       </>
    )
}
export default Login;