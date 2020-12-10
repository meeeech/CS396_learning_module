import { useState, useContext, useEffect } from 'react';
import { AppState } from '../context';
import { Grid, Input, Select, Form, Header, Divider } from 'semantic-ui-react';

const colorOptions = [
  { key: 0, value: "#FF0000", text: "Red" },
  { key: 1, value: "#FF8000", text: "Orange" },
  { key: 2, value: "#FFFF00", text: "Yellow" },
  { key: 3, value: "#00FF00", text: "Green" },
  { key: 4, value: "#0000FF", text: "Blue" },
  { key: 5, value: "#8000FF", text: "Purple" },
  { key: 6, value: "#FF00FF", text: "Pink" },
]

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


export default function CookieActivityCard() {

  const [username, setUsername] = useState("");
  const [color, setColor] = useState("#000000");
  const [headercolor, setHeadercolor] = useState("#000000")
  const [disabled, setDisabled] = useState(false);
  const [message, setMessage] = useState("Hmm, we don't know who you are.");
  const [disable, setDisable] = useState(false);

  const createCookie = () => {
    setCookie("username", username, 1);
    setCookie("favcolor", color, 1);
    setDisable(true);
  };

  const checkCookie = () => {
    var user = getCookie("username");
    var selectedColor = getCookie("favcolor");

    if (user !== "") {
      setHeadercolor(selectedColor);
      setMessage(`Hey there, ${user}!`);
    }
  }

  const state = useContext(AppState);
  const { setStep } = state;

  useEffect(() => { 
    setStep(3);
    checkCookie();
  }, [])

  return (
    <Grid centered columns={1}> 
      <Grid.Column width="6" textAlign="centered">
        <Grid.Row>
          <Header 
            textAlign="center" 
            content={message} 
            style={{ color: headercolor}}
          />
        <Grid.Row>
          <Divider />
        </Grid.Row>
          <Form>
            <Form.Input 
              fluid 
              label='Your Name' 
              placeholder='Firstname Lastname' 
              onChange={e => setUsername(e.target.value)}
            />
            <Form.Select 
              fluid 
              label='Favorite Color' 
              placeholder='Red'
              options={colorOptions}
              onChange={(e, {value}) => setColor(value)}
            />
            <Form.Button 
              fluid style={{ backgroundColor: "blueviolet", color: "white"}} 
              content="Make a Cookie!" 
              onClick={createCookie}
              disabled={disable}
            />
          </Form>
        </Grid.Row>
        <br/>
        <Grid.Row>
          {disable ? 
          <Header as="h4">
            Now, refresh the page, or navigate to a different site and then come back to this page.
            <br/>
            You'll see that we remembered your name and favorite color, thanks to the cookie we just made!
          </Header>
          : ''}
        </Grid.Row>
      </Grid.Column>
    </Grid>
  )
}