import { useState, useContext, useEffect } from 'react';
import { AppState } from '../context';
import { Grid, Input, Select, Form, Header, Divider, Segment, Image, Embed, Button } from 'semantic-ui-react';

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
  const { setStep, step } = state;
  const routes = ["/", "/deeper-look", "/cookies", "/end"]

  useEffect(() => { 
    setStep(3);
    checkCookie();
  }, [])

  return (
    <Grid centered columns={1}> 
      <Grid.Column width="6" textAlign="centered">
        <Grid.Row>
          <Header dividing>
            Internet Cookies
            <Header.Subheader content="You can't eat these ones :(" />
          </Header>
        </Grid.Row>
        <br/>
        <Grid.Row>
          <p>When you visit a website, it has the option of assigning you a unique ID, which is then saved by your browser.</p>
          <p>The website associates your activity and preferences with your ID and stores that information on a database.</p>
          <p>When you visit it next time through your browser, the website looks at your browser’s ID (your cookie) and uses it to remember your activity and preferences.</p>
          <strong style={{ color: "blueviolet" }}>Give it a try here!</strong>
          <p>In the box below, fill in the Name and Favorite Color fields, and then click Make a Cookie!
          We promise we don't want anything to do with your data — feel free to lie about your name (or favorite color).</p>
        </Grid.Row>
        <br/>
        <Segment>
          <Grid.Row>
            <Header 
              textAlign="center" 
              content={message} 
              style={{ color: headercolor}}
            />
          <Grid.Row>
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
                placeholder='Black'
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
        </Segment>
        <br/>
        <Grid.Row>
          {disable ? 
          <Header as="h4" style={{ color: "blueviolet"}}>
            Now, refresh the page, or navigate to a different site and then come back to this page.
            You'll see that we remembered your name and favorite color, thanks to the cookie we just made!
            <br/>
            <br/>
          </Header>
          : ''}
        </Grid.Row>
        <Grid.Row>
          <p>
            On this website, we send you a cookie. On your end, your browser, be it Chrome, Firefox, or something else, saves it. On our end, we save your cookie in our database and associate it with the name and color you give us. 
          </p>
          <p>
            When you reload the webpage, your browser sends us back your cookie, and we’re able to reference it in our database to see what you told us. That way, we can remember your name and favorite color. If you delete cookies in your browser, we’ll forget!
          </p>
        </Grid.Row>
        <br/>
        <Grid.Row>
          <Image src="/cookiegraphic.png" size="large" label="Cookie Graphic"/>
        </Grid.Row>
        <br/>
        <br/>
        <Grid.Row>
          <Header content="What else can cookies do?" dividing />
        </Grid.Row>
        <br/>
        <Grid.Row>
          <p>Even though we just used cookies to remember your name and favorite color, cookies can be used to remember a lot more about you - any information you voluntarily give like your address, password, and credit card information.</p>
          <p>Cookies can even be used to remember what you click on and your browsing history. By now, you likely realize that dangerous authority and powerful insights can be made with this much data.</p>
        </Grid.Row>
        <br/>
        <Grid.Row>
          <strong style={{color: "blueviolet"}}>Watch this short video about cookies:</strong>
          <Embed id='I01XMRo2ESg' source='youtube' active autoplay={false} />
        </Grid.Row>
        <br/>
        <Grid.Row>
          <p>Think about the video’s final remarks. What information are the websites you most frequently visit using cookies to store? What are they using that information for?</p>
          <p>Remember that cookies are just a tiny piece of the data tracking puzzle! There’s a lot more to it. This demo is just to show you how easy it can be to remember your information.</p>
        </Grid.Row>
      </Grid.Column>
    </Grid>
  )
}