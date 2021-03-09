import Head from 'next/head'
import styled from 'styled-components';
import Home from './home';
import Image from 'next/image';
import Link from "next/link";

const Main = styled.div`
`;
const Header = styled.div`
  height: auto;
  background-image: url("/banner_opensea.png") ;
  background-position: top center;
  background-repeat: no-repeat;
  background-color: #E5E5E5;
  padding-bottom:20px;

  @media screen and (max-width: 540px) {
    background-size: 200%;
  }
`;

const Description = styled.p`
  width: 70%;
  margin: auto;
  padding-top: 260px;
  color: #666666;
  font-size: 16px;
  line-height: 1.3em;
  text-align: center;

  @media screen and (max-width: 540px) {
    padding-top: 150px;
    font-size: 12px;
    width: 90%;

  }
`;

const Links = styled.div`
  width: 120px;
  margin: auto;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  margin-right: 20px;
  cursor: pointer;
`;

export default function Index() {
  return (
    <div>

    <Head>
        <title>SaveTheDate.Today</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@savetheddatenft" />
        <meta name="twitter:creator" content="@savetheddatenft" />
        <meta name="twitter:title" content="Save the date today!" />
        <meta name="twitter:description" content="Buy, Sell and Collect the Most Memorable Dates in History!" />
        <meta name="twitter:image" content="http://savethedate.today/ogImage.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta property="og:title" content="Save the date today!" />
        <meta property="og:description" content="Buy, Sell and Collect the Most Memorable Dates in History!" />
        <meta property="og:image" content="ogImage.png" />
      </Head>

      <Main>
        <Header>
        <Description>What if you could own a piece of History, a very Important date, something that only has and only will happen once! The Earth has been in existence for around 4.543 billion years but in all of days, how many of them are memorable? At SaveTheDate we have collected together 365 of the most Interesting, most Unforgettable and down right Ridiculous dates for you to own and collect using NFT’s so you can also be a part of History!
<br /> 
Dates will be Dropped Daily at 8am PST. A Total of 365 Collectable Dates will be Released.</Description>
         
        <Links>
          <Link href="https://opensea.io/collection/savethedate"><a style={{marginRight: "20px"}} ><Image src="/icon_opensea.png" width="40px" height="40px" /></a></Link>
          <Link href="https://twitter.com/SaveTheDateNFT"><a><Image src="/icon_twitter.png"  width="40px" height="40px"/></a></Link>
        </Links>
        </Header>
        <Home />
      </Main>
    </div>
  )
}
Home.propTypes = {
};
