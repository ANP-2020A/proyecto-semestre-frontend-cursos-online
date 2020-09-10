/**
 * Created by chalosalvador on 17/01/2019.
 */

const publicRoutes = {
  LOGIN: '/ingreso',
  REGISTER: '/registro',
  LOGINTEACHER: '/loginteacher',
  USERS: '/usuarios',
  USERS_ID: `/usuario/:id`,
  HOME: '/',
  ABOUT: '/acerca-de',
  COURSES: '/courses'
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
