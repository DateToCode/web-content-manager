import React, { createContext, useState } from "react";
import AuthServices from "../services/auth";

interface ContextProps {
  auth: StateContext;
  login: (email: string, password: string) => Promise<void>;
}

interface StateContext {
  authenticated: boolean;
  uid: string;
  checking: boolean;
  username: string;
}

type Props = { children: React.ReactNode };

export const AuthContext = createContext({} as ContextProps);

const initialState: StateContext = {
  uid: "",
  checking: true,
  authenticated: false,
  username: "",
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [auth, setAuth] = useState(initialState);

  const login = (email: string, password: string): Promise<void> => {
    const authServices = new AuthServices();
    return authServices
      .login(email, password)
      .then((response) => {
        //hacemos login
        const { uuid, token } = response;
        console.log(token);
        setAuth({
          uid: uuid,
          checking: false,
          username: "",
          authenticated: true,
        });
        return Promise.resolve();
      })

      .catch((err) => {
        console.log(err);
        return Promise.reject(err);
      });
  };

  //resetPassword

  //signUp

  //verifyToken

  return (
    <AuthContext.Provider value={{ auth, login }}>
      {children}
    </AuthContext.Provider>
  );
};
