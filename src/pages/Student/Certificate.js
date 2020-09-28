import React from 'react';
import  {Layout, Button, Menu, PageHeader , Breadcrumb, Col, Row, Typography} from "antd";

//const {Title} = Typography;
const {Header, Content, Footer} = Layout;
const routes = [
    {
        path: 'index',
        breadcrumbName: 'First-level Menu',
    },
    {
        path: 'first',
        breadcrumbName: 'Second-level Menu',
    },
    {
        path: 'second',
        breadcrumbName: 'Third-level Menu',
    },
];

const Certificate = () => {


    return (
        <>
            <Row>
                <Col span={12}>
                    <Layout className="layout">
                        <Header>
                            <div className="logo"/>
                            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                                <Menu.Item key="1">nav 1</Menu.Item>
                                <Menu.Item key="2">nav 2</Menu.Item>
                                <Menu.Item key="3">nav 3</Menu.Item>
                            </Menu>
                        </Header>
                        <Content style={{padding: '0 50px'}}>
                            <Breadcrumb style={{margin: '16px 0'}}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <div className="site-layout-content">Content</div>
                        </Content>
                        <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Col>
                <Col span={12}>
                    <PageHeader
                        className="site-page-header"
                        title="Title"
                        breadcrumb={{ routes }}
                        subTitle="This is a subtitle"
                    />
                    <button>
                        Botón
                    </button>
                    <br/>
                    <Button style={{background: 'green'}}>
                        Button
                    </Button>
                </Col>
            </Row>
        </>
    );
};

export default Certificate;