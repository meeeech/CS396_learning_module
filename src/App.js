import { Grid, Button } from 'semantic-ui-react';
import { useContext } from 'react';
import { AppState } from './context';
import SocialMediaCard from './components/social_media_card'
import ModuleSteps from './components/module_steps';
import './styles/main.css'


function App() {

  const state = useContext(AppState);
  const { step, setStep } = state; 

  const increaseStep = () => {
    if (step < 5) {
      setStep(step+1);
    }
    else {
      setStep(0);
    }
  }

  const selectedStep = () => {
    switch(step) {

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
            <Grid.Column>
              <SocialMediaCard />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={6}> 
              <Button fluid content="Next Step" onClick={increaseStep} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </main>
    </div>
  );
}

export default App;
