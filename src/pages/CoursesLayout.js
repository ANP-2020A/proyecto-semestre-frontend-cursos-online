import React from 'react';
import {Layout, Menu, Breadcrumb, Image, Typography} from 'antd';
import Programing from "./Courses/Programing";
import {BrowserRouter, Link} from "react-router-dom";
const { Header, Content, Footer } = Layout;

const { Title } = Typography;

const CoursesLayout = (props) => {
  return (
      <>
        <h1 style={{
          textAlign: 'center',
          fontSize: 30,
        }}>ESCOJA LA CATEGORÍA EN EL SIGUIENTE MENÚ</h1>
        <Layout className="layout" >
          <Header style={ {
            background: '#1C334F',
          } } >
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['']} style={ {
              backgroundColor: '#1C334F',
            } } >
              <Menu.Item key="1">
                <Link to="/Courses/programing">Programación</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/Courses/database">Base de datos</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/Courses/security">Seguridad</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/Courses/network">Redes</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/Courses/system">Sistemas Operativos</Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/Courses/algorithm">Algoritmos</Link>
              </Menu.Item>
              <Menu.Item key="7">
                <Link to="/Courses/architecture">Arquitectura</Link>
              </Menu.Item>
            </Menu>
          </Header>

          <Content>
            {props.children}
          </Content>

          <Footer style={{ textAlign: 'center' }}>CURES ©2020 Created by CURES</Footer>
        </Layout>
      </>

  )
};

export default CoursesLayout;
