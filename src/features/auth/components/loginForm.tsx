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

  const [ui, setUI] = useState({
    isVisible: false,
    loading: false,
  });

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  function verifyFields() {
    const validations = [
      {
        condition: form.email === '' || form.password === '',
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
        setUI((prev) => ({ ...prev, loading: true }));
        await signInUser(form.email, form.password);
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
      setUI((prev) => ({ ...prev, loading: false }));
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
          setUsername={(value: string) => setForm((prev) => ({ ...prev, email: value }))}
        />

        <InputPassword
          label="Password"
          placeholder="•••••••"
          isVisible={ui.isVisible}
          setIsVisible={(value: boolean) => setUI((prev) => ({ ...prev, isVisible: value }))}
          setPassword={(value: string) => setForm((prev) => ({ ...prev, password: value }))}
        />
        <Button label="Sign In" type="submit" loading={ui.loading} />
      </form>
    </div>
  );
};

export default LoginForm;
