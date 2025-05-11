import { useState } from 'react';
import InputText from '../../components/auth/inputText';
import InputPassword from '../../components/auth/inputPassword';
import Button from '../../components/auth/button';

const LoginForm = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const [password, setPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('');

  return (
    <div>
      <form className="px-4 py-5">
        <InputText
          label="Email"
          type="email"
          placeholder="fakeUser123@email.com"
          setUsername={setUsername}
        />

        <InputPassword
          label="Password"
          placeholder="•••••••"
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          setPassword={setPassword}
        />
        <Button label="Sign In" />
      </form>
    </div>
  );
};

export default LoginForm;
