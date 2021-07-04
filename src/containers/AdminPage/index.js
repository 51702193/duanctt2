import { Carousel } from 'antd';
import React from 'react'
import useFetch from "react-fetch-hook";
import { useParams } from "react-router-dom";

import { List, Avatar, Space } from 'antd';


import './styles.scss';

const ViewDetails = ({ BE_API_DEFAULT_ROUTE }) => {
    let { id } = useParams();
    // const { isLoading, data } = useFetch(`${BE_API_DEFAULT_ROUTE}/tintuc/pagination/${id}`);
    const { isLoading, data } = useFetch(`${BE_API_DEFAULT_ROUTE}/tintuc`);
    if (isLoading) {
        return <>Loading</>;
    }
    if (!data) {
        return <>Currently No Data Or Server Error</>;
    }
    console.log("🚀 ~ file: index.js ~ line 19 ~ ViewDetails ~ data", data)

    const listData = data.map(d => ({
        id: d.id,
        href: `/view-details/${d.id}`,
        title: d.tenduan,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: `Đăng bởi: Admin - ${new Date(d.created_date).toLocaleDateString()}`,
        content: d.mota.substring(0, 500) + "..."
    }))

    const IconText = ({ icon, text }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    );

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
                        <a key="list-view" href={item.href}>view</a>,
                        <a key="list-approve" href={"."} onClick={() => {
                            fetch(`${BE_API_DEFAULT_ROUTE}/tintuc/approve/${item.id}`, {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json',
                                }
                            })
                        }}>approve</a>,
                        <a key="list-reject" href={"."} onClick={() => {
                            fetch(`${BE_API_DEFAULT_ROUTE}/tintuc/reject/${item.id}`, {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json',
                                }
                            })
                        }}>reject</a>
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

export default ViewDetails;