import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import { Suspense, lazy } from 'react';
import GlobalStyle from '../globalStyles';
import CalendarPage from './../pages/CalendarPage/CalendarPage';
import { Route, Routes } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import TestSharedLayoutPage from './TestSharedLayoutPage';


const Login = lazy(() => import('../pages/Login'));
const RegisterPage = lazy(() => import('../pages/Registration'));
const AccountPage = lazy(() => import('../pages/Account'));
const MainPage = lazy(() => import('../pages/Main'));
const StatisticsPage = lazy(() => import('../pages/Statisctics'));

 export const App = () => {
  const { userToken } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      if (userToken) {
        dispatch(fetchCurrentUser(userToken));
      }
    };
    getUser();
  }, [dispatch, userToken]);

  return (
    <>
      <GlobalStyle />
      
      <Routes>
        <Route path="/" element={<TestSharedLayoutPage />}>
        <Route
          index
          element={
            <Suspense>
              <MainPage />
            </Suspense>
          }
          />
           <Route
          path="register"
          element={
            <Suspense>
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            </Suspense>
          }
          />
           <Route
          path="login"
          element={
            <Suspense>
              <PublicRoute>
                <Login />
              </PublicRoute>
            </Suspense>
          }
          />
           <Route
          path="account"
          element={
            <Suspense>
              <PrivateRoute>
                <AccountPage />
              </PrivateRoute>
            </Suspense>
          }
          />
           <Route
          path="statistics"
          element={
            <Suspense>
              <PrivateRoute>
                <StatisticsPage />
              </PrivateRoute>
            </Suspense>
          }
          />
           <Route
          path="calendar"
          element={
            <Suspense>
              <PrivateRoute>
                <CalendarPage />
              </PrivateRoute>
            </Suspense>
          }
        />
          </Route>
      </Routes>
    </>
  );
};
