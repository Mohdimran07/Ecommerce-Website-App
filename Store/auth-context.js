import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
});

export const AuthContextProvider = (props) => {
  
  const [token, setToken] = useState(null);

  const userIsLoggedIn = !!token;

  const loginHandler = (token, email) => {
    localStorage.setItem('userId', email)
    setToken(token);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
