import React, { useState,  Fragment } from 'react'
import { Outlet } from 'react-router-dom' // 子组件占位符

function App () {

  return (
      <div>
          app1
          <Outlet/>
      </div>
  )
}

export default App
