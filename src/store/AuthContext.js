import { createContext } from 'react';

const AuthContext = createContext({
  login: () => {},
  logout: () => {},
  token: '',
});

AuthContext.displayName = 'AuthContext';

export default AuthContext;
