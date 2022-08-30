import React, { useState,  Fragment } from 'react'
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom' // 子组件占位符
import Header from './components/Header'
import Slider from './components/Slider'
import Bread from './components/Bread'

function App () {
  return (
    <Layout className='app'>
        <Header/>
        <div className='app-middle-content'>
            <div className='slider-content'>
                <Slider/>
            </div>
            <div className='container'>
                <Bread/>
                <div className='container-content'>
                    <Outlet/>
                </div>
            </div>
        </div>
        <footer>Respect | Copyright &copy; 2022 Author 王芬达</footer>
    </Layout>

  )
}

export default App
