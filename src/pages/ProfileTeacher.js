import React, {useState} from 'react';
import {Layout, Menu, Breadcrumb, Row, Col, Image, Typography, Pagination, Input, Button, Divider} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {BrowserRouter, Link} from "react-router-dom";
import ProfileOutlined from "@ant-design/icons/lib/icons/ProfileOutlined";
import FileAddOutlined from "@ant-design/icons/lib/icons/FileAddOutlined";
import AuditOutlined from "@ant-design/icons/lib/icons/AuditOutlined";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const { Title } = Typography;
const { TextArea } = Input;
const linkStyle = {};
const { Search } = Input;

const ProfileTeacher = (props) => {

    return (
      <>
          <Layout style={{marginTop:'-50px'}}>
              <Header className="header">
                  <div className="logo" />
                  <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['']} >
                      <Divider orientation="left" >
                          <Title level={3} style={{color:'white'}}>Name Teacher</Title>
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
                          <SubMenu key="sub1" icon={<FileAddOutlined/>} title="Crear curso" style={{color:'white'}}>
                              <Menu.Item key="1">
                                  <Link to="/Teacher/NewCourse">Nuevo Curso</Link>
                              </Menu.Item>
                          </SubMenu>
                          <SubMenu key="sub2" icon={<ProfileOutlined />} title="Mis cursos">
                              <Menu.Item key="2">
                                  <Link to="/Teacher/TeacherCourses">Cursos</Link>
                              </Menu.Item>
                          </SubMenu>
                          <SubMenu key="sub3" icon={<AuditOutlined />} title="Hitorial">
                              <Menu.Item key="3">
                                  <Link  to="/Teacher/Record" >Notas</Link>
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

export default ProfileTeacher;