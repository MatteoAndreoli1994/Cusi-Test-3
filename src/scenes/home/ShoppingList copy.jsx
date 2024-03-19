import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Item from "../../components/Item";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../state";
import styled from 'styled-components';
import ringsCategory from "../../assets/ringsCategory.png";
import braceletsCategory from "../../assets/braceletsCategory.png";
import necklacesCategory from "../../assets/necklacesCategory.png";
import earringsCategory from "../../assets/earringsCategory.png";

import arrowLeft from "../../assets/arrowLeft.svg";
import arrowRight from "../../assets/arrowRight.svg";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("earrings");
  const items = useSelector((state) => state.cart.items);
  const breakPoint = useMediaQuery("(min-width:600px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItems() {
    const items = await fetch(
      "https://prized-horses-45ff95e916.strapiapp.com/api/items?populate=image",
      { method: "GET" }
    );

    const itemsJson = await items.json();
    dispatch(setItems(itemsJson.data));
  }

  useEffect(() => {
    getItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const earringsItems = items.filter(
    (item) => item.attributes.category === "earrings"
  );
  const braceletsItems = items.filter(
    (item) => item.attributes.category === "bracelets"
  );
  const necklacesItems = items.filter(
    (item) => item.attributes.category === "necklaces"
  );
  const ringsItems = items.filter(
    (item) => item.attributes.category === "rings"
  );

  const [sliderOffset, setSliderOffset] = useState(0);
  const [sliderArrow, setArrowOffset] = useState(0);
  const [contentKey, setContentKey] = useState(0);
  const [isLeftArrowActive, setLeftArrowActive] = useState(false);
  const [isRightArrowActive, setRightArrowActive] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const handleButtonClickRight = (offset) => {
    setSliderOffset(offset);
    setArrowOffset(-offset);
    // Aggiorna la chiave del contenuto per forzare il ridisegno del componente
    setContentKey((prevKey) => prevKey + 1);

    setLeftArrowActive(true); // Attiva la freccia sinistra quando premi quella destra
    setRightArrowActive(false); // Disattiva la freccia destra


    console.log("isLeftArrowActive" + isLeftArrowActive);
    console.log("isRightArrowActive" + isRightArrowActive);

  };
  const handleButtonClickLeft = (offset) => {
    setSliderOffset(offset);
    setArrowOffset(-offset);
    // Aggiorna la chiave del contenuto per forzare il ridisegno del componente
    setContentKey((prevKey) => prevKey + 1);
    
    setLeftArrowActive(false); // Disattiva la freccia sinistra quando premi quella destra
    setRightArrowActive(true); // Attiva la freccia destra

    console.log("isLeftArrowActive" + isLeftArrowActive);
    console.log("isRightArrowActive" + isRightArrowActive);
  };

    const ButtonCarousel = styled.button`
      padding: 13px 30px;
      border: 1px solid black;
      border-radius: 50px;
      color: ${({ selected }) => (selected ? 'white' : 'black')};
      background-color: ${({ selected }) => (selected ? 'black' : 'white')};
      cursor: pointer;
      transition: background-color 0.3s, color 0.3s;



      &:not(:last-child) {
        margin-right: 50px;
      }

      &:hover {
        background-color: ${({ selected }) => (selected ? 'black' : '#e0e0e0')};
      }
    `;
   

    const DivFilter = styled.div`
    height:10%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:0.2%;
    margin-top:1%;


    `;
    const ItemDivContenitore = styled.div`
    display:flex;
    height:100%;
    width:90%;

    overflow:hidden;


    `;

    const ItemDiv = styled.div`
    display:flex;
    height:100%;
    width:100%;



    `;



    const Container = styled.div`
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    margin: 1%;
    margin-bottom: 5%;
    align-items:center;
    
    min-height:100vh;

  `;

    const DivImmagineCategoria = styled.div`
    display:flex;
    width: 33%;
    height: auto;
    overflow-x: hidden;
    overflow-y: hidden;

    margin-right:1%;
    margin-top:1%;
    

  `;
  const DivImmagineCategoria2 = styled.div`
      width:100%;
      height:85%;
      overflow: hidden;
  

`;
  const DivImmaginiProdotti = styled.div`
  display:flex;
  width: 66%;
  height: auto;


  margin-right:1%;
  margin-top:1%;

  

`;


  
  const ImmagineCategoria = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1s ease-in-out;
    transform-origin: center center;

  
    ${DivImmagineCategoria}:hover & {
      transform: scale(1.2);
    }
  `;

  const ShopButton = styled.button`
  height:7%;
  top:70%;
  left:3%;
  display: flex;
  position: absolute;
  background-color: black;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Aggiungi un effetto di transizione per una transizione più fluida */
  align-items:center;
  justify-content:center;

  &:hover {
    background-color: #333; /* Cambia il colore di sfondo quando il mouse è sopra */
  }
`;
const Info = styled.div`
height:7%;

top:60%;
left:3%;
display: flex;
position: absolute;

color: white;

border: none;
cursor: pointer;

align-items:center;
justify-content:center;

`;
//FONT
const ABC = styled.p`
font-family: 'ABCGaisyr-Regular';
font-size: 40px; 
margin-bottom: 0;
text-align: center;
`;
const Gta = styled.p`
font-family: 'GTAmericaLight';
font-size: 16px;
margin-bottom: 1%;
text-align: center;

`;

const GtaRegular = styled.p`
font-family: 'GTAmericaRegular';
font-size: 14px;
margin:0;
`;
const GtaRegularShadow = styled.p`
  font-family: 'GTAmericaRegular';
  font-size: 14px;

  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Puoi personalizzare questi valori */
`;

const LeftArrow = styled.img`
  position: absolute;
  top: 45%;
  left: 3%;
  transform: translateY(-50%);
  cursor: pointer;
`;

const RightArrow = styled.img`
  position: absolute;
  top: 45%;
  right: 3%;

  cursor: pointer;

`;
// Componente RightArrowDisactivated
const RightArrowDisactivated = styled.img`
  position: absolute;
  top: 50%;
  right: 3%;
  transform: translateY(-50%);
  cursor: not-allowed;
  filter: grayscale(100%);
`;
const RightArrowWrapper = styled.div`
width:10px;
height:10px;

  top: 45%;
  right: 3%;
  cursor: ${({ isRightArrowActive }) => (isRightArrowActive ? 'pointer' : 'not-allowed')};
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: ${({ isRightArrowActive }) => (isRightArrowActive ? 'scale(1.2)' : 'none')};
  }
`;



const GtaRegular2 = styled.p`
font-family: 'GTAmericaRegular';
font-size: 12px;
margin:0;

`;



  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ABC variant="h3" textAlign="center">
        Curated Pieces
      </ABC>
      <Gta>Soon-to-be staples in your rotation</Gta>

    <DivFilter>
        <ButtonCarousel
          label="EARRINGS"
          value="earrings"
          selected={value === 'earrings'}
          onClick={(event) => handleChange(event, 'earrings')}
        >
         <GtaRegular>EARRINGS</GtaRegular> 
        </ButtonCarousel>

        <ButtonCarousel
          label="BRACELETS"
          value="bracelets"
          selected={value === 'bracelets'}
          onClick={(event) => handleChange(event, 'bracelets')}
        >
          <GtaRegular>BRACELETS</GtaRegular> 
        </ButtonCarousel>

        <ButtonCarousel
          label="NECKLACES"
          value="necklaces"
          selected={value === 'necklaces'}
          onClick={(event) => handleChange(event, 'necklaces')}
        >
         <GtaRegular>NECKLACES</GtaRegular> 
        </ButtonCarousel>

        <ButtonCarousel
          label="RINGS"
          value="rings"
          selected={value === 'rings'}
          onClick={(event) => handleChange(event, 'rings')}
        >
         <GtaRegular>RINGS</GtaRegular> 
        </ButtonCarousel>

    </DivFilter>



    <ItemDivContenitore>
      <ItemDiv
        style={{ transform: `translateX(${sliderOffset}px)` }}
        key={contentKey} // Aggiunge la chiave del contenuto come proprietà
      >






{value === "earrings" && (
  <>
    <DivImmaginiProdotti>
      {/* Elemento speciale */}
      Ciao (contenuto nuovo)
    </DivImmaginiProdotti>

    <DivImmaginiProdotti>
      {/* Mostra il primo elemento */}
      {earringsItems[startIndex] && (
        <Item item={earringsItems[startIndex]} key={`${earringsItems[startIndex].name}-${earringsItems[startIndex].id}`} />
      )}
    </DivImmaginiProdotti>

    <DivImmaginiProdotti>
      {/* Mostra il secondo elemento */}
      {earringsItems[(startIndex + 1) % earringsItems.length] && (
        <Item item={earringsItems[(startIndex + 1) % earringsItems.length]} key={`${earringsItems[(startIndex + 1) % earringsItems.length].name}-${earringsItems[(startIndex + 1) % earringsItems.length].id}`} />
      )}
    </DivImmaginiProdotti>

    <DivImmaginiProdotti>
      {/* Mostra il terzo elemento */}
      {earringsItems[(startIndex + 2) % earringsItems.length] && (
        <Item item={earringsItems[(startIndex + 2) % earringsItems.length]} key={`${earringsItems[(startIndex + 2) % earringsItems.length].name}-${earringsItems[(startIndex + 2) % earringsItems.length].id}`} />
      )}
    </DivImmaginiProdotti>

    {/* Ripeti lo stesso ciclo con l'elemento speciale */}
    <DivImmaginiProdotti>
      {/* Elemento speciale */}
      Ciao
    </DivImmaginiProdotti>

    <DivImmaginiProdotti>
      {/* Mostra il primo elemento */}
      {earringsItems[(startIndex + 1) % earringsItems.length] && (
        <Item item={earringsItems[(startIndex + 1) % earringsItems.length]} key={`${earringsItems[(startIndex + 1) % earringsItems.length].name}-${earringsItems[(startIndex + 1) % earringsItems.length].id}`} />
      )}
    </DivImmaginiProdotti>

    <DivImmaginiProdotti>
      {/* Mostra il secondo elemento */}
      {earringsItems[(startIndex + 2) % earringsItems.length] && (
        <Item item={earringsItems[(startIndex + 2) % earringsItems.length]} key={`${earringsItems[(startIndex + 2) % earringsItems.length].name}-${earringsItems[(startIndex + 2) % earringsItems.length].id}`} />
      )}
    </DivImmaginiProdotti>

    <DivImmaginiProdotti>
      {/* Mostra il terzo elemento */}
      {earringsItems[(startIndex + 3) % earringsItems.length] && (
        <Item item={earringsItems[(startIndex + 3) % earringsItems.length]} key={`${earringsItems[(startIndex + 3) % earringsItems.length].name}-${earringsItems[(startIndex + 3) % earringsItems.length].id}`} />
      )}
    </DivImmaginiProdotti>
  </>
)}


        {/*BRACCIALETTI*/}
        {value === "bracelets" && (
        <>
            {/* Aggiungi il tuo div qui */}
            <DivImmagineCategoria>

    {/* Aggiungi il tuo div qui */}
                 <ImmagineCategoria src={braceletsCategory} alt="Categoria bracelets"       style={{ width: '450px', height: '550px', objectFit: 'cover' }}/>
            </DivImmagineCategoria>


  
            {/* Mappa gli elementi degli anelli */}
            {braceletsItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
            ))}

            

        


        </>
        )}

        {/*COLLANE*/}
        {value === "necklaces" && (
        <>
            {/* Aggiungi il tuo div qui */}
            <DivImmagineCategoria>
            <ImmagineCategoria src={necklacesCategory} alt="Categoria necklaces"       style={{ width: '450px', height: '550px', objectFit: 'cover' }}/>

            </DivImmagineCategoria>

            {/* Mappa gli elementi degli anelli */}
            {necklacesItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
            ))}
        </>
        )}


        {/*ANELLI*/}
        {value === "rings" && (
        <>
            {/* Aggiungi il tuo div qui */}
            <DivImmagineCategoria>
            <ImmagineCategoria src={ringsCategory} alt="Categoria Rings"       style={{ width: '450px', height: '550px', objectFit: 'cover' }}/>

            </DivImmagineCategoria>

            {/* Mappa gli elementi degli anelli */}
            {ringsItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
            ))}
        </>
        )}

        {/* Add left arrow */}
        {isHovered && (
        <>
        {isLeftArrowActive !=false && (  

        <LeftArrow style={{ transform: `translateX(${sliderArrow}px)` }} src={arrowLeft} alt="Left Arrow" onClick={() => {handleButtonClickLeft(0); setArrowOffset(-0);}} />
        )}




        {/* Add right arrow */}
        {isRightArrowActive !=false && (  // Renderizza l'arrow destro solo se sliderArrow è diverso da 0

          <RightArrow
            style={{ transform: `translateX(${sliderArrow})` }}
            src={arrowRight}
            alt="Right Arrow"
            onClick={() => {
              handleButtonClickRight(-300);
              setArrowOffset(300);
            }}
          />
      
        )}
                </>
      )}




      </ItemDiv>
    </ItemDivContenitore>



    </Container>
  );
};

export default ShoppingList;