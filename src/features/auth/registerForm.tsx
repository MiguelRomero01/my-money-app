import { useEffect, useState } from 'react';
import AuthHeader from '../../components/auth/authHeader';
import SliderButton from '../../components/auth/SliderButton';
import InputText from '../../components/auth/inputText';
import InputPassword from '../../components/auth/inputPassword';
import Button from '../../components/auth/button';

const RegisterForm = () => {
  const [PasswordVisible, setPasswordVisible] = useState<boolean>(false);
  const [passwordRepeatVisible, setPasswordRepeatVisible] = useState<boolean>(false);

  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');

  const [username, setUsername] = useState<string>('');

  const [Ischecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="w-full max-w-md px-5">
      <header>
        <AuthHeader
          title="Welcome Back"
          description="Enter your credentials to access your account"
        />
      </header>

      <div>
        <SliderButton currentWindow="register" />
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
          isVisible={PasswordVisible}
          setIsVisible={setPasswordVisible}
          setPassword={setPassword}
          error={
            password.length < 6 && password.length > 0
              ? 'La contraseña debe tener al menos 6 caracteres'
              : ''
          }
        />

        <InputPassword
          label="Repeat Password"
          placeholder="•••••••"
          isVisible={passwordRepeatVisible}
          setIsVisible={setPasswordRepeatVisible}
          setPassword={setRepeatPassword}
          error={
            password !== repeatPassword && repeatPassword.length > 0
              ? 'Las contraseñas no coinciden'
              : ''
          }
        />

        <label>
          <input
            type="checkbox"
            checked={Ischecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            className="mr-1 cursor-pointer"
          />
          I agree to the{' '}
          <a className="cursor-pointer items-center font-medium text-purple-600">
            Terms and Conditions
          </a>
        </label>

        <Button label="Sign Up" />
      </form>
    </div>
  );
};

export default RegisterForm;
