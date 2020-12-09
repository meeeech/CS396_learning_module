import { Grid, Button, Header } from 'semantic-ui-react';
import { useContext } from 'react';
import { AppState } from './context';
import { BrowserRouter, useHistory } from 'react-router-dom';
import SocialMediaCard from './components/social_media_card'
import ModuleSteps from './components/module_steps';
import './styles/main.css'


function LearningModule() {

  const state = useContext(AppState);
  const { step, setStep } = state; 

  const NextStepButton = () => {
    let history = useHistory();
    const handleClick = () => {
      if (step < 5) {
        setStep(step+1);
      }
      else {
        setStep(1);
        history.push("/end");
      }
    }
    return (
      <Button fluid content="Next Step" onClick={handleClick} />
    );
  }

  const ModuleContent = () => {
    switch(step) {
      case 1: {
        return <SocialMediaCard />
      }
      case 2: {
        return <Grid.Column textAlign="center"><Header content="Test Content" /></Grid.Column>
      }
      default: {
        return <Grid.Column textAlign="center"><Header content="Test Content" /></Grid.Column>
      }
    }
  }

  return (
    <div className="container1">
      <main className="main1">
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
          <Grid.Row>
            <ModuleContent />
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={6}> 
              <NextStepButton />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </main>
    </div>
  );
}

export default LearningModule;
