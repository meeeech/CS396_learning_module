import { Grid, Button, Header } from 'semantic-ui-react';
import { useContext, useState } from 'react';
import { AppState } from './context';
import { BrowserRouter, useHistory, Route, Switch, Redirect } from 'react-router-dom';
import SocialMediaCard from './components/social_media_card';
import ModuleSteps from './components/module_steps';
import CookieActivityCard from './components/cookie_activity';
import './styles/main.css';


function App() {

  const state = useContext(AppState);
  const { step, setStep, unfinished, setDisabled } = state;
  const routes = ["/", "/deeper-look", "/cookies", "/end"]
  
  const NextStepButton = () => {
    let history = useHistory();
    const handleClick = () => {
      if (step <= 3) {
        setStep(step+1);
        history.push(routes[step]);
        if (step === 3) setDisabled(true);
      }
    }
    return (
      <Button content="Continue To Next Section" disabled={unfinished} onClick={handleClick} />
    );
  }

  const BackButton = () => {
    let history = useHistory(); 
    const handleClick = () => {
      setStep(step-1);
      history.push(routes[step-2]);
    }
    return (
      <Button compact content="Previous Section" icon='arrow left' onClick={handleClick} />
    )
  }

  return (
    <div className="container1">
      <main className="main1">
        <BrowserRouter>
        <Grid centered>
          <Grid.Row style={{backgroundColor: "blueviolet"}}>
            <Grid.Column>
              <h1 className="title1">
                Data Tracking Learning Module
              </h1>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={{backgroundColor: "blueviolet"}}>
            <ModuleSteps />
          </Grid.Row>
          <Grid.Row style={{backgroundColor: "blueviolet"}}>
            {step > 1 ? <BackButton /> : null}
          </Grid.Row>
          <Grid.Row>
              <Switch>
                <Route path="/" exact>
                  <SocialMediaCard />
                </Route>
                <Route path="/deeper-look">
                  <Header content="HEY" />
                </Route>
                <Route path="/cookies">
                  <CookieActivityCard />
                </Route>
                <Route path="/end">
                  <Header content="HEY" />
                </Route>
              </Switch>
          </Grid.Row>
          <Grid.Row>
            <NextStepButton />
          </Grid.Row>
        </Grid>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;