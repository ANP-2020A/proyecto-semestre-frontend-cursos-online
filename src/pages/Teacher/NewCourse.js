import React, {useState} from 'react';
import {Layout, Menu, Breadcrumb, Row, Col, Image, Typography, Pagination, Input, Button, Divider} from 'antd';
import Nivels from "./Nivels";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const { Title } = Typography;
const { TextArea } = Input;
const linkStyle = {};
const { Search } = Input;

const NewCourse = () =>{

    const [viewNivels, setViewNivels] = useState(false);

    return (
        <>
            <Row style={{paddingLeft:'50px'}}>
                <Col span={24} style={{
                    textAlign:'left'
                }}>
                    <Title className='subtitulos' level={2} style={{
                        color:'#8F0002', textAlign:'center'
                    }}>Nuevo Curso</Title>
                    <Input placeholder="Nombre del curso" style={{
                        backgroundColor:'#8EA3BC', width:'250px', color:'#2B4059', height:'40px'
                    }}/><br/>
                    <br/>
                    <TextArea placeholder="Descripción del curso" rows={7} style={{width: '850px'}} />
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

            <Title level={4} style={{paddingLeft:'50px'}}>Antes de guardar verifique que la informacion de curso, niveles y prueba estan llenos</Title>
            <Button type='danger'  style={{marginLeft:'50px'}}>GUARDAR NUEVO CURSO</Button>

        </>
    );
};
export default NewCourse;

