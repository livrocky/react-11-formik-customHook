import { useContext } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import AboutPage from './pages/About/AboutPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

function App() {
  const { isUserLoggedIn } = useContext();
  console.log('isUserLoggedIn===', isUserLoggedIn);
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/about'>
          <AboutPage />
        </Route>
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
  );
}

export default App;
