import { Route, Switch } from 'react-router-dom';
import './App.css';
import AboutPage from './pages/About/AboutPage';
import HomePage from './pages/Home/HomePage';

function App() {
  return (
    <div className='App'>
      <h1>Heloo again world</h1>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/about'>
          <AboutPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
