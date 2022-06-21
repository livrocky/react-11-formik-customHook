import { createContext, useState } from 'react';

export const AuthContext = createContext({
  login: () => {},
  logout: () => {},
  token: '',
});

AuthContext.displayName = 'AuthContext';

function AuthProvider(props) {
  const [token, setToken] = useState(null);
  //infered value / calculated value
  const isUserLoggedIn = !token ? false : true;

  function login(userToken) {
    setToken(userToken);
  }
  function logout() {
    setToken(null);
  }

  const ctx = {
    login,
    logout,
    isUserLoggedIn,
  };

  return <AuthContext.Provider value={ctx}>{props.children}</AuthContext.Provider>;
}

export default AuthProvider;
