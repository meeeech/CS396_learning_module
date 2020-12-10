import { Icon, Step, Header } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";
import { useContext } from 'react';
import { AppState } from '../context';

export default function ModuleSteps() {

  const state = useContext(AppState);
  const { step } = state; 

  return(
    <Step.Group style={{ textAlign: "left"}}>
      <Step active={step===1}>
        <Icon as={Header}>1</Icon>
        <Step.Content>
          <Step.Title>Introduction</Step.Title>
          <Step.Description>Do you use social media?</Step.Description>
        </Step.Content>
      </Step>

      <Step active={step===2}>
        <Icon as={Header}>2</Icon>
        <Step.Content>
          <Step.Title>An In Depth Look</Step.Title>
          <Step.Description>Why does this matter?</Step.Description>
        </Step.Content>
      </Step>

      <Step active={step===3}>
        <Icon as={Header}>3</Icon>
        <Step.Content>
          <Step.Title>An Example</Step.Title>
          <Step.Description>Cookies!</Step.Description>
        </Step.Content>
      </Step>

      <Step active={step===4}>
        <Icon as={Header}>4</Icon>
        <Step.Content>
          <Step.Title>What Have We Learned</Step.Title>
          <Step.Description>An overview</Step.Description>
        </Step.Content>
      </Step>
    </Step.Group>
  )
}