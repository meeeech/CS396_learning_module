import { Header, Grid, Image, Embed, Button, Icon, Divider } from 'semantic-ui-react';
import { useEffect, useContext } from 'react';
import { AppState } from '../context';

const sites = [
  { name: 'facebook', link: 'https://www.vox.com/policy-and-politics/2018/3/23/17151916/facebook-cambridge-analytica-trump-diagram'},
  { name: 'twitter', link: 'https://towardsdatascience.com/how-to-scrape-tweets-from-twitter-59287e20f0f1'},
  { name: 'instagram', link: 'https://www.wired.com/story/how-to-stop-instagram-from-tracking-everything-you-do/'},
  { name: 'snapchat', link: 'https://www.vice.com/en/article/xwnva7/snapchat-employees-abused-data-access-spy-on-users-snaplion'},
  { name: 'youtube', link: 'https://www.cnbc.com/2018/04/09/googles-youtube-illegally-collects-childrens-data-privacy-groups-claim.html'}
]

export default function DeepDive() {

  const state = useContext(AppState);
  const { setStep } = state;

  useEffect(() => { 
    setStep(2);
  }, [])

  return (
    <Grid columns={1}>
      <Grid.Column width="10" textAlign="centered">
        <Grid.Row>
          <Header content="A Deeper Look" dividing />
        </Grid.Row>
        <br/>
        <Grid.Row>
          <p>To continue our deep dive into data tracking, let’s ask ourselves some preliminary questions.</p>
          <ol>
            <li>What is Big Data?</li>
            <br/>
            <li>Do you use social media often? If so, what do you think the social media platforms you use know about you? </li>
            <br/>
            <li>Pick your favorite social media platform among the following and read the associated article that clicking on its icon leads you to.</li>
            <br/>
            <Button.Group>
            {sites.map(site => {
              return (
                  <Button 
                    circular 
                    as={Icon} 
                    name={site.name} 
                    size='massive' 
                    style={{ marginLeft: "10px"}}
                    onClick={() => window.open(site.link)}
                  />
              )
            })}
            </Button.Group>
            <br/>
            <br/>
            <li>Answer question 2 again. What do you think social media platforms you use know about you?</li>
          </ol>
        </Grid.Row>
        <br/>
        <br/>
        <Grid.Row>
          <Header content="Let's Talk About Big Data" dividing />
        </Grid.Row>
        <br/>
        <Grid.Row>
          <p>Before we continue further, let’s consider a stronger definition of Big Data. Here’s some food for thought from danah boyd and Crawford’s article “Critical Questions for Big Data” (2012).</p>
          <p>“Big Data is, in many ways, a poor term. As Manovich (2011) observes, it has been used in the sciences to refer to data sets large enough to require supercomputers, but what once required such machines can now be analyzed on desktop computers with standard software. There is little doubt that the quantities of data now available are often quite large, but that is not the defining characteristic of this new data ecosystem. In fact, some of the data encompassed by Big Data (e.g. all Twitter messages about a particular topic) are not nearly as large as earlier data sets that were not considered Big Data (e.g. census data). Big Data is less about data that is big than it is about a capacity to search, aggregate, and cross-reference large data sets.</p>
          <p>We define Big Data as a cultural, technological, and scholarly phenomenon that rests on the interplay of:</p>
            <ol>
              <li><strong>Technology:</strong> maximizing computation power and algorithmic accuracy to gather, analyze, link, and compare large data sets.</li>
              <br/>
              <li><strong>Analysis:</strong> drawing on large data sets to identify patterns in order to make economic, social, technical, and legal claims.</li>
              <br/>
              <li><strong>Mythology:</strong> the widespread belief that large data sets offer a higher form of intelligence and knowledge that can generate insights that were previously impossible, with the aura of truth, objectivity, and accuracy.</li>
            </ol>
          <p>Let’s pause. Ask yourself: is Big Data a good or bad thing? Given what we’ve discovered about what some of our favorite social media platforms do with our data, our first instinct might be to cast Big Data into the same basket of dystopia as 1984, autocracy, and the oversteppings of an insidious surveillance state. Before we make that leap, consider that Big Data can, with the proper attributions to ethics, privacy, context, and transparency lead to fascinating insights. But are we taking those precautions?</p>
          <Divider />
          <strong style={{ color: "blueviolet"}}>Read the following article by Wired’s editor-in-chief Chris Anderson about what he dotingly calls “The Petabyte Age.” As you do so, think about boyd’s and Crawford’s definition of Big Data.</strong>
          <br/>
          <a href="https://www.wired.com/2008/06/pb-theory/">https://www.wired.com/2008/06/pb-theory/</a>
            <ol>
              <li><strong>Technology:</strong> What technology does Anderson talk about? How does he foresee this technology being used, and what does he foresee these technologies replacing?</li>
              <br/>
              <li><strong>Analysis:</strong> In Anderson’s examples, what patterns are identified? What claims are made? Through what methods are these patterns and claims arrived at, and to what degree do you trust them?</li>
              <br/>
              <li><strong>Mythology:</strong> Would you place this article in the Big Data mythology? If so, how would you categorize it? As hype? As fear? Does this myth strike you as optimistic or pessimistic?</li>
            </ol>
          <p>So, are we taking the important precautions when it comes to Big Data?</p>
          <p>If Anderson’s article and the Big Data arrogance it portrays means anything, then probably not. Anderson comes a little too close to naming Big Data as the ultimate answer to all of our questions, invalidating and deemphasizing other forms of thinking that might be more humanistic and subjective and thus offer their own valuable insights.</p>
        </Grid.Row>
        <br/>
        <br/>
        <Grid.Row>
          <Header content="But what about social media and data tracking?" dividing />
        </Grid.Row>
        <br/>
        <Grid.Row>
          <Header content="Public Data" as="h4" />
        </Grid.Row>
        <Grid.Row>
          <p>By now, you probably understand that if you use social media, your data is on social media. Let’s start with the data you know is on social media and that you’re okay with being public. These might be your status updates on Twitter, your tweets on Twitter, or your posts on Instagram.</p>
          <p>Ask yourself: Who sees my public data? Is it truly everybody? Unless you’re a celebrity, probably not. You probably expect your public data to be available to a list of friends, family, and maybe mutual friends. And if anybody not on that list comes across your public posts, they probably aren’t interested enough to stop and eavesdrop. But that’s not entirely true, because Big Data researchers are interested. Think about the following quote from boyd’s and Crawford’s article (2012).</p>
          <p>“Big Data researchers rarely acknowledge that there is a considerable difference between being in public (i.e. sitting in a park) and being public (i.e. actively courting attention).”</p>
          <p>boyd and Crawford draw offline equivalents to “being in public” versus “being public.” Can you come up with online equivalents to “being in public” versus “being public?” Is your public data “in public” or “being public?”</p>
          <p>The fact of the matter is that to some Big Data researchers - perhaps those with as much gusto as Chris Anderson - these are the same thing. Those researchers probably view your public data as “being public,” meaning that it’s perfectly ethical to access it. Third parties can even save your 24 hour Instagram stories and hold onto them well after they expire on your feed. These researchers are motivated by great monetary reasons, but more on that later. First, let’s talk about the data you don’t knowingly make public.</p>
        </Grid.Row>
        <br/>
        <Grid.Row>
          <Header content="Not-So-Public Data" as="h4" />
        </Grid.Row>
        <Grid.Row>
          <p>In 2018, whistleblowers and journalists revealed that British political consulting firm Cambridge Analytica had stored millions of users’ data and used it to build psychological profiles on them without their knowledge. Are your public posts revealing enough for a third party to build your psychological profile?</p>
          <p>In the next part of this learning module, we show you how, through cookies, websites can harvest the data you produce just by browsing the web.</p>
          <p>The links you click, the posts you like, who’s on your friends list, and more have value to some of the largest tech companies, but knowing what you know now, do you think you can assume exactly what data they have on you? I certainly can’t. This leads to an unequal power structure, in which the user has limited access to the data they produce while social media companies get to collect that data with limited transparency and profit enormously. Consider the following passage from boyd and Crawford (2012).</p>
          <p>“Manovich (2011) writes of three classes of people in the realm of Big Data: ‘those who create data (both consciously and by leaving digital footprints), those who have the means to collect it, and those who have expertise to analyze it’. We know that the last group is the smallest, and the most privileged: they are also the ones who get to determine the rules about how Big Data will be used, and who gets to participate.”</p>
          <p>What class in the “realm of Big Data” do you think you’re in? Try to think of a member in each Big Data class.</p>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <strong style={{ color: "blueviolet"}}>Watch this 2-minute video about Massachusetts’ 2020 Ballot Question 1 and read the following article.</strong>
          <br/>
          <a href="https://www.wbur.org/news/2020/09/14/2020-ballot-question-1-right-to-repair-explainer"> Link to article </a>
        </Grid.Row>
        <br/>
        <Grid.Row>
          <Embed id='Iayi5t3YT90' source='youtube' active autoplay={false} size="medium"/>
        </Grid.Row>
        <Grid.Row>
          <ul>
            <li>What power structures are at play here?</li>
            <li>Who are the data-rich and who are the data-poor?</li>
            <li>What benefits does being data-rich have in this scenario?</li>
            <li>What does Question 1 aim to do, and why?</li>
          </ul>
        </Grid.Row>
        <br/>
        <br/>
        <Grid.Row>
          <Header content="Why Are Social Media Companies After Your Data?" dividing />
        </Grid.Row>
      </Grid.Column>
    </Grid>
  )
}