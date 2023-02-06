import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import { lazy, Suspense, useEffect } from 'react';
import PublicRoute from './PublicRoute';
import { Route, Routes, Navigate } from 'react-router-dom';
import PrivateRoute from './PrivatRoutr';
import { Box } from '@mui/system';
import Loader from './Loader';
import Header from './AppBar/AppBar';
import Container from '@mui/material/Container';


const Home = lazy(() => import('../pages/HomePage'));
const Register = lazy(() => import('../pages/RegisterPage'));
const Login = lazy(() => import('../pages/LoginPage'));
const Contacts = lazy(() => import('../pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  console.log(!isFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (

    !isFetchingCurrentUser && (

      <Container maxWidth="sm">
        <Box sx={{ backgroundImage: '#cfe8fc', height: '100vh' }}>
          <Header />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route exact path="/"
                element={<PublicRoute><Home /></PublicRoute>}
              />
              <Route path="/register"
                element={
                <PublicRoute restricted redirectTo='/Login'><Register/></PublicRoute>
              }
              />
              <Route path='/Login'
                element={
                <PublicRoute restricted redirectTo='/Contacts'><Login/></PublicRoute>
              }
              />
                 <Route path='/Contacts'
                element={
                <PrivateRoute redirectTo='/Login'><Contacts/></PrivateRoute>
              }
              />
              <Route path='*' element={<Navigate to='/' />} />
            </Routes>
            </Suspense>
          <ToastContainer />
          </Box>
      </Container>
    )
  );

};









