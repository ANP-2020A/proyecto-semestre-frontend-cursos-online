import React from 'react';
import {Image} from "antd";
import ShowError from "../../components/ShowError";
import CourseList from "../../components/CourseList";
import {useCourseList} from "../../data/useCourseList";

const DataBase = () => {

    const courses = useCourseList();

    return(
        <>
            <h1 className='subtitulos'>
                BASE DE DATOS
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

export default DataBase;