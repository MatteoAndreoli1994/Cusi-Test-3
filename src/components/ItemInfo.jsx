import { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../theme";
import { addToCart } from "../state";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const Item = ({ item, width }) => {
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

  const DivItem = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  
  height:100%;
  
  max-width:100px;
  
  position:relative;
  

  
  
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

  return (
    <DivItem >
   
      <InfoProdotto>

<ABC20>{name}</ABC20>
<ABC16 fontWeight="bold">{formatPrice(price) }</ABC16>
</InfoProdotto>

    </DivItem>
  );
};

export default Item;