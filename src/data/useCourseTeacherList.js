import useSWR from 'swr';
import API from './index';

export const useCourseTeacherList = ( id ) => {
    const { data, error, mutate } = useSWR( () => `/users/${id}/courses`, API.fetcher );
    return {
        course: data && data.data,
        isLoading: !error && !data,
        isError: error,
        mutate
    };
};