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

const DivItem = styled.div`
display:flex;
flex-direction: column;
align-items: center;

height:100%;

width:100%;

background-color:blue;

margin-bottom:3%;


`;

const InfoProdotto = styled.div`
  height: 15%;
  display: flex;
  flex-direction: column;
  align-items: center; /* Aggiornato da "flex-align" a "flex-start" */
  justify-content: flex-end; /* Aggiunto per centrare verticalmente */
`;


const DivImmagine = styled.div`
height:100%;

`;
const ABC20 = styled.p`
font-family: 'ABCGaisyr-Regular';
font-size: 20px; 
margin: 0%;

font-weight: lighter;

`;
const ABC16 = styled.p`
font-family: 'ABCGaisyr-Regular';
font-size: 15px; 
margin: 0;
text-align: center;
font-weight: lighter;
`;

  return (
    <DivItem >
      <DivImmagine
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
      </DivImmagine>

      <InfoProdotto>

        <ABC20>{name}</ABC20>
        <ABC16 fontWeight="bold">{price} €</ABC16>
      </InfoProdotto>
    </DivItem>
  );
};

export default Item;