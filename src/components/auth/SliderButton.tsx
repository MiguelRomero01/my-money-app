import { Link } from 'react-router-dom';

type window = 'login' | 'register';

interface SliderButtonProps {
  currentWindow: window;
}

const SliderButton: React.FC<SliderButtonProps> = ({ currentWindow }) => {
  const className_active = 'rounded-md px-[18%] bg-white py-2 text-center shadow font-medium';
  const className_inactive = 'px-12 py-2 text-center text-gray-700';

  return (
    <div className="mt-3 flex justify-center px-4">
      {
        <ul className="inline-flex h-auto w-full max-w-md justify-between rounded-[8px] bg-gray-400/15 px-2 py-2">
          {
            <Link
              className={`${currentWindow === 'login' ? className_active : className_inactive}`}
              to="/"
            >
              <li>Sign In</li>
            </Link>
          }
          <Link
            className={`${currentWindow === 'register' ? className_active : className_inactive}`}
            to="/register"
          >
            <li>Sign Up</li>
          </Link>
        </ul>
      }
    </div>
  );
};

export default SliderButton;
