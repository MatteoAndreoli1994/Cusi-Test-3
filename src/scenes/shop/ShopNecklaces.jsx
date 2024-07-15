import styled from 'styled-components';
import React, { useEffect, useState, useRef } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useTranslation } from 'react-i18next';
import ItemInShop from "../../components/ItemInShop";
import { Box, Button, IconButton, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../state";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  setIsCartOpen,
} from "../../state";
import FilterImage from "../../assets/filter.png";
import SortImage from "../../assets/down.png";
import add from '../../assets/add.png';
import close from '../../assets/meno.png';
import LazyLoad from 'react-lazyload';
import Footer from "../global/Footer"



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
min-height: 100vh;
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
width: 85%;

@media(max-width:680px){
  width:85%;
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
  width: 85%;
  justify-content: space-between;
  position: relative; /* Aggiunto per fare in modo che Sort sia posizionato rispetto a DivFiltri */
  margin-bottom: 4%;
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
min-height: 50vh;

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

@media(max-width:680px){
  font-size: 14px;
}

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
//aggiunta
const SortImage2 = styled.img`
  width: 20px;
  transform: ${({ showOptions }) => (showOptions ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease;
`;
const FilterOptionsBox = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 220px;
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;
const Option = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor:pointer;


  &:last-child {
    border-bottom: none;
  }
`;
const Dot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${({ selected }) => (selected ? 'black' : 'transparent')};
  margin-right: 10px;
`;
const GtaRegular3 = styled.p`
  font-family: 'GTAmericaRegular';
  font-size: 16px;
  margin: 0;
  line-height: 1; /* Azzerare la distanza tra le righe */
  color: ${({ selected }) => (selected ? 'black' : '#666')}; /* Colore di default tendente al grigio */

  @media (max-width: 680px) {
    font-size: 14px;
  }

  &:hover {
    color: black; /* Cambia il colore del testo a nero al passaggio del mouse */
  }
`;
const DivAvviso = styled.div`

display:flex;
width:85%;
min-height:40vh;

justify-content:center;
`;
const GtaRegular2Gray = styled.p`
  font-family: 'GTAmericaRegular';
  font-size: 16px;
  margin-right: 10px;
  color: gray;
  text-align: center;

  @media (max-width: 680px) {
    font-size: 14px;
  }
`;
const ShopNecklaces = () => {
  const [loaded, setLoaded] = React.useState(false);
  const handleContentLoad = () => {
    setLoaded(true);
  };


//aggiunta
const filterOptionsRef = useRef(null); // Riferimento al FilterOptionsBox
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Featured');

  const sortItems = (items, option) => {
    switch (option) {
      case 'Price Descending':
        return [...items].sort((a, b) => b.attributes.price - a.attributes.price);
      case 'Price Ascending':
        return [...items].sort((a, b) => a.attributes.price - b.attributes.price);
      case 'Featured':
      default:
        return items;
    }
  };



  const handleFilterClick2 = () => {
    setShowFilterOptions(!showFilterOptions);
  };
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowFilterOptions(false); // Chiudi il box delle opzioni filtrate
  };



  const dispatch = useDispatch();
  
  const [value, setValue] = useState("necklaces");
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const items = useSelector((state) => state.cart.items);
  const breakPoint = useMediaQuery("(min-width:600px)");

  const [showCollectionInfo, setshowCollectionInfo] = useState(false);
  const [showStoneInfo, setshowStoneInfo] = useState(false);
  const [showMaterialInfo, setshowMaterialInfo] = useState(false);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedCollection, setSelectedCollection] = useState([]);
  const [selectedStone, setSelectedStone] = useState([]);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };





  const handleFilterClick = () => {
    setIsFilterVisible(!isFilterVisible);
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

  const braceletsItems = items.filter(
    (item) => item.attributes.category === "bracelets"
  );

  
  const necklacesItems = items.filter((item) => {
    // Se sia selectedMaterials che selectedCollection sono vuoti, restituisci true per includere tutti gli elementi
    if (selectedMaterials.length === 0 && selectedCollection.length === 0 && selectedStone.length === 0) {
      return item.attributes.category === "necklaces";
    }
  
    // Verifica la categoria, il materiale e la collezione
    return (
      item.attributes.category === "necklaces" &&
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
  
  

  

  useEffect(() => {
    // Funzione per gestire il clic al di fuori di FilterOptionsBox
    const handleClickOutside = (event) => {
      // Verifica se l'elemento cliccato non è il bottone di sorting
      if (
        filterOptionsRef.current &&
        !filterOptionsRef.current.contains(event.target) &&
        !event.target.closest(".sort-button") // Escludi il bottone di sorting
      ) {
        setShowFilterOptions(false);
      }
    };
  
    // Aggiungi un listener per il clic all'intero documento
    document.addEventListener("mousedown", handleClickOutside);
  
    // Pulisci il listener all'unmount del componente
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);



 
  const filteredItems = sortItems(necklacesItems, selectedOption);
  const { t } = useTranslation();
  const hasProducts = filteredItems.length > 0;
  return (
    <>
    <LazyLoad once>
    <LazyLoadWrapper loaded={loaded} onLoad={handleContentLoad}>
    
    <DivCarrello open={isFilterVisible}>
              <ContainerFiltri>

                <FilterButton onClick={() =>  {setshowStoneInfo(!showStoneInfo); setshowMaterialInfo(false); setshowCollectionInfo(false);  } }>
                  <FilterButtonText>{t('prodotti.stones')}</FilterButtonText>            
                  
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
                  label={t('prodotti.diamond')}
                  onChange={() => handleCheckboxChangeStone("Diamond")}
                  checked={selectedStone.includes("Diamond")}
                /> 
                  <Checkbox
                  label={t('prodotti.malachite')}
                  onChange={() => handleCheckboxChangeStone("Malachite")}
                  checked={selectedStone.includes("Malachite")}
                /> 
                  <Checkbox
                  label={t('prodotti.nacre')}
                  onChange={() => handleCheckboxChangeStone("Nacre")}
                  checked={selectedStone.includes("Nacre")}
                /> 
                  <Checkbox
                  label={t('prodotti.sapphire')}
                  onChange={() => handleCheckboxChangeStone("Sapphire")}
                  checked={selectedStone.includes("Sapphire")}
                /> 
                  <Checkbox
                  label={t('prodotti.ruby')}
                  onChange={() => handleCheckboxChangeStone("Ruby")}
                  checked={selectedStone.includes("Ruby")}
                /> 
                  <Checkbox
                  label={t('prodotti.emerald')}
                  onChange={() => handleCheckboxChangeStone("Emerald")}
                  checked={selectedStone.includes("Emerald")}
                /> 
                </InfoContainer>


                <FilterButton onClick={() => {setshowCollectionInfo(!showCollectionInfo);   setshowStoneInfo(false); setshowMaterialInfo(false)       }       }>
                  <FilterButtonText>{t('prodotti.collections')}</FilterButtonText>

                  <FilterSign>
                    {showCollectionInfo ? (
                      <img src={close} alt="Add" style={{ width: '20px', height: '20px' }} />
                    ) : (
                      <img src={add} alt="Add" style={{ width: '20px', height: '20px' }} />
                    )}
                  </FilterSign>
                </FilterButton>

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
                  <FilterButtonText>{t('prodotti.materials')}</FilterButtonText>

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
                  label={t('prodotti.yellowgold')}
                  onChange={() => handleCheckboxChange("Yellow Gold")}
                  checked={selectedMaterials.includes("Yellow Gold")}
                />
                <Checkbox
                  label={t('prodotti.whitegold')}
                  onChange={() => handleCheckboxChange("White Gold")}
                  checked={selectedMaterials.includes("White Gold")}
                />
                <Checkbox
                  label={t('prodotti.pinkgold')}
                  onChange={() => handleCheckboxChange("Pink Gold")}
                  checked={selectedMaterials.includes("Pink Gold")}
                />
                <Checkbox
                  label={t('prodotti.blackgold')}
                  onChange={() => handleCheckboxChange("Black Gold")}
                  checked={selectedMaterials.includes("Black Gold")}
                />
                <Checkbox
                  label={t('prodotti.platinum')}
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
                     <GtaRegular12>{t('prodotti.apply')}</GtaRegular12>  
                  </ButtonBlack>
                  <ButtonWhite
                    sx={{
                      backgroundColor: "white",
                      color: "black",
                      borderRadius: 0,
                      minWidth: "10%",


                    }}   onClick={handleResetClick}
                  >
                      <GtaRegular12>{t('prodotti.reset')} </GtaRegular12>
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
          <ABC>{t('prodotti.necklaces')}</ABC>
          <DivDescrizione>
            <GtaRegular>
            {t('prodotti.necklaces_description')}
            </GtaRegular>
          </DivDescrizione>
        </DivInfo>

        <DivFiltri>
            <CustomButton backgroundColor="white" onClick={handleFilterClick}>
            <img src={FilterImage} alt="Filter" style={{ width: '20px' }} />
            <GtaRegular>{t('prodotti.filter')}</GtaRegular>

            </CustomButton>

            <CustomButton backgroundColor="white" onClick={handleFilterClick2} className="sort-button">
              <GtaRegular2>{t('prodotti.sortby')}</GtaRegular2>
              <SortImage2 src={SortImage} alt="Filter" showOptions={showFilterOptions} />
            </CustomButton>



            {showFilterOptions && (
        <FilterOptionsBox ref={filterOptionsRef}>
          <Option onClick={() => handleOptionClick('Featured')}>
            {selectedOption === 'Featured' ? <Dot selected /> : <div style={{ width: '6px', marginRight: '10px' }} />}
            <GtaRegular3 selected={selectedOption === 'Featured'}>{t('prodotti.featured')}</GtaRegular3>
          </Option>
          <Option onClick={() => handleOptionClick('Price Descending')}>
            {selectedOption === 'Price Descending' ? <Dot selected /> : <div style={{ width: '6px', marginRight: '10px' }} />}
            <GtaRegular3 selected={selectedOption === 'Price Descending'}>{t('prodotti.pricedescending')}</GtaRegular3>
          </Option>
          <Option onClick={() => handleOptionClick('Price Ascending')}>
            {selectedOption === 'Price Ascending' ? <Dot selected /> : <div style={{ width: '6px', marginRight: '10px' }} />}
            <GtaRegular3 selected={selectedOption === 'Price Ascending'}>{t('prodotti.priceascending')}</GtaRegular3>
          </Option>
        </FilterOptionsBox>
             )}
            
          </DivFiltri>

        
          {!hasProducts && (
        <DivAvviso>
          <GtaRegular2Gray>
          {t('prodotti.avviso')}
          </GtaRegular2Gray>
        </DivAvviso>
      )}
      {hasProducts && (
        <DivProdotti>
          {value === "necklaces" &&
            filteredItems.map((item) => (
              <StyledItem key={item.id}>
                <ItemInShop item={item} />
              </StyledItem>
            ))}
        </DivProdotti>
      )}
        <Footer/>

      </Container>

    </LazyLoadWrapper>
    </LazyLoad >
      
    </>
  );
};

export default ShopNecklaces;
