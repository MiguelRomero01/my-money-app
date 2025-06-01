import { createContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isLogin: boolean;
  toggleLogin: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  return <AuthContext.Provider value={{ isLogin, toggleLogin }}>{children}</AuthContext.Provider>;
}
