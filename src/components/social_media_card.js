import { useState, useContext, useEffect } from 'react';
import { AppState, siteInfo } from '../context';
import { Button, Icon, Grid, Header, Divider, Label, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const sites = ['facebook', 'twitter', 'instagram', 'snapchat', 'youtube'];

export default function SocialMediaCard() { 
  const state = useContext(AppState);
  const { unfinished, setDisabled, visitedSites, setVisitedSites, selectedState, setSelectedState, setStep } = state;
  
  const toggleSite = (site) => {
    setSelectedState(siteInfo[site]);
    console.log(selectedState)
    if (visitedSites[site] === 0) {
      visitedSites[site] += 1;
    }
  };

  useEffect(() => { 
    setStep(1);
  }, [])

  return (
    <Grid centered>
      <Grid.Row>
        <Header>
          How many of these sites do you use? <br/>
          And do you know how THEY might be using YOU? 
        </Header>
      </Grid.Row>
      <Grid.Row style={{ backgroundColor: "#F8F8F8"}}>
        <Header as="h4" style={{ color: "blueviolet"}}>
          Click on a site's logo to learn more about how they can use your data. <br/> 
          Progress to the next section when you have clicked on and read about each site. 
        </Header>
      </Grid.Row>
      <Grid.Row> 
        <Grid.Column width="5" textAlign="center">
          <Button.Group>
          {sites.map(site => {
            return (
                <Button 
                  circular 
                  as={Icon} 
                  name={site} 
                  size='massive' 
                  style={visitedSites[site] === 1 ? { border: "2px solid blueviolet", marginLeft: "10px" } : { marginLeft: "10px"}}
                  onClick={() => toggleSite(site)}
                />
            )
          })}
          </Button.Group>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={1}>
        <Grid.Column width="6">
          <Header as="h4" content={selectedState.app} textAlign="center" />
          <Image src={selectedState.pic} size="large" centered />
          <p style={{ textAlign: "center"}}>{selectedState.caption}</p>
          <br/>
          <p>
            {selectedState.p1}
          </p> 
          <p>
            {selectedState.p2}
          </p> 
          <p>
            {selectedState.p3}
          </p>
          {selectedState.app !== '' ? <div><Divider /><Label color="black" content="THE TAKEAWAY..." /><strong style={{ color: "blueviolet" }}>{selectedState.takeaway}</strong></div> : ''}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}