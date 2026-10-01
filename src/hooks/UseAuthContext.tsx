import { createContext, useContext, ReactNode, useState } from "react";
import * as AuthSession from "expo-auth-session";



interface UserProps {
  isLogin: boolean;
}

interface PropsContext {
  user: UserProps;
  handleLogin: () => void;
  handleLogout: () => void;
 
}

interface ProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({} as PropsContext);

function AuthProvider({ children }: ProviderProps) {
  const[user, setUser] = useState<UserProps>({ isLogin: false });
 
  function handleLogin() {
    setUser({ isLogin: true });
  }

  function handleLogout() {
    setUser({ isLogin: false });
  }
  return (
    <AuthContext.Provider
      value={{ user, handleLogin, handleLogout }}
      
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };