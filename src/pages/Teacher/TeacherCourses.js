import React from 'react';
import {Col, Image, Pagination, Row, Skeleton, Typography} from "antd";
import ShowError from "../../components/ShowError";
import CourseList from "../../components/CourseList";
import {useCourseList} from "../../data/useCourseList";
import {useArticleComments} from "../../data/useArticleComments";
import {useCourseTeacherList} from "../../data/useCourseTeacherList";
import CommentsList from "../../components/CommentsList";
import {useCourse} from "../../data/useCourse";
import { useParams } from 'react-router-dom';

const { Title } = Typography;

const TeacherCourses = () => {

    let {id}=useParams();
    const courses = useCourseTeacherList(id);
    const course = useCourse(id);

    return (
        <>
            <Title className='subtitulos' level={2} style={{
                textAlign:'center', color:'#8F0002'
            }}>CURSOS</Title><br/>
            <Row style={{ textAlign:'center'}}>
                <Col span={12} >
                    {
                        courses.isLoading
                            ? <Skeleton loading={ courses.isLoading } active avatar />
                            : courses.isError
                            ? <ShowError error={ courses.isError } />
                            : course.course && <CommentsList user_id={ id } courses={ courses } />
                    }
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