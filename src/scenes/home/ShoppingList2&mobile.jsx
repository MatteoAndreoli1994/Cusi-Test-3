import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Item from "../../components/Item";
import ItemInfo from "../../components/ItemInfo";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../state";
import styled from 'styled-components';
import ringsCategory from "../../assets/ringsCategory2.avif";
import braceletsCategory from "../../assets/braceletsCategory2.avif";
import necklacesCategory from "../../assets/necklacesCategory2.avif";
import earringsCategory from "../../assets/earringsCategory2.avif";
import { useNavigate } from "react-router-dom";

import arrowLeft from "../../assets/arrowLeft.svg";
import arrowRight from "../../assets/arrowRight.svg";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import LazyLoad from 'react-lazyload';

const ButtonCarousel = styled.button`
padding: 11px 36px;
border: 1px solid black;
border-radius: 50px;
color: ${({ selected }) => (selected ? 'white' : 'black')};
background-color: ${({ selected }) => (selected ? 'black' : 'white')};
cursor: pointer;
transition: background-color 0.3s, color 0.3s;
align-items:center;
justify-content:center;
display:flex;
width:140px;



&:not(:last-child) {
  margin-right: 3%;
}

&:hover {
  background-color: ${({ selected }) => (selected ? 'black' : '#e0e0e0')};
}

@media(max-width: 1200px){
  &:not(:last-child) {
    margin-right: 3%;
  }
}

@media(max-width: 800px){
  width:20%;
  padding: 12px 40px;

  &:not(:last-child) {
    margin-right: 1.5%;
  }

}

@media(max-width: 680px){
  width:20%;
  padding: 8px 40px;

  &:not(:last-child) {
    margin-right: 1.5%;
  }

}


`;


const DivFilter = styled.div`
height:10%;
display:flex;
align-items:center;
justify-content:center;

margin-top:0.8%;

width:100%;
user-select: none;


@media(max-width: 900px){
margin-bottom:0%;

}
`;
const ItemDivContenitore = styled.div`
width: 85%;
height: auto;


margin: auto; // Aggiungi questa riga per centrare il div orizzontalmente
display: flex; // Aggiungi questa riga per centrare il div verticalmente
align-items: center; // Aggiungi questa riga per centrare il div verticalmente
justify-content: center; // Aggiungi questa riga per centrare il div orizzontalmente



margin-top:1%;

@media(max-width: 900px){

width: 93%;

}
`;

const ItemDiv = styled.div`
display:flex;
height:100%;
width:97%;

@media(max-width: 900px){
  width:87%;
}
@media(max-width: 680px){
  width:82%;

}

`;



const Container = styled.div`
overflow-x: hidden;
display: flex;
flex-direction: column;
margin-bottom:6.5%;

align-items:center;

min-height: 70vh;
user-select: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;





`;


const DivImmaginiProdotti = styled.div`
display:flex;
width: 15%;
height: 100%;


margin-left:0.5%;
margin-right:0.5%;
margin-top:1%;
margin-bottom:0%;


@media(max-width:900px){
width: 50%;
margin-left:0.5%;
margin-right:0.5%;
}


`;
const DivImmaginiProdottiDesktop = styled(LazyLoad)`
display:flex;
width: 30%;
height: auto;
margin-left:0.5%;
margin-right:0.5%;
margin-top:1%;



@media(max-width:900px){
display:none;
}


`;
const DivInfoProdotti = styled.div`
display:flex;
width: 30%;
min-height: 8vh;
margin-left:0.5%;
margin-right:0.5%;


justify-content:center;

@media(max-width:900px){
width: 50%;
}


`;
const DivInfoProdottiDesktop = styled.div`
display:flex;
width: 30%;
min-height: 8vh;
margin-left:0.5%;
margin-right:0.5%;


justify-content:center;


@media(max-width:900px){
display:none;
}


`;

const DivImmagineCategoria2 = styled.div`
position: relative;
display: flex;
width: 100%;
height: 100%;
overflow: hidden;

`;


const LazyLoadedCategory = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
transition: transform 1s ease-in-out;
transform-origin: center center;



${DivImmagineCategoria2}:hover & {
transform: scale(1.2);
}
`;

const ShopButton = styled.button`
position: absolute;
height: 8%;
width: 40%;
top: 85%;
left: 6%;
display: flex;
background-color: black;
color: white;
border: none;
cursor: pointer;
transition: background-color 0.3s ease;
align-items: center;
justify-content: center;

&:hover {
background-color: #333;
}


@media(max-width: 1200px){

  height: 10%;
  width: 40%;

  }



@media(max-width: 900px){
top: 85%;
height: 9%;


}

@media(max-width: 680px){
  top: 85%;
  height: 10%;
  width: 60%;
  
  
  }
`;
const Info = styled.div`
position: absolute;
height: 7%;
top: 73%;
left: 6%;
display: flex;
color: white;
border: none;
cursor: pointer;
align-items: center;
justify-content: center;

@media (max-width: 900px){
top: 75%;
left: 7%;
}

@media (max-width: 680px){
  top: 73%;
  left: 7%;
  }

`;
//FONT
const ABC = styled.p`
font-family: 'ABCGaisyr-Book';
font-size: 40px; 
margin-bottom: 0;
text-align: center;

margin-top:0;

@media(max-width: 900px){
font-size: 35px; 
}
`;
const Gta = styled.p`
font-family: 'GTAmericaLight';
font-size: 16px;
margin-bottom: 3%;
margin-top:0.8%;
text-align: center;


@media (max-width: 900px){
margin-bottom: 3%;
}


`;

const GtaRegular = styled.p`
font-family: 'GTAmericaRegular';
font-size: 14px;
margin:0;

@media(max-width:900px){
font-size: 13px;
}

@media(max-width: 680px){
  font-size: 10px;
  }


`;
const GtaRegularShadow = styled.p`
font-family: 'GTAmericaRegular';
font-size: 15px;

text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Puoi personalizzare questi valori */

@media (max-width: 1200px){
font-size: 13px; 
}

@media(max-width: 900px){
  font-size: 13px;
  }

@media(max-width: 680px){
  font-size: 11px;
  }

  @media(max-width: 414px){
    font-size: 10px;
    }
`;


const LeftArrow = styled.img`
cursor: pointer;

position: absolute;

margin-right: 50px;
margin-top:50px;



`;
const CircleBackground = styled.div`
position: absolute;
display: flex;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 50px; /* Dimensione maggiore del cerchio */
height: 50px; /* Dimensione maggiore del cerchio */

border-radius: 50%;
z-index: -1; /* Imposta uno z-index inferiore rispetto alla freccia */

@media (max-width: 1200px) {
width: 200%; /* Dimensione maggiore del cerchio */
height: 200%; /* Dimensione maggiore del cerchio */

}
`;


const RightArrow = styled.img`
cursor: pointer;
position: absolute;

margin-left: 50px;
margin-top:50px;
`;

// Componente CircleContainer
const CircleContainer = styled.div`
position: absolute;
top: 40%;
left: 0%;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
z-index: 9999; /* Imposta un valore z superiore */

@media(max-width: 900px){
left: 0%;
top: -8%;
display:none;

}
`;

// Componente CircleContainer2
const CircleContainer2 = styled.div`
position: absolute;
top: 40%;
right: 0%;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
z-index: 9999; /* Imposta un valore z superiore */

@media(max-width: 900px){
right: 0%;
top: -8%;
display:none;
}
`;

const GtaRegular2 = styled.p`
font-family: 'GTAmericaRegular';
font-size: 13px;
margin:0;

@media(max-width: 1200px){
  font-size: 10px;
  }

@media(max-width: 900px){
font-size: 13px;
}

@media(max-width: 680px){
  font-size: 11px;
  }

@media(max-width: 414px){
  font-size: 9px;
  }
  @media(max-width: 350px){
    font-size: 8px;
    }

`;
const Container2 = styled.div`
width:100%;
height:auto;
display: flex;
flex-direction: column;


align-items:center;




`;

const Column = styled.div`


display: flex;


flex-direction:column;
align-items:center;




`;

const ContenitoreDeiProdotti = styled.div`
  width: 200vw; /* Imposta una larghezza fissa maggiore del 100% per far uscire il contenitore dallo schermo */
  height: auto;
  top: 0;
  margin: auto;
  display: flex;
  overflow-x: auto; /* Abilita lo scorrimento orizzontale */
  justify-content: center;
  background-color: orange;
  position: relative; /* Aggiungi posizione relativa per posizionare il contenitore */
  left: -10%; /* Posiziona il contenitore a sinistra del 10% rispetto alla sua posizione originale */
`;

const ContenitorePerInfo = styled.div`
margin-top:2%;
margin-bottom:3%;

left: 0;
width: 100%;
height: 100%;
overflow: hidden;

z-index: 1; // Imposta un indice z superiore rispetto al ContenitoreDeiProdotti


`;
const LazyLoadWrapper = styled.div`
opacity: ${({ loaded }) => (loaded ? 1 : 0)};
transition: opacity 1s ease-in-out;
`;


const Containertest = styled.div`
  width: 100%; /* 2 volte il 100% della larghezza dello schermo */
  white-space: nowrap; /* evita il wrapping dei figli */
  overflow-x: auto; /* barra di scorrimento orizzontale automatica */

  /* Nascondi la barra di scorrimento sui browser WebKit */
  &::-webkit-scrollbar {
    display: none;
  }


`;


const InnerDiv = styled.div`
  width: 31%; /* 50% della larghezza dello schermo */
  height: auto;
  display: inline-block;
  margin-top: 3%;

  @media(max-width: 900px){
    width: 45%; /* 50% della larghezza dello schermo */
  }
`;

const OrangeDiv = styled(InnerDiv)`


  margin-right:1%;
  margin-left:1%;

`;

const GreenDiv = styled(InnerDiv)`
  background-color: green;


`;

const ShoppingList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("earrings");
  const items = useSelector((state) => state.cart.items);
  const breakPoint = useMediaQuery("(min-width:600px)");
  const [loaded, setLoaded] = React.useState(false);

  const handleContentLoad = () => {
    setLoaded(true);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setStartIndex(0); // Azzera l'array di posizionamento quando cambia la categoria
    setLoaded(false); // Imposta loaded a false per attivare la dissolvenza di LazyLoad
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
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);
  // Dichiarazione di stato per tenere traccia dell'indice di inizio
  const [startIndex, setStartIndex] = useState(0);

  const handleButtonClickRight = () => {
    // Calcola l'indice di inizio in modo circolare
    const newStartIndex = (startIndex + 1) % (earringsItems.length - 1);
    setStartIndex(newStartIndex);
    console.log(newStartIndex);
  };
  
  const handleButtonClickLeft = () => {
    // Calcola l'indice di inizio in modo circolare
    const newStartIndex = (startIndex - 1 + earringsItems.length - 1) % (earringsItems.length - 1);
    setStartIndex(newStartIndex);
  };

  const handleShopClick = () => {
    navigate('/shopRings');
  };

  const handleShopClickEarrings = () => {
    navigate('/shopEarrings');
  };
  const handleShopClickNecklaces = () => {
    navigate('/shopNecklaces');
  };

  const handleShopClickBracelets = () => {
    navigate('/shopBracelets');
  };

   





  return (
    <Container

    >
      <ABC  textAlign="center">
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
    <LazyLoad once>
    <LazyLoadWrapper loaded={loaded} onLoad={handleContentLoad}>
    {earringsItems.length > 0 ? ( // Verifica se earringsItems contiene elementi

          <Containertest>

            <OrangeDiv>
            <DivImmagineCategoria2>

              <LazyLoadedCategory src={earringsCategory} alt="Categoria earrings" />



              {/* Aggiungi il tuo div qui */}
              <Info><GtaRegularShadow> Rare diamonds & gemstones <br></br>with  unique settings. </GtaRegularShadow></Info>
              <ShopButton><GtaRegular2 onClick={handleShopClickBracelets}> SHOP BRACELETS </GtaRegular2></ShopButton>

              </DivImmagineCategoria2>
              
              </OrangeDiv>                                  
              


            {/* Renderizza gli elementi solo se earringsItems contiene dati */}
            {earringsItems.map((item, index) => (
            <React.Fragment key={index}>

              <OrangeDiv>
              <Column>
                <Item item={item}/>
                <ItemInfo item={item}/>
              </Column>
              </OrangeDiv>
              


            </React.Fragment>
            ))}
          </Containertest>



      

      
    ) : (
      <p>Nessun elemento trovato</p> // Messaggio di avviso nel caso in cui earringsItems sia vuoto
    )}
              </LazyLoadWrapper>
          </LazyLoad>
  </>
)}


{value === "bracelets" && (
  <>
          <LazyLoad once>
        <LazyLoadWrapper loaded={loaded} onLoad={handleContentLoad}>
    {braceletsItems.length > 0 ? ( // Verifica se earringsItems contiene elementi

          <Containertest>

            <OrangeDiv>
            <DivImmagineCategoria2>

              <LazyLoadedCategory src={braceletsCategory} alt="Categoria bracelets" />



              {/* Aggiungi il tuo div qui */}
              <Info><GtaRegularShadow> Rare diamonds & gemstones <br></br>with  unique settings. </GtaRegularShadow></Info>
              <ShopButton><GtaRegular2 onClick={handleShopClickBracelets}> SHOP BRACELETS </GtaRegular2></ShopButton>

              </DivImmagineCategoria2>
              
              </OrangeDiv>                                  
              


            {/* Renderizza gli elementi solo se earringsItems contiene dati */}
            {braceletsItems.map((item, index) => (
            <React.Fragment key={index}>

              <OrangeDiv>
              <Column>
                <Item item={item}/>
                <ItemInfo item={item}/>
              </Column>
              </OrangeDiv>
              


            </React.Fragment>
            ))}
          </Containertest>



      

      
    ) : (
      <p>Nessun elemento trovato</p> // Messaggio di avviso nel caso in cui earringsItems sia vuoto
    )}

          </LazyLoadWrapper>
          </LazyLoad>
  </>

)}

{value === "necklaces" && (
  <>
        <LazyLoad once>
        <LazyLoadWrapper loaded={loaded} onLoad={handleContentLoad}>
    {necklacesItems.length > 0 ? ( // Verifica se earringsItems contiene elementi

          <Containertest>

            <OrangeDiv>
            <DivImmagineCategoria2>

              <LazyLoadedCategory src={necklacesCategory} alt="Categoria bracelets" />



              {/* Aggiungi il tuo div qui */}
              <Info><GtaRegularShadow> Rare diamonds & gemstones <br></br>with  unique settings. </GtaRegularShadow></Info>
              <ShopButton><GtaRegular2 onClick={handleShopClickBracelets}> SHOP NECKLACES </GtaRegular2></ShopButton>

              </DivImmagineCategoria2>
              
              </OrangeDiv>                                  
              


            {/* Renderizza gli elementi solo se earringsItems contiene dati */}
            {necklacesItems.map((item, index) => (
            <React.Fragment key={index}>

              <OrangeDiv>
              <Column>
                <Item item={item}/>
                <ItemInfo item={item}/>
              </Column>
              </OrangeDiv>
              


            </React.Fragment>
            ))}
          </Containertest>



      

      
    ) : (
      <p>Nessun elemento trovato</p> // Messaggio di avviso nel caso in cui earringsItems sia vuoto
    )}
            </LazyLoadWrapper>
           </LazyLoad>
  </>
)}

{value === "rings" && (
  <>
        <LazyLoad once>
        <LazyLoadWrapper loaded={loaded} onLoad={handleContentLoad}>
    {ringsItems.length > 0 ? ( // Verifica se earringsItems contiene elementi

          <Containertest>

            <OrangeDiv>
            <DivImmagineCategoria2>

              <LazyLoadedCategory src={ringsCategory} alt="Categoria bracelets" />



              {/* Aggiungi il tuo div qui */}
              <Info><GtaRegularShadow> Rare diamonds & gemstones <br></br>with  unique settings. </GtaRegularShadow></Info>
              <ShopButton><GtaRegular2 onClick={handleShopClickBracelets}> SHOP RINGS </GtaRegular2></ShopButton>

              </DivImmagineCategoria2>
              
              </OrangeDiv>                                  
              


            {/* Renderizza gli elementi solo se earringsItems contiene dati */}
            {ringsItems.map((item, index) => (
            <React.Fragment key={index}>

              <OrangeDiv>
              <Column>
                <Item item={item}/>
                <ItemInfo item={item}/>
              </Column>
              </OrangeDiv>
              


            </React.Fragment>
            ))}
          </Containertest>



      

      
    ) : (
      <p>Nessun elemento trovato</p> // Messaggio di avviso nel caso in cui earringsItems sia vuoto
    )}
            </LazyLoadWrapper>
           </LazyLoad>
  </>
)}








      </ItemDiv>
      
    </ItemDivContenitore>
    



    </Container>
  );
};

export default ShoppingList;