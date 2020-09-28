import React, {useEffect, useState} from 'react';
import {Skeleton, Card, Col, Row, Radio, Typography, Button} from 'antd';
import Routes from '../constants/routes';
import {Link} from 'react-router-dom';
import {useCourseList} from '../data/useCourseList';
import ShowError from './ShowError';

const {Text} = Typography;

const CourseList = (props) => {

        const {courses, isLoading, isError, mutate} = useCourseList();
        // const [ articles, setArticles ] = useState( props.articles );

        // useEffect( () => {
        //   console.log( 'props.articles', props.articles );
        //   setArticles( props.articles );
        // }, [ props.articles ] );

        const handleChangeCategory = (e) => {
            // setArticles( props.articles.filter( ( article ) => e.target.value === 'all' || article.category_data.id ===
            // e.target.value ) );
        };

        if (isLoading) {
            return <Row justify='center' gutter={30}>
                {
                    [...new Array(9)].map((_, i) =>
                        <Col xs={24} sm={12} md={8} style={{marginBottom: 30}} key={i}>
                            <div style={{textAlign: 'center'}}>
                                <Skeleton.Image style={{width: 200}}/>
                                <Card title='' loading/>
                            </div>
                        </Col>
                    )
                }
            </Row>;
        }

        if (isError) {
            return <ShowError error={isError}/>;
        }

        return (
            <>
                <Row justify='center' gutter={30}>

                    {
                        courses.map((course, i) => (
                            <Col xs={24} sm={12} md={8} style={{marginBottom: 30}} key={i}>
                                {
                                    course.name
                                    ? <Card
                                        title={course.name}
                                        cover={
                                            <img alt={course.name}
                                                 src={`${course.image}`}/>}
                                    >

                                        <Text type='secondary'>Creado: {course.created_at}</Text>
                                        <p><h3>Descripcion del curso: </h3> {course.description} </p>
                                        <p><h3>Categoria: </h3>{course.type}</p>

                                    </Card>
                                    : <div style={{textAlign: 'center'}}>
                                        <Skeleton.Image style={{width: 200}}/>
                                        <Card title='' loading/>
                                    </div>
                                }
                            </Col>
                        ))
                    }
                </Row>
            </>
        );
    }
;

export default CourseList;
