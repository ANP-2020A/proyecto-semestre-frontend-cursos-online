import React, {useState} from 'react';
import {Layout, Menu, Breadcrumb, Input, Divider, Table, Tag, Space, Typography} from 'antd';
import { UserOutlined, LaptopOutlined, SearchOutlined,CodeOutlined,SafetyCertificateOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";
import Routes from "../../constants/routes";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Search } = Input;
const { Title } = Typography;


const columns = [
    {
        title: 'Materia',
        dataIndex: 'materia',
        key: 'materia',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Código',
        dataIndex: 'code',
        key: 'code',
    },
    {
        title: 'Nivel 1',
        dataIndex: 'level',
        key: 'level',
    },
    {
        title: 'Nivel 2',
        dataIndex: 'level',
        key: 'level',
    },
    {
        title: 'Nivel 3',
        dataIndex: 'level',
        key: 'level',
    },


];

const HistorialStudent = () => {

    return (
        <>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,

                    }}
                >
                    <Title className='subtitulos' level={2} style={{
                        textAlign:'center', color:'#8F0002'
                    }}>Historial Acádemico</Title><br/>
                    <Table columns={columns} dataSource={0} />
                </Content>
            </Layout>
            </>

    );
};

export default HistorialStudent;