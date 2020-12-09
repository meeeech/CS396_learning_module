import { Grid, Button } from 'semantic-ui-react';
import { useContext } from 'react';
import { AppState } from './context';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LearningModule from './learning_module';
import LandingPage from './landing_page';
import ConclusionPage from './conclusion_page';


function App() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/learning_module">
          <LearningModule />
        </Route>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/end">
          <ConclusionPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
};

export default App;
