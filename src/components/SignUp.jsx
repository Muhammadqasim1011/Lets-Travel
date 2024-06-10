import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import './SignUp.css';

const SignUp = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="form-container-a">
        {isLogin ? (
          <>
            <LoginForm />
            <p>
              Don&apos;t have an account? <a onClick={toggleForm} className="toggle-link">Sign Up</a>
            </p>
          </>
        ) : (
          <>
            <RegistrationForm />
            <p>
              Already have an account? <a onClick={toggleForm} className="toggle-link">Log In</a>
            </p>
          </>
        )}
      </div>
  );
};

export default SignUp;
