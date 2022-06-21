import { useContext } from 'react';
import { Route, Switch } from 'react-router';
import { Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import AboutPage from './pages/About/AboutPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import AuthProvider, { AuthContext } from './store/AuthContext';

function App() {
  const { isUserLoggedIn } = useContext(AuthContext);
  console.log('isUserLoggedIn===', isUserLoggedIn);
  return (
    <AuthProvider>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/about'>{!isUserLoggedIn ? <AboutPage /> : <Redirect to='/login'></Redirect>}</Route>
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
    </AuthProvider>
  );
}

export default App;
