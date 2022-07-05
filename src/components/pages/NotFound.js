import React from 'react';

const NotFound = () => {
  const errorBoxStyle = {
    background: '#3b5a9a',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    width: '350px',
    height: '200px',
    borderRadius: '5px',
    fontSize: '24px',
    textAlign: 'center',
  };

  const errorContainer = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'white',
    color: '#3b5a9a',
  };

  return (
    <div style={errorContainer}>
      <h1 style={{ fontSize: '45px' }}>404</h1>
      <div style={errorBoxStyle}>
        <h3 style={{ padding: '10px' }}>
          Oops!
          <br />
          <br />
          This is not the page you&#39;re looking for
        </h3>
      </div>
    </div>
  );
};

export default NotFound;
