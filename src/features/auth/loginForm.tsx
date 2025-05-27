import { useState } from 'react';
import InputText from '../../components/auth/inputText';
import InputPassword from '../../components/auth/inputPassword';
import Button from '../../components/auth/button';
import { signInUser } from './authService';
import { simpleAlert } from '@components/alerts/simpleAlert';

const LoginForm = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const [password, setPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('');

  async function handleSubmit() {
    try {
      const userSignIn = await signInUser(username, password);

      if (!userSignIn) {
        simpleAlert({
          title: 'Error',
          text: 'Your username or password is incorrect',
          type: 'error',
          confirmButtonText: 'OK',
        });
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <form
        className="px-4 py-5"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
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
        <Button label="Sign In" type="submit" />
      </form>
    </div>
  );
};

export default LoginForm;
