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
        <br/>
        <Grid.Row>
          <p>Social media companies compile users’ data to inform algorithms that aim to match each user to content they are most likely to engage with. This content includes posts made by those they follow as well as targeted advertisements. The more engaged with the content they are, the more likely they are to click on the ads and generate ad revenue for the social media platform. At the same time, they are more likely to spend more time on the platform, generating clicks and, ultimately, more data for the platform to feed into its data-driven algorithms.</p>
          <p>Nathalie Maréchal and Ellery Roberts Biddle, in their 2020 report “It’s Not Just the Content, It’s the Business Model: Democracy’s Online Speech Challenge,” call these data-driven algorithms that optimize what content to show users to optimize engagement “content-shaping algorithms.” Read their description of content-shaping algorithms below. Consider the graphic that follows.</p>
          <p>“While companies describe such algorithms as matching users with the content that is most relevant to them, this relevance is measured by predicted engagement: how likely users are to click, comment on, or share a piece of content. Companies make these guesses based on factors like users’ previous interaction with similar content and the interactions of other users who are similar to them. The more accurate these guesses are, the more valuable the company becomes for advertisers, leading to ever-increasing profits for internet platforms. This is why mass data collection is so central to Big Tech’s business models: companies need to surveil internet users in order to make predictions about their future behavior.”</p>
        </Grid.Row>
        <br/>
        <br/>
        <Grid.Row>
          <Image src="/media-model.png" />
        </Grid.Row>
        <br/>
        <Grid.Row>
          <p>Consider content-shaping algorithms and the image above. How do social media companies benefit from this model? Do users benefit? If so, how? Are users harmed? Again, if so, how?</p>
          <p>Alright. So social media companies track users’ data so they can match them with company they’ll engage with. They’re improving the user experience, right? Maybe, but at what expense?</p>
          <p>Maréchal and Biddle observe that “researchers and journalists have found strong evidence that algorithmic content-shaping systems that are optimized for user engagement prioritize controversial and inflammatory content” (2020). In other words, these content-shaping algorithms aim to direct eye-catching, engaging content at users who will click on it. Unfortunately, disinformation, conspiracy theories, and extremism fall under the category of eye-catching, engaging content, and that dangerous material is further propelled by social media’s algorithms. This, Maréchal and Biddle note, is dangerous for our democracy.</p>
        </Grid.Row>
        <Divider/>
        <Grid.Row>
          <strong style={{ color: "blueviolet" }}>Read the following passages from their 2020 report in relation to the United States’ 2016 and 2020 elections and misleading political advertisements.</strong>
          <ul>
            <li><i>“Virality is often driven by corporate algorithms designed to prioritize views or clicks, in order to raise the visibility of content that appears to inspire user interest. Similarly, when a targeted ad reaches a certain voter, and influences how or whether they vote, it is rarely accidental. It is the result of sophisticated systems that can target very specific demographics of voters in a particular place”</i></li>
            <br/>
            <li><i>“In the 2020 election cycle, we find ourselves in an online environment dominated by algorithms that appear ever-more powerful and effective at spreading content to precisely the people who will be most affected by it, thanks to continued advances in data tracking and analysis. Some campaigns are now using cell phone location data to identify churchgoers, Planned Parenthood patients, and similarly sensitive groups. Many of the risks we’ve articulated in unique examples thus far will be in play, and algorithms likely will multiply their effects for everyone who relies on social media for news and information”</i></li>
          </ul>
        </Grid.Row>
        <br/>
        <Grid.Row>
          <strong style={{ color: "blueviolet" }}>Also note that, with the user data social media platforms accumulate, they are able to allow advertisers to select what audiences to advertise to and who not to advertise to, even based race (Maréchal & Biddle, 2020). Read the following ProPublica article for an example of such a case.</strong>
          <br/>
          <a href="https://www.propublica.org/article/facebook-lets-advertisers-exclude-users-by-race">Link to article</a>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <p>Large tech companies are wary of giving up these ad targeting capabilities in the face of public scrutiny. “Google elected to limit audience targeting for election ads to age, gender, and zip code” (Maréchal & Biddle, 2020), yet, as Ruha Benjamin notes in her book Race After Technology: Abolitionist Tools for the New Jim Code (2019),”in a country as segregated as the United States, geography is a reliable proxy for race.” This, of course, includes zip codes, so has Google really surrendered the ability to target election ads based on race?</p>
          <p>Now ask yourself what social media platforms are doing with your data besides optimizing the user experience. Do these actions have positive effects? For whom? Do they have negative effects? For who?</p>
        </Grid.Row>
        <br/>
        <br/>
        <Grid.Row>
          <p style={{ color: "blueviolet"}}> Click the Continue button at the top right hand corner of the page to move onto the next section. </p>
        </Grid.Row>
      </Grid.Column>
    </Grid>
  )
}