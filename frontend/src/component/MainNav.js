import React from 'react'
import { Link } from 'react-router-dom'

const MainNav = () => {
  return (
    <>
        <Link to ='/student'></Link>
        <Link to='/add-student'>Add new Student</Link>
    </>
  )
}

export default MainNav