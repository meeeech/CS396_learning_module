import './styles/landing.css'
import { Grid, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="landing">
      <main className="mainLanding">
        <Grid centered>
          <Grid.Row>
            <h1 className="titleLanding">
              This is the end! Blah blah blah!
            </h1> 
          </Grid.Row>
          <Grid.Row>
            <Button 
              size="large" 
              class="landingButton" 
              content="Go To The Beginning" 
              as={Link}
              to='/'
            />
          </Grid.Row>
        </Grid>
      </main>
    </div>
  )
};