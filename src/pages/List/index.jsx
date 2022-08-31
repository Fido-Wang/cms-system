import React, { useState, useEffect } from 'react'
import { DeleteFilled, EditFilled, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import './index.less'
import moment from 'moment'
import { Table, Space, Tag, Button, Tooltip } from 'antd';
import { getArticleList } from './api'
import log from "tailwindcss/lib/util/log";
const { Column, ColumnGroup } = Table;

// 表格标题组件
function TableTitle(props) {
    return (
        <div>
            <h2 style={{ color: '#111',}}>{ props.title }</h2>
            <p>{ props.subTitle }</p>
        </div>
    )
}

// 列表组件
function List() {
    // const data = [
        // {
        //     "id": 5696,
        //     "title": "123123",
        //     "subTitle": "13212311234123",
        //     "author": "0000002",
        //     "date": "2022-08-29T10:26:13.000Z"
        // }
    // ]
    const [ tableData, setTableData ] = useState([])
    // const [ total , setTotal ] = useState(0)
    const [pagination, setPagination] = useState({current: 1, pageSize: 5, total: 10})

    // 封装请求列表得函数
    const getTableData = (current, pageSize)=> {
        let paramsData = {
            num: current,
            count: pageSize
        }
        getArticleList(paramsData).then(res=> {
            if(res.errCode ===0) {
                const { count, num, total } = res.data
                setPagination({ current: num, pageSize: count, total: total })
                let titleArr = []
                res.data.arr.forEach(item=> {
                    let obj =  {
                        key: item.id,
                        date: moment(item.date).format('YYYY-MM-DD hh:mm:ss'),
                        author: item.author,
                        tableTitle: <TableTitle title={item.title} subTitle={item.subTitle}/>
                    }
                    titleArr.push(obj)
                })
                setTableData( titleArr )
            }
        })
    }
    // 分页的函数
    const pageChange= (pagination)=> {
        console.log('pagination', pagination.current, pagination.pageSize )
        // 每次分页切换 查询当前的分页数据
        getTableData(pagination.current, pagination.pageSize )
    }
    useEffect(()=> {
        getTableData(pagination.current, pagination.pageSize)
    }, [])
    function deleteArt(id) {
        console.log('删除',id)
    }
    function editArt(id) {
        console.log('编辑',id)
    }
    const columns = [
        {
            title: "标题",
            key: 'tableTitle',
            dataIndex: 'tableTitle'
        },
        {
            title: "作者",
            dataIndex: 'author',
            key: 'author',
        },
        {
            title: "时间",
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: "操作",
            key: '444',
            render: (text) => {
                // console.log('text', text.key )
                return (
                    <Space size="middle">
                        <Button onClick={ ()=> editArt(text.key) } type="primary" shape="circle" icon={<EditOutlined />} />
                        <Button onClick={ ()=> deleteArt(text.key ) } type="danger" shape="circle" icon={<DeleteOutlined />} />
                    </Space>
                )
            }
        },
    ]
    return (
        <Table
            rowKey={ record => record.id }
            columns={ columns }
            dataSource={ tableData }
            onChange={ pageChange }
            pagination={ pagination }
        />
    )
}

export default List