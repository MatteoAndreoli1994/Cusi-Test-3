import { useState } from "react";
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

const DivItem = styled.div`
display:flex;

align-items: center;
justify-content: center;
height:100%;

width:100%;





`;

const InfoProdotto = styled.div`


  display: flex;
  flex-direction: column;
  align-items: center; /* Aggiornato da "flex-align" a "flex-start" */
  justify-content: flex-end; /* Aggiunto per centrare verticalmente */

`;


const DivImmagine = styled.div`
height:100%;

`;

const GTA = styled.p`
font-family: 'GTAmericaRegular';
font-size: 16px;

  text-align: center;

  &:hover {
    color: rgba(0, 0, 0, 0.5); /* Cambia il colore del testo quando si passa sopra con il mouse */
  }
`;



const ItemSearch = ({ item, width }) => {
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



  return (
    <DivItem >
    
    
    <InfoProdotto           style={{ cursor: "pointer" }} onClick={() => navigate(`/item/${item.id}`)}>

    <GTA>{name}</GTA>

   </InfoProdotto>

    </DivItem>
  );
};

export default ItemSearch;