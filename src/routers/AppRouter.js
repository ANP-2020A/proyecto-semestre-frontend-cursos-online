import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import Routes from '../constants/routes';
import NotFoundPage from '../pages/NotFoundPage';
import Loading from '../components/Loading';
import Programing from "../pages/Courses/Programing";
import DataBase from "../pages/Courses/DataBase";
import Security from "../pages/Courses/Security";
import Network from "../pages/Courses/Network";
import System from "../pages/Courses/System";
import Algorithm from "../pages/Courses/Algorithm";
import Architecture from "../pages/Courses/Architecture";
import CoursesLayout from "../pages/CoursesLayout";
import ProfileStudent from "../pages/ProfileStudent";
import CourseStudent from "../pages/Student/CourseStudent";
import HistorialStudent from "../pages/Student/HistorialStudent";
import Certificate from "../pages/Student/Certificate";
import Data from "../pages/Student/Data";
import ProfileTeacher from "../pages/ProfileTeacher";
import NewCourse from "../pages/Teacher/NewCourse";
import Record from "../pages/Teacher/Record";
import TeacherCourses from "../pages/Teacher/TeacherCourses";
import Nivel1 from "../pages/Nivels/Nivel1";
import Nivel2 from "../pages/Nivels/Nivel2";
import Nivel3 from "../pages/Nivels/Nivel3";
import Nivel4 from "../pages/Nivels/Nivel4";
import Nivel5 from "../pages/Nivels/Nivel5";
import Exam from "../pages/Nivels/Exam";


/**
 * El módulo loadable (https://loadable-components.com/docs/code-splitting/)
 * Permite dividir los componentes en diferentes "bundles" (archivos js compilados)
 * de esta manera la aplicación puede ir cargando los compoenentes bajo demanda.
 * Solo cargará los componentes que sean utilizados por el usuario.
 *
 * Esto acelera la carga de la aplicación ya que de lo contrario tendríamos un solo
 * bundle de gran tamaño y el navegador demoraría en descargarlo para renderizar la aplicación.
 *
 * @type {{fallback: JSX.Element}}
 */
const loadableOptions = { fallback: <Loading /> };

const AsyncHome = loadable( () => import( '../pages/Index' ), loadableOptions );
const AsyncLogin = loadable( () => import( '../pages/Login' ), loadableOptions );
const AsyncRegister = loadable( () => import( '../pages/Register' ), loadableOptions );
const AsyncLoginTeacher = loadable( () => import( '../pages/LoginTeacher' ), loadableOptions );
const AsyncProfileTeacher = loadable( () => import( '../pages/ProfileTeacher' ), loadableOptions );
const AsyncProfileStudent = loadable( () => import( '../pages/ProfileStudent' ), loadableOptions );
const AsyncArticle = loadable( () => import( '../pages/Article' ), loadableOptions );
const AsyncAbout = loadable( () => import( '../pages/About' ), loadableOptions );
const AsyncCoursesLayout = loadable( () => import( '../pages/CoursesLayout' ), loadableOptions );
const AsyncLogout = loadable( () => import( '../pages/Logout' ), loadableOptions );


/**
 * Este es el componente que se encarga de renderizar el componente adecuado
 * de acuerdo a la ruta en la que se encuentra el navegador.
 * <Switch> https://reactrouter.com/web/api/Switch
 * <PublicRoute> Utilizado para las páginas que son accesibles por todos los usuarios.
 * <PrivateRoute> Utilizado para lás páginas que son protegidas,
 *                este componente valida si existe una sesión activa.
 *
 * @returns {JSX.Element}
 * @constructor
 */
const AppRouter = () => (
  <Switch>
    <PublicRoute exact path={ Routes.HOME } component={ AsyncHome } />
    <PublicRoute path={ Routes.LOGIN } component={ AsyncLogin } />
    <PublicRoute path={ Routes.REGISTER } component={ AsyncRegister } />
    <PublicRoute path={ Routes.LOGINTEACHER } component={ AsyncLoginTeacher } />
    <PublicRoute path={ Routes.ABOUT } component={ AsyncAbout } />
    <PublicRoute path={ Routes.COURSESLAYOUT } component={ AsyncCoursesLayout } />
    <PublicRoute path={ Routes.PROFILETEACHER } component={ AsyncProfileTeacher } />
    <PublicRoute path={ Routes.PROFILESTUDENT } component={ AsyncProfileStudent } />

    <PrivateRoute path={ Routes.ARTICLE_ID } component={ AsyncArticle } />
    <PrivateRoute path={ Routes.LOGOUT } component={ AsyncLogout } />


      <Route path="/Courses/programing">
          <CoursesLayout>
            <Programing/>
          </CoursesLayout>
      </Route>
      <Route path="/Courses/database">
          <CoursesLayout>
              <DataBase/>
          </CoursesLayout>
      </Route>
      <Route path="/Courses/security">
          <CoursesLayout>
              <Security/>
          </CoursesLayout>
      </Route>
      <Route path="/Courses/network">
          <CoursesLayout>
              <Network/>
          </CoursesLayout>
      </Route>
      <Route path="/Courses/system">
          <CoursesLayout>
              <System/>
          </CoursesLayout>
      </Route>
      <Route path="/Courses/algorithm">
          <CoursesLayout>
              <Algorithm/>
          </CoursesLayout>
      </Route>
      <Route path="/Courses/architecture">
          <CoursesLayout>
              <Architecture/>
          </CoursesLayout>
      </Route>
      <Route path="/Student/coursestudent">
          <ProfileStudent>
              <CourseStudent/>
          </ProfileStudent>
      </Route>
      <Route path="/Student/historialstudent">
          <ProfileStudent>
              <HistorialStudent/>
          </ProfileStudent>
      </Route>
      <Route path="/Student/certificate">
          <ProfileStudent>
              <Certificate/>
          </ProfileStudent>
      </Route>
      <Route path="/Student/data">
          <ProfileStudent>
              <Data/>
          </ProfileStudent>
      </Route>
      <Route path="/Teacher/newcourse">
          <ProfileTeacher>
              <NewCourse/>
          </ProfileTeacher>
      </Route>
      <Route path="/Teacher/record">
          <ProfileTeacher>
              <Record/>
          </ProfileTeacher>
      </Route>
      <Route path="/Teacher/teachercourses">
          <ProfileTeacher>
              <TeacherCourses/>
          </ProfileTeacher>
      </Route>

      <Route path="/Nivels/nivel1">
          <ProfileStudent>
              <CourseStudent>
                  <Nivel1/>
              </CourseStudent>
          </ProfileStudent>
      </Route>
      <Route path="/Nivels/nivel2">
          <ProfileStudent>
              <CourseStudent>
                  <Nivel2/>
              </CourseStudent>
          </ProfileStudent>
      </Route>
      <Route path="/Nivels/nivel3">
          <ProfileStudent>
              <CourseStudent>
                  <Nivel3/>
              </CourseStudent>
          </ProfileStudent>
      </Route>
      <Route path="/Nivels/nivel4">
          <ProfileStudent>
              <CourseStudent>
                  <Nivel4/>
              </CourseStudent>
          </ProfileStudent>
      </Route>
      <Route path="/Nivels/nivel5">
          <ProfileStudent>
              <CourseStudent>
                  <Nivel5/>
              </CourseStudent>
          </ProfileStudent>
      </Route>
      <Route path="/Nivels/exam">
          <ProfileStudent>
              <CourseStudent>
                  <Exam/>
              </CourseStudent>
          </ProfileStudent>
      </Route>

       <Route component={ NotFoundPage } />

  </Switch>
);

export default AppRouter;
