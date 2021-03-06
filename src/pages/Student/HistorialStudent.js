import React, {useState} from 'react';
import {Layout, Table,Typography} from 'antd';

const { Content } = Layout;
const { Title } = Typography;


const columns = [
    {
        title: 'Materia',
        dataIndex: 'materia',
        key: 'materia',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Código',
        dataIndex: 'code',
        key: 'code',
    },
    {
        title: 'Nivel 1',
        dataIndex: 'level',
        key: 'level',
    },
    {
        title: 'Nivel 2',
        dataIndex: 'level',
        key: 'level',
    },
    {
        title: 'Nivel 3',
        dataIndex: 'level',
        key: 'level',
    },
    {
        title: 'Nivel 4',
        dataIndex: 'level',
        key: 'level',
    },
    {
        title: 'Nivel 5',
        dataIndex: 'level',
        key: 'level',
    },
    {
        title: 'Total',
        dataIndex: 'total',
        key: 'total',
    }
];

const HistorialStudent = () => {

    return (
        <>
            <Layout style={{ padding: '0 24px 24px', background:'white' }}>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,

                    }}
                >
                    <Title className='subtitulos'  style={{
                        textAlign:'center', color:'#8F0002'
                    }}>Historial Acádemico</Title><br/>
                    <Table columns={columns} dataSource={0} />
                </Content>
            </Layout>
            </>

    );
};

export default HistorialStudent;