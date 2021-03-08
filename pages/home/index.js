import React, { useState, useEffect } from 'react';
import {listAPICollection} from '../../helpers/token';
import TokenCell from '../../components/TokenCell';
import styled from 'styled-components';

const Grid = styled.div`
  width: 1280px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  
  /* padding: 10px; */
  justify-items: center;
  margin: auto;

  @media screen and (max-width: 1220px) {
    width: auto;
    grid-template-columns: auto auto auto;
  }

  @media screen and (max-width: 768px) {
    width: auto;
    grid-template-columns: auto auto;
  }

  @media screen and (max-width: 540px) {
    width: auto;

    grid-template-columns: auto;
        align-items: center;
    }
`;

export default function Home() {
    
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetchCollection();
    }, [images]);

    const fetchCollection = async () => {
        if (images.length <= 0) {
          listAPICollection("savethedate").then(result => {
                let packag = result.response.data.assets;
                setImages(packag.reverse);
                console.log("Package:");
                console.log(packag);
            });
        }
    }

  return (
    <div>
     
      
      <Grid>
      {/* <div>
      <h1>SaveTheDate.today</h1>
      </div> */}
      {images.map((image, i )=>
        <TokenCell key={i} image={image} index={images.length - i}/>
      )}
      </Grid>
    </div>
    );
  }