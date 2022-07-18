import { createContext, useContext, useState } from 'react';

const AuthContext = createContext<any>({});
const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string>('');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const handleLogin = async (username: string, password: string) => {
    if (username === 'admin' && password === 'password') {
      setUser(username);
      setIsAuthenticated(true);

      return true;
    }

    return false;
  };

  const handleRegistration = (
    username: string,
    email: string,
    password: string
  ) => {
    if (username === 'admin' && password === 'password') {
      setUser(username);
      setIsAuthenticated(true);

      return true;
    }

    return false;
  };

  const handleLogout = () => {
    setUser('');
    setIsAuthenticated(false);

    return true;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        handleLogin,
        handleRegistration,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, useAuth };
