import React from 'react';
import GlobalStyle from '../globalStyles';
import CalendarPage from './../Pages/CalendarPage/CalendarPage';
import { Route, Routes} from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route>
          <Route path="calendar" element={<CalendarPage/>}/>
        </Route>
      </Routes>
        </div>
  );
};