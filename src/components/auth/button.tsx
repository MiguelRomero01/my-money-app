interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return (
    <button className="my-5 w-full cursor-pointer rounded-[8px] bg-gradient-to-r from-purple-600 to-indigo-600 px-2 py-2 text-[1.1rem] font-medium text-white transition-all ease-in hover:to-indigo-700">
      {label}
    </button>
  );
};

export default Button;
