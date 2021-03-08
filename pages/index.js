import Link from "next/link";
import Head from 'next/head'
import styled from 'styled-components';
import Home from './home';
import Image from 'next/image'
const Main = styled.div`
`;
const Header = styled.div`
  height: 250px;
  background-image: url("/banner_opensea.png") ;
  background-position: center;
  @media screen and (max-width: 540px) {
    height: 150px;
    background-size: cover;
  }
`;

export default function Index() {
  return (
    <div>

    <Head>
        <title>SaveTheDate.Today</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap" rel="stylesheet"></link> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>

      <Main>
        <Header>
        </Header>
        <Home />
      </Main>
    </div>
  )
}
Home.propTypes = {
};
