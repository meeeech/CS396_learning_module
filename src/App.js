import { Grid, Button, Header, Icon } from 'semantic-ui-react';
import { useContext, useState } from 'react';
import { AppState } from './context';
import { BrowserRouter, useHistory, Route, Switch, Redirect } from 'react-router-dom';
import SocialMediaCard from './components/social_media_card';
import ModuleSteps from './components/module_steps';
import CookieActivityCard from './components/cookie_activity';
import DeepDive from './components/deep_dive';
import TopBar from './components/top_menu';
import ExitQuestions from './components/exit_questions';
import './styles/main.css';


function App() {

  const state = useContext(AppState);
  const { step, setStep, unfinished, setDisabled } = state;
  const routes = ["/", "/deeper-look", "/cookies", "/end"]
  
  const NextStepButton = () => {
    let history = useHistory();
    let text = step < 4 ? "Continue" : "Back to Start";
    const handleClick = () => {
      if (step <= 3) {
        setStep(step+1);
        history.push(routes[step]);
      }
      else {
        setStep(1);
        history.push(routes[0]);
      }
    }
    return (
      <Button style={{backgroundColor: "white", color: "blueviolet"}} onClick={handleClick} compact icon fluid>
        {text}
        <Icon name='arrow right'/>
      </Button>
    );
  }

  const BackButton = () => {
    let history = useHistory(); 
    const handleClick = () => {
      setStep(step-1);
      history.push(routes[step-2]);
    }
    return (
      <Button style={{backgroundColor: "white", color: "blueviolet"}} compact icon onClick={handleClick} fluid>
        <Icon name='arrow left' />
        Previous Section
      </Button>
    )
  }

  return (
    <div className="container1">
      <main className="main1">
        <BrowserRouter>
        <TopBar />
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
            <Grid.Column width="3">
              {step > 1 ? <BackButton /> : null}
            </Grid.Column>
            <Grid.Column width="10" />
            <Grid.Column width="3">
              <NextStepButton />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
              <Switch>
                <Route path="/" exact>
                  <SocialMediaCard />
                </Route>
                <Route path="/deeper-look">
                  <DeepDive />
                </Route>
                <Route path="/cookies">
                  <CookieActivityCard />
                </Route>
                <Route path="/end">
                  <ExitQuestions />
                </Route>
              </Switch>
          </Grid.Row>
        </Grid>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;