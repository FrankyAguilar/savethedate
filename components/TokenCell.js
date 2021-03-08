import Link from "next/link";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Cell = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
`;

const ImageContainer = styled.div`
  /* display: grid;
  justify-content: center;
  align-items: center; */
  /* padding: 20px; */
  /* height: 360px; */
  /* overflow: hidden; */
  position: absolute;
  height: 100px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const Details = styled.div`
  display: grid;
  justify-content: left;
  margin-top: -30px;
  margin-left: 20px;
  /* padding: 20px; */
  /* margin-top: 20px; */
`;

const Title = styled.h2`
  margin: 0;
`;

const Price = styled.p`
position: absolute;
top: -5px;
left: 10px;
`;

export default function TokenCell(data) {
  return (
    <Cell>
      {console.log(data)}
      <Link href={data.image.permalink}>
        <a>
          <ImageContainer>
            <img width={'100%'} src={data.image.image_url}/> 
          </ImageContainer> 
        
          {/* <Details>
            <Title>{data.image.name}</Title>
           
          </Details>*/}
          <Price># {data.index}</Price> 

        </a>     

      </Link>
    </Cell>
  )
};

TokenCell.propTypes = {
    data: PropTypes.object,
    index: PropTypes.number
};