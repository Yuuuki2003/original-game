import React from "react";

const AppLayout = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    padding: '2rem',
    fontFamily: 'sans-serif',
    backgroundColor: '#b3c6ff',
    color: 'yellow',
    minHeight: '100vh',
    width: '100vw',
    boxSizing: 'border-box',
    margin: 0,
    overflowX: 'hidden'
  }}>
    {children}
  </div>
);


export default AppLayout;