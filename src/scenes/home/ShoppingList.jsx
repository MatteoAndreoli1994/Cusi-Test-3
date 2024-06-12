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

import arrowLeft from "../../assets/arrowLeft.svg";
import arrowRight from "../../assets/arrowRight.svg";

import { LazyLoadImage } from 'react-lazy-load-image-component';

const ShoppingList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("earrings");
  const items = useSelector((state) => state.cart.items);
  const breakPoint = useMediaQuery("(min-width:600px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setStartIndex(0); // Azzera l'array di posizionamento quando cambia la categoria
  };

  async function getItems() {
    const items = await fetch(
      "https://cusi-strapi-3690cb0bf021.herokuapp.com/api/items?populate=image",
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

    const ButtonCarousel = styled.button`
      padding: 12px 36px;
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
  background-color:red;


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
        padding: 10px 40px;

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
    width:100%;

    `;



    const Container = styled.div`
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    margin-bottom:6.5%;

    align-items:center;
    
    min-height:100%;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;

    @media(max-width: 900px){
      margin-bottom:6.5%;
    }

  `;


  const DivImmaginiProdotti = styled.div`
  display:flex;
  width: 33%;
  height: auto;


  margin-left:0.5%;
  margin-right:0.5%;
  margin-top:1%;



  @media(max-width:900px){
    width: 50%;
    margin-left:0.5%;
    margin-right:0.5%;
  }
  
  
`;
const DivImmaginiProdottiDesktop = styled.div`
display:flex;
width: 33%;
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
width: 33%;
min-height: 8vh;
margin-left:0.5%;
margin-right:0.5%;
margin-top:1%;

justify-content:center;

@media(max-width:900px){
  width: 50%;
}


`;
const DivInfoProdottiDesktop = styled.div`
display:flex;
width: 33%;
min-height: 8vh;
margin-left:0.5%;
margin-right:0.5%;
margin-top:1%;

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
  height: 10%;
  top: 85%;
  left: 6%;
  display: flex;
  background-color: black;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #333;
  }


  @media(max-width: 900px){
    top: 80%;
    padding: 10px 12.5px;
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
    top: 65%;
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

`;
const GtaRegularShadow = styled.p`
  font-family: 'GTAmericaRegular';
  font-size: 15px;

  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Puoi personalizzare questi valori */

  @media (max-width: 1200px){
    font-size: 13px; 
  }

  @media (max-width: 900px){
    font-size: 9.5px; 
  }
`;


const LeftArrow = styled.img`
  cursor: pointer;



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
`;

// Componente CircleContainer
const CircleContainer = styled.div`
  position: absolute;
  top: 40%;
  left: -3%;
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
  right: -3%;
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
font-size: 12px;
margin:0;


@media(max-width: 900px){
  font-size: 9px;
}

`;
const Container2 = styled.div`
width:100%;
height:auto;
display: flex;
flex-direction: column;


align-items:center;




`;

const ContenitoreDeiProdotti = styled.div`
width: 100%;
height: auto;
overflow: hidden;
top: 0;
margin: auto; // Aggiungi questa riga per centrare il div orizzontalmente
display: flex; // Aggiungi questa riga per centrare il div verticalmente

justify-content: center; // Aggiungi questa riga per centrare il div orizzontalmente



`;
const ContenitorePerInfo = styled.div`
margin-top:2%;
margin-bottom:3%;

left: 0;
width: 100%;
height: auto;
overflow: hidden;

z-index: 1; // Imposta un indice z superiore rispetto al ContenitoreDeiProdotti


`;





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





       {/*EARRINGS*/}
        {value === "earrings" && (
          <>
          <ContenitorePerInfo>
            <ContenitoreDeiProdotti>
            {startIndex === 0 ? (
              <DivImmaginiProdotti>
                {/* Mostra il messaggio "Ciao" solo quando startIndex è 0 */}
                

                  <Container2>
                          
                  <DivImmagineCategoria2>

                    <LazyLoadedCategory src={earringsCategory} alt="Categoria earrings"/>

                  {/* Aggiungi il tuo div qui */}
                  <Info><GtaRegularShadow>Rare diamonds & gemstones <br></br>with  unique settings.</GtaRegularShadow></Info>
                  <ShopButton><GtaRegular2> SHOP EARRINGS </GtaRegular2></ShopButton>

                  </DivImmagineCategoria2>
                  </Container2>


              </DivImmaginiProdotti>
              ) : (
                
              <DivImmaginiProdotti>
                {/* Mostra il secondo elemento */}
                {earringsItems[(startIndex) ] && (


                  <Item item={earringsItems[(startIndex)-1]} key={`${earringsItems[(startIndex + 1) % earringsItems.length].name}-${earringsItems[(startIndex + 1) % earringsItems.length].id}`} />






                      
              )}
              </DivImmaginiProdotti>
              
              )}


              <DivImmaginiProdotti>
                {/* Mostra il secondo elemento */}
                {earringsItems[(startIndex) ] && (
                  <Item item={earringsItems[(startIndex) ]} key={`${earringsItems[(startIndex + 1) % earringsItems.length].name}-${earringsItems[(startIndex + 1) % earringsItems.length].id}`} />
                )}
              </DivImmaginiProdotti>

              <DivImmaginiProdottiDesktop>
                {/* Mostra il terzo elemento */}
                {earringsItems[(startIndex+1) ] && (
                  <Item item={earringsItems[(startIndex+1) ]} key={`${earringsItems[(startIndex + 1) % earringsItems.length].name}-${earringsItems[(startIndex + 1) % earringsItems.length].id}`} />
                )}
              </DivImmaginiProdottiDesktop>
            </ContenitoreDeiProdotti>

            <ContenitoreDeiProdotti>
            {startIndex === 0 ? (
              <DivInfoProdotti>
              </DivInfoProdotti>

            ):(
              <DivInfoProdotti>
                  <ItemInfo item={earringsItems[(startIndex -1) % earringsItems.length]} key={`${earringsItems[(startIndex + 1) % earringsItems.length].name}-${earringsItems[(startIndex + 1) % earringsItems.length].id}`} />
              </DivInfoProdotti>

            )}





              <DivInfoProdotti>
                {/* Mostra il secondo elemento */}
                {earringsItems[(startIndex ) % earringsItems.length] && (
                  <ItemInfo item={earringsItems[(startIndex) % earringsItems.length]} key={`${earringsItems[(startIndex + 1) % earringsItems.length].name}-${earringsItems[(startIndex + 1) % earringsItems.length].id}`} />
                )}
              </DivInfoProdotti>

              <DivInfoProdottiDesktop>
                {/* Mostra il terzo elemento */}
                {earringsItems[(startIndex + 1) % earringsItems.length] && (
                  <ItemInfo item={earringsItems[(startIndex +1) % earringsItems.length]} key={`${earringsItems[(startIndex + 2) % earringsItems.length].name}-${earringsItems[(startIndex + 2) % earringsItems.length].id}`} />
                )}
              </DivInfoProdottiDesktop>
            </ContenitoreDeiProdotti>
          </ContenitorePerInfo>
          </>
        )}




       {/*BRACELETS*/}
       {value === "bracelets" && (
        <>
          <ContenitorePerInfo>
            <ContenitoreDeiProdotti>
              {startIndex === 0 ? (
                <DivImmaginiProdotti>
                  {/* Mostra il messaggio "Ciao" solo quando startIndex è 0 */}

                  <Container2>
                    <DivImmagineCategoria2>

                      <LazyLoadedCategory src={braceletsCategory} alt="Categoria earrings" />



                      {/* Aggiungi il tuo div qui */}
                      <Info><GtaRegularShadow> Rare diamonds & gemstones <br></br>with  unique settings. </GtaRegularShadow></Info>
                      <ShopButton><GtaRegular2> SHOP BRACELETSS </GtaRegular2></ShopButton>

                    </DivImmagineCategoria2>
                  </Container2>

                </DivImmaginiProdotti>
              ) : (
                <DivImmaginiProdotti>
                  {/* Mostra il secondo elemento */}
                  {braceletsItems[(startIndex)] && (
                    <Item item={braceletsItems[(startIndex)-1] % braceletsItems.length} key={`${braceletsItems[(startIndex + 1) % braceletsItems.length].name}-${braceletsItems[(startIndex + 1) % braceletsItems.length].id}`} />
                  )}
                </DivImmaginiProdotti>
              )}

              <DivImmaginiProdotti>
                {/* Mostra il secondo elemento */}
                {braceletsItems[(startIndex)] && (
                  <Item item={braceletsItems[(startIndex) % braceletsItems.length]} key={`${braceletsItems[(startIndex + 1) % braceletsItems.length].name}-${braceletsItems[(startIndex + 1) % braceletsItems.length].id}`} />
                )}
              </DivImmaginiProdotti>

              <DivImmaginiProdottiDesktop>
                {/* Mostra il terzo elemento */}
                {braceletsItems[(startIndex+1)] && (
                  <Item item={braceletsItems[(startIndex+1) % braceletsItems.length ]} key={`${braceletsItems[(startIndex + 1) % braceletsItems.length].name}-${braceletsItems[(startIndex + 1) % braceletsItems.length].id}`} />
                )}
              </DivImmaginiProdottiDesktop>
            </ContenitoreDeiProdotti>

            <ContenitoreDeiProdotti>
              {startIndex === 0 ? (
                <DivInfoProdotti>
                </DivInfoProdotti>
              ) : (
                <DivInfoProdotti>
                    <ItemInfo item={braceletsItems[(startIndex -1) % braceletsItems.length]} key={`${braceletsItems[(startIndex + 1) % braceletsItems.length].name}-${braceletsItems[(startIndex + 1) % braceletsItems.length].id}`} />
                </DivInfoProdotti>
              )}

              <DivInfoProdotti>
                {/* Mostra il secondo elemento */}
                {braceletsItems[(startIndex) % braceletsItems.length] && (
                  <ItemInfo item={braceletsItems[(startIndex) % braceletsItems.length]} key={`${braceletsItems[(startIndex + 1) % braceletsItems.length].name}-${braceletsItems[(startIndex + 1) % braceletsItems.length].id}`} />
                )}
              </DivInfoProdotti>

              <DivInfoProdottiDesktop>
                {/* Mostra il terzo elemento */}
                {braceletsItems[(startIndex + 1) % braceletsItems.length] && (
                  <ItemInfo item={braceletsItems[(startIndex +1) % braceletsItems.length]} key={`${braceletsItems[(startIndex + 2) % braceletsItems.length].name}-${braceletsItems[(startIndex + 2) % braceletsItems.length].id}`} />
                )}
              </DivInfoProdottiDesktop>
            </ContenitoreDeiProdotti>
          </ContenitorePerInfo>
        </>
        )}



        {/* NECKLACES */}
        {value === "necklaces" && (
          <>
            <ContenitorePerInfo>
              <ContenitoreDeiProdotti>
                {startIndex === 0 ? (
                  <DivImmaginiProdotti>
                    {/* Mostra il messaggio "Ciao" solo quando startIndex è 0 */}

                    <Container2>
                      <DivImmagineCategoria2>
                      <LazyLoadedCategory src={necklacesCategory} alt="Categoria earrings" />

                        {/* Aggiungi il tuo div qui */}
                        <Info><GtaRegularShadow>Rare diamonds & gemstones <br></br>with  unique settings.</GtaRegularShadow></Info>
                        <ShopButton><GtaRegular2> SHOP NECKLACES </GtaRegular2></ShopButton>

                      </DivImmagineCategoria2>
                    </Container2>

                  </DivImmaginiProdotti>
                ) : (
                  <DivImmaginiProdotti>
                    {/* Mostra il secondo elemento */}
                    {necklacesItems[(startIndex)] && (
                      <Item item={necklacesItems[(startIndex)-1]} key={`${necklacesItems[(startIndex + 1) % necklacesItems.length].name}-${necklacesItems[(startIndex + 1) % necklacesItems.length].id}`} />
                    )}
                  </DivImmaginiProdotti>
                )}

                <DivImmaginiProdotti>
                  {/* Mostra il secondo elemento */}
                  {necklacesItems[(startIndex)] && (
                    <Item item={necklacesItems[(startIndex)]} key={`${necklacesItems[(startIndex + 1) % necklacesItems.length].name}-${necklacesItems[(startIndex + 1) % necklacesItems.length].id}`} />
                  )}
                </DivImmaginiProdotti>

                <DivImmaginiProdottiDesktop>
                  {/* Mostra il terzo elemento */}
                  {necklacesItems[(startIndex+1)] && (
                    <Item item={necklacesItems[(startIndex+1)]} key={`${necklacesItems[(startIndex + 1) % necklacesItems.length].name}-${necklacesItems[(startIndex + 1) % necklacesItems.length].id}`} />
                  )}
                </DivImmaginiProdottiDesktop>
              </ContenitoreDeiProdotti>

              <ContenitoreDeiProdotti>
                {startIndex === 0 ? (
                  <DivInfoProdotti>
                  </DivInfoProdotti>
                ) : (
                  <DivInfoProdotti>
                      <ItemInfo item={necklacesItems[(startIndex -1) % necklacesItems.length]} key={`${necklacesItems[(startIndex + 1) % necklacesItems.length].name}-${necklacesItems[(startIndex + 1) % necklacesItems.length].id}`} />
                  </DivInfoProdotti>
                )}

                <DivInfoProdotti>
                  {/* Mostra il secondo elemento */}
                  {necklacesItems[(startIndex) % necklacesItems.length] && (
                    <ItemInfo item={necklacesItems[(startIndex) % necklacesItems.length]} key={`${necklacesItems[(startIndex + 1) % necklacesItems.length].name}-${necklacesItems[(startIndex + 1) % necklacesItems.length].id}`} />
                  )}
                </DivInfoProdotti>

                <DivInfoProdottiDesktop>
                  {/* Mostra il terzo elemento */}
                  {necklacesItems[(startIndex + 1) % necklacesItems.length] && (
                    <ItemInfo item={necklacesItems[(startIndex +1) % necklacesItems.length]} key={`${necklacesItems[(startIndex + 2) % necklacesItems.length].name}-${necklacesItems[(startIndex + 2) % necklacesItems.length].id}`} />
                  )}
                </DivInfoProdottiDesktop>
              </ContenitoreDeiProdotti>
            </ContenitorePerInfo>
          </>
        )}




        {/* RINGS */}
        {value === "rings" && (
          <>
            <ContenitorePerInfo>
              <ContenitoreDeiProdotti>
                {startIndex === 0 ? (
                  <DivImmaginiProdotti>
                    {/* Mostra il messaggio "Ciao" solo quando startIndex è 0 */}

                    <Container2>
                      <DivImmagineCategoria2>

                        <LazyLoadedCategory src={ringsCategory} alt="Categoria earrings" />
                        {/* Aggiungi il tuo div qui */}
                        <Info><GtaRegularShadow> Rare diamonds & gemstones <br></br>with  unique settings. </GtaRegularShadow></Info>
                        <ShopButton><GtaRegular2> SHOP RINGS </GtaRegular2></ShopButton>

                      </DivImmagineCategoria2>
                    </Container2>

                  </DivImmaginiProdotti>
                ) : (
                  <DivImmaginiProdotti>
                    {/* Mostra il secondo elemento */}
                    {ringsItems[(startIndex)] && (
                      <Item item={ringsItems[(startIndex)-1]} key={`${ringsItems[(startIndex + 1) % ringsItems.length].name}-${ringsItems[(startIndex + 1) % ringsItems.length].id}`} />
                    )}
                  </DivImmaginiProdotti>
                )}

                <DivImmaginiProdotti>
                  {/* Mostra il secondo elemento */}
                  {ringsItems[(startIndex)] && (
                    <Item item={ringsItems[(startIndex)]} key={`${ringsItems[(startIndex + 1) % ringsItems.length].name}-${ringsItems[(startIndex + 1) % ringsItems.length].id}`} />
                  )}
                </DivImmaginiProdotti>

                <DivImmaginiProdottiDesktop>
                  {/* Mostra il terzo elemento */}
                  {ringsItems[(startIndex+1)] && (
                    <Item item={ringsItems[(startIndex+1)]} key={`${ringsItems[(startIndex + 1) % ringsItems.length].name}-${ringsItems[(startIndex + 1) % ringsItems.length].id}`} />
                  )}
                </DivImmaginiProdottiDesktop>
              </ContenitoreDeiProdotti>

              <ContenitoreDeiProdotti>
                {startIndex === 0 ? (
                  <DivInfoProdotti>
                  </DivInfoProdotti>
                ) : (
                  <DivInfoProdotti>
                      <ItemInfo item={ringsItems[(startIndex -1) % ringsItems.length]} key={`${ringsItems[(startIndex + 1) % ringsItems.length].name}-${ringsItems[(startIndex + 1) % ringsItems.length].id}`} />
                  </DivInfoProdotti>
                )}

                <DivInfoProdotti>
                  {/* Mostra il secondo elemento */}
                  {ringsItems[(startIndex) % ringsItems.length] && (
                    <ItemInfo item={ringsItems[(startIndex) % ringsItems.length]} key={`${ringsItems[(startIndex + 1) % ringsItems.length].name}-${ringsItems[(startIndex + 1) % ringsItems.length].id}`} />
                  )}
                </DivInfoProdotti>

                <DivInfoProdottiDesktop>
                  {/* Mostra il terzo elemento */}
                  {ringsItems[(startIndex + 1) % ringsItems.length] && (
                    <ItemInfo item={ringsItems[(startIndex +1) % ringsItems.length]} key={`${ringsItems[(startIndex + 2) % ringsItems.length].name}-${ringsItems[(startIndex + 2) % ringsItems.length].id}`} />
                  )}
                </DivInfoProdottiDesktop>
              </ContenitoreDeiProdotti>
            </ContenitorePerInfo>
          </>
        )}



        {/* Add left arrow */}

        <>
 

        <CircleContainer onClick={() => { handleButtonClickLeft(); }}>
          <LeftArrow src={arrowLeft} alt="Left Arrow"  />
          <CircleBackground />
        </CircleContainer>
        




        {/* Add right arrow */}



          <CircleContainer2 onClick={() => { handleButtonClickRight(); }}>
            <RightArrow src={arrowRight} alt="Right Arrow" onClick={() => { handleButtonClickRight(); }} />
            <CircleBackground />
          </CircleContainer2>

                </>





      </ItemDiv>
    </ItemDivContenitore>



    </Container>
  );
};

export default ShoppingList;