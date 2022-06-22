// import { useContext } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import AboutPage from './pages/About/AboutPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import { useAuthCtx } from './store/AuthContext';
// import AuthProvider, { AuthContext } from './store/AuthContext';

function App() {
  const { isUserLoggedIn } = useAuthCtx();
  // const { isUserLoggedIn } = useContext(AuthContext);
  // console.log('isUserLoggedIn===', isUserLoggedIn);
  return (
    // <AuthProvider>
    <div className='App'>
      <Header />
      <Switch>
        {/* negeneruoti route /about jei nesam prisilogine */}
        <Route path='/about'>
          {isUserLoggedIn ? (
            <AboutPage />
          ) : (
            <>
              <h2>Please login</h2>
              <LoginForm />
            </>
          )}
        </Route>
        <ProtectedRoute path='/contact'>
          <h2>contact</h2>
        </ProtectedRoute>
        <Route exact path='/login'>
          <LoginPage />
        </Route>
        <Route path='/register'>
          <RegisterPage />
        </Route>
        <Route path='*'>
          <h2>404 Not found</h2>
        </Route>
      </Switch>
    </div>
    // </AuthProvider>
  );
}

export default App;
