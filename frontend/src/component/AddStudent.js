import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const AddStudent = () => {
    const [ studentName,setStudentName] = useState('');
    const[email,setEmail] = useState('');
    const[phone,setPhone] = useState(null);
    const[gender,setGender] = useState('');
    const[hasError,setHasError] = useState(false);
    const[error,setError] = useState('');
    const submitHandler =(event)=>{
        event.preventDefault();
        axios.post('http://localhost:3000/student',{
        name:studentName,
        email:email,
        phone:phone,
        gender:gender
     }).then(res=>{
        console.log(res);
     })
     .catch(err=>{
        console.log(err.message);
        setHasError(true);
        setError(err.message);
        console.log(error);
     })
    }
  return (
    <>
   { <div>
        <form onSubmit={submitHandler}>
        <input type='text' placeholder='Studentname' onChange={(e)=>setStudentName(e.target.value)}/>
                <br/>
                <input type='text' placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
                <br/>
                <input type='number' placeholder='phone' onChange={(e)=>setPhone(e.target.value)}/>
                <br/>
                <input type='text' placeholder='gender' onChange={(e)=>setGender(e.target.value)}/>
                <button type='submit'>submit</button>
        </form>
    </div>}
     {hasError &&<div>
        <p style={{color:"red"}}>{error}</p>
    </div>}
    </>
  )
}

export default AddStudent;