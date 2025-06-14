import LoadingAnimation from '@animations/components/loading';

type TypeButton = 'submit' | 'reset' | 'button';
interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: TypeButton;
  loading?: boolean;
}

const Button = ({ label, onClick, type, loading }: ButtonProps) => {
  return (
    <div>
      {!loading ? (
        <button
          onClick={onClick}
          type={type}
          className="my-5 w-full cursor-pointer rounded-[8px] bg-gradient-to-r from-purple-600 to-indigo-600 px-2 py-2 text-[1.1rem] font-medium text-white transition-all ease-in hover:to-indigo-700"
        >
          {label}
        </button>
      ) : (
        <LoadingAnimation />
      )}
    </div>
  );
};

export default Button;
