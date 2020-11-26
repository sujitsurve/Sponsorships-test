import Layout from './hoc/Layout/Layout';
import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import Tiles from './container/tiles/tiles';
import Sponsorships from './container/sponsorships/sponsorships';
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/sponsorship">
          <Sponsorships />
        </Route>
        <Route path="/">
          <Tiles />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
