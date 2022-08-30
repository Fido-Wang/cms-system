import React, {useState, Fragment, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space, message } from 'antd';
import {
    CaretDownOutlined
} from '@ant-design/icons';
function Header () {
    const navigate = useNavigate()

    const [ avatar, setAvatar] = useState('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202107%2F17%2F20210717232533_2edcf.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663861855&t=0e627b6396f9a616995399a2cab9bc63')
    const [ userName , setUserName ] = useState('用户名')

    // 退出登录
    const logout = ()=> {

        localStorage.clear()
        message.success('正在退出， 即将返回登录页')
        setTimeout(()=> {
            navigate('/login')
        }, 1500)
    }

    useEffect(()=> {
        let newAvatar = localStorage.getItem('avatar')
        let newUserName = localStorage.getItem('username')
        setAvatar( newAvatar?('http://47.93.114.103:6688/manage' + newAvatar) :avatar)
        setUserName(newUserName=='undefined'? '王芬达': newUserName)
    }, [])

    const menu = (
        <Menu>
            <Menu.Item className="Item">修改资料</Menu.Item>
            <Menu.Divider></Menu.Divider>
            <Menu.Item onClick={ logout } className="Item">退出登录</Menu.Item>
        </Menu>
    );

    return (
        <header>
            <div className='header-left'>
                <div className='header-left-logo'>
                    <img className='header-logo' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt=""/>
                </div>
                <span className='header-left-title'>React 实战项目</span>
            </div>
            <div className='header-right'>
                <div className='header-right-avatar'>
                    <img className='header-logo' src={ avatar } alt=""/>
                </div>
                <div className='header-right-username'>
                    <Dropdown overlay={menu}>
                        <a onClick={(e) => e.preventDefault()}>
                            { userName }
                            <DownOutlined />
                        </a>
                    </Dropdown>
                </div>
            </div>
        </header>
    )
}

export default Header