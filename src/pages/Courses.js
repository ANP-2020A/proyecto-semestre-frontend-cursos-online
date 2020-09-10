import React from 'react';
import {Layout, Menu, Breadcrumb, Image} from 'antd';
import Programing from "./Courses/Programing";
import {BrowserRouter, Link} from "react-router-dom";
import {Switch,Router, Route} from "react-router";
import DataBase from "./Courses/DataBase";
import Security from "./Courses/Security";
import Network from "./Courses/Network";
import System from "./Courses/System";
import Algorithm from "./Courses/Algorithm";
import Architecture from "./Courses/Architecture";
const { Header, Content, Footer } = Layout;

const Courses = () => {
  return (
      <BrowserRouter>
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

          <Switch>
            <Route path="/Courses/programing">
              <Programing/>
            </Route>
            <Route path="/Courses/database">
              <DataBase/>
            </Route>
            <Route path="/Courses/security">
              <Security/>
            </Route>
            <Route path="/Courses/network">
              <Network/>
            </Route>
            <Route path="/Courses/system">
              <System/>
            </Route>
            <Route path="/Courses/algorithm">
              <Algorithm/>
            </Route>
            <Route path="/Courses/architecture">
              <Architecture/>
            </Route>

          </Switch>

          <Content>

            <Image
                width={1266}
                src="https://cdn.pixabay.com/photo/2018/03/08/05/07/training-3207841_1280.jpg"

            />
          </Content>

          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </BrowserRouter>

  )
};

export default Courses;
