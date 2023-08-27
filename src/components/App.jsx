import React from 'react';
import GlobalStyle from '../globalStyles';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <GlobalStyle />
      React homework template
    </div>
  );
};
