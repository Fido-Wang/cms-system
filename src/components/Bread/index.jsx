import React,{ useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Breadcrumb } from 'antd';

function Bread(props) {
    const { pathname } = useLocation()
    const [ breadName , setBreadName ] = useState('')
    // 不是在mounted时去获取路径 而是路径变化时 就要获取对应得路径名称 并且修改breadname
    // 监听路径得更改 (/list /edit /means)
    useEffect(()=> {
        console.log('effect111')
        switch (pathname) {
            case '/list':
                setBreadName('查看文章列表');
                break
            case '/edit':
                setBreadName('文章编辑');
                break
            case '/means':
                setBreadName('修改资料');
                break
        }
    }, [pathname])
    return (
        <Breadcrumb>
            <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href={ pathname }>{ breadName }</a>
            </Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default Bread