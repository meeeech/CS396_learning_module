import { createContext, useState } from 'react';

const AppState = createContext(null);
const { Provider } = AppState;

const siteInfo = {
  default: { 
    app: '',
    p1: '',
    p2: '',
    p3: '',
    takeaway: ''
  },
  facebook: { 
    app: 'Facebook',
    pic: '/part1pics/zuckerberg.png',
    p1: 'British political consulting firm Cambridge Analytica used data from 87 million Facebook users to inform a behavioral psychology campaign that targeted American voters during the 2016 election. Thanks to their data analytics on this stolen Facebook data, Cambridge Analytica predicted users’ personalities and targeted them with custom advertisements designed to manipulate them towards voting for Donald Trump for president (Amer & Noujaim, 2019).',
    p2: 'How did Cambridge Analytica access such an enormous swath of data? A quiz. 270,000 Facebook users accessed this quiz, allowing the quiz special permissions through which it accessed data of all the quiz takers’ friends as well as the quiz takers’ (Chang, 2018).',
    p3: '',
    takeaway: 'The data that informed Cambridge Analytica’s weapons-grade propaganda campaign already existed. Facebook had this data, and it’s likely they have this data on you (Amer & Noujaim, 2019).'
  },
  twitter: {
    app: 'Twitter',
    pic: '/part1pics/twitter.png',
    p1: 'Twitter has a number of APIs that allow researchers and developers to access public tweets. The ‘firehose,’ restricted to a limited number of companies and researchers, “theoretically contains all public tweets ever posted and explicitly excludes any tweet that a user chose to make private or ‘protected.’ The ‘gardenhose,’ providing access to about 10% of tweets, and the ‘spritzer,’ providing access to about 1% of tweets are more accessible (boyd & Crawford, 2012). This is all to say that your tweets are accessible and are not unlikely to be used for research.',
    p2: 'Even though these tweets are public, as boyd, Crawford, and Marwick note, there is a difference between “being in public (i.e. sitting in a park) and being public (i.e. actively courting attention)” (boyd & Crawford). Most understand that their followers will see their tweets while missing that researchers and companies with the cash to spend on one of the above mentioned APIs or even anybody with the know-how to build a rudimentary Twitter scraper (https://towardsdatascience.com/how-to-scrape-tweets-from-twitter-59287e20f0f1) can access and store their tweets for future use.',
    p3: 'Who has been among the researchers aggregating this data? Global Science Research, founded by Aleksandr Kogan, the same man who built Cambridge Analytica’s Facebook quiz (Wang, 2018). This is not an assumption of GSR’s intentions, but rather a salient example of who can access your tweets, and what they’ve used your data for in the past.',
    takeaway: 'Even though you knowingly put yourself in the online public sphere, it’s not always clear who exactly is looking and for what purposes.'
  },
  instagram: {
    app: 'Instagram',
    pic: '/part1pics/insta.png',
    p1: 'If you use Instagram, there’s a very good chance Instagram knows your name, what you look like, who you associate with, where you go to school, where you work, where you live, where you eat, whose feeds you consume, when you consume those feeds and for how long, facial recognition data, and the photos you like, post, and are tagged in (Burgess, 2020).',
    p2: 'In 2018, the location based marketing platform Hyp3r was found to be “scraping profiles, copying photos and siphoning off data supposed to be deleted after 24 hours” from “1 million Instagram posts a month… to build up profiles of millions of users” (“Instagram removes ad company after ‘data grab,’” 2019). They even pulled and saved data from Instagram stories, which are supposed to “disappear” after 24 hours.',
    p3: 'Not to mention that Facebook, the company quartered in the center of the Cambridge Analytica data scandal, owns Instagram. A 2019 Pew Research Center study reported that only 29% of survey participants knew that Instagram and WhatsApp are owned by Facebook (Baca, 2019).',
    takeaway: 'Public data is far more public than you might realize, and a lot of valuable information can be extrapolated from it.'
  },
  snapchat: {
    app: 'Snapchat',
    pic: '/part1pics/snap.png',
    p1: 'In 2018, Vox reported that Snapchat was developing an API that would allow third-party apps to access user data to “help personalize other services.” What data Snapchat was planning to grant to these third party apps was not entirely transparent at the time (Wagner 2018).',
    p2: 'Snapchat also built a tool they call SnapLion, which allows Snap (the company that owns Snapchat) to access user information in compliance with “legal requests from law enforcement” (Dreyfuss, 2019). In other words, the same data Snapchat uses to target their customers with ads is also used to aid surveillance headed by law enforcement.',
    p3: 'Not only that, but a few Snapchat employees were caught using SnapLion to “inappropriately access user information.” Yes, Snap since rethought who can access the data access tool, but, as Emily Dreyfuss from Wired reports, “insider spying is always a threat at companies like this,” and tools like SnapLion aren’t out of the ordinary for enormously data-rich companies like Snap (Dreyfuss, 2019).',
    takeaway: 'Sure, Snapchat doesn’t save your nudes. But that doesn’t mean you’re not on the naughty list. You busted, boy.'
  },
  youtube: {
    app: 'Youtube',
    pic: '/part1pics/wojcicki.png',
    p1: 'In 2018, a complaint was filed to the Federal Trade Commision claiming that YouTube was illegally collecting data from children under the age of 13, “including phone numbers and location before then tracking their activity across a number of websites and targeting ads without first gaining parental consent,” as required by the Children’s Online Privacy Protection Act (Meredith, 2018).',
    p2: 'YouTube decided to settle over the complaint in 2019, agreeing to pay $170 million. YouTube also announced that they would stop “personalized and targeted ads” on children’s content, which previously generated roughly $50 million a year (Leskin, 2019).',
    p3: '',
    takeaway: 'The reason technology companies like YouTube will go so far as to break laws to amass so much data is because sometimes that data is worth millions of dollars.'
  }
}

const StateProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [ unfinished, setDisabled ] = useState(true);
  const [selectedState, setSelectedState] = useState(siteInfo.default);
  const [visitedSites, setVisitedSites] = useState({
    facebook: 0,
    twitter: 0, 
    instagram: 0, 
    snapchat: 0, 
    youtube: 0
  });

  const data = { step, setStep, unfinished, setDisabled, selectedState, setSelectedState, visitedSites, setVisitedSites };
  return <Provider value={data}>{children}</Provider>;
};

export { AppState, StateProvider, siteInfo };