import React, {useState} from 'react';
import {Layout, Menu, Breadcrumb, Row, Col, Image, Typography, Pagination, Input, Button} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import ReconciliationOutlined from "@ant-design/icons/lib/icons/ReconciliationOutlined";
import Nivels from "./Nivels";
import {BrowserRouter, Link} from "react-router-dom";
import Routes from "../constants/routes";
import Exam from "./Exam";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const { Title } = Typography;
const { TextArea } = Input;
const linkStyle = {};

const ProfileTeacher = () => {

    const [viewNivels, setViewNivels] = useState(false);
    return (
      <>
          <Row >
              <Col span={24} style={{
                  paddingLeft:'50px',
                  marginTop:'-40px',
                  paddingTop:'-40px',
                  textAlign:'center',

              }}>

          <Layout className='fondo-inicio2'>
              <Header className="header" >
                  <div className="logo" />
                  <Title>JUAN LÓPEZ</Title>
              </Header>
              <Content style={{ padding: '0 50px' }}>
                  <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                      <Sider className="site-layout-background" width={220}>
                          <Menu
                              mode="inline"
                              defaultSelectedKeys={['1']}
                              defaultOpenKeys={['sub1']}
                              style={{ height: '100%',
                              color:'white'}}
                          >
                              <SubMenu key="sub1" icon={<UserOutlined />} title="Datos Personales">
                                  <Menu.Item key="1">option1</Menu.Item>
                                  <Menu.Item key="2">option2</Menu.Item>
                              </SubMenu>
                              <SubMenu key="sub2" icon={<LaptopOutlined />} title="Mis cursos">
                                  <Menu.Item key="3">Programación</Menu.Item>
                                  <Menu.Item key="4">Redes</Menu.Item>
                                  <Menu.Item key="5">Seguridad</Menu.Item>
                              </SubMenu>
                              <SubMenu key="sub3" icon={<ReconciliationOutlined />} title="Historial">
                                  <Menu.Item key="6">Programación</Menu.Item>
                                  <Menu.Item key="7">Redes</Menu.Item>
                                  <Menu.Item key="8">Seguridad</Menu.Item>
                              </SubMenu>
                          </Menu>
                      </Sider>
                      <Content style={{ padding: '0 24px', minHeight: 280 }}>
                          <Row>
                              <Col span={12}>
                                  <Title>Redes</Title>
                                  <Title level={3}>Redes de computadores I</Title>
                                  <Image
                                      width={300}
                                      src="https://cdn.pixabay.com/photo/2015/12/08/00/31/office-1081807_1280.jpg"
                                  />
                              </Col>
                              <Col span={12}>
                                  <Title>Programación</Title>
                                  <Title level={3}>Pyhton Básico</Title>
                                  <Image
                                      width={300}
                                      src="https://cdn.pixabay.com/photo/2015/12/08/00/31/office-1081807_1280.jpg"
                                  />
                              </Col>
                          </Row>
                          <br/>
                          <Row>
                              <Col span={24} style={{
                                  textAlign:'center'
                              }}>
                                  <Pagination defaultCurrent={1} total={50}/>
                              </Col>

                          </Row>
                            <br/><br/>

                          <Row>
                                <Col span={24} style={{
                                    textAlign:'left'
                                }}>
                                    <Title level={2} style={{
                                        color:'#8F0002'
                                    }}>Nuevo Curso</Title>
                                    <Input placeholder="Nombre del curso" style={{
                                        backgroundColor:'#8EA3BC', width:'250px', color:'#2B4059', height:'40px'
                                    }}/><br/>
                                    <br/>
                                    <TextArea placeholder="Descripción del curso" rows={7} />
                                    <br/><br/>
                                    <button style={{
                                        backgroundColor:'#3C526D', borderRadius:'15px', width:'120px', height:'45px', color:'white'
                                    }} onClick={()=>setViewNivels((prevViewNivels )=>!prevViewNivels )}>
                                        {
                                            viewNivels
                                            ? 'Cerrar'
                                                :'Crear'
                                        } niveles
                                    </button>
                                    {
                                        viewNivels && <Nivels />
                                    }

                                    <br/><br/>



                                </Col>

                          </Row>
                          <br/>
                          <Title level={4}>Antes de guardar verifique que la informacion de curso, niveles y prueba estan llenos</Title>
                          <Button type='danger'>GUARDAR NUEVO CURSO</Button>

                      </Content>
                  </Layout>
              </Content>
              <Footer style={{ textAlign: 'center' }}>CURES ©2020 Created by CURES</Footer>
          </Layout>
              </Col>
          </Row>
      </>
    );

};

export default ProfileTeacher;