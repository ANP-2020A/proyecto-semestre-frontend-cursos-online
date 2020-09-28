import React from 'react';
import {Layout, Menu, Breadcrumb, Input, Divider, Typography} from 'antd';
import { UserOutlined, LaptopOutlined, SearchOutlined,CodeOutlined,SafetyCertificateOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";
import NotificationOutlined from "@ant-design/icons/lib/icons/NotificationOutlined";
import ProfileOutlined from "@ant-design/icons/lib/icons/ProfileOutlined";
import AuditOutlined from "@ant-design/icons/lib/icons/AuditOutlined";
import CheckCircleOutlined from "@ant-design/icons/lib/icons/CheckCircleOutlined";
import {useAuth} from "../providers/Auth";


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Search } = Input;
const { Title } = Typography;

const ProfileStudent = (props) => {

    const { isAuthenticated, currentUser } = useAuth();

    return (
        <>
        <Layout style={{marginTop:'-50px'}}>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} >
                    <Divider orientation="left" >
                        <Title level={3} style={{color:'white'}} >Estudiante:<span> </span>
                            {
                                isAuthenticated
                                    ?currentUser.name
                                    :'cargando'
                            }
                        </Title>
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
                        <SubMenu key="sub1" icon={<ProfileOutlined />} title="Cursos" style={{color:'white'}}>
                            <Menu.Item key="1">
                                <Link to="/Student/CourseStudent">Programación</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/Student/CourseStudent">Base de datos</Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to="/Student/CourseStudent">Redes</Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Link to="/Student/CourseStudent">Arquitectura</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<AuditOutlined />} title="Historial">
                        <Menu.Item key="2">
                            <Link to="/Student/HistorialStudent">Curriculum</Link>
                        </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<CheckCircleOutlined />} title="Cursos Completados">
                        <Menu.Item key="3">
                            <Link  to="/Student/Certificate" >Certificados</Link>
                        </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" icon={<UserOutlined />} title="Mi perfil">
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
        </>
    );
};

export default ProfileStudent;

