import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
      <div>
          <Outlet />
      </div>
  )
}

export default MainLayout