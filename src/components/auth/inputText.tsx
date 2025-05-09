import { useState } from 'react';

interface InputProps {
  label: string;
  type: 'email' | 'text';
  placeholder?: string;
  setUsername: (value: string) => void;
}
const InputText: React.FC<InputProps> = ({ label, type, placeholder, setUsername }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  return (
    <div className="mb-4 w-full">
      <label className="mb-1 block text-sm font-medium text-gray-700">{label}</label>
      <div
        className={`relative items-center overflow-hidden rounded-md border transition-all ${isFocused ? 'border-blue-500 ring-2 ring-blue-100' : 'border-gray-300'}`}
      >
        <input
          onChange={(e) => setUsername(e.target.value)}
          type={type}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="block w-full bg-transparent px-4 py-2 text-gray-700 outline-none"
        />
      </div>
    </div>
  );
};

export default InputText;
