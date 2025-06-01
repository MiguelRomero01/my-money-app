import { useAuth } from '@hooks/authHook';

interface SliderButtonProps {
  IsLogin: boolean;
}

const SliderButton: React.FC<SliderButtonProps> = ({ IsLogin }) => {
  const { toggleLogin } = useAuth();
  const className_active = 'rounded-md px-[18%] bg-white py-2 text-center shadow font-medium';
  const className_inactive =
    'px-12 py-2 text-center text-gray-700 cursor-pointer hover:text-black hover:font-medium transition-colors duration-300 ease';

  return (
    <div className="mt-3 flex justify-center px-4">
      <ul className="inline-flex h-auto w-full max-w-md justify-between rounded-[8px] bg-gray-400/15 px-2 py-2">
        <button
          className={`${IsLogin ? className_active : className_inactive}`}
          onClick={toggleLogin}
          disabled={IsLogin}
        >
          <li>Sign In</li>
        </button>
        <button
          className={`${!IsLogin ? className_active : className_inactive}`}
          onClick={toggleLogin}
          disabled={!IsLogin}
        >
          <li>Sign Up</li>
        </button>
      </ul>
    </div>
  );
};

export default SliderButton;
