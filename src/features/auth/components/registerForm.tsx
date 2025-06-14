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

  // Un solo estado para los campos del formulario
  const [form, setForm] = useState({
    email: '',
    password: '',
    repeatPassword: '',
    isChecked: false,
  });

  // Un solo estado para visibilidad y loading
  const [ui, setUI] = useState({
    passwordVisible: false,
    passwordRepeatVisible: false,
    loading: false,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function verifyFields() {
    const { email, password, repeatPassword, isChecked } = form;
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
        condition: !isChecked,
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
        setUI((prev) => ({ ...prev, loading: true }));
        await signUpUser(form.email, form.password);
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
      } catch (error: any) {
        simpleAlert({
          confirmButtonText: 'Ok',
          text: error.message ?? 'Unexpected error',
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
          isVisible={ui.passwordVisible}
          setIsVisible={(v: boolean) => setUI((prev) => ({ ...prev, passwordVisible: v }))}
          setPassword={(value: string) => setForm((prev) => ({ ...prev, password: value }))}
          error={
            form.password.length < 6 && form.password.length > 0
              ? 'Password must have at least 6 characters'
              : ''
          }
        />

        <InputPassword
          label="Repeat Password"
          placeholder="•••••••"
          isVisible={ui.passwordRepeatVisible}
          setIsVisible={(v: boolean) => setUI((prev) => ({ ...prev, passwordRepeatVisible: v }))}
          setPassword={(value: string) => setForm((prev) => ({ ...prev, repeatPassword: value }))}
          error={
            form.password !== form.repeatPassword && form.repeatPassword.length > 0
              ? "Password doesn't match"
              : ''
          }
        />

        <label>
          <input
            type="checkbox"
            name="isChecked"
            checked={form.isChecked}
            onChange={handleChange}
            className="mr-1 cursor-pointer"
          />
          I agree to the{' '}
          <a className="cursor-pointer items-center font-medium text-purple-600">
            Terms and Conditions
          </a>
        </label>

        <Button label="Sign Up" type="submit" loading={ui.loading} />
      </form>
    </div>
  );
};

export default RegisterForm;
