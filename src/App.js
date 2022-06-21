import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import AboutPage from './pages/About/AboutPage';
import LoginPage from './pages/LoginPage/LoginPage';
import AuthContext from './store/AuthContext';

function App() {
  return (
    <AuthContext.Provider value={'James'}>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/about'>
            <AboutPage />
          </Route>
          <Route exact path='/login'>
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
