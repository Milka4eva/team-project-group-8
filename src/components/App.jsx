import React from 'react';
import GlobalStyle from '../globalStyles';
import CalendarPage from './../pages/CalendarPage/CalendarPage';
import { Route, Routes} from 'react-router-dom';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <GlobalStyle />
      React homework template
    </div>
  );
};