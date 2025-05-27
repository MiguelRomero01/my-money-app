import { useState } from 'react';
import InputText from '../../components/auth/inputText';
import InputPassword from '../../components/auth/inputPassword';
import Button from '../../components/auth/button';
import { signUpUser } from './authService';

const RegisterForm = () => {
  const [PasswordVisible, setPasswordVisible] = useState<boolean>(false);
  const [passwordRepeatVisible, setPasswordRepeatVisible] = useState<boolean>(false);

  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');

  const [email, setEmail] = useState<string>('');

  const [Ischecked, setIsChecked] = useState<boolean>(false);

  function verifyFields() {
    if (email === '' || password === '' || repeatPassword === '') {
      alert('You must fill all the fields');
    } else if (password !== repeatPassword) {
      alert("The passwords doesn't match");
    } else if (Ischecked === false) {
      alert('You must accept the terms and conditions');
    } else {
      return true;
    }
    return false;
  }

  async function handleSubmit() {
    if (verifyFields()) {
      try {
        const userSignUp = await signUpUser(email, password);
        alert(userSignUp);
      } catch (error) {
        alert(error);
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
