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

width:auto;






`;
const LazyLoadWrapper = styled.div`
opacity: ${({ loaded }) => (loaded ? 1 : 0)};
transition: opacity 1s ease-in-out;
`;



const DivImmagine = styled.div`
height:100%;

`;



const Item = ({ item, width }) => {
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



  return (
    <LazyLoad once>
    <LazyLoadWrapper loaded={loaded} onLoad={handleContentLoad}>


    <DivItem >
      <DivImmagine
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <img
          alt={item.name}

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
        
      </DivImmagine>

    </DivItem>
    </LazyLoadWrapper>
    </LazyLoad>  


  );
};

export default Item;