import React from 'react';
import { Layout, Menu, Breadcrumb, Input, Divider} from 'antd';
import { UserOutlined, LaptopOutlined, SearchOutlined,CodeOutlined,SafetyCertificateOutlined} from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import { Typography } from 'antd';

import { List, Card } from 'antd';


const { Header, Content, Sider } = Layout;
const { Search } = Input;
const { Title } = Typography;
const data = [
    {
        title: '1. Descripción de la Pregunta 1',
    },
    {
        title: '2. Descripción de la Pregunta 2',
    },
];
const Exam = () => {
    return (
            <>
                <Layout style={{backgroundColor:'#ffffff'}}>
                    <Layout>

                        <Layout style={{ padding: '0 24px 24px', backgroundColor:'#ffffff' }}>
                            <Content
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}
                            >
                                <Title level={2} style={{color: 'red', textAlign:'center'}}>Prueba nivel #</Title>

                                <List
                                    grid={{ gutter: 16, column: 2 }}
                                    dataSource={data}
                                    renderItem={item => (
                                        <List.Item>
                                            <Card title={item.title}>
                                                Opcion numero 1 <Button shape="circle" >.</Button>
                                                <br/> <br/>
                                                Opcion numero 2 <Button shape="circle">.</Button>
                                                <br/> <br/>
                                                Opcion numero 3 <Button shape="circle">.</Button>
                                                <br/> <br/>
                                                Opcion numero 4 <Button shape="circle">.</Button></Card>

                                            <br/><br/><br/>
                                            <Card title={item.title}>
                                                Opcion numero 1 <Button shape="circle" >.</Button>
                                                <br/> <br/>
                                                Opcion numero 2 <Button shape="circle">.</Button>
                                                <br/> <br/>
                                                Opcion numero 3 <Button shape="circle">.</Button>
                                                <br/> <br/>
                                                Opcion numero 4 <Button shape="circle">.</Button></Card>

                                        </List.Item>
                                    )}

                                />

                            </Content>
                            <center>
                                <Button type="primary" size="middle" style={{width:'100px'}} danger>
                                    Enviar
                                </Button></center>
                        </Layout>
                    </Layout>
                </Layout>
            </>
        );
};

export default Exam;