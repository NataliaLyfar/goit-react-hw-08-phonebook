import { lazy} from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoute, PublicRoute } from 'hoc';
import { MainLayout } from 'layout';

const HomePage = lazy(() => import('pages/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const UpdatePage = lazy(() => import('pages/UpdatePage'));
const SignUpPage = lazy(() => import('pages/SignUpPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ProfilePage = lazy(() => import('pages/ProfilePage'));

export const App = () => {
  return (
      <Routes>
        <Route path='/' element={<MainLayout />}>
        <Route index path="/" element={<PublicRoute><HomePage/></PublicRoute>} />
        <Route path="signup" element={<PublicRoute restricted><SignUpPage/></PublicRoute>} />
        <Route path="login" element={<PublicRoute restricted ><LoginPage/></PublicRoute>} />
        <Route path="contacts" element={<PrivateRoute><ContactsPage/></PrivateRoute>} />
        <Route path="update/:id/*" element={<PrivateRoute><UpdatePage/></PrivateRoute>} />
        <Route path="profile" element={<PrivateRoute><ProfilePage/></PrivateRoute>} />  
        <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
  ); 
};
