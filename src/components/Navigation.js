/**
 * Created by chalosalvador on 2/7/20
 */
import React, { useState } from 'react';

import Routes from '../constants/routes';
import { useAuth } from '../providers/Auth';
import { Menu } from 'antd';
import { LogoutOutlined, LoginOutlined, LoadingOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navigation.css';
import ProfileStudent from "../pages/ProfileStudent";
import ProfileTeacher from "../pages/ProfileTeacher";

const linkStyle = {};

const  Navigation = ( props ) => {
  let location = useLocation();

  const [ menuState, setMenuState ] = useState( {
    current: location.pathname, // set the current selected item in menu, by default the current page
    collapsed: false,
    openKeys: []
  } );

  const { isAuthenticated, isCheckingAuth, currentUser } = useAuth();

  React.useEffect( () => {
    setMenuState( {
      ...menuState,
      current: location.pathname
    } );
  }, [ location, isAuthenticated ] );

  const handleClick = ( e ) => {
    console.log( 'click ', e );
    setMenuState( {
      ...menuState,
      current: e.key
    } );
  };

  return (
    <>
      <Menu
        mode={ props.mode }
        onClick={ handleClick }
        className='menu'
        theme='dark'
        selectedKeys={ [ menuState.current ] }
        style={ {
          lineHeight: '64px',
          width: 'fit-content'
        } }
      >
        <Menu.Item key={ Routes.HOME }>
          <Link to={ Routes.HOME } style={ linkStyle }>Inicio</Link>
        </Menu.Item>

        <Menu.Item key={ Routes.LOGINTEACHER }>
          <Link to={ Routes.LOGINTEACHER } style={ linkStyle }>Enseña en CURES</Link>
        </Menu.Item>

        <Menu.Item key={ Routes.COURSESLAYOUT }>
          <Link to={ Routes.COURSESLAYOUT } style={ linkStyle }>Cursos</Link>
        </Menu.Item>

        {
          isAuthenticated
            ? <Menu.SubMenu icon={ <UserOutlined /> } title={ currentUser && currentUser.name }>
              <Menu.ItemGroup>
                <Menu.Item key="1">
                  <Link to={ Routes.LOGIN } className='logout-link'>
                    Perfil
                  </Link>
                </Menu.Item>
              </Menu.ItemGroup>

              <Menu.Item key={ Routes.LOGIN }>
                <Link to={ Routes.LOGOUT } className='logout-link'>
                  {
                    isCheckingAuth
                      ? <LoadingOutlined />
                      : <><LogoutOutlined /> Salir</>
                  }
                </Link>
              </Menu.Item>
            </Menu.SubMenu>
            : <Menu.Item key={ Routes.LOGIN }>
              <Link to={ Routes.LOGIN }>
                {
                  isCheckingAuth
                    ? <LoadingOutlined />
                    : <><LoginOutlined /> Ingresar</>
                }
              </Link>
            </Menu.Item>
        }
      </Menu>
    </>
  );
};

export default Navigation;
