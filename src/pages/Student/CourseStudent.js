import React from 'react';
import {Layout, Menu, Breadcrumb, Input, Divider, Row, Col, Button} from 'antd';
import { Typography } from 'antd';
import { Image, Radio } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Search } = Input;
const { Title } = Typography;

const CourseStudent = () => {

    return (
        <>
            <Title strong style={{color: 'red', textAlign:'center'}}>Introducción a la Programación</Title>
            <Layout>
                <Header style={{ zIndex: 1, width: '100%' }}>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">Nivel 1</Menu.Item>
                        <Menu.Item key="2">Nivel 2</Menu.Item>
                        <Menu.Item key="3">Nivel 3</Menu.Item>
                        <Menu.Item key="4">Nivel 4</Menu.Item>
                        <Menu.Item key="5">Nivel 5</Menu.Item>
                    </Menu>
                </Header>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                    <p style={{texAling:'center'}} >After massive project practice and summaries, Ant Design,
                        a design language for background applications, is refined by Ant
                        UED Team, which aims touniform the user interface specs for internal
                        background projects, lower the unnecessary cost of design differences and
                        implementation and liberate the resources of design and front-end development.</p>
                    <br/>

                    <Image
                        width={200}
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAAAwMDDo6Ojd3d1ISEiWlpby8vKlpaX39/cKCgp9fX3s7OwVFRV6enpxcXFCQkInJycbGxvX19eKioqdnZ2tra3Q0NBkZGS+vr5sbGzExMS3t7cqKio6OjpVVVWGhoY2NjZfX1/OB6OjAAADKklEQVR4nO3c604iQRCG4R4BZ1FR8HxaT/d/kbtrYlyplpQz1Xwlvu9fiN1PYpaiVijlRzdt3pFYuOhady4W7jUX7iNEiBAhQoQIESJE+EXhchbRXmJhH/IzLxMLJyE/8xfCrYZwSAi3G8IhIdxuUmF/Ow85cGNK4dGqm4UcuDGhcHr699HbkBM3pROeHbw+fBhy5IZkwru3x1tv/VXC+/cnXIQc+mki4YenXIac+lka4f6HZ3Q3Icd+kkR43K11F3JuPYXQALvuLOTgagrhxAqDTq4l+S2dWuGi2X+Ga/6lubLE3zFbMJvo1eKuMz2EnG1L8Ir/1mPI4SbZ1PbxSa9dh5y+nm7yPrfE45Dj1xK+e6q8LLaYwpXvgK8tscEULt1iPFpi/BQuFc5nlngfcoX/0u7a+pUlXoXc4T3xNrG3wugpXL0vrU3h05BbvKUWljMrjJ3C5cLaFL6KXBTrheXGEh8CiQmEtRE1cArPIFxfTP0rbgpPISxPlngScpWSRVhOLPEp5C5phA2n8CzCUhlRY6bwNMLybIkhu/A8wvmpJUbswvMIy+TAEgOm8ETC2qI44EaZhLURtRs9hacS1hbFz2N34bmEa3+a+trYP9dIJqxN4SOJ2YS1Kfxl1G3SCcuhJY7ahecT1kbUMbvwhMLyYokj/vwvo7AsLXH4FN5eOORNkCWuBt+mvbA7+HIL+wnzvczCkBAiRIgQIUKECBEi/GoXOy+c9xFNEwtjmiB0hlAXQm8IdSH0hlAXQm8IdSH0hlAXQm8IdSH0hlAXQm8IdSH0hlAXQm8IdSH0hlAXQm8ITZXvzRmQ4xMUMmHlAx8DcnxrKUKECBEiRIgQIUKEG6p8V86AHN8gJBPOY0os3FoIvSHUhdAbQl0IvSHUhdAbQl0IvSHUhdAbQl0IvSHUxb60mXD3d94IESJEiBAhQoQIv4Nw9yfvrYXQG0JdCL0h1IXQG0JdCL0h1IXQG0JdCL0h1IXQG0JdCL0h1IXQG0JdCL0h1IXQG0JdbYR94A3H1jcRLmd5WjYR5g0hwvwhRJg/hAjzh/AnCxfqqztbDBZOv0uDhTvRH/c/Us0OnNXiAAAAAElFTkSuQmCC"
                    />
                    <Image
                        width={200}
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAAAwMDDo6Ojd3d1ISEiWlpby8vKlpaX39/cKCgp9fX3s7OwVFRV6enpxcXFCQkInJycbGxvX19eKioqdnZ2tra3Q0NBkZGS+vr5sbGzExMS3t7cqKio6OjpVVVWGhoY2NjZfX1/OB6OjAAADKklEQVR4nO3c604iQRCG4R4BZ1FR8HxaT/d/kbtrYlyplpQz1Xwlvu9fiN1PYpaiVijlRzdt3pFYuOhady4W7jUX7iNEiBAhQoQIESJE+EXhchbRXmJhH/IzLxMLJyE/8xfCrYZwSAi3G8IhIdxuUmF/Ow85cGNK4dGqm4UcuDGhcHr699HbkBM3pROeHbw+fBhy5IZkwru3x1tv/VXC+/cnXIQc+mki4YenXIac+lka4f6HZ3Q3Icd+kkR43K11F3JuPYXQALvuLOTgagrhxAqDTq4l+S2dWuGi2X+Ga/6lubLE3zFbMJvo1eKuMz2EnG1L8Ir/1mPI4SbZ1PbxSa9dh5y+nm7yPrfE45Dj1xK+e6q8LLaYwpXvgK8tscEULt1iPFpi/BQuFc5nlngfcoX/0u7a+pUlXoXc4T3xNrG3wugpXL0vrU3h05BbvKUWljMrjJ3C5cLaFL6KXBTrheXGEh8CiQmEtRE1cArPIFxfTP0rbgpPISxPlngScpWSRVhOLPEp5C5phA2n8CzCUhlRY6bwNMLybIkhu/A8wvmpJUbswvMIy+TAEgOm8ETC2qI44EaZhLURtRs9hacS1hbFz2N34bmEa3+a+trYP9dIJqxN4SOJ2YS1Kfxl1G3SCcuhJY7ahecT1kbUMbvwhMLyYokj/vwvo7AsLXH4FN5eOORNkCWuBt+mvbA7+HIL+wnzvczCkBAiRIgQIUKECBEi/GoXOy+c9xFNEwtjmiB0hlAXQm8IdSH0hlAXQm8IdSH0hlAXQm8IdSH0hlAXQm8IdSH0hlAXQm8IdSH0hlAXQm8ITZXvzRmQ4xMUMmHlAx8DcnxrKUKECBEiRIgQIUKEG6p8V86AHN8gJBPOY0os3FoIvSHUhdAbQl0IvSHUhdAbQl0IvSHUhdAbQl0IvSHUxb60mXD3d94IESJEiBAhQoQIv4Nw9yfvrYXQG0JdCL0h1IXQG0JdCL0h1IXQG0JdCL0h1IXQG0JdCL0h1IXQG0JdCL0h1IXQG0JdbYR94A3H1jcRLmd5WjYR5g0hwvwhRJg/hAjzh/AnCxfqqztbDBZOv0uDhTvRH/c/Us0OnNXiAAAAAElFTkSuQmCC"
                    />
                </Content>
            </Layout>

            <Row >
                <Col span={24} style={{textAlign:'center'}}>
                    <Button type="primary" danger>
                        PRUEBA
                    </Button>
                </Col>
            </Row>



        </>
    );
};

export default CourseStudent;



