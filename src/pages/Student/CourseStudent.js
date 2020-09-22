import React from 'react';
import {Layout, Menu, Breadcrumb, Input, Divider, Row, Col, Button} from 'antd';
import { Typography } from 'antd';
import { Image, Radio } from 'antd';
import {Link} from "react-router-dom";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Search } = Input;
const { Title } = Typography;

const CourseStudent = (props) => {

    return (
        <>
            <div style={{background:'white'}} >
            <Title className='subtitulos' style={{
                textAlign:'center', color:'#8F0002'
            }}>TITULO DEL CURSO</Title><br/>
            <Layout className="layout" style={{background:'white'}}>
                <Header style={ {
                    background: '#8F0002',
                } } >
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['']} style={ {
                        backgroundColor: '#8F0002',
                    } } >
                        <Menu.Item key="1">
                            <Link to="/Nivels/Nivel1">Nivel 1</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/Nivels/Nivel2">Nivel 2</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/Nivels/Nivel3">Nivel 3</Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to="/Nivels/Nivel4">Nivel 4</Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Link to="/Nivels/Nivel5">Nivel 5</Link>
                        </Menu.Item>
                    </Menu>
                </Header>

                <Content>
                    {props.children}
                </Content>

            </Layout>
            </div>
        </>
    );
};

export default CourseStudent;



