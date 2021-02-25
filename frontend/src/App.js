import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutPage from './Components/AboutPage';
import HomePage from './Components/HomePage';
import NavBar from './Components/NavBar';
import './Resources/App.css';


function App() {
  return (

    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
