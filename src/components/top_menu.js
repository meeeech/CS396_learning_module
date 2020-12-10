import { Menu, Icon } from 'semantic-ui-react';

export default function TopBar() { 
  return (
    <Menu style={{ width: "102%"}}>
      <Menu.Item><Icon name='book' /></Menu.Item>
      <Menu.Item><p style={{ color: "blueviolet"}}>Computing, Ethics, & Society Course Learning Module</p></Menu.Item>
      <Menu.Item><p style={{ color: "grey"}}>By Anthony Roytman and Demitra Del Fiacco</p></Menu.Item>
      <Menu.Item><a href="https://docs.google.com/document/d/1LE8tOW8WgnFBi7342KMjztLx1lqkRQVq2EZrxBmM0bo/edit?usp=sharing" target="_blank">Link To Sources</a></Menu.Item>
    </Menu>
  )
}