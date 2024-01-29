import React from 'react'
import PreHeader from './PreHeader/PreHeader'
import NavBar from './NavBar/NavBar'
import { useSelector } from 'react-redux';



const Layout = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <>
    <PreHeader/>
    {auth.isAdmin===true ? null :<NavBar/>}
    </>
  )
}

export default Layout