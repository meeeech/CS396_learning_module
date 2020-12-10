import { Menu, Icon } from 'semantic-ui-react';

export default function TopBar() { 
  return (
    <Menu style={{ width: "102%"}}>
      <Menu.Item><Icon name='book' /></Menu.Item>
      <Menu.Item><p style={{ color: "blueviolet"}}>Computing, Ethics, & Society Course Learning Module</p></Menu.Item>
      <Menu.Item><p style={{ color: "grey"}}>By Anthony Roytman and Demitra Del Fiacco</p></Menu.Item>
    </Menu>
  )
}