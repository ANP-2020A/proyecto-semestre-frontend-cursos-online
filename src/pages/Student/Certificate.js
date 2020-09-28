import React from 'react';
import  {Layout, Button, Menu, PageHeader , Breadcrumb, Col, Row, Typography} from "antd";

//const {Title} = Typography;
const {Header, Content, Footer} = Layout;
const routes = [
    {
        path: 'index',
        breadcrumbName: 'First-level Menu',
    },
    {
        path: 'first',
        breadcrumbName: 'Second-level Menu',
    },
    {
        path: 'second',
        breadcrumbName: 'Third-level Menu',
    },
];

const Certificate = () => {


    return (
        <>
            <Row>
                <Col span={24}>
                    <h1 className='subtitulos'>
                        CERTIFICADOS
                    </h1>
                </Col>
            </Row>
        </>
    );
};

export default Certificate;