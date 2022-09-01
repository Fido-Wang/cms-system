import {Avatar, Button, List, message, Space, Table, Pagination } from 'antd';
import './index.less'
import React, { useEffect, useState } from 'react';
import {getArticleList} from "../List/api";
import moment from "moment";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";


export default function List2() {
    const [ listData, setListData ] = useState([])
    const [ pagination, setPagination ] = useState({current: 1, pageSize: 5, total: 10})

    // 封装请求列表得函数
    const getTableData = (current, pageSize)=> {
        let paramsData = {
            num: current,
            count: pageSize
        }
        getArticleList(paramsData).then(res=> {
            if(res.errCode === 0) {
                const { count, num, total,arr } = res.data
                setPagination({ current: num, pageSize: count, total: total })
                arr.map(item=> {
                    item.date = moment(item.date).format('YYYY-MM-DD hh:mm:ss')
                })
                setListData(arr)

            }
        })
    }
    // 切换分页
    const onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize);
        getTableData(current, pageSize )
    };
    // 切换分页
    const deleteArt = (id)=> {
        console.log('id',id)
    }
    // 切换分页
    const editArt = (id)=> {
        console.log('id',id)
    }



    useEffect(() => {
        getTableData(pagination.current, pagination.pageSize)
    }, []);


    return (
        <>
            <List
                itemLayout="vertical"
                dataSource={listData}
                renderItem={(item) => (
                    <List.Item actions={[

                    ]}
                    >
                        <List.Item.Meta
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description={ item.subTitle }
                        />
                        <List.Item.Meta
                            title={<a href="https://ant.design">{item.author}</a>}
                        />
                        <List.Item.Meta
                            title={<a href="https://ant.design">{item.date}</a>}
                        />
                        <Space size="middle">
                            <Button onClick={ ()=> editArt(item.id) } type="primary" shape="circle" icon={<EditOutlined />} />
                            <Button onClick={ ()=> deleteArt(item.id) } type="danger" shape="circle" icon={<DeleteOutlined />} />
                        </Space>
                    </List.Item>

                )}
            />
            <Pagination
                style={{ float: 'right', margin: '18px' }}
                onChange={ onShowSizeChange }
                pageSize={ pagination.pageSize }
                current={pagination.current}
                total={pagination.total}
                pageSizeOptions={ [5,10,15,20]}
            />
        </>

    )
}