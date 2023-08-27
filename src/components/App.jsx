import { useDispatch } from 'react-redux';
import { register, login, logout } from 'redux/auth/auth-operations';

export const App = () => {
  const dispatch = useDispatch();
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
      <button
        type="button"
        onClick={() =>
          dispatch(
            register({
              name: 'Adrian Cross',
              email: 'across@mail.com',
              password: 'examplepwD12345',
            })
          )
        }
      >
        Register
      </button>
      <button
        type="button"
        onClick={() =>
          dispatch(
            login({
              email: 'across@mail.com',
              password: 'examplepwD12345',
            })
          )
        }
      >
        Login
      </button>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};
