import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Student =()=>{
    const [studentList,setStudentList]= useState([]);
    const[hasError,setHasError] = useState(false);
    const[error,setError] = useState('');
    useEffect(()=>{
        axios.get('http://localhost:3000/student',{
            headers:{
                Authorization:'Bearer '+localStorage.getItem('token')
            }})
        .then(res=>{
            setHasError(false)
         console.log(res.data.studentData);
         setStudentList(res.data.studentData);
        })
        .catch(err=>{
            console.log(err.response.data.message);
            setHasError(true);
            setError(err.response.data.message);
        })
   
},[]);

  return (
    <>
  {  <div>
        <h1>StudentList</h1>
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
               {studentList?.map(data=><Row key={data._id} detail={data}/>)}
            </tbody>
        </table>
    </div>}
     {hasError &&<div>
        <p style={{color:"red"}}>Error : {error}</p>
    </div>}
    </>
  )
}
const Row =(props)=>{
    return<tr>
        <td>{props.detail.name}</td>
        <td>{props.detail.email}</td>
        <td>{props.detail.phone}</td>
        <td>{props.detail.gender}</td>
    </tr>
}
export default Student;
