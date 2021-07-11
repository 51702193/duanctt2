import { Button } from 'antd';
import React from 'react'
import useFetch from "react-fetch-hook";
import { useParams } from "react-router-dom";

import { useSelector } from 'react-redux'

import { getUserOauth2 } from 'redux/selectors'

import { List, Avatar, Space } from 'antd';

import './styles.scss';

const AdminPage = ({ BE_API_DEFAULT_ROUTE }) => {
    //let { id } = useParams();
    // const { isLoading, data } = useFetch(`${BE_API_DEFAULT_ROUTE}/tintuc/pagination/${id}`);
    const { isLoading, data } = useFetch(`${BE_API_DEFAULT_ROUTE}/tintuc/admin`);

    //const user = useSelector(getUserOauth2)
    // if (user.ct.Mt !== "vistakeldeo@gmail.com") {
    //     return <>Access Denied</>;
    // }

    if (isLoading) {
        return <>Loading</>;
    }
    if (!data) {
        return <>Currently No Data Or Server Error</>;
    }

    const listData = data.map(d => ({
        id: d.id,
        href: `/view-details/${d.id}`,
        title: d.tenduan,
        type: d.type,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: `Đăng bởi: ${d.accountEmail} - ${new Date(d.created_date).toLocaleDateString()}`,
        content: d.mota.length > 500 ? d.mota.substring(0, 500) + "..." : d.mota
    }))

    return (
        <List
            itemLayout="horizontal"
            size="large"
            pagination={{
                pageSize: 5,
            }}
            dataSource={listData}
            renderItem={item => (
                <List.Item
                    key={item.id}
                    actions={[
                        <Button key="list-view" href={item.href}>view</Button>,
                        <Button key="list-approve" disabled={item.type === 1} href={item.href} onClick={() => {
                            fetch(`${BE_API_DEFAULT_ROUTE}/tintuc/approve/${item.id}`, {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json',
                                }
                            })
                        }}>approve</Button>,
                        <Button key="list-reject" disabled={item.type === -1} href={item.href} onClick={() => {
                            fetch(`${BE_API_DEFAULT_ROUTE}/tintuc/reject/${item.id}`, {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json',
                                }
                            })
                        }}>reject</Button>
                    ]}
                >
                    <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={<a href={item.href}>{item.title}</a>}
                        description={item.description}
                    />
                    {item.content}
                </List.Item>
            )}
        />

    );
}

export default AdminPage;