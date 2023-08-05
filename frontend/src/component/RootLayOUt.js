import React from 'react'
import MainNav from './MainNav'
import { Outlet } from 'react-router-dom'

const RootLayOUt = () => {
  return (
    <>
        <MainNav></MainNav>
        <Outlet></Outlet>
    </>
  )
}

export default RootLayOUt