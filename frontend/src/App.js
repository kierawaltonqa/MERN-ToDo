import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutPage from './Components/AboutPage';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import Navigation from './Components/Navigation';
import './Resources/App.css';


function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
