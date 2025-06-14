import { useState } from 'react';
import InputText from '@components/auth/inputText';
import InputPassword from '@components/auth/inputPassword';
import Button from '@components/auth/button';
import { signUpUser } from '@services/database/queries/auth/createUser';
import { simpleAlert } from '@components/alerts/simpleAlert';
import { ConfirmAlert } from '@components/alerts/confirmAlerts';
import { useAuth } from '@hooks/authHook';

const RegisterForm = () => {
  const { toggleLogin } = useAuth();
  const [PasswordVisible, setPasswordVisible] = useState<boolean>(false);
  const [passwordRepeatVisible, setPasswordRepeatVisible] = useState<boolean>(false);

  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');

  const [email, setEmail] = useState<string>('');

  const [Ischecked, setIsChecked] = useState<boolean>(false);

  function verifyFields() {
    const validations = [
      {
        condition: email === '' || password === '' || repeatPassword === '',
        message: 'You must fill all the fields',
      },
      {
        condition: password !== repeatPassword,
        message: 'The passwords must match',
      },
      {
        condition: !Ischecked,
        message: 'You must accept the terms and conditions',
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
        await signUpUser(email, password);
        ConfirmAlert({
          cancelButtonText: 'Ok',
          text: 'User created successfully',
          title: 'Success',
          confirmButtonText: 'Sign In',
          type: 'success',
          onConfirm: () => {
            toggleLogin();
          },
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        simpleAlert({
          confirmButtonText: 'Ok',
          text: error.message ?? 'Unexpected error',
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
          isVisible={PasswordVisible}
          setIsVisible={setPasswordVisible}
          setPassword={setPassword}
          error={
            password.length < 6 && password.length > 0
              ? 'Password must have at least 6 characters'
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
            password !== repeatPassword && repeatPassword.length > 0 ? "Password doesn't match" : ''
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

        <Button label="Sign Up" type="submit" />
      </form>
    </div>
  );
};

export default RegisterForm;
