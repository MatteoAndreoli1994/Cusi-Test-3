import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../theme";
import { addToCart } from "../state";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
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
  font-size: 13px; 
}

`;
const ABC16 = styled.p`
font-family: 'ABCGaisyr-Regular';
font-size: 16px; 
margin-bottom: 0;
margin-top:1%;

@media(max-width: 1200px){
  font-size: 13px; 
  margin-top:2%;
}


`;
const LazyLoadWrapper = styled.div`
opacity: ${({ loaded }) => (loaded ? 1 : 0)};
transition: opacity 1s ease-in-out;
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

  // Funzione per formattare il prezzo
  const formatPrice = (price) => {
    return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(price);
  };




  return (
    <LazyLoad once>
    <LazyLoadWrapper loaded={loaded} onLoad={handleContentLoad}>

    <DivItem >
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <img
          alt={item.name}
          width="100%"
          height="100%"
          src={`${url}`}
          onClick={() => navigate(`/item/${item.id}`)}
          style={{ cursor: "pointer" }}

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
    </LazyLoadWrapper>
    </LazyLoad>  
  );
};

export default Item;