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
              Welcome! Blah blah blah!
            </h1> 
          </Grid.Row>
          <Grid.Row>
            <Button 
              size="large" 
              className="landingButton" 
              content="Go To Learning Module" 
              as={Link}
              to='/learning_module'
            />
          </Grid.Row>
        </Grid>
      </main>
    </div>
  )
};