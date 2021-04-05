import React from 'react';

export default () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <span className="text-dark">{ new Date().getFullYear()} MERN Stack Blog</span>
      </div>
    </footer>
  );
}