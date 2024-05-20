import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../theme";
import { addToCart } from "../state";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import LazyLoad from 'react-lazyload';

const DivItem = styled.div`
display:flex;
flex-direction: column;
align-items: center;

height:600px;

min-width:480px;


@media(max-width: 1200px){
  height: 400px;
  min-width:320px;
}
@media(max-width: 900px){
  height: 300px;
  min-width:240px;
}
@media(max-width: 680px){
  height: 200px;
  min-width:160px;
}




`;
const ImmagineProdotto = styled.img`
  object-fit: contain;
  height: 100%;
  display: block;
  cursor: pointer;

  transition: opacity 1s ease-in;
`;

const LazyLoadWrapper = styled.div`
opacity: ${({ loaded }) => (loaded ? 1 : 0)};
transition: opacity 1s ease-in-out;
`;



const DivImmagine = styled.div`
height:100%;

`;
const InfoProdotto = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; /* Aggiornato da "flex-align" a "flex-start" */
  text-align:center;


`;



const ABC20 = styled.p`
font-family: 'ABCGaisyr-Book';
font-size: 20px; 
margin: 0%;

font-weight: lighter;

@media (max-width: 1200px) {
  font-size: 14px; 
}
@media(max-width: 680px){
  font-size: 13px; 
}

`;
const ABC16 = styled.p`
font-family: 'ABCGaisyr-Book';
font-size: 16px; 
margin-top: 2%;
text-align: center;
font-weight: lighter;

@media(max-width: 680px){
  font-size: 14px;
  margin-top: 0; 
}
`;



const Item = ({ item, width }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
    // Funzione per formattare il prezzo
    const formatPrice = (price) => {
      return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(price);
    };
  const navigate = useNavigate();
  const [loaded, setLoaded] = React.useState(false);
  const handleContentLoad = () => {
    setLoaded(true);
  };
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

const handleImageLoad = () => {
  setImageLoaded(true);
};




  return (



    <DivItem >
      <DivImmagine
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <ImmagineProdotto
          alt={item.name}

          height="100%"
          src={`${url}`}
          onClick={() => navigate(`/item/${item.id}`)}
          style={{ objectFit: "contain", opacity: imageLoaded ? "1" : "0",
          transition: "opacity 1s ease-in-out",
          cursor: "pointer" }}
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
        
      </DivImmagine>
      <InfoProdotto            style={{ objectFit: "contain", opacity: imageLoaded ? "1" : "0",
          transition: "opacity 1s ease-in-out"}}>

      <ABC20>{name}</ABC20>
      <ABC16 fontWeight="bold">{formatPrice(price) }</ABC16>
      </InfoProdotto>

    </DivItem>



  );
};

export default Item;