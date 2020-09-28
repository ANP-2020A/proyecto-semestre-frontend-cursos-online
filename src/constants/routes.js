/**
 * Created by chalosalvador on 17/01/2019.
 */

const publicRoutes = {
  LOGIN: '/ingreso',
  REGISTER: '/registro',
  LOGINTEACHER: '/loginteacher',
  COURSESLAYOUT: '/courseslayout',
  USERS: '/usuarios',
  USERS_ID: `/usuario/:id`,
  HOME: '/',
  ABOUT: '/acerca-de',
  PROFILETEACHER: '/profileteacher',
  PROFILESTUDENT: '/profilestudent',
};

const privateRoutes = {

  LOGOUT: '/logout',
  ARTICLE_ID: '/articulo/:id'
};

const Routes = {
  ...publicRoutes,
  ...privateRoutes
};
export default Routes;
