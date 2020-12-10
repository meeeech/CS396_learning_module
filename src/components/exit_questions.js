import { useContext, useEffect } from 'react';
import { AppState } from '../context';
import { Grid, Header, Divider } from 'semantic-ui-react';

export default function ExitQuestions() { 

  const state = useContext(AppState);
  const { setStep } = state; 

  useEffect(() => { 
    setStep(4);
  }, [])

  return (
    <Grid  columns={1}>
      <Grid.Column textAlign="centered" width="8">
        <Grid.Row>
          <Header content="Exit Questions" dividing />
        </Grid.Row>
        <br/>
        <Grid.Row>
          <p>After all that, here are some questions to review what we've learned and keep you thinking about Big Data outside of this learning module.</p>
        </Grid.Row>
        <br/>
        <Grid.Row>
          <Header content="1" as="h2" />
          <p>As previously discussed, because many content-shaping algorithms prioritize engaging content, they inadvertently promote controversial, inflammatory, and dangerous content. Think about this phenomenon in relation to Chris Anderson’s article “The End of Theory: The Data Deluge Makes the Scientific Method Obsolete.”</p>
          <i>“This is a world where massive amounts of data and applied mathematics replace every other tool that might be brought to bear. Out with every theory of human behavior, from linguistics to sociology. Forget taxonomy, ontology, and psychology. Who knows why people do what they do? The point is they do it, and we can track and measure it with unprecedented fidelity. With enough data, the numbers speak for themselves.”</i>
          <p>Here, Anderson dismisses numerous sciences and ways of thinking in favor of Big Data analysis.</p>
          <strong style={{color: "blueviolet"}}>How does this attitude connect to the damage content-shaping algorithms can cause? How does a hyper focus on data and a de-emphasis of other fields of study lead to dangerous algorithms? How can we use other ways of thinking to inform how we collect and interpret data?</strong>
        </Grid.Row>
        <Divider />
        <br/>
        <Grid.Row>
          <Header content="2" as="h2" />
          <p>Maréchal and Biddle note that the cycle at the center of social media’s business model - using users’ data to inform content-shaping algorithms to engage users more to get them to generate more data which further informs content-shaping algorithms - is “part of a market ecosystem that Harvard Professor Shoshana Zuboff has labeled surveillance capitalism.”</p>
          <strong style={{color: "blueviolet"}}>Why might Maréchal and Biddle make this observation? What about content-shaping algorithms fits the bill of “surveillance capitalism?” Is data tracking essential to such a system? Knowing what you know now, what might be the dangers of surveillance capitalism?</strong>
        </Grid.Row>
        <Divider />
        <br/>
        <Grid.Row>
          <Header content="3" as="h2" />
          <strong style={{color: "blueviolet"}}>What are cookies (not the kind you eat)? How can they be used to remember you and store your data? What are third-party cookies, and how do they differ from the cookie this website sent you?</strong>
        </Grid.Row>
        <Divider />
        <br/>
        <Grid.Row>
          <Header content="4" as="h2" />
          <strong style={{color: "blueviolet"}}>What are some ways in which your perception of social media companies have changed? What about the Internet in general? Will what you learned during this module influence any changes in your online behavior?</strong>
        </Grid.Row>
        <Divider />
        <br/>
        <Grid.Row>
          <Header content="5" as="h2" />
          <strong style={{color: "blueviolet"}}>Why are social media companies so interested in your data?</strong>
        </Grid.Row>
      </Grid.Column>
    </Grid> 
  )

}