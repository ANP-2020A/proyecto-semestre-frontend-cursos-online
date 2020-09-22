import React from 'react';
import {Typography, Form, Input, Button, Checkbox, Row, Col, Card, Select,} from 'antd';
import {BrowserRouter, Link} from "react-router-dom";

const { TextArea } = Input;
const { Title } = Typography;

const Exam = () => {

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    return (
        //PREGUNTAS YA REGISTRADOS DEL NIVEL de la api
        <BrowserRouter>
            <br/><br/>
            <Row style={{
                backgroundColor:'#D27070',
                padding:'20px 20px',
                margin:'0 -25px'
            }}>

            <Col span={24}>
                <Title level={2} style={{textAlign:'center'}}>Prueba de Nivel 1</Title>
                <Title level={4}>Pregunta 1</Title>
                <Input placeholder="Pregunta" style={{
                    backgroundColor:'#3C526D', width:'250px', color:'white', height:'40px'
                }}/><br/>
                <br/>

                <TextArea placeholder="Informacion adicional" rows={2} /><br/><br/>
                <p>Cree las opciones de la pregunta y seleccione la correcta</p>

                        <Input placeholder="Ingrese la respuesta 1" style={{width:'300px'}}/><br/><br/>
                        <Input placeholder="Ingrese la respuesta 2" style={{width:'300px'}}/><br/><br/>
                        <Input placeholder="Ingrese la respuesta 3" style={{width:'300px'}}/><br/><br/>
                        <Input placeholder="Ingrese la respuesta 4" style={{width:'300px'}}/><br/><br/>

                <Title level={5}>Seleccione la respuesta correcta</Title>

                <Select style= {{width:'300px'}} >
                    <Select.Option value="demo1">Respuesta 1</Select.Option>
                    <Select.Option value="demo2">Respuesta 2</Select.Option>
                    <Select.Option value="demo3">Respuesta 3</Select.Option>
                    <Select.Option value="demo4">Respuesta 4</Select.Option>
                </Select>
                <br/><br/>

                <Button type="primary">
                    Guardar Pregunta
                </Button>
                <br/><br/>
                <div className="site-card-wrapper">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card title="Pregunta 1" bordered={false} extra={<a href="#">Editar pregunta</a>}>
                                Contenido de la pregunta 1
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Pregunta 2" bordered={false} extra={<a href="#">Editar pregunta</a>} >
                                Contenido de la pregunta 2
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Pregunta 3" bordered={false} extra={<a href="#">Editar pregunta</a>}>
                                Contenido de la pregunta 3
                            </Card>
                        </Col>
                    </Row><br/><br/>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card title="Pregunta 4" bordered={false} extra={<a href="#">Editar pregunta</a>}>
                                Contenido de la pregunta 4
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Pregunta 5" bordered={false} extra={<a href="#">Editar pregunta</a>}>
                                Contenido de la pregunta 5
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Pregunta 6" bordered={false} extra={<a href="#">Editar pregunta</a>}>
                                Contenido de la pregunta 6
                            </Card>
                        </Col>
                    </Row><br/><br/>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card title="Pregunta 7" bordered={false} extra={<a href="#">Editar pregunta</a>}>
                                Contenido de la pregunta 7
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Pregunta 8" bordered={false} extra={<a href="#">Editar pregunta</a>}>
                                Contenido de la pregunta 8
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Pregunta 9" bordered={false} extra={<a href="#">Editar pregunta</a>}>
                                Contenido de la pregunta 9
                            </Card>
                        </Col>
                    </Row><br/><br/>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card title="Pregunta 10" bordered={false} extra={<a href="#">Editar pregunta</a>}>
                                Contenido de la pregunta 10
                            </Card>
                        </Col>
                    </Row>
                </div><br/><br/>
            </Col>


            </Row>


        </BrowserRouter>
    );
};

export default Exam;