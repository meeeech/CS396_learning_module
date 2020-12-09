import { useState } from 'react';
import { Button, Icon, Grid, Header, Divider } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const sites = ['facebook', 'twitter', 'instagram', 'snapchat', 'youtube'];

const siteInfo = {
  default: "Click on a website's icon above to see how they use your data.",
  facebook: 'FACEBOOK DOES THIS MEHMEHMEH',
  twitter: 'TWITTER IS AWESOME THERE IS NOTHING WRONG WITH TWITTER',
  instagram: 'BOOOOOOOO',
  snapchat: 'SNAPCHAT SAVES ALL THOSE NUDES YOU THINK GO AWAY',
  youtube: 'THE PAUL BROTHERS ARE CANCERS GIFTED TO US BY YOUTUBE FUCK YOU YOUTUBE'
}

export default function SocialMediaCard() { 

  const [selectedState, setSelectedState] = useState(siteInfo.default)

  return (
    <Grid centered>
      <Grid.Row>
        <Header>
          How many of these sites do you use? 
          <Header.Subheader> 
            And do you know how THEY might be using YOU? 
          </Header.Subheader>
        </Header>
      </Grid.Row>
      <Grid.Row> 
        {sites.map(site => {
          return (
            <Grid.Column>
              <Button 
                circular 
                as={Icon} 
                name={site} 
                size='huge' 
                onClick={() => setSelectedState(siteInfo[site])}
              />
            </Grid.Column>
          )
        })}
      </Grid.Row>
      <Grid.Row>
        <Header as="h4">
         {selectedState}
        </Header> 
      </Grid.Row>
    </Grid>
  )
}