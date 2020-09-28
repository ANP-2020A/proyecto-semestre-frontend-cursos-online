import React from 'react';
import { Layout, Menu, Breadcrumb, Divider} from 'antd';
import { Button, Tooltip } from 'antd';
import { Typography } from 'antd';
import { Form, Input, InputNumber } from 'antd';
import {useAuth} from "../../providers/Auth";


const { Header, Content, Sider } = Layout;
const { Search } = Input;
const { Title } = Typography;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const validateMessages = {
    required: '${label} es requerido!',
    types: {
        email: '${label} no es valido!',
        number: '${label} no es valido!',
    },
    number: {
        range: '${label} debe estar entre ${min} y ${max}',
    },
};
const onFinish = values => {
    console.log(values);
};

const Data = () =>{

    const { isAuthenticated, currentUser } = useAuth();

    return (
        <>
            {
                isAuthenticated
                    ? <Layout style={{backgroundColor:'#ffffff'}}>
                        <Layout>

                            <Layout style={{ padding: '0 24px 24px', backgroundColor:'#ffffff' }}>
                                <Content
                                    className="site-layout-background"
                                    style={{
                                        padding: 24,
                                        margin: 0,
                                        minHeight: 280,
                                    }}
                                >
                                    <Title className='subtitulos'  style={{color:'#8F0002', textAlign:'center'}}>DATOS PERSONALES</Title>
                                    <br/>
                                    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                                        <Form.Item name={['user', 'name']} label="Nombre" rules={[{ required: true }]}>
                                            <Input style={{width:'200px'}} placeholder={currentUser.name}/>
                                        </Form.Item>
                                        <Form.Item name={['user', 'lastname']} label="Apellido" rules={[{ required: true }]}>
                                            <Input style={{width:'200px'}} placeholder={currentUser.name}/>
                                        </Form.Item>
                                        <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
                                            <Input style={{width:'200px'}} placeholder={currentUser.email} />
                                        </Form.Item>

                                        <Form.Item name={['user', 'password']} label="Contraseña" rules={[{ required: true, message: 'Por favor introduce tu contraseña!' }]}>
                                            <Input.Password style={{width:'100px'}}/>
                                        </Form.Item>

                                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                                            <Button type="primary" htmlType="submit" danger style={{width:'100px'}}>
                                                Actualizar
                                            </Button>
                                        </Form.Item>
                                    </Form>

                                </Content>

                            </Layout>
                        </Layout>
                    </Layout>
                    : 'cargando'
            }

        </>
    );
};

export default Data;