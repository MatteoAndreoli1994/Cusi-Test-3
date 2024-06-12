import styled from 'styled-components';
import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ItemInShop from "../../components/ItemInShop";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../state";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  setIsCartOpen,
} from "../../state";
import ImmagineCollection from "../../assets/bollywoodcopertina.png"
import ImmagineCollection2 from "../../assets/bollywoodcopertina2.jpg"

const CollectionBollywood = () => {






  const dispatch = useDispatch();
  
  const [value, setValue] = useState("rings");
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const items = useSelector((state) => state.cart.items);
  const breakPoint = useMediaQuery("(min-width:600px)");

  const [showCollectionInfo, setshowCollectionInfo] = useState(false);
  const [showCategoryInfo, setshowCategoryInfo] = useState(false);
  const [showMaterialInfo, setshowMaterialInfo] = useState(false);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedCollection, setSelectedCollection] = useState([]);





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

  const earringsItems = items.filter(
    (item) => item.attributes.category === "earrings"
  );
  const braceletsItems = items.filter(
    (item) => item.attributes.category === "bracelets"
  );
  const necklacesItems = items.filter(
    (item) => item.attributes.category === "necklaces"
  );
  
  const ringsItems = items.filter((item) => {
    // Se sia selectedMaterials che selectedCollection sono vuoti, restituisci true per includere tutti gli elementi
    if (selectedMaterials.length === 0 && selectedCollection.length === 0) {
      return item.attributes.category === "rings";
    }
  
    // Verifica la categoria, il materiale e la collezione
    return (
      item.attributes.category === "rings" &&
      (selectedMaterials.length === 0 || selectedMaterials.includes(item.attributes.material)) &&
      (selectedCollection.length === 0 || selectedCollection.includes(item.attributes.collection))
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
  
  

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 200vh;
    background-color:orange;
    margin-top:120px;
    align-items: center;
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

  const Distanziatore = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 120px;

  `;

  const DivInfo = styled.div`
    display: flex;
    height: 10%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `;

  const DivDescrizione = styled.div`
    display: flex;
    width: 60%;
    background-color: yellow;
    align-items: center;
    justify-content: center;
    text-align: center;
  `;

  const DivFiltri = styled.div`
    display: flex;
    background-color: blue;
    height: 50%;
    width: 80%;
    justify-content: space-between;
  `;

  const CustomButton = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 200px;
    background-color: ${(props) => props.backgroundColor || "gray"};
    color: white;
  `;

  const DivProdotti = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    width: 80%;
    margin: 0 auto;
    height:100%;
    background-color:gray;

    margin-top:1%;

  `;

  const StyledItem = styled.div`
    width: 350px;
    height: 400px;
    margin-bottom: 3%;
    margin-right: 4.3% ;

    position: relative;
    display: flex;
    justify-content: center;
  `;

  const Div = styled.div`
    display: flex;

    width: 30px;
  `;
  
  const DivCarrello = styled(Box)`
    top:120px;
    position: fixed;
    left: ${({ isCartOpen }) => (isCartOpen ? '-30%' : '0%')};
    bottom: 0;
    width: max(400px, 30%);
    height: 100%;
    background-color: white;
    transition: right 1s ease-in-out; /* Animazione della transizione */
    
  `;

  // Definisci i componenti styled
  const ContainerFiltri = styled.div`
    display: flex;
    flex-direction: column;

    margin: 20px;
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
    margin-right: 8px;
    text-align: left;  /* Allinea il testo a sinistra */
    font-size: 25px;

  `;

  const FilterSign = styled.span`
    margin-left: 8px;
    font-size: 30px;
  `;

  const InfoContainer = styled.div`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  margin-top: 10px;
  text-align: left;
  width:100%;

  align-items: center;
  justify-content: space-between;  /* Aggiunto per separare gli elementi */
  margin: 5px;
  padding: 8px;
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

const DivImageCollection = styled.div`
width:100%;
height:100%;
background-color:green;
font-size: 8px;
align-items:center;
display:flex;
justify-content:center;
`;
const BoxContainer = styled.div`
background-color:yellow;
`;

const ImmagineCollectionStyle = styled.img`
width:30%;
height:75%;
margin:1%;

`;

const ImmagineCollection2Style = styled.img`
width:30%;
height:75%;
Margin:1%;

`;





 

  return (
    <>
    
      <BoxContainer
        display={isFilterVisible ? "block" : "none"}
        backgroundColor="rgba(0, 0, 0, 0.4)"
        position="fixed"
        zIndex={10}
        width="70%"  // Cambiato da 100% a 70%
        height="100%"
        right="0"    // Cambiato da left a right
        top="0"
        overflow="auto"
        onClick={handleFilterClick}
      >


        <DivCarrello display={isFilterVisible ? "block" : "none"} onClick={(e) => e.stopPropagation()}>
          <ContainerFiltri>

            <FilterButton onClick={() => setshowCollectionInfo(!showCollectionInfo)}>
              <FilterButtonText>Filtro</FilterButtonText>
              <FilterSign>{showCollectionInfo ? "-" : "+"}</FilterSign>
            </FilterButton>
            


            <InfoContainer visible={showCollectionInfo}>
              {/* Inserisci qui le informazioni per le donne */}
              <Checkbox label="filtro" />   
              <Checkbox label="filtro" />
              <Checkbox label="filtro" />
              <Checkbox label="filtro" />
              <Checkbox label="filtro" />
            </InfoContainer>


            <FilterButton onClick={() => setshowCollectionInfo(!showCollectionInfo)}>
              <FilterButtonText>Collection</FilterButtonText>
              <FilterSign>{showCollectionInfo ? "-" : "+"}</FilterSign>
            </FilterButton>

            <InfoContainer visible={showCollectionInfo}>
            <Checkbox
              label="Zingara"
              onChange={() => handleCheckboxChangeCollection("Zingara")}
              checked={selectedCollection.includes("Zingara")}
            />
            <Checkbox
              label="Urania"
              onChange={() => handleCheckboxChangeCollection("Urania")}
              checked={selectedCollection.includes("Urania")}
            />
            <Checkbox
              label="Tycoon"
              onChange={() => handleCheckboxChangeCollection("Tycoon")}
              checked={selectedCollection.includes("Tycoon")}
            />
            </InfoContainer>

            <FilterButton onClick={() => setshowMaterialInfo(!showMaterialInfo)}>
              <FilterButtonText>Material</FilterButtonText>
              <FilterSign>{showMaterialInfo ? "-" : "+"}</FilterSign>
            </FilterButton>
       

            <InfoContainer visible={showMaterialInfo}>


            <Checkbox
              label="Platinum"
              onChange={() => handleCheckboxChange("Platinum")}
              checked={selectedMaterials.includes("Platinum")}
            />
            <Checkbox
              label="White Gold"
              onChange={() => handleCheckboxChange("White Gold")}
              checked={selectedMaterials.includes("White Gold")}
            />
            <Checkbox
              label="Yellow Gold"
              onChange={() => handleCheckboxChange("Yellow Gold")}
              checked={selectedMaterials.includes("Yellow Gold")}
            />

              {/* Inserisci qui le informazioni per le persone trans */}



            </InfoContainer>

      


          </ContainerFiltri>
        </DivCarrello>



      </BoxContainer>



      <Container>

        <DivInfo>
          <h1>Bollywood</h1>
          <DivDescrizione>
            <p>
              A lominous waves running through a traslucent material with iridescent reflections.
              At the center of this aquatic set, a betta fish swims through an opal sea.   
            </p>
          </DivDescrizione>



        </DivInfo>

        <DivImageCollection>
          <ImmagineCollectionStyle src={ImmagineCollection}/>
          <ImmagineCollection2Style src={ImmagineCollection2}/>

        </DivImageCollection>
          
        <DivFiltri>
          <CustomButton backgroundColor="blue" onClick={handleFilterClick}>
            Filter
          </CustomButton>
          <CustomButton backgroundColor="green">SortedBy</CustomButton>
        </DivFiltri>

        
        <DivProdotti>
          
          {value === "rings" &&
            ringsItems.map((item) => (

              <StyledItem key={`${item.id}`}>
                <ItemInShop item={item} />
              </StyledItem>
            ))}




            

            

            
        </DivProdotti>

      </Container>
      
    </>
  );
};

export default CollectionBollywood;
