import React, {useState} from 'react';
import {Typography, Form, Input, Col, Row, Card, Button,} from 'antd';
import {BrowserRouter, Link} from "react-router-dom";
import Exam from "./Exam";

const { TextArea } = Input;
const { Title } = Typography;

const Nivels = () =>{
    const [viewQuestions, setViewQuestions] = useState(false);

    return (
        //NIVELES YA REGISTRADOS DEL CURSO de la api
        <BrowserRouter>
            <br/><br/>
            <Row style={{
                backgroundColor:'#3C526D',
                padding:'20px 20px',
                margin:'0 -25px'
            }}>
                <Col span={24}>
                    <Title level={4} style={{
                        color:'white'
                    }}>Nivel 1<br/></Title>

                    <br/><Input placeholder="Tema" style={{
                    backgroundColor:'#D27070', width:'250px', color:'#8B3838', height:'40px'
                }}/><br/>
                    <br/>
                    <TextArea placeholder="Descripción del nivel" rows={7} />
                    <br/><br/>

                    <Button type='primary'>
                        Guardar Nivel
                    </Button>
                    <br/><br/>
                    <div className="site-card-wrapper">
                        <Row gutter={16}>
                            <Col span={8}>
                                <Card title="NIVEL 1" bordered={false} extra={<a href="#">Editar Nivel</a>}>
                                    Contenido de nivel 1
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="NIVEL 2" bordered={false} extra={<a href="#">Editar Nivel</a>} >
                                    Contenido de nivel 2
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="NIVEL 3" bordered={false} extra={<a href="#">Editar Nivel</a>}>
                                    Contenido de nivel 3
                                </Card>
                            </Col>
                        </Row><br/><br/>
                        <Row gutter={16}>
                            <Col span={8}>
                                <Card title="NIVEL 4" bordered={false} extra={<a href="#">Editar Nivel</a>}>
                                    Contenido de nivel 4
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="NIVEL 5" bordered={false} extra={<a href="#">Editar Nivel</a>}>
                                    Contenido de nivel 5
                                </Card>
                            </Col>
                        </Row>
                    </div><br/><br/>

                    <button style={{
                        backgroundColor:'#D27070', borderRadius:'15px', width:'120px', height:'45px', color:'white'
                    }} onClick={()=>setViewQuestions((prevViewQuestions )=>!prevViewQuestions )}>
                        {
                            viewQuestions
                                ? 'Terminar '
                                :' Crear '
                        } Prueba
                    </button>
                    {
                        viewQuestions && <Exam />
                    }

                </Col>


            </Row>
        </BrowserRouter>
    );
};

export default Nivels;