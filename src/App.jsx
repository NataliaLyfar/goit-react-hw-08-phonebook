import { useEffect, useState, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { lazy} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authOperations, authSelectors } from 'redux/auth';
import { PrivateRoute, PublicRoute } from 'routes';
import { MainLayout } from 'layout';
import { ProgressBar } from 'components/ProgressBar';



const HomePage = lazy(() => import('pages/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const UpdatePage = lazy(() => import('pages/UpdatePage'));
const SignUpPage = lazy(() => import('pages/SignUpPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ProfilePage = lazy(() => import('pages/ProfilePage'));

let progressInterval = null;

export const App = () => {
  const dispatch = useDispatch();
  const isGetCurrentUser = useSelector(authSelectors.getIsGettingCurrent);  
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    progressInterval = setInterval(() => {
      setCompleted(prev => prev + 10)}, 10);
  }, []);

  useEffect(() => {
    if(completed >= 100){
      clearInterval(progressInterval);
      };  
  }, [completed]);

  return (
    !isGetCurrentUser && (
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={
            <PublicRoute>
              <Suspense fallback={<ProgressBar width={'150px'} max={100} completed={completed}/>}>
                <HomePage/>
              </Suspense>
            </PublicRoute>
            }/>
            <Route path="signup" element={
              <PublicRoute redirectTo="/home" restricted>
                <Suspense fallback={<ProgressBar width={'150px'} max={100} completed={completed}/>}>
                  <SignUpPage />
                </Suspense>
              </PublicRoute>
            }/>
            <Route path="login" element={
              <PublicRoute redirectTo="/home" restricted>
                <Suspense fallback={<ProgressBar width={'150px'} max={100} completed={completed}/>}>
                  <LoginPage />
                  </Suspense>
              </PublicRoute>
            }/>
            <Route path='contacts' element={
              <PrivateRoute>
                <Suspense fallback={<ProgressBar width={'150px'} max={100} completed={completed}/>}>
                  <ContactsPage />
                </Suspense>
              </PrivateRoute> 
            }/>
            <Route path='update/:id/*' element={
              <PrivateRoute>
                <Suspense fallback={<ProgressBar width={'150px'} max={100} completed={completed}/>}>
                  <UpdatePage />
                </Suspense>
              </PrivateRoute> 
            }/>
            <Route path='profile' element={
              <PrivateRoute>
                <Suspense fallback={<ProgressBar width={'150px'} max={100} completed={completed}/>}>
                  <ProfilePage />
                </Suspense>
              </PrivateRoute> 
            }/>
            <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    ) 
  );
};
