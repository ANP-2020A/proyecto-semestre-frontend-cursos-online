import React from 'react';
import {Button, Col, Row, Typography} from 'antd';
import {Link} from "react-router-dom";

const { Title } = Typography;

const Nivel2 = () =>{
    return (
        <>
            <br/>
            <Title style={{textAlign:'center'}}>Nivel 2</Title>
            <Row >
                <Col span={24} style={{textAlign:'center', height:'300px'}}>
                    <Title>Contenido de Nivel 2</Title>
                </Col>
            </Row>

            <Row >
                <Col span={24} style={{textAlign:'center'}}>
                    <Button type="primary" danger>
                        <Link  to="/Nivels/Exam" >PRUEBA</Link>
                    </Button>
                </Col>
            </Row>
        </>
    );
};
export default Nivel2;