import { UserCircle2 } from 'lucide-react';

interface AuthHeaderProps {
  title: string;
  description: string;
}

const AuthHeader = ({ title, description }: AuthHeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-5">
      <div className="flex flex-col items-center justify-center">
        <UserCircle2 className="size-12 rounded-full bg-gray-300/35 p-2 text-white" />
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-2">
        <h1 className="text-3xl font-bold text-white">{title}</h1>
        <p className="text-sm font-medium text-gray-200">{description}</p>
      </div>
    </div>
  );
};

export default AuthHeader;
