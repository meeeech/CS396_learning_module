import { Icon, Step, Header } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";

export default function ModuleSteps() {
  return(
    <Step.Group style={{ textAlign: "left"}}>
      <Step active>
        <Icon as={Header}>1</Icon>
        <Step.Content>
          <Step.Title>Introduction</Step.Title>
          <Step.Description>Do you use social media?</Step.Description>
        </Step.Content>
      </Step>

      <Step>
        <Icon as={Header}>2</Icon>
        <Step.Content>
          <Step.Title>An In Depth Look</Step.Title>
          <Step.Description>Why does this matter?</Step.Description>
        </Step.Content>
      </Step>

      <Step>
        <Icon as={Header}>3</Icon>
        <Step.Content>
          <Step.Title>An Example</Step.Title>
          <Step.Description>Cookies!</Step.Description>
        </Step.Content>
      </Step>

      <Step>
        <Icon as={Header}>4</Icon>
        <Step.Content>
          <Step.Title>Try It Yourself</Step.Title>
          <Step.Description>Check out what your cookies look like</Step.Description>
        </Step.Content>
      </Step>

      <Step>
        <Icon as={Header}>5</Icon>
        <Step.Content>
          <Step.Title>What Have We Learned</Step.Title>
          <Step.Description>An overview</Step.Description>
        </Step.Content>
      </Step>
    </Step.Group>
  )
}