import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import GlobalStyle from '../globalStyles';
import useAuth from 'hooks/useAuth';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import Login from 'Pages/Login';

export const App = () => {
  const { isRefreshing, userToken } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      if (userToken) {
        dispatch(fetchCurrentUser(userToken));
      }
    };
    getUser();
  }, [dispatch, userToken]);

  return isRefreshing ? (
    <div>Loading....</div>
  ) : (
    <>
      <GlobalStyle />
      React homework template
      <Login />
    </>
  );
};
