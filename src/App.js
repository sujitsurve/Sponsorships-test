import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink 
} from "react-router-dom";
import Tiles from './container/tiles/tiles';
import Sponsorships from './container/sponsorships/sponsorships'
function App() {
  return (

    <Router>
      <div>
        <nav>
          <ul className="topnav sticky">
            <li>
              <NavLink exact={true}  to="/">Tiles</NavLink >
            </li>
            <li>
              <NavLink  to="/sponsorship">Sponsorship</NavLink >
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/sponsorship">
            <Sponsorships />
          </Route>
          <Route path="/">
            <Tiles />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
