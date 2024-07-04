import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../theme";
import { addToCart } from "../state";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from 'styled-components';

import LazyLoad from 'react-lazyload';

const DivItem = styled.div`
display:flex;
flex-direction: column;
align-items: center;


width:100%;




`;

const InfoProdotto = styled.div`
display:flex;
align-items:center;
flex-direction:column;
justify-content:center;

text-align:center;

`;
//FONT
const ABC = styled.p`
font-family: 'ABCGaisyr-Regular';
font-size: 20px; 
margin-bottom: 0;


@media(max-width: 1200px){
  font-size: 16px; 
}
@media(max-width: 800px){
  font-size: 16px; 
}




@media(max-width: 680px){
  font-size: 16px; 
}
  @media(max-width: 390px){
  font-size: 15px; 
}
@media(max-width: 350px){
  font-size: 14px; 
}

`;
const ABC16 = styled.p`
font-family: 'ABCGaisyr-Regular';
font-size: 16px; 
margin-bottom: 0;
margin-top:1%;

@media(max-width: 1200px){
  font-size: 15px; 
}
@media(max-width: 800px){
  font-size: 15px; 
}




@media(max-width: 680px){
  font-size: 15px; 
}
@media(max-width: 390px){
  font-size: 14px; 
}

@media(max-width: 350px){
  font-size: 13px; 

}


`;
const LazyLoadWrapper = styled.div`
opacity: ${({ loaded }) => (loaded ? 1 : 0)};
transition: opacity 1s ease-in-out;
`;
// Definizione dell'animazione delle fasce diagonali
const loadingAnimation = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 100%;
  }
`;

const Placeholder = styled.div`
  width: 25vw;
  height: 100px;
  background: linear-gradient(45deg, #f0f0f0 25%, #ffffff 25%, #ffffff 50%, #f0f0f0 50%, #f0f0f0 75%, #ffffff 75%, #ffffff 100%);
  background-size: 50px 50px;
  animation: ${loadingAnimation} 4s linear infinite;
`;


const Item = ({ item, width }) => {
  const [loaded, setLoaded] = React.useState(false);
  const handleContentLoad = () => {
    setLoaded(true);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const {
    palette: { neutral },
  } = useTheme();

  const { category, price, name, image } = item.attributes;
  const {
    data: {
        attributes: { url },
    },
} = image;

const [imageLoaded, setImageLoaded] = useState(false);

const handleImageLoad = () => {
  setImageLoaded(true);
};

  // Funzione per formattare il prezzo
  const formatPrice = (price) => {
    return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(price);
  };




  return (


    <DivItem >
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
            {!imageLoaded && <Placeholder />}
            <img
              alt={item.name}
              width="100%"
              height="100%"
              src={`${url}`}
              onClick={() => navigate(`/item/${item.id}`)}
              style={{ cursor: "pointer", display: imageLoaded ? 'block' : 'none' }}
             onLoad={handleImageLoad}
            />
        
        <Box
          display={isHovered ? "block" : "none"}
          position="absolute"
          bottom="10%"
          left="0"
          width="100%"

        >
          <Box display="flex" justifyContent="space-between">
            <Box
              display="flex"
              alignItems="center"
              backgroundColor={shades.neutral[100]}
              borderRadius="3px"
            >

          </Box>

          </Box>
        </Box>
      </Box>

      <InfoProdotto>

        <ABC>{name}</ABC>
        <ABC16 fontWeight="bold">{formatPrice(price)}</ABC16>
      </InfoProdotto>
    </DivItem>

  );
};

export default Item;