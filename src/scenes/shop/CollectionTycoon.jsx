import styled from 'styled-components';
import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import ItemInShop from "../../components/ItemInShop";
import { Box, Button, IconButton, Typography } from "@mui/material";
import FilterImage from "../../assets/filter.png";
import SortImage from "../../assets/down.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../state";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  setIsCartOpen,
} from "../../state";
import ImmagineCollection from "../../assets/tycoon1.avif"
import ImmagineCollection2 from "../../assets/tycoon5.avif"
import add from '../../assets/add.png';
import close from '../../assets/meno.png';
import LazyLoad from 'react-lazyload';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const DivImmagini = styled.div`
  width: 85%;
  min-height: 50vh;
  font-size: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 5%;


@media(max-width: 900px){
  min-height: 40vh;
}
`;



// Definisci il componente StyledLazyLoadImage utilizzando styled-components
const ImmagineCollectionStyle = styled.img`
width: 50%;
height: auto;
object-fit: cover;
margin-right:2%;

@media(max-width: 680px){
  display: none;
}
`;

// Definisci il componente StyledLazyLoadImage utilizzando styled-components
const ImmagineCollection2Style = styled.img`
width: 50%;
height: auto;
object-fit: cover;
margin-left:2%;

@media(max-width: 680px){
  width: 100%;
}
`;



  
const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
min-height: 200vh;
margin-top:120px;
align-items: center;
margin-bot:1%;
overflow:hidden;


`;

const FilterOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 30%; /* Larghezza metà dello schermo */
height: 100%;
background-color: white;
z-index: 999; /* Sopra ogni cosa */
`;



const DivInfo = styled.div`
display: flex;
min-height: 100px;
align-items: center;
justify-content: flex-start;
flex-direction: column;
overflow: hidden;


margin-bottom: 20px;
margin-top:4%;
transition: min-height 0.5s ease;
width: 50%;

@media(max-width:680px){
  width:80%;
}

`;

const DivDescrizione = styled.div`
display: flex;
width: 100%;
margin-top: 1%;
margin-bottom: 1%;
align-items: flex-start;
justify-content: center;
text-align: center;

`;

const DivFiltri = styled.div`
display: flex;

margin-bottom:4%;
width: 85%;
justify-content: space-between;
`;

const CustomButton = styled.button`

border: none;

cursor: pointer;
display:flex;

background-color: ${(props) => props.backgroundColor || "gray"};
color: black;
align-items:center;
justify-content:center;

`;

const StyledItem = styled.div`
width: 100%;
height: auto;
margin-bottom: 15%;
position: relative;
display: flex;
justify-content: center;


&:nth-child(3n + 1) {
margin-left: 0;
margin-right: auto;
}

&:nth-child(3n + 2) {
margin-left: auto;
margin-right: auto;
}

&:nth-child(3n + 3) {
margin-left: auto;
margin-right: 0;
}
`;

const DivProdotti = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr); /* Tre colonne per riga */
gap: 20px; /* Aggiungi margine tra le colonne e le righe */
justify-content: center; /* Centra le colonne nella griglia */
width: 85%;
margin: 0 auto;
margin-top: 1%;

@media(max-width:680px){
grid-template-columns: repeat(2, 1fr); /* Tre colonne per riga */

}

`;

const Div = styled.div`
display: flex;

width: 30px;
`;

const DivCarrello =  styled(Box)`
z-index: 99;
position: fixed;

bottom: 0;
width: 40%;
min-height: 100%;
background-color: white;
display: flex;
justify-content:center;



left: ${({ open }) => (open ? '0%' : '-90%')};
transition: left 0.5s ease;

@media(max-width:1000px){
  width:80%;
}






`;


// Definisci i componenti styled
const ContainerFiltri = styled.div`
display: flex;
flex-direction: column;
width:85%;
height:80%;
margin: 20px;
margin-top:10%;

@media(max-width: 680px){
  margin-top:20%;
}

`;

const FilterButton = styled.div`
display: flex;
align-items: center;
justify-content: space-between;  /* Aggiunto per separare gli elementi */
margin: 5px;
padding: 8px;
font-size: 16px;
cursor: pointer;
user-select: none; /* Evita la selezione del testo */
width: 100%;
`;

const FilterButtonText = styled.span`
/* Aggiunto il flex-grow per far sì che occupi lo spazio rimanente */
flex-grow: 1;
margin-right: 14px;
text-align: left;  /* Allinea il testo a sinistra */
font-size: 25px;
font-family: 'GTAmericaRegular';
font-size: 24px;


`;

const FilterSign = styled.span`
margin-left: 14px;
font-size: 30px;
`;

const InfoContainer = styled.div`
max-height: ${({ visible }) => (visible ? '400px' : '0px')}; /* Imposta una max-height elevata quando è aperto */
overflow: hidden;
transition: max-height 0.8s ease; /* Aggiunta transizione per un effetto fluido */

margin-top: 10px;
text-align: left;
width:100%;

align-items: center;
justify-content: space-between;  /* Aggiunto per separare gli elementi */
margin: 5px;
margin-left: 5%;
font-size: 16px;
user-select: none; /* Evita la selezione del testo */
width: 100%;


`;







const UnstyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
appearance: none;
-webkit-appearance: none;
-moz-appearance: none;
width: 16px;
height: 16px;
border: 1px solid black;
border-radius: 0; /* Imposta il bordo senza angoli smussati */
outline: none;
cursor: pointer;

&:checked {
background-color: black;
border-color: black;
}
`;

const CheckboxContainer = styled.label`
display: flex;
align-items: center;
margin-bottom: 10px;
`;

const CheckboxText = styled.span`
margin-left: 20px; /* Aumenta la distanza tra il quadrato e il testo */
`;

const CheckBoxDiv = styled.div`
width:100%;
height:100%;

`;
const DivProduct = styled.div`
width:50%;
height:%;
background-color:gray;
font-size: 8px;
`;

//FONT
const ABC = styled.p`
font-family: 'ABCGaisyr-Book';
font-size: 40px; 
margin-bottom: 0;
margin-top:2%;

@media(max-width: 1200px){
  font-size: 35px; 
  
  }
  @media(max-width: 680px){
    font-size: 30px; 
    
    }


`;

const GtaRegular = styled.p`
font-family: 'GTAmericaRegular';
font-size: 16px;
margin-left:10px;


@media(max-width:680px){
  font-size: 14px;
}

`;
const GtaRegular2 = styled.p`
font-family: 'GTAmericaRegular';
font-size: 16px;
margin-right:10px;

`;

const GtaRegular12 = styled.p`
font-family: 'GTAmericaRegular';
font-size: 12px;

`;

const LazyLoadWrapper = styled.div`
opacity: ${({ loaded }) => (loaded ? 1 : 0)};
transition: opacity 0.6s ease-in-out;
`;

const DivSettingButton = styled.div`
  width: 100%;
  height: 50px;

  position: absolute;
  display: flex;
  top: 88%;
  align-items:center;
  justify-content: center;

  margin-top:5%;


`;

const DivSettingButtonCenter = styled.div`
  width: 80%;
  height: 120px;
  display:flex;

  @media(max-width: 680px){
    width: 80%;
    height: 80px;
  }

  
`;


// Definisci il componente ButtonBlack come variante di Button
const ButtonBlack= styled(Button)`


  && {
    margin-bottom: 20px;
    margin-top: 20px;
    margin-right: 2%;
    background-color: black;
    color: white;
    width:100%;
    height:50%;
    border: 1px solid black; // Imposta il bordo nero di 1px per il normale stato del bottone
  }

  &&:hover {
    background-color: black;
    color: white;
    border: 1px solid black; // Mantieni il bordo nero di 1px anche al passaggio del mouse
  }


  @media(max-width: 680px){
    && {
      transition: background-color 0.3s ease;

    }
  }
`;

// Definisci il componente ButtonBlack come variante di Button
const ButtonWhite = styled(Button)`


  && {
    width:100%;
    height:50%;
    margin-left: 2%;
    margin-bottom: 20px;
    margin-top: 20px;
    background-color: white;
    color: black;
    border: 1px solid black; // Imposta il bordo nero di 1px per il normale stato del bottone
  }

  &&:hover {
    background-color: black;
    color: white;
    border: 1px solid black; // Mantieni il bordo nero di 1px anche al passaggio del mouse
  }


  @media(max-width: 680px){
    && {
      transition: background-color 0.3s ease;

    }
  }
`;

const CollectionFleurie = () => {

  const [loaded, setLoaded] = React.useState(false);
  const handleContentLoad = () => {
    setLoaded(true);
  };






  const dispatch = useDispatch();
  
  const [value, setValue] = useState("tycoon");
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const items = useSelector((state) => state.cart.items);
  const breakPoint = useMediaQuery("(min-width:600px)");

  const [showCollectionInfo, setshowCollectionInfo] = useState(false);
  const [showCategoryInfo, setshowCategoryInfo] = useState(false);
  const [showMaterialInfo, setshowMaterialInfo] = useState(false);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedCollection, setSelectedCollection] = useState([]);
  const [showStoneInfo, setshowStoneInfo] = useState(false);
  const [selectedStone, setSelectedStone] = useState([]);





  const handleFilterClick = () => {
    setIsFilterVisible(!isFilterVisible);
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



  
  const tycoonItems = items.filter((item) => {
    // Se sia selectedMaterials che selectedCollection sono vuoti, restituisci true per includere tutti gli elementi
    if (selectedMaterials.length === 0 && selectedCollection.length === 0 && selectedStone.length === 0){
      return item.attributes.collection === "Tycoon";
    }
  
    // Verifica la categoria, il materiale e la collezione
    return (
      item.attributes.category === "tycoon" &&
      (selectedMaterials.length === 0 || selectedMaterials.includes(item.attributes.material)) &&
      (selectedCollection.length === 0 || selectedCollection.includes(item.attributes.collection)) &&
      (selectedStone.length === 0 || selectedStone.includes(item.attributes.stone))
    );
  });
  
  
  


  const handleCheckboxChange = (material) => {
    // Aggiorna lo stato delle opzioni selezionate in base alla checkbox
    if (selectedMaterials.includes(material)) {
      setSelectedMaterials(selectedMaterials.filter((m) => m !== material));

      
    } else {
      setSelectedMaterials([...selectedMaterials, material]);

    }
  };

  const handleCheckboxChangeCollection = (Collection) => {
    // Aggiorna lo stato delle opzioni selezionate in base alla checkbox
    if (selectedCollection.includes(Collection)) {
      setSelectedCollection(selectedCollection.filter((m) => m !== Collection));

      
    } else {
      setSelectedCollection([...selectedCollection, Collection]);

    }
  };


  const handleResetClick = () => {
    // Reimposta gli stati a array vuoti
    setSelectedMaterials([]);
    setSelectedStone([]);
    setSelectedCollection([]);
  };

  const handleCheckboxChangeStone = (Stone) => {
    // Aggiorna lo stato delle opzioni selezionate in base alla checkbox
    if (selectedStone.includes(Stone)) {
      setSelectedStone(selectedStone.filter((m) => m !== Stone));

      
    } else {
      setSelectedStone([...selectedStone, Stone]);

    }
  };


  const Checkbox = ({ label, onChange, checked, ...props }) => (
    <CheckboxContainer>
      <UnstyledCheckbox
        {...props}
        checked={checked}
        onChange={onChange}
      />
      <CheckboxText>{label}</CheckboxText>
    </CheckboxContainer>
  );
  
 

  return (
    <>
          <LazyLoad once>
      <LazyLoadWrapper loaded={loaded} onLoad={handleContentLoad}>
    
      <DivCarrello open={isFilterVisible}>
              <ContainerFiltri>

                <FilterButton onClick={() =>  {setshowStoneInfo(!showStoneInfo); setshowMaterialInfo(false); setshowCollectionInfo(false);  } }>
                  <FilterButtonText>Stones</FilterButtonText>            
                  
                  <FilterSign>
                  {showStoneInfo ? (
                    <img src={close} alt="Add" style={{ width: '20px', height: '20px' }} />
                  ) : (
                    <img src={add} alt="Add" style={{ width: '20px', height: '20px' }} />
                  )}
                </FilterSign>
                  

                </FilterButton>
                


                <InfoContainer visible={showStoneInfo}>
                  {/* Inserisci qui le informazioni per le donne */}
                  <Checkbox
                  label="Diamond"
                  onChange={() => handleCheckboxChangeStone("Diamond")}
                  checked={selectedStone.includes("Diamond")}
                /> 
                  <Checkbox
                  label="Malachite"
                  onChange={() => handleCheckboxChangeStone("Malachite")}
                  checked={selectedStone.includes("Malachite")}
                /> 
                  <Checkbox
                  label="Nacre"
                  onChange={() => handleCheckboxChangeStone("Nacre")}
                  checked={selectedStone.includes("Nacre")}
                /> 
                  <Checkbox
                  label="Sapphire"
                  onChange={() => handleCheckboxChangeStone("Sapphire")}
                  checked={selectedStone.includes("Sapphire")}
                /> 
                  <Checkbox
                  label="Ruby"
                  onChange={() => handleCheckboxChangeStone("Ruby")}
                  checked={selectedStone.includes("Ruby")}
                /> 
                  <Checkbox
                  label="Emerald"
                  onChange={() => handleCheckboxChangeStone("Emerald")}
                  checked={selectedStone.includes("Emerald")}
                /> 
                </InfoContainer>




                <InfoContainer visible={showCollectionInfo}>
                <Checkbox
                  label="Bollywood"
                  onChange={() => handleCheckboxChangeCollection("Bollywood")}
                  checked={selectedCollection.includes("Bollywood")}
                />
                <Checkbox
                  label="Fleurie"
                  onChange={() => handleCheckboxChangeCollection("Fleurie")}
                  checked={selectedCollection.includes("Fleurie")}
                />
                <Checkbox
                  label="Tycoon"
                  onChange={() => handleCheckboxChangeCollection("Tycoon")}
                  checked={selectedCollection.includes("Tycoon")}
                />


                <Checkbox
                  label="Urania"
                  onChange={() => handleCheckboxChangeCollection("Urania")}
                  checked={selectedCollection.includes("Urania")}
                />
                <Checkbox
                  label="Zingara"
                  onChange={() => handleCheckboxChangeCollection("Zingara")}
                  checked={selectedCollection.includes("Zingara")}
                />

                </InfoContainer>

                <FilterButton onClick={() => {setshowMaterialInfo(!showMaterialInfo); setshowCollectionInfo(false);   setshowStoneInfo(false);}}>
                  <FilterButtonText>Material</FilterButtonText>

                  <FilterSign>
                    {showMaterialInfo ? (
                      <img src={close} alt="Add" style={{ width: '20px', height: '20px' }} />
                    ) : (
                      <img src={add} alt="Add" style={{ width: '20px', height: '20px' }} />
                    )}
                  </FilterSign>
                </FilterButton>
          

                <InfoContainer visible={showMaterialInfo}>


                <Checkbox
                  label="Yellow Gold"
                  onChange={() => handleCheckboxChange("Yellow Gold")}
                  checked={selectedMaterials.includes("Yellow Gold")}
                />
                <Checkbox
                  label="White Gold"
                  onChange={() => handleCheckboxChange("White Gold")}
                  checked={selectedMaterials.includes("White Gold")}
                />
                <Checkbox
                  label="Pink Gold"
                  onChange={() => handleCheckboxChange("Pink Gold")}
                  checked={selectedMaterials.includes("Pink Gold")}
                />
                <Checkbox
                  label="Black Gold"
                  onChange={() => handleCheckboxChange("Black Gold")}
                  checked={selectedMaterials.includes("Black Gold")}
                />
                <Checkbox
                  label="Platinum"
                  onChange={() => handleCheckboxChange("Platinum")}
                  checked={selectedMaterials.includes("Platinum")}
                />

                  {/* Inserisci qui le informazioni per le persone trans */}



                </InfoContainer>

          


              </ContainerFiltri>

              <DivSettingButton>
              <DivSettingButtonCenter>
                  <ButtonBlack
                    sx={{
                      backgroundColor: "black",
                      color: "white",
                      borderRadius: 0,
                      minWidth: "10%",


                    }}           onClick={handleFilterClick}
                  >
                     <GtaRegular12>APPLY</GtaRegular12>  
                  </ButtonBlack>
                  <ButtonWhite
                    sx={{
                      backgroundColor: "white",
                      color: "black",
                      borderRadius: 0,
                      minWidth: "10%",


                    }}   onClick={handleResetClick}
                  >
                      <GtaRegular12>RESET </GtaRegular12>
                  </ButtonWhite>


              </DivSettingButtonCenter>


              </DivSettingButton>
      </DivCarrello>

      <Box
        display={isFilterVisible ? "block" : "none"}
        backgroundColor="rgba(0, 0, 0, 0.4)"
        position="fixed"
        zIndex={10}
        width="100%"  // Cambiato da 100% a 70%
        height="100%"
        right="0"    // Cambiato da left a right
        top="0"
        overflow="auto"
        onClick={handleFilterClick}
      >





      </Box>

      <Container>
        <DivInfo>
          <ABC>Tycoon</ABC>
          <DivDescrizione>
            <GtaRegular>
            Contemporaneity, energetic and authoritative values, forges the man of the future in durable materials
            </GtaRegular>
          </DivDescrizione>
        </DivInfo>

        <DivImmagini>

        <ImmagineCollectionStyle src={ImmagineCollection}/>
        <ImmagineCollection2Style src={ImmagineCollection2}/>
        </DivImmagini>


        <DivFiltri>
          <CustomButton backgroundColor="white" onClick={handleFilterClick}>
          <img src={FilterImage} alt="Filter" style={{ width: '20px' }} />
          <GtaRegular>Filter</GtaRegular>

          </CustomButton>
          <CustomButton backgroundColor="white" onClick={handleFilterClick}>

          <GtaRegular2>Sort By</GtaRegular2>
          <img src={SortImage} alt="Filter" style={{ width: '20px' }} />
          </CustomButton>
        </DivFiltri>

        
        <DivProdotti>
          
          {value === "tycoon" &&
            tycoonItems.map((item) => (

              <StyledItem key={`${item.id}`}>
                <ItemInShop item={item} />
              </StyledItem>
            ))}




            

            

            
        </DivProdotti>

      </Container>
      </LazyLoadWrapper>
      </LazyLoad>
      
    </>
  );
};

export default CollectionFleurie;
