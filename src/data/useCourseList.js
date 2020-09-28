/**
 * Created by chalosalvador on 8/18/20
 */
import useSWR from 'swr';
import API from './index';

export const useCourseList = () => {
  const { data, error, mutate } = useSWR( '/courses', API.fetcher );

  return {
    courses: data && data.data,
    isLoading: !error && !data,
    isError: error,
    mutate
  };
};
