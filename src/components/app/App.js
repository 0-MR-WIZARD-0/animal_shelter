import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Main from "../../pages/Main";
import Navbar from '../navbar/Navbar';
import SelectedRoom from '../../pages/SelectedRoom'
import OurRoom from '../../pages/OurRoom'
import Page404 from '../../pages/Page404'

function App() {
  return (
    <Router>
      <Navbar/>
        <Switch>
            <Route exact path="/">
                <Main/>
            </Route>
            <Route exact path="/OurRoom">
                <OurRoom/>
            </Route>
            <Route exact path="/SelectedRoom">
                <SelectedRoom/>
            </Route>
            <Route path="*">
                <Page404/>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
