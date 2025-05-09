import { useEffect, useState } from 'react';
import InputText from '../../components/auth/inputText';
import InputPassword from '../../components/auth/inputPassword';
import Button from '../../components/auth/button';
import AuthHeader from '../../components/auth/authHeader';
import SliderButton from '../../components/auth/SliderButton';

const LoginForm = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const [password, setPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('');

  return (
    <div className="w-full max-w-md px-5">
      <header>
        <AuthHeader
          title="Welcome Back"
          description="Enter your credentials to access your account"
        />
      </header>

      <div>
        <SliderButton currentWindow="login" />
      </div>

      <form className="px-4 py-5">
        <InputText
          label="Username"
          type="text"
          placeholder="fakeUser123"
          setUsername={setUsername}
        />

        <InputPassword
          label="Password"
          placeholder="•••••••"
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          setPassword={setPassword}
          // error={
          //   password.length < 6 && password.length > 0
          //     ? 'La contraseña debe tener al menos 6 caracteres'
          //     : ''
          // }
        />
        <Button label="Sign In" />
      </form>
    </div>
  );
};

export default LoginForm;
