import React from 'react';
import {Col, Image, Pagination, Row, Typography} from "antd";

const { Title } = Typography;

const TeacherCourses = () => {

    return (
        <>
            <Title className='subtitulos' level={2} style={{
                textAlign:'center', color:'#8F0002'
            }}>CURSOS</Title><br/>
            <Row style={{ textAlign:'center'}}>
                <Col span={12} >
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
        </>
    );
};
export default TeacherCourses;