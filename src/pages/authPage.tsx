import { useState } from 'react';
import AuthHeader from '../components/auth/authHeader';
import SliderButton from '../components/auth/SliderButton';
import LoginForm from '../features/auth/loginForm';
import RegisterForm from '../features/auth/registerForm';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="bg- flex min-h-screen items-center justify-center bg-gray-300/30">
      <div className="w-full max-w-md px-5">
        <div className="ease-in-out0 overflow-hidden rounded-2xl bg-white/90 shadow-xl backdrop-blur-lg transition-all duration-300">
          <header>
            <AuthHeader
              title="Welcome Back"
              description="Enter your credentials to access your account"
            />
          </header>

          <div>
            <SliderButton IsLogin={isLogin} setCurrentWindow={toggleForm} />
          </div>

          <div>{isLogin ? <LoginForm /> : <RegisterForm />}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
