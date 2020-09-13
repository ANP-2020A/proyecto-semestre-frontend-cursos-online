import React from 'react';
import {Layout, Menu, Breadcrumb, Input, Divider, Typography} from 'antd';
import { UserOutlined, LaptopOutlined, SearchOutlined,CodeOutlined,SafetyCertificateOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";
import NotificationOutlined from "@ant-design/icons/lib/icons/NotificationOutlined";


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Search } = Input;
const { Title } = Typography;

const ProfileStudent = (props) => {
    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} >
                    <Divider orientation="right" theme="Dark">
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} >
                            <Menu.Item key="2">Name Student</Menu.Item>
                            <Search
                                placeholder="Buscar"
                                onSearch={value => console.log(value)}
                                style={{ width: 200 }}
                            />

                        </Menu>
                    </Divider>
                </Menu>

            </Header>

            <Layout className="layout" >
                <Sider width={250} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['']}
                        defaultOpenKeys={['']}
                        style={{ height: '100%', borderRight: 0, color:'white' }}
                    >
                        <SubMenu key="sub1" icon={<NotificationOutlined />} title="Cursos" style={{color:'white'}}>
                            <Menu.Item key="1">
                                <Link to="/Student/CourseStudent">Programación</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<NotificationOutlined />} title="Historial">
                        <Menu.Item key="2">
                            <Link to="/Student/HistorialStudent">Curriculum</Link>
                        </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<NotificationOutlined />} title="Cursos Completados">
                        <Menu.Item key="3">
                            <Link  to="/Student/Certificate" >Certificados</Link>
                        </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" icon={<NotificationOutlined />} title="Mi perfil">
                        <Menu.Item key="4">
                            <Link to="/Student/Data">Datos Personales</Link>
                        </Menu.Item>
                        </SubMenu>

                    </Menu>

                </Sider>

                <Content>
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default ProfileStudent;

