import React from 'react';
import {Button, Row, Col, Image, Carousel, Form} from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import GooglePlusOutlined from "@ant-design/icons/lib/icons/GooglePlusOutlined";
import PhoneOutlined from "@ant-design/icons/lib/icons/PhoneOutlined";
import {Link} from "react-router-dom";
import Routes from "../constants/routes";


const HomePage = () => {

    const IconFont = createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
    });
  return (
    <>
            <Row className='fondo-inicio1'>
                <Col span={24}>
                    <h1 className='page-title'>
                        CURES
                    </h1>
                </Col>

                <br/>
                <Col span={12} >
                    <h1>Bienvenido a CURES un sistema donde pordrás aprender temas de tu interés a tu ritmo.</h1>
                    <br/>

                    <Button type="primary" shape="round" size={"large"} >
                        <Link to={Routes.REGISTER}>Registro Estudiante</Link>
                    </Button>
                    <br/><br/>
                    <h1 >
                        CURSOS DESTACADOS
                    </h1>

                </Col>
                <Col span={12}>
                    <Image
                        width={600}
                        src="https://cdn.pixabay.com/photo/2015/12/08/00/31/office-1081807_1280.jpg"
                    />
                </Col>
            </Row>

            <Row className='fondo-inicio2'>
                <Col span={12}>
                    <h1 className='subtitulos'>
                        ¿Quiénes Somos?
                    </h1>
                    <br/>
                    <h1>MISIÓN</h1>
                    <p style={{
                        paddingRight:'50px'
                    }}>
                        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.
                    </p>
                    <br/>
                    <h1>VISIÓN</h1>
                    <p style={{
                        paddingRight:'50px'
                    }}>
                        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.
                    </p>
                </Col>
                <Col span={12}>
                    <Image
                        width={600}
                        src="https://cdn.pixabay.com/photo/2013/04/14/17/25/computer-103577_960_720.jpg"
                    />
                </Col>
            </Row>
        <Row className='fondo-inicio3'>
            <Col span={24}>
                <h1 className='subtitulos'>
                    ACERCA DE NOSOTROS
                </h1>
                <br/>
                <Image
                    width={900}

                    src="https://cdn.pixabay.com/photo/2015/05/15/14/38/computer-768608_1280.jpg"
                />
                <br/>

                <h1>NUESTRAS REDES SOCIALES:</h1>
                <Row>
                    <Col span={12} style={{
                        textAlign:'left', paddingLeft:'300px'
                    }}>
                        <Button type="primary" ><IconFont type="icon-facebook" /></Button><label> couses.ec</label><br/><br/>
                        <Button type="primary" ><IconFont type="icon-twitter" /></Button><label> @cures_ec</label><br/><br/>
                        <Button type="primary" ><GooglePlusOutlined /></Button><label> cures_ec@gmail.com</label><br/><br/>
                        <Button type="primary" ><PhoneOutlined /></Button><label> 0987654321</label><br/><br/>
                    </Col>
                    <Col span={12}>

                    </Col>
                </Row>

            </Col>
        </Row>
    </>
  );
};


export default HomePage;
