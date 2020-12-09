import { Grid, Divider } from 'semantic-ui-react';
import SocialMediaCard from './components/social_media_card'
import ModuleSteps from './components/module_steps';
import './styles/main.css'


function App() {
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
        </Grid>
      </main>
    </div>
  );
}

export default App;
