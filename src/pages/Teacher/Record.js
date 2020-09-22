import React from 'react';
import {Layout, Table, Typography} from "antd";


const { Title } = Typography;
const { Content } = Layout;

const columns = [
    {
        title: 'Estudiante',
        dataIndex: 'estudiante',
        key: 'estudiante',
        render: text => <a>{text}</a>,
    },
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

const Record = () => {

    return (
        <>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,

                    }}
                >
                    <Title className='subtitulos' level={2} style={{
                        textAlign:'center', color:'#8F0002'
                    }}>Historial</Title><br/>
                    <Table columns={columns} dataSource={0} />
                </Content>
            </Layout>
        </>

    );
};

export default Record;