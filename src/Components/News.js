import React, { Component } from "react";
import NewsCard from "./NewsCard";

export class News extends Component {
  articles = [
    {
      source: { id: "reuters", name: "Reuters" },
      author: "Nidal Al-Mughrabi, Emily Rose",
      title:
        "Israeli military says Gazans can still evacuate south, clashes at Lebanon border - Reuters",
      description:
        "The Israeli military said on Sunday it would continue to allow Gazans to evacuate south ahead of an expected ground assault by its forces on the Gaza Strip in retaliation for unprecedented attacks by Hamas militants eight days ago.",
      url: "https://www.reuters.com/world/middle-east/gaza-braces-israeli-ground-assault-fears-conflict-spreading-grow-2023-10-15/",
      urlToImage:
        "https://www.reuters.com/resizer/7Ob9fmDYfsgSRc9LxAE8T_VIDVw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/HLQEIHGHHFMIRKNXBKQMINR3QQ.jpg",
      publishedAt: "2023-10-15T11:20:38Z",
      content:
        "GAZA/JERUSALEM, Oct 15 (Reuters) - The Israeli military said on Sunday it would continue to allow Gazans to evacuate south ahead of an expected ground assault by its forces on the Gaza Strip in retal… [+6003 chars]",
    },
    {
      source: { id: null, name: "The Times of Israel" },
      author: null,
      title:
        "In coded doc, Hamas instructed terrorists to kill civilians, take captives – report - The Times of Israel",
      description:
        "Document found in vehicle used by Gaza-ruling terror group in devastating attack said to include code words for massacring people or using those taken captive as human shields",
      url: "https://www.timesofisrael.com/in-coded-doc-hamas-instructed-terrorists-to-kill-civilians-take-captives-report/",
      urlToImage:
        "https://static.timesofisrael.com/www/uploads/2023/10/8BA3ADCB-72C5-4E43-9799-73CB021DBFA1_1_201_a-e1697349901809-1024x640.jpeg",
      publishedAt: "2023-10-15T11:15:00Z",
      content:
        "A coded document found in a vehicle used by Hamas terrorists in their shock assault on Israel showed they were instructed to massacre civilians and take captives, according to a television report Sat… [+4839 chars]",
    },
    {
      source: { id: null, name: "INSIDER" },
      author: "Eve Crosbie",
      title:
        "Taylor Swift and Travis Kelce just hard-launched their relationship: photos - Insider",
      description:
        "Putting to bed speculation that their relationship is a PR stunt, the pair were seen holding hands after enjoying a date night in New York City.",
      url: "https://www.insider.com/taylor-swift-travis-kelce-photographed-holding-hands-dinner-date-snl-2023-10",
      urlToImage:
        "https://i.insider.com/652ba6b46561dd877e7ae113?width=1200&format=jpeg",
      publishedAt: "2023-10-15T11:14:00Z",
      content:
        "It sure looks like Taylor Swift and Travis Kelce just hard-launched their relationship.\r\nSeemingly putting to bed speculation that their relationship is a PR stunt, the singer, 33, and the Kansas Cit… [+2165 chars]",
    },
    {
      source: { id: null, name: "CBS Sports" },
      author: "",
      title:
        "NFL Week 6 odds, expert picks, best bets, teasers, spreads, survivor picks, how to watch, streaming, more - CBS Sports",
      description:
        "CBSSports.com and SportsLine break down every single NFL game in Week 6",
      url: "https://www.cbssports.com/nfl/news/nfl-week-6-odds-expert-picks-best-bets-teasers-spreads-survivor-picks-how-to-watch-streaming-more/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2023/10/13/0fd27797-0506-40cc-96e5-bdf7c8672a87/thumbnail/1200x675/013bc3ca6a47da4ba7f82c0c548204d4/goffnew.jpg",
      publishedAt: "2023-10-15T11:00:01Z",
      content:
        "Another week of NFL action is here, which means more surprises are surely in store. The first five weeks, after all, have already given us the Cowboys falling victim to a 49ers beatdown, the Jets rou… [+11146 chars]",
    },
    {
      source: { id: "politico", name: "Politico" },
      author: null,
      title:
        "In Hamas' horrific killings, Israeli trauma over the Holocaust resurfaces - POLITICO",
      description:
        "“This is a massacre. This is a pogrom,” said Maj. Gen. Itai Veruv, leader of forces that cleared one of the besieged villages.",
      url: "https://www.politico.com/news/2023/10/15/hamas-horrific-killings-israeli-trauma-holocaust-00121599",
      urlToImage:
        "https://static.politico.com/0c/7c/b48dbda9432f9444b7146d47b495/israel-palestinians-week-of-war-photo-gallery-91111.jpg",
      publishedAt: "2023-10-15T10:37:41Z",
      content:
        "I have been strict about not using the word Shoah in any context other than the Holocaust, political commentator Ben Caspit wrote in the daily Maariv, referring to the Holocaust by its Hebrew name. W… [+5142 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "Linette Lopez",
      title:
        "China's Economy Is Going Bust. That Should Terrify US Businesses. - Business Insider",
      description:
        "China has reached the end of its economic boom. What comes next should worry every American business — and the rest of the world.",
      url: "https://www.businessinsider.com/china-xi-jinping-economy-real-estate-debt-bust-american-companies-2023-10",
      urlToImage:
        "https://i.insider.com/6529b88855f52b01b35fa95d?width=1200&format=jpeg",
      publishedAt: "2023-10-15T10:22:00Z",
      content:
        "We've reached the end of an era for the Chinese economy.\r\nFor the past three decades, China has been on the upswing of a supercycle that saw an almost uninterrupted expansion of the country's capacit… [+16658 chars]",
    },
    {
      source: { id: "al-jazeera-english", name: "Al Jazeera English" },
      author: "Al Jazeera",
      title:
        "Afghanistan’s Herat province hit by third earthquake in nearly a week - Al Jazeera English",
      description:
        "At least one person reported dead and nearly 100 injured after a magnitude 6.3 earthquake hits Herat province.",
      url: "https://www.aljazeera.com/news/2023/10/15/afghanistans-herat-province-hit-by-third-earthquake-in-nearly-a-week",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2023/10/AP23282801015079-1696921759.jpg?resize=1920%2C1440",
      publishedAt: "2023-10-15T10:20:40Z",
      content:
        "The western province of Herat in Afghanistan has been hit with a magnitude 6.3 earthquake its third since powerful quakes on October 8 killed more than 2,000 people.\r\nThe United States Geological Sur… [+2325 chars]",
    },
    {
      source: { id: null, name: "FRANCE 24 English" },
      author: "NEWS WIRES",
      title:
        "Putin sees gains on eastern Ukraine front lines, including industrial hub Avdiivka - FRANCE 24 English",
      description:
        "Russian forces have made gains in their Ukraine offensive, President Vladimir Putin said Sunday, including in Avdiivka, a symbolic industrial hub where fighting has been fierce.",
      url: "https://www.france24.com/en/europe/20231015-putin-sees-gains-on-front-lines-in-eastern-ukraine-including-industrial-hub-avdiivka",
      urlToImage:
        "https://s.france24.com/media/display/d8175276-6b41-11ee-aca2-005056bfb2b6/w:1280/p:16x9/2023-10-12T083514Z_1377154276_RC2EQ3AD0D6H_RTRMADP_3_UKRAINE-CRISIS-AVDIIVKA-ZELENSKIY.JPG",
      publishedAt: "2023-10-15T10:08:59Z",
      content:
        'Russian forces have made gains in their Ukraine offensive, President Vladimir Putin said Sunday, including in Avdiivka, a symbolic industrial hub where fighting has been fierce.  "Our troops are impr… [+2872 chars]',
    },
    {
      source: { id: "usa-today", name: "USA Today" },
      author: "Sara Chernikoff",
      title:
        "How much do UAW workers make? A look at hourly wages across US states - USA TODAY",
      description:
        "UAW workers are striking for better pay, among other benefits. Here's a look at how UAW hourly wages compare with other workers in striking states.",
      url: "https://www.usatoday.com/story/money/cars/2023/10/14/how-much-uaw-workers-earn-comparison/71159764007/",
      urlToImage:
        "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/10/13/USAT/71168320007-gty-1719490817.jpg?crop=3997,2249,x0,y266&width=3200&height=1801&format=pjpg&auto=webp",
      publishedAt: "2023-10-15T10:08:02Z",
      content:
        "With no slowdown in sight, thousands of members of the United Auto Workers Union are entering their fifth week of striking against the Detroit Three automakers.  \r\nMost recently, 8,700 workers at For… [+4081 chars]",
    },
    {
      source: { id: null, name: "TMZ" },
      author: "TMZ Staff",
      title:
        "Tupac and Biggie Mug Shots, B.I.G.'s Last Show Footage Up for Auction - TMZ",
      description:
        "A pair of never-before-seen mugshots of both Tupac Shakur and The Notorious B.I.G. are set to hit the auction block soon -- and decades after their murders, their legacies still translate into millions.",
      url: "https://www.tmz.com/2023/10/15/tupac-biggie-mug-shot-photos-final-perfomance-jamaica-auction/",
      urlToImage:
        "https://imagez.tmz.com/image/c3/16by9/2023/10/13/c33d4821d1da46dcaccd02a30ac4a220_xl.jpg",
      publishedAt: "2023-10-15T08:00:00Z",
      content:
        "A pair of never-before-seen mugshots of both Tupac Shakur and The Notorious B.I.G. are set to hit the auction block soon -- and decades after their murders, their legacies still translate into millio… [+1835 chars]",
    },
    {
      source: { id: null, name: "The Times of Israel" },
      author: null,
      title:
        "Reuters videographer allegedly killed by Israeli shelling in Lebanon laid to rest - The Times of Israel",
      description:
        "News agency reportedly demands Israel open investigation into deadly Friday border incident during exchange of fire with Hezbollah",
      url: "https://www.timesofisrael.com/reuters-videographer-allegedly-killed-by-israeli-shelling-in-lebanon-laid-to-rest/",
      urlToImage:
        "https://static.timesofisrael.com/www/uploads/2023/10/AP23286679757854-1-1024x640.jpg",
      publishedAt: "2023-10-15T05:46:11Z",
      content:
        "A Reuters videographer allegedly killed in Israeli shelling of southern Lebanon was laid to rest in his hometown Saturday in a funeral procession attended by hundreds of people.\r\nDraped in a Lebanese… [+4708 chars]",
    },
    {
      source: { id: null, name: "Suntimes.com" },
      author: "Georgia Nicols",
      title: "Horoscope for Sunday, Oct. 15, 2023 - Chicago Sun-Times",
      description: null,
      url: "https://chicago.suntimes.com/2023/10/15/23913560/horoscopes-today-sunday-oct-15-2023",
      urlToImage:
        "https://cst.brightspotcdn.com/dims4/default/9bf0906/2147483647/strip/true/crop/870x497+0+67/resize/1461x834!/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2Ffasfp3gPhYuFIM6-fc9OfN0C1WQ%3D%2F0x0%3A870x630%2F870x630%2Ffilters%3Afocal%28435x315%3A436x316%29%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F24995977%2FGeorgia_mug.jpeg",
      publishedAt: "2023-10-15T05:01:15Z",
      content:
        "Moon Alert\r\nAvoid shopping or important decisions from 2 to 6:15 a.m. Chicago time. After that, the moon moves from Libra into Scorpio.\r\nAries (March 21-April 19)\r\nToday youre energetic and pumped! I… [+3768 chars]",
    },
    {
      source: { id: null, name: "Sparrowsnews.com" },
      author: "Kamlesh Bhati",
      title:
        "Google Blocks Geekbench And 3DMark On Pixel 8 Series | SPARROWS NEWS - Sparrows News",
      description:
        "Google blocks Geekbench and 3DMark to prevent these performance drawbacks from becoming apparent to consumers...",
      url: "https://sparrowsnews.com/2023/10/15/google-blocks-geekbench-and-3dmark-on-pixel-8-series/",
      urlToImage:
        "https://i0.wp.com/sparrowsnews.com/wp-content/uploads/2023/10/wp-1697343883904.webp",
      publishedAt: "2023-10-15T04:27:11Z",
      content:
        "In the ever-competitive world of smartphones, Google has recently unveiled its flagship Pixel 8 and Pixel 8 Pro models. These devices boast an in-house Tensor G3 processor, a unique and daring entry … [+3321 chars]",
    },
    {
      source: { id: null, name: "The Dallas Morning News" },
      author:
        "Zaeem Shaikh, Arcelia Martin, Aria Jones, María  Ramos Pacheco, Sam Bonacci, Marin Wolf",
      title:
        "3 wounded in shooting at State Fair of Texas, suspect in custody, Dallas police say - The Dallas Morning News",
      description:
        "Three people were wounded in the shooting after one man shot another, Dallas police said. Their injuries weren’t considered life-threatening.",
      url: "https://www.dallasnews.com/news/crime/2023/10/14/state-fair-of-texas-evacuated-as-dallas-police-investigate-shooting/",
      urlToImage:
        "https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/hJupbNR1pKhIz7S17X5LhQdWwpc=/830x467/smart/filters:no_upscale()/cloudfront-us-east-1.images.arcpublishing.com/dmn/GEUSGEKLDJAOJEP5DTOT3PFYZI.jpg",
      publishedAt: "2023-10-15T04:06:13Z",
      content:
        "A suspect is in custody after a shooting that wounded three people at the State Fair of Texas, sending fairgoers into panic Saturday night.\r\nThe shooting took place in the food court at the Tower Bui… [+6244 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Oren Liebermann, Natasha Bertrand, Brad Lendon",
      title:
        "US sending second carrier strike group, fighter jets to region as Israel prepares to expand Gaza operations - CNN",
      description:
        "The Pentagon has ordered a second carrier strike group to the eastern Mediterranean Sea and is sending Air Force fighter jets to the region as Israel prepares to expand its Gaza operations, US Defense Secretary Lloyd Austin said in a statement Saturday.",
      url: "https://www.cnn.com/2023/10/14/middleeast/us-aircraft-carrier-eisenhower-israel-gaza-intl-hnk-ml/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/231014214906-01-us-military-israel-gaza-10142023.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-10-15T03:22:00Z",
      content:
        "The Pentagon has ordered a second carrier strike group to the eastern Mediterranean Sea and is sending Air Force fighter jets to the region as Israel prepares to expand its Gaza operations, US Defens… [+3855 chars]",
    },
    {
      source: { id: "fox-news", name: "Fox News" },
      author: "Brandon Gillespie",
      title:
        "Republicans flip Democrat-held Louisiana governor seat in first major contest ahead of 2024 elections - Fox News",
      description:
        "Republicans have won the race for Louisiana's next governor, avoiding a runoff and flipping the Democrat-held seat in the first major contest ahead of the 2024 elections.",
      url: "https://www.foxnews.com/politics/republicans-flip-democrat-held-louisiana-governor-seat-first-major-contest-ahead-of-2024-elections",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2023/03/GettyImages-128052372.jpg",
      publishedAt: "2023-10-15T03:16:00Z",
      content:
        "Republicans have won the race to determine the next governor of Louisiana, flipping the state from Democrat control in the first major contest ahead of the 2024 elections.\r\nLouisiana Attorney General… [+2053 chars]",
    },
    {
      source: { id: null, name: "The Athletic" },
      author: "Pete Sampson and Antonio Morales",
      title:
        "Caleb Williams shellacked by Notre Dame defense as USC tumbles: What the win means for Fighting Irish - The Athletic",
      description:
        "Caleb Williams threw three first-half interceptions and was sacked six times on the night, finishing the contest with 199 yards.",
      url: "https://theathletic.com/4962805/2023/10/14/usc-notre-dame-score-results-caleb-williams/",
      urlToImage:
        "https://cdn.theathletic.com/app/uploads/2023/10/14210939/USATSI_21651030-scaled.jpg",
      publishedAt: "2023-10-15T03:11:15Z",
      content:
        "The Notre Dame defense made it a long night for USC star QB Caleb Williams and the entire Trojans offense en route to a 48-20 Fighting Irish win. Heres what you need to know:\r\n<ul><li>Williams threw … [+7410 chars]",
    },
    {
      source: { id: null, name: "Hollywood Reporter" },
      author: "Abbey White",
      title:
        "Chris Evans Talks “Enjoying Life” With Wife Alba Baptista After Two Wedding Ceremonies - Hollywood Reporter",
      description:
        "The actor appeared as part of a spotlight panel on Saturday at New York Comic Con, where he also spoke about his work supporting rescue dogs and whether a possible return to Broadway is in the cards.",
      url: "https://www.hollywoodreporter.com/news/general-news/chris-evans-marriage-ceremonies-alba-baptista-broadway-return-nycc-1235618745/",
      urlToImage:
        "https://www.hollywoodreporter.com/wp-content/uploads/2023/10/Chris-Evans-NYCC-2023-Getty-H-2023.jpg?w=1024",
      publishedAt: "2023-10-15T03:01:19Z",
      content:
        "Chris Evans has opened up about tying the knot with actress Alba Baptista last month and how married life has been since.\r\nThe actor confirmed the news for the first time publicly while on stage Satu… [+2165 chars]",
    },
    {
      source: { id: "cbs-news", name: "CBS News" },
      author: "Tracy Smith",
      title:
        'Murder plot revealed in Jade Janks\' text messages: "I just dosed the hell out of him" - CBS News',
      description:
        "A woman discovers explicit photos of herself on her stepfather's computer.  Soon after, he's found dead. Evidence points to an overdose, but was it murder?",
      url: "https://www.cbsnews.com/news/jade-janks-tom-merriman-murder-plot-revealed-in-california-womans-text-messages/",
      urlToImage:
        "https://assets2.cbsnewsstatic.com/hub/i/r/2023/10/11/2e60af2c-9839-45d2-baf2-e125d8eab3ab/thumbnail/1200x630/f566002ea7b2e0e8f44beed89c772ee7/janks-sneakpeek.jpg?v=a6a127b4a243923dd1e2140b75f2a43c",
      publishedAt: "2023-10-15T02:59:58Z",
      content:
        "It was Jan. 1, 2021, when the San Diego Sheriff's Department got a call from a man saying his friend, Jade Janks, might have killed her stepfather, Tom Merriman. \r\nAssistant district attorneys Jorge … [+38298 chars]",
    },
    {
      source: { id: "cbs-news", name: "CBS News" },
      author: "Cara Tabachnick",
      title:
        'See it in photos: "Ring of fire" annular eclipse dazzles viewers - CBS News',
      description:
        "Americans from Oregon to Texas were able to view this weekend's eclipse.",
      url: "https://www.cbsnews.com/news/photos-ring-of-fire-annular-eclipse/",
      urlToImage:
        "https://assets1.cbsnewsstatic.com/hub/i/r/2023/10/14/f0cae445-114e-47c8-803d-5c04b1a4a903/thumbnail/1200x630/8235aba41a5c5e89c22c5f5672d68de2/gettyimages-1735647828.jpg?v=a6a127b4a243923dd1e2140b75f2a43c",
      publishedAt: "2023-10-15T02:45:00Z",
      content:
        'A rare solar eclipse - known as a "ring of fire"- crossed the United States on Saturday.  Eclipse-watchers have been preparing for the dazzling event for weeks, since this is the last annular solar e… [+3234 chars]',
    },
  ];
  constructor() {
    super();
    console.log("i am a constructor from news component");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-4">
        <h2> DailyBugle- Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3" key={element.url} >
                <NewsCard
                  
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
