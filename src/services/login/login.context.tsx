
import React, { createContext, useState, ReactNode, ContextType } from 'react';
import { loginRequest } from '../login/login.service';
import StorageUtils from '../storage/storage';

// Define the type for the user object (adjust based on the actual user structure)
interface User {
  id?: string;
  access?: string;
  refresh?: string;
  [key: string]: any;
}

// Define the Authentication context state type
export interface AuthenticationContextType {
  isLoading: boolean;
  error: string | null;
  user: User | null;
  isAuthenticated: boolean;
  formId: string | null;
  onLogin: (email: string, password: string, api_url: string) => Promise<User | null>;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  setFormId: React.Dispatch<React.SetStateAction<string | null>>;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
} 

// Create context with initial empty state
export const AuthenticationContext = createContext<AuthenticationContextType | undefined>(undefined);

// Define props for the provider
interface AuthenticationContextProviderProps {
  children: ReactNode;
}


export const AuthenticationContextProvider: React.FC<AuthenticationContextProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [formId, setFormId] = useState<string | null>(null);

  // Define the login function
  const onLogin = async (email: string, password: string, api_url: string): Promise<User | null> => {
    setIsLoading(true);
    try {
      const response = await loginRequest(email, password, api_url);
      if (response) {
        setUser(response);
        await StorageUtils.storeItem('user', response);
        await StorageUtils.storeItem('accessToken', response.access);
        await StorageUtils.storeItem('refreshToken', response.refresh);
        setIsAuthenticated(true);
        return response;
      }
    } catch (error: any) {
      setError(error.message);
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
    return null;
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isLoading,
        error,
        user,
        isAuthenticated,
        formId,
        onLogin,
        setIsAuthenticated,
        setFormId,
        setUser,
        setIsLoading,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContextProvider;
