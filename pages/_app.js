import '../styles/globals.css'
import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components'

// import Header from '../components/Header';
// import Footer from '../components/Footer';


const GlobalStyle = createGlobalStyle`
    html,
      body {
        padding: 0;
        margin: 0;
        font-size: 14px;
        font-family: 'Helvetica', sans-serif;
        background-color: #123;
        color: black;
        /* overflow: ${({ overflow }) => overflow};; */
      }
      a:link, a:hover, a:visited {
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
      * {
        box-sizing: border-box;
      }
      H1 {
        margin: 0px;
        padding: 0px;
        text-decoration: none;
        font-weight: normal;
        margin-bottom: 10px;
        font-size: 32px;
        font-weight: bold;
      }

      H2{
        font-size: 18px;
        font-weight: bolder;
        margin-bottom: 20px;
        margin-top: 10px;
        font-weight: bold;
      }

      H3{
        font-family: 'Archivo', sans-serif;
        font-size: 18px;
        line-height: 20px;
        margin-bottom: 10px;
        margin-top: 10px;
        font-weight: bold;
      }

      H4{
        font-size: 16px;
        line-height: 20px;
      }
      p {
        font-family: 'Archivo', sans-serif;
        font-size: 15px;
        margin-bottom: 40px;
      }
      input {
        color: black;
      }
      ul {
        font-family: 'Archivo', sans-serif;

        list-style: none;
        padding: 10px;
        margin-bottom: 40px;
      }
      li:before {
        content: "•";
        margin-right: 4px;
      }
      li {
        padding: 5px;
        font-size: 14px;
      }
      button {
        font-family: 'Archivo Black', sans-serif;
        font-size: 14px;
      }
`;

function MyApp({ Component, pageProps }) {

  return (
    <>
        <GlobalStyle />
        {/* <Header /> */}
        <Component {...pageProps}/>
        {/* <Footer /> */}
    </>
    );
  }

  MyApp.getInitialProps = async (ctx) => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
  }
  
  export default MyApp;