import React from 'react';

const AuthForm = ({ isLogin, onSubmit, onChange, values, children }) => {
  return (
    <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      {children}
    </form>
  );
};

export default AuthForm;