import React from 'react';
import {Image} from "antd";
import {useCourseList} from "../../data/useCourseList";
import ShowError from "../../components/ShowError";
import CourseList from "../../components/CourseList";

const Security = () => {
    const courses = useCourseList();

    return(
        <>
            <h1 className='subtitulos'>
                SEGURIDAD
            </h1>
            {
                courses.isLoading
                    ? 'Cargando...'
                    : courses.isError
                    ? <ShowError error={ courses.isError } />
                    : <CourseList courses={ courses.courses } />
            }
        </>
    );
};

export default Security;