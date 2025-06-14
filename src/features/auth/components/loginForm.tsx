import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//components
import InputText from '@components/auth/inputText';
import InputPassword from '@components/auth/inputPassword';
import Button from '@components/auth/button';

//services
import { signInUser } from '@services/database/queries/auth/createUser';
import { simpleAlert } from '@components/alerts/simpleAlert';

const LoginForm = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  function verifyFields() {
    const validations = [
      {
        condition: email === '' || password === '',
        message: 'All fields are required',
      },
    ];
    const failedValidation = validations.find((v) => v.condition);
    if (failedValidation) {
      simpleAlert({
        confirmButtonText: 'Ok',
        text: failedValidation.message,
        title: 'Error',
        type: 'error',
      });
      return false;
    }
    return true;
  }

  async function handleSubmit() {
    if (verifyFields()) {
      try {
        await signInUser(email, password);
        navigate('/home');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        simpleAlert({
          confirmButtonText: 'Ok',
          text: error.message ?? 'Something went wrong',
          title: 'Error',
          type: 'error',
        });
      }
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
          setUsername={setEmail}
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
