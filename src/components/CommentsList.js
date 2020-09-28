import { Comment, List, Tooltip, Form, Input, Button, Avatar, message, Skeleton } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import API from '../data/index';
import { translateMessage } from '../utils/translateMessage';
import ErrorList from './ErrorList';
import { useArticleComments } from '../data/useArticleComments';
import Routes from '../constants/routes';
import { Link } from 'react-router-dom';

const { TextArea } = Input;

const CommentsList = ( { courses, user_id } ) => {

  console.log( 'props', courses );
  const [ submitting, setSubmitting ] = useState( false );

  const handleSubmit = async( values ) => {
    console.log( 'values', values );
    setSubmitting( true );

    try {

      // setValue( '' );
      courses.mutate( {
        data: [
          {}, // to show the skeleton for new comment
          ...courses.comments,
        ]
      }, false );
      await API.post( `/users/${ user_id }/courses`, {
        text: values.text,
        user_id: user_id
      } );
      courses.mutate(); // get updated data
      setSubmitting( false );
    } catch( error ) {
      console.log( 'error', error );
      setSubmitting( false );
      const errorList = error.response.error_list && <ErrorList errors={ error.response.error_list } />;

      message.error( <>
        { translateMessage( error.message ) }
        { errorList }
      </> );
    }
  };

  return (
    <>
      <List
        className='comment-list'
        header={ `${ courses.courses && courses.courses.length } cursos` }
        itemLayout='horizontal'
        dataSource={ processCommentsData( courses.courses ) }
        renderItem={ ( item ) => {
          if( item.name ) {
            return (
              <Comment
                // actions={ item.actions }
                name={ item.name }
                description={ item.description }
                type={ item.type }
              />
            );
          } else {
            return <Skeleton loading={ true } active avatar />;
          }
        } }
      />
    </>
  );
};

export default CommentsList;

const processCommentsData = ( courses ) => {
  return courses.map( ( course ) => {
    console.log( 'comment', course );
    if( courses.text ) {
      return ({
        // actions: [ <span key='comment-list-reply-to-0'>Reply to</span> ],
        author: <Link to={ Routes.USERS_ID }>{ course.user_data.name }</Link>,
        content: <p>{ course.text }</p>,
      });
    } else {
      return {};
    }
  } );
};
