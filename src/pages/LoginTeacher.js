import React from 'react';
import {Button, Checkbox, Col, Form, Input, message, Row, Typography} from "antd";
import {EditOutlined, FileTextOutlined, MailOutlined, UserOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import Routes from "../constants/routes";
import {useAuth} from "../providers/Auth";
import API from "../data";
import Cookies from "js-cookie";
import ErrorList from "../components/ErrorList";
import {translateMessage} from "../utils/translateMessage";
import {EyeInvisibleOutlined, EyeTwoTone, LockOutlined} from "@ant-design/icons/lib";

const { Title } = Typography;

const LoginTeacher = () => {

    const { setAuthenticated, setCurrentUser } = useAuth();

    const onFinish = async( userData ) => {
        console.log( 'Received values of form: ', userData );
        const { name, email, editorial, short_bio } = userData;

        try {
            const user = await API.post( '/register', {
                name,
                email,
                editorial,
                short_bio
            } );

            console.log( 'User', user );

            localStorage.setItem( 'login', JSON.stringify( true ) ); // this is to sync auth state in local storage
            Cookies.set( 'token', user.data.token, { expires: 1 } );
            API.headers[ 'Authorization' ] = 'Bearer ' + user.data.token; // start sending authorization header
            delete user.data.token;
            setCurrentUser( user.data );
            setAuthenticated( true );
        } catch( e ) {
            console.error( 'No se pudo registrar el usuario', e );
            setAuthenticated( false );
            const errorList = e.error && <ErrorList errors={ e.error } />;
            message.error( <>{ translateMessage( e.message ) }{ errorList }</> );
        }
    };

    return(
        <>
            <Row>
                <Col span={12}>
                    <Title className= 'subtitulos' style={ { textAlign: 'center' } }>¿Quiéres formar parte de CURES?</Title>
                    <h1> Si quieres ser parte de nuestro equipo y quieres compartir
                        tus conocimientos, esta es tu oportunidad, llena este formulario
                        y envíalo para agregarte a nuestro equipo.</h1>
                    <Row justify='center' className='login'>
                        <Col span={ 8 }>
                            <Form name='register-form'
                                  className='register-form'
                                  initialValues={ {
                                      email: '',
                                      password: ''
                                  } }
                                  onFinish={ onFinish }
                            >
                                <Form.Item name='name'
                                           rules={ [
                                               {
                                                   required: true,
                                                   message: 'Ingresa tu nombre'
                                               }
                                           ] }
                                           hasFeedback
                                >
                                    <Input prefix={ <UserOutlined /> } placeholder='Nombre' />
                                </Form.Item>

                                <Form.Item name='email'
                                           rules={ [
                                               {
                                                   required: true,
                                                   message: 'Ingresa tu nombre de usuario'
                                               },
                                               {
                                                   type: 'email',
                                                   message: 'Ingresa un correo válido'
                                               }
                                           ] }
                                           hasFeedback
                                >
                                    <Input prefix={ <MailOutlined /> } placeholder='Email' />
                                </Form.Item>

                                <Form.Item name='editorial'
                                           rules={ [
                                               {
                                                   required: true,
                                                   message: 'Ingresa tu número de celular'
                                               }
                                           ] }
                                           hasFeedback
                                >
                                    <Input prefix={ <EditOutlined /> } placeholder='Teléfono' />
                                </Form.Item>

                                <Form.Item name='short_bio'
                                           rules={ [
                                               {
                                                   required: true,
                                                   message: 'Cuéntanos un poco sobre de que trata tu curso'
                                               }
                                           ] }
                                           hasFeedback
                                >
                                    <Input.TextArea prefix={ <FileTextOutlined /> }
                                                    placeholder='Breve descripción del curso'
                                                    autoSize={ {
                                                        minRows: 2,
                                                        maxRows: 6
                                                    } } />
                                </Form.Item>

                                <Form.Item>
                                    <Button type='primary' htmlType='submit' className='login-form-button'>
                                        Enviar Información
                                    </Button>
                                    <div><Link to={ Routes.LOGIN }>Soy estudiante</Link></div>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
                </Col>
                <Col span={2}>

                </Col>
                <Col span={9} style={{
                    paddingLeft:'50',
                    marginLeft: '50'
                }}>
                    <Title className= 'subtitulos' style={ { textAlign: 'center' } }>¿Ya eres parte de CURES?</Title>
                    <Form
                        name='login-form'
                        className='login-form'
                        initialValues={ {
                            remember: true,
                            username: '',
                            password: ''
                        } }
                        onFinish={ onFinish }
                    >
                        <Form.Item
                            name='username'
                            rules={ [
                                {
                                    required: true,
                                    message: 'Ingresa tu nombre de usuario'
                                },
                                {
                                    type: 'email',
                                    message: 'Ingresa un correo válido'
                                }
                            ] }
                        >
                            <Input prefix={ <UserOutlined className='site-form-item-icon' /> }
                                   placeholder='Email'
                                   autoComplete='email' />
                        </Form.Item>

                        <Form.Item
                            name='password'
                            rules={ [
                                {
                                    required: true,
                                    message: 'Ingresa tu clave'
                                }
                            ] }
                        >
                            <Input.Password
                                prefix={ <LockOutlined className='site-form-item-icon' /> }
                                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                placeholder='Password' autoComplete='password'
                            />
                        </Form.Item>

                        <Form.Item name='remember' valuePropName='checked' noStyle>
                            <Checkbox>Recordarme</Checkbox>
                        </Form.Item>

                        <Form.Item>
                            <Link className='login-form-forgot' to=''>
                                ¡Olvidé mi clave!
                            </Link>
                        </Form.Item>

                        <Form.Item>
                            <Button type='primary' htmlType='submit' className='login-form-button'>
                                <Link to={ Routes.PROFILETEACHER }>Ingresar</Link>
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>
    )
};

export default LoginTeacher;