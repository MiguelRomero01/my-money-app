import { Eye, EyeClosed } from 'lucide-react';
import { useState } from 'react';

interface InputProps {
  label: string;
  isVisible: boolean;
  placeholder?: string;
  setIsVisible: (value: boolean) => void;
  setPassword: (value: string) => void;
  error?: string;
}

const InputPassword: React.FC<InputProps> = ({
  label,
  placeholder,
  isVisible,
  setIsVisible,
  setPassword,
  error,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="mb-4 w-full">
      <label className="mb-1 block text-sm font-medium text-gray-700">{label}</label>
      <div
        className={`relative flex items-center overflow-hidden rounded-md border transition-all ${isFocused ? 'border-blue-500 ring-2 ring-blue-100' : 'border-gray-300'} ${error ? 'border-red-500 bg-red-50' : ''}`}
      >
        <input
          onChange={(e) => setPassword(e.target.value)}
          type={isVisible ? 'text' : 'password'}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="block w-full bg-transparent px-4 py-2 text-gray-700 outline-none"
        />
        <button
          type="button"
          onClick={toggleVisibility}
          className="absolute right-2 p-1 text-gray-500 transition-colors hover:text-gray-700"
        >
          {isVisible ? (
            <EyeClosed size={20} className="text-gray-500" />
          ) : (
            <Eye size={20} className="text-gray-500" />
          )}
        </button>
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default InputPassword;
