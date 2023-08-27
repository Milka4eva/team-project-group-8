import CalendarPage from './../pages/CalendarPage/CalendarPage';
import { Route, Routes} from 'react-router-dom';
  
export const App = () => {
  return (
    <>
      <Routes>
        <Route>
          <Route path="calendar" element={<CalendarPage/>}/>
        </Route>
      </Routes>
    </>
  );
};