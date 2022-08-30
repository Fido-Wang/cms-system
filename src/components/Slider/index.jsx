import React, {useState, Fragment, useEffect} from 'react'
import {Link, useNavigate, useLocation } from 'react-router-dom'
import { Dropdown, Menu, Space, message } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

function Slider () {
    const navigate = useNavigate()
    const location = useLocation()


    const [ curPath , setCurPath ] = useState('')

    useEffect(()=> {
        let path = location.pathname
        let key = path.split('/')[1]
        console.log('kye',key)
        setCurPath(key)

    }, [])

    const handleClick = (e) => {
        navigate('/'+ e.key)
        setCurPath(e.key)
    };


    return (
        // <div class='slider-content'></div>
        <Menu
            className='slider-content'
            onClick={handleClick}
            style={{
                width: 256
            }}
            selectedKeys={[curPath]}
            mode="inline"
        >
            <Menu.Item key='list'><AppstoreOutlined/>查看文章列表</Menu.Item>
            <Menu.Item key='edit'><MailOutlined/>文章编辑</Menu.Item>
            <Menu.Item key='means'><SettingOutlined/>修改资料</Menu.Item>
        </Menu>
    )
}

export default Slider