type window = 'login' | 'register';

interface SliderButtonProps {
  currentWindow: window;
}
const SliderButton: React.FC<SliderButtonProps> = ({ currentWindow }) => {
  const className_active = 'rounded-md bg-white px-[18%] py-2 text-center shadow';
  const className_inactive = 'px-12 py-2 text-center text-gray-700';

  return (
    <div className="mt-3 flex justify-center px-4">
      {
        <ul className="inline-flex h-auto w-full max-w-md justify-between rounded-[8px] bg-gray-400/20 px-2 py-2">
          {
            <a
              className={`${currentWindow === 'login' ? className_active : className_inactive}`}
              href=""
            >
              <li>Sign In</li>
            </a>
          }
          <a
            className={`${currentWindow === 'register' ? className_active : className_inactive}`}
            href=""
          >
            <li>Sign Up</li>
          </a>
        </ul>
      }
    </div>
  );
};

export default SliderButton;
