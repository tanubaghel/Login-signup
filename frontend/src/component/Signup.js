import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup=()=>{
    const [ username,setUsername] = useState('');
    const[password,setPassword] = useState('');
    const[email,setEmail] = useState('');
    const[phone,setPhone] = useState(null);
    const[hasError,setHasError] = useState(false);
    const[error,setError] = useState('');
    let navigate = useNavigate();
    const submitHandler = (event)=>{
     event.preventDefault();
    //  setLoading
     axios.post('http://localhost:3000/user/signup',{
        username:username,
        password:password,
        email:email,
        phone:phone
     })
     .then(res=>{
        console.log(res.data);
        setHasError(false);
        navigate('/login');
     })
     .catch(err=>{
        console.log(err);
        // setLoading(false);
        setHasError(true);
        setError(err.message);
     })
    }
    return(
       <>
        <div>
            <h1>Create Account</h1>
            <form onSubmit={submitHandler}>
                <input type='text' placeholder='username' onChange={(e)=>setUsername(e.target.value)}/>
                <br/>
                <input type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
                <br/>
                <input type='text' placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
                <br/>
                <input type='number' placeholder='phone' onChange={(e)=>setPhone(e.target.value)}/>
                <br/>
                <button type='submit'>Create Account</button>
            </form>
        </div>
       </>
    )
}
export default Signup;