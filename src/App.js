import { Route, Switch } from 'react-router';
import './App.css';
import AboutPage from './pages/About/AboutPage';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/about'>
          <AboutPage />
        </Route>
        <Route exact path='/login'>
          <LoginPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
