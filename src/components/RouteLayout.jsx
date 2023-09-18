import { Outlet } from 'react-router-dom'
import React from 'react'

export default function RouteLayout() {
   
  return (
    <div>


    <main>
    <Outlet />
    </main>
    </div>
  )
}