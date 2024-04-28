import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton, Typography } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import { setIsCartOpen } from "../../state";
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../../assets/logo.png';
import anelloimage from '../../assets/anello 1.jpg';
import add from '../../assets/add.png';
import close from '../../assets/meno.png';
import menu from '../../assets/Menu.png';
import { debounce } from 'lodash'; // Importa la funzione debounce da lodash

import anello_navbar from '../../assets/anello_navbar.jpg';
import braccialetto_navbar from '../../assets/braccialetto_navbar.jpg';
import collana_navbar from '../../assets/collana_navbar.jpg';
import collana2_navbar from '../../assets/collana2_navbar.jpg';
import orecchini_navbar from '../../assets/orecchini_navbar.jpg';
import maison_navbar from '../../assets/maison2.jpg';
import { setItems } from "../../state";
import ItemSearch from "../../components/ItemSearch";

const Container = styled.div`
display: flex;
align-items: center;
width: 100%;
height: 120px;
background-color: white;
color: black;
position: fixed;
top: 0;
left: 0;
z-index: 3;


`;

const NavBarDiv = styled.div`
width: 85%;
margin: auto;
display: flex;
justify-content: center;
align-items: center;


`;
const BoxDestra = styled.div`
display: flex;
justify-content: space-between;
gap: 40px; /* Utilizzo di gap al posto di columnGap */
z-index: 2;

margin-left: auto;

@media (max-width: 1200px) {
  display: none;
}
`;
const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex; /* Disposizione orizzontale degli elementi li */

  width:100%;
`;
// Altri import



const BoxSinistra = styled.div`
    margin-right: auto;

  display: flex; /* Aggiunto display: flex; qui */
  width:50%;

  li {
    margin-right: 10%;
    position: relative;
    cursor: pointer;

    &:hover {
      &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 10px;
        width: 100%;
        height: 2px;
        background-color: black;
        animation: lineAnimation 0.3s linear forwards;
      }
    }
  }

  @keyframes lineAnimation {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @media (max-width: 1200px) {
    display: none;
  }

`;


const Logo = styled.div`
display: flex; /* Aggiunto display: flex; qui */
position:absolute;


&:hover {
    cursor: pointer;
  }

`;

const ImmagineLogo = styled.img`
width: 65px;
`;
const Menu = styled.div`
  // Stili del div aggiuntivo
  top: ${({ open }) => (open ? '120px' : '-100%')};
  position: absolute;


  width: 100%;
  height: 62%;
  background-color: white;
  position: fixed;
  z-index: 2; // Assicurati che il div sovrapponga il contenuto della home page
  z-index: 99;
  align-items:center;
  transition: left 1s ease;


  &:hover {

  }
`;
const MenuSearch = styled.div`
  // Stili del div aggiuntivo
  top: ${({ open }) => (open ? '120px' : '-100%')};
  position: absolute;

  min-height:20%;
  width: 100%;
  height: auto;

  position: fixed;
  z-index: 2; // Assicurati che il div sovrapponga il contenuto della home page
  z-index: 99;
  align-items:center;
  transition: left 1s ease;

background-color:white;

  &:hover {

  }
`;


const MenuContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* Aggiunto per centrare verticalmente il contenuto */
  height: 85%;
  width: 85%;
  margin-left: auto; /* Aggiunto per centrare orizzontalmente */
  margin-right:auto;
  margin-top:0;
  border: 1px;



`;

const MenuItem = styled.div`
  width: 22%;

  height:100%;
  display: flex;
  flex-direction:column;


`;
const MenuItemImage = styled.div`
  width: 34%;
  height: 100%;
  display: flex;
  flex-direction: column;

  align-items: flex-end; /* Modificato da justify-content a align-items */



`;
const ImmagineHighJewellery = styled.img`

  height:100%;
  object-fit: contain;
  object-position: top ; /* Imposta l'immagine dall'alto */

`;

const BigContainer = styled.div`
background-color:red;
`;

const Typography2 = styled.p`
font-family: 'GTAmericaRegular';
font-size: 16px;
font-weight: normal;
margin-top:0;
`;
const Typography3 = styled.p`
  font-family: 'GTAmericaRegular';
  font-size: 20px;
  font-weight: normal;
  margin-bottom: 0;
  cursor: pointer;
  color: ${(props) => (props.isHovered ? 'gray' : 'inherit')};
  transition:  margin-left 0.2s;

  &:hover {
    color: gray;
    margin-left: 5px;
  }

  margin-left: ${(props) => (props.isHovered ? '5px' : '0')};
`;

const HamburgerIcon = styled.div`
  width: 30px;  /* Imposta la larghezza in base alle tue esigenze */
  height: 20px; /* Imposta l'altezza in base alle tue esigenze */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  div {
    width: 100%;
    height: 1px;
    background-color: black;  /* Cambia il colore delle linee se necessario */
    border-radius: 0; /* Rimuovi i bordi curvi */
  }
`;

const BoxMobileSinistra = styled.div`
  display: none;
  @media (max-width: 1200px) {
    margin-right: auto;
    display: flex;
    width: 50%;
    align-items: center; /* Aggiunto per centrare verticalmente */
  }
`;
const LensIcon = styled(SearchOutlined)`
  font-size: 24px;
  cursor: pointer;
  margin-top: 10%; /* Aggiunto margine superiore per allineare con l'hamburger */
  margin-left:20%;
`;
const BoxMobileDestra = styled.div`
display: none;
@media (max-width: 1200px) {
  display: flex;
  justify-content: space-between;
  gap: 40px; /* Utilizzo di gap al posto di columnGap */
  z-index: 2;
  
  margin-left: auto;
  
}
`;


//CONTENUTO MENU LATERALE
const DivCarrello =  styled(Box)`
  z-index: 99;
  position: fixed;
  overflow-y: auto;
  overflow-x: hidden;
  bottom: 0;
  width: 80%;
  height: 100%;
  background-color: white;



  left: ${({ open }) => (open ? '0%' : '-90%')};
  transition: left 0.5s ease;


  


`;


const BoxMenuMobile = styled(Box)`
display: none;


@media (max-width: 1200px) {

  display: flex;

}

`;
// Definisci i componenti styled
const ContainerFiltri = styled.div`
  display: flex;
  flex-direction: column;

  margin: 20px;
  margin-top: 10vh;

`;
const FilterButtonText = styled.span`
  /* Aggiunto il flex-grow per far sì che occupi lo spazio rimanente */
  flex-grow: 1;
  margin-right: 14px;
  text-align: left;  /* Allinea il testo a sinistra */
  font-size: 26px;



  


`;
const FilterSign = styled.span`
  margin-left: 14px;
  font-size: 30px;
`;
const InfoContainer = styled.div`
max-height: ${({ visible }) => (visible ? '400px' : '0')}; /* Imposta una max-height elevata quando è aperto */
overflow: hidden;
transition: max-height 0.8s ease; /* Aggiunta transizione per un effetto fluido */

text-align: left;
width:100%;

align-items: center;
justify-content: space-between;  /* Aggiunto per separare gli elementi */

margin-left: 5%;
margin-top:3%;
font-size: 16px;
user-select: none; /* Evita la selezione del testo */
width: 100%;




`;

const CheckboxContainer = styled.label`
display: flex;
align-items: center;
margin-bottom: 10px;
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
const CheckboxText = styled.span`
margin-left: 20px; /* Aumenta la distanza tra il quadrato e il testo */
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
const FilterButton2 = styled.div`
  display: flex;

  flex-direction:column;
  justify-content: space-between;  /* Aggiunto per separare gli elementi */
  margin: 5px;
  padding: 8px;


  font-size: 16px;
  cursor: pointer;
  user-select: none; /* Evita la selezione del testo */
  width: 100%;

`;
//font
const ABC16 = styled.p`
  font-family: 'ABCGaisyr-Regular';
  font-size: 15px; 
  margin: 0;
  text-align: center;
  font-weight: lighter;
  transition: color 0.3s ease; /* Aggiunta transizione per il colore del testo */


`;
const GtaRegular = styled.p`
font-family: 'GTAmericaRegular';
font-size: 20px;

cursor: pointer;
color: ${(props) => (props.isHovered ? 'gray' : 'inherit')};
transition:  margin-left 0.2s;

&:hover {
  color: gray;
  margin-left: 5px;
}


margin:0;
height: 40px;
margin-left: ${(props) => (props.isHovered ? '5px' : '0')};
`;

const GtaRegularMobile = styled.p`
font-family: 'GTAmericaRegular';
font-size: 16px;

cursor: pointer;
color: ${(props) => (props.isHovered ? 'gray' : 'inherit')};
transition:  margin-left 0.2s;

margin:0;
height: 40px;

&:hover {
  color: gray;

}



margin-left: ${(props) => (props.isHovered ? '5px' : '0')};
`;

const HighJewellery = styled.div`
max-height: ${({ visible }) => (visible ? '400px' : '0')}; /* Imposta una max-height elevata quando è aperto */
overflow: hidden;
transition: max-height 0.8s ease; /* Aggiunta transizione per un effetto fluido */


text-align: left;
width:100%;

align-items: center;
justify-content: space-between;  /* Aggiunto per separare gli elementi */

margin-left: 5%;

font-size: 16px;
user-select: none; /* Evita la selezione del testo */
width: 100%;




`;

const SearchSection = styled.div`
  width: 100%;
  height: auto;
  margin-bottom:1%;
  display: flex;
  align-items: center;

  flex-direction: column;
`;

const ContenitoreRicerca = styled.div`
  width: 100%;
  height: auto;

  display:flex;

  justify-content:center;


`;
const ContenitoreRicerca2 = styled.div`
  width: 80%;
  height: auto;

  display:flex;
  justify-content:center;

  @media(max-width:680px){
    flex-direction:column;

  }
`;
const DivItems = styled.div`
  width: auto;
  height: auto;

  display:flex;
  margin-right: 1%;
  align-items:center;

  justify-content:center;


`;

const Line = styled.div`
  width: 100%;
  border-top: 1px solid #ccc;
  margin: 10px 0;
`;

const SearchBox = styled.div`
  display: flex;

  width:85%;
`;

const SearchIcon = styled.span`
  color: #999;
  margin-right: 10px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  padding: 5px;

  width: 100%; /* larghezza del campo di ricerca */
`;

const Placeholder = styled.span`
  color: #999;
`;


function Navbar() {
const [value, setValue] = useState("all");
const items = useSelector((state) => state.cart.items);
console.log("items", items);

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








  const [query, setQuery] = useState('');






  const handleChange = (event) => {
    const cleanedQuery = event.target.value.replace(/[^a-zA-Z]/g, '').toLowerCase();
    setQuery(cleanedQuery);
  };
  
  

  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);



  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredCollections, setIsHoveredCollections] = useState(false);
  const [isHoveredAbout, setIsHoveredAbout] = useState(false);
  const [isHoveredSearch, setIsHoveredSearch] = useState(false);

  const [showCollectionInfo, setshowCollectionInfo] = useState(false);



  const [showShopInfo, setshowShopInfo] = useState(false);
  const [showHighJewellery, setShowHighJewellery] = useState(false);
  const [showHouseInfo, setShowHouseInfo] = useState(false);
  
  const [showExpertiseInfo, setShowExpertiseInfo] = useState(false);
  const [showAboutInfo, setshowAboutInfo] = useState(false);

  const [selectedCollection, setSelectedCollection] = useState([]);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);





  // Aggiungi un listener per rilevare i cambiamenti nella dimensione della finestra
  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 1200) {
        setIsFilterVisible(false);
      }
    }, 200); // Ritardo di 200 millisecondi

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleFilterClick = () => {
    setIsFilterVisible(!isFilterVisible);
  };




  const handleShopClick = () => {
    setIsHovered(false)
    setIsFilterVisible(false)
    setshowShopInfo(false);
    navigate('/shopRings');
  };
  const handleHome = () => {
    setIsHovered(false)

    
    navigate('/');
  };

  const handleShopClickEarrings = () => {
    setIsHovered(false)
    setIsFilterVisible(false)
    navigate('/shopEarrings');
  };
  const handleShowCollection = () => {
    setshowCollectionInfo(prevState => !prevState);
    setshowShopInfo(false);
    setshowAboutInfo(false);
  };

  const handleShowShopInfo = () => {
    setshowCollectionInfo(false);
    setshowAboutInfo(false);
    setshowShopInfo(prevState => !prevState);
  };
  const handleShowAboutInfo = () => {
    setshowCollectionInfo(false);
    setshowAboutInfo(prevState => !prevState);
    setshowShopInfo(false);
  };



  const handleShopClickNecklaces = () => {
    setIsHovered(false)
    setIsFilterVisible(false)
    navigate('/shopNecklaces');
  };

  const handleShopClickBracelets = () => {
    setIsHovered(false);

    setIsFilterVisible(false);
    navigate('/shopBracelets');
  };

  const handleShopClickBollywood = () => {
    setIsHoveredCollections(false)
    setIsFilterVisible(false)
    navigate('/shopBollywood');
  };

  const handleShopClickFleurie = () => {
    setIsHoveredCollections(false)
    setIsFilterVisible(false)
    navigate('/shopFleurie');
  };
  const handleShopClickTycoon = () => {
    setIsHoveredCollections(false)
    setIsFilterVisible(false)
    navigate('/shopTycoon');
  };
  const handleShopClickUrania = () => {
    setIsHoveredCollections(false)
    setIsFilterVisible(false)
    navigate('/shopUrania');
  };
  const handleShopClickZingara = () => {
    setIsHoveredCollections(false)
    setIsFilterVisible(false)
    navigate('/shopZingara');
  };


  const handleMaisonCusi = () => {
    setIsHoveredAbout(false)
    setIsFilterVisible(false)
    navigate('/maisoncusi');
  };
  const handleBoutiques = () => {
    setIsHoveredAbout(false)
    setIsFilterVisible(false)
    navigate('/boutiques');
  };
  const handleCustomerService = () => {
    setIsHoveredAbout(false)
    setIsFilterVisible(false)
    navigate('/customerservice');
  };
  const handleContactUs = () => {
    setIsHoveredAbout(false)
    setIsFilterVisible(false)
    navigate('/contactus');
  };

  const searchedItems = items.filter(item => {
    const collectionMatch = item.attributes.collection.toLowerCase() === query;
    const categoryMatch = item.attributes.category.toLowerCase() === query;
    return collectionMatch || categoryMatch;
  });
  
  




  












  return (
    <BigContainer     
    onMouseLeave={() => { setIsHovered(false); setIsHoveredCollections(false); setIsHoveredAbout(false); setIsHoveredSearch(false);}}>
    {/*HAMBURGER MENU OPENED*/ }




    <DivCarrello open={isFilterVisible} >
          <ContainerFiltri>

          <FilterButton onClick={handleShowShopInfo}>
            <FilterButtonText>Shop</FilterButtonText>
            <FilterSign>
              {showShopInfo ? (
                <img src={close} alt="Add" style={{ width: '20px', height: '20px' }} />
              ) : (
                <img src={add} alt="Add" style={{ width: '20px', height: '20px' }} />
              )}
            </FilterSign>
          </FilterButton>
            


            <InfoContainer visible={showShopInfo}>
              <GtaRegularMobile onClick={() => setShowHighJewellery(prevState => !prevState)}>HIGH JEWELLERY</GtaRegularMobile>
                <HighJewellery  visible={showHighJewellery}>
                  <GtaRegular onClick={handleShopClickBracelets} style={{ cursor: 'pointer' }}>Bracelets</GtaRegular> 
                  <GtaRegular onClick={handleShopClickEarrings} style={{ cursor: 'pointer' }}>Earrings</GtaRegular> 
                  <GtaRegular onClick={handleShopClickNecklaces} style={{ cursor: 'pointer' }}>Necklaces</GtaRegular> 
                  <GtaRegular onClick={handleShopClick} style={{ cursor: 'pointer' }}>Rings</GtaRegular> 
                </HighJewellery>
              <GtaRegularMobile>FINE SILVER</GtaRegularMobile>
              <HighJewellery>
                test
              </HighJewellery>
              <GtaRegularMobile>GIFTS</GtaRegularMobile>
              <HighJewellery>
                test
              </HighJewellery>
                
            </InfoContainer>


            <FilterButton onClick={handleShowCollection}>
              <FilterButtonText>Collection</FilterButtonText>
              <FilterSign>
                {showCollectionInfo ? (
                  <img src={close} alt="Add" style={{ width: '20px', height: '20px' }} />
                ) : (
                  <img src={add} alt="Add" style={{ width: '20px', height: '20px' }} />
                )}
              </FilterSign>
            </FilterButton>

            <InfoContainer visible={showCollectionInfo}>
            <HighJewellery visible={showCollectionInfo}>
              <GtaRegular onClick={handleShopClickZingara}>Zingara</GtaRegular>
              <GtaRegular onClick={handleShopClickUrania}>Urania</GtaRegular>
              <GtaRegular onClick={handleShopClickTycoon}>Tycoon</GtaRegular>
              <GtaRegular onClick={handleShopClickFleurie}>Fleurie</GtaRegular>
              <GtaRegular onClick={handleShopClickBollywood}>Bollywood</GtaRegular>
            </HighJewellery>

            </InfoContainer>

            <FilterButton onClick={handleShowAboutInfo}>
              <FilterButtonText>About</FilterButtonText>
              <FilterSign>
                {showAboutInfo ? (
                  <img src={close} alt="Add" style={{ width: '20px', height: '20px' }} />
                ) : (
                  <img src={add} alt="Add" style={{ width: '20px', height: '20px' }} />
                )}
              </FilterSign>
            </FilterButton>

            <InfoContainer visible={showAboutInfo}>
            <GtaRegularMobile onClick={() => setShowHouseInfo(prevState => !prevState)}>THE HOUSE</GtaRegularMobile>

                <HighJewellery  visible={showHouseInfo}>
                  <GtaRegular onClick={handleMaisonCusi} style={{ cursor: 'pointer' }}>Maison Cusi</GtaRegular> 
                  <GtaRegular onClick={handleBoutiques} style={{ cursor: 'pointer' }}>Boutiques</GtaRegular> 

                </HighJewellery>


              <GtaRegularMobile onClick={() => setShowExpertiseInfo(prevState => !prevState)}>EXPERTISE</GtaRegularMobile>

              <HighJewellery  visible={showExpertiseInfo}>
                  <GtaRegular onClick={handleBoutiques} style={{ cursor: 'pointer' }}>Book an appointment</GtaRegular> 
                  <GtaRegular onClick={handleCustomerService} style={{ cursor: 'pointer' }}>Customer Service</GtaRegular> 
                  <GtaRegular onClick={handleContactUs} style={{ cursor: 'pointer' }}>Contact Us</GtaRegular> 
                </HighJewellery>

            </InfoContainer>

            <FilterButton2>
              <Typography3>Login</Typography3> 
              <Typography3>Account</Typography3> 
            </FilterButton2>

            <FilterButton2>
              <Typography3>EUR/IT</Typography3> 
            </FilterButton2>


      


          </ContainerFiltri>
    </DivCarrello>

      <BoxMenuMobile 
        display={isFilterVisible ? "flex" : "none"}
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





      </BoxMenuMobile>

  {/*HAMBURGER MENU CLOSED*/ }




    <Container>

      <NavBarDiv>

      
        <BoxSinistra> 
            <Ul>
                
            <li  onMouseEnter={() => { setIsHoveredSearch(false); setIsHovered(true); setIsHoveredCollections(false); setIsHoveredAbout(false);}}>    
                <Typography2 >
                    Shop
                </Typography2>
            </li>
            <li>    
                <Typography2 onMouseEnter={() => { setIsHoveredSearch(false); setIsHoveredCollections(true); setIsHovered(false); setIsHoveredAbout(false);}}>
                    Collections
                </Typography2>
            </li>
            <li>    
                <Typography2 onMouseEnter={() => {setIsHoveredSearch(false); setIsHoveredAbout(true); setIsHoveredCollections(false); setIsHovered(false); } }>
                    About
                </Typography2>
            </li>
            </Ul>     

        </BoxSinistra>


        <Logo
          onClick={handleHome}

          sx={{ "&:hover": { cursor: "pointer" } }}
          color={shades.secondary[500]}

        >
          <ImmagineLogo src={logo}/>
        </Logo>
        
        <BoxDestra >
          
          <IconButton sx={{ color: "black" }} >
            <SearchOutlined onMouseEnter={() => {setIsHoveredSearch(true); setIsHoveredAbout(false); setIsHoveredCollections(false); setIsHovered(false); } } onClick={() => setIsHoveredSearch(prevState => !prevState)}/>
          </IconButton>

          <IconButton sx={{ color: "black" }}>
            <PersonOutline />
          </IconButton>
          <Badge
            badgeContent={cart.map(item => item.count).reduce((acc, curr) => acc + curr, 0)}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 6,
                top: 6,
                padding: "0 4px",
                height: "20px", // Imposta un'altezza fissa
                width: "20px", // Imposta una larghezza fissa uguale all'altezza
                borderRadius: "50%", // Imposta il valore di borderRadius per rendere il badge rotondo

                fontSize: "8px", // Riduci la dimensione del font del badge
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Arial, sans-serif",
              },
            }}
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: "black" }}
            >
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>




        </BoxDestra>

        {/* Versione Mobile*/}
        <BoxMobileSinistra>
          <HamburgerIcon onClick={handleFilterClick}>
            <div></div>
            <div></div>
            <div></div>
          </HamburgerIcon>


        </BoxMobileSinistra>

          <BoxMobileDestra>

          <LensIcon onMouseEnter={() => {setIsHoveredSearch(true); setIsHoveredAbout(false); setIsHoveredCollections(false); setIsHovered(false); } } onClick={() => setIsHoveredSearch(prevState => !prevState)}/>
              <Badge
            badgeContent={cart.map(item => item.count).reduce((acc, curr) => acc + curr, 0)}
            color="secondary"
            invisible={cart.length === 0}
            
            sx={{
              "& .MuiBadge-badge": {
                right: 6,
                top: 6,
                padding: "0 4px",
                height: "20px", // Imposta un'altezza fissa
                width: "20px", // Imposta una larghezza fissa uguale all'altezza
                borderRadius: "50%", // Imposta il valore di borderRadius per rendere il badge rotondo

                fontSize: "8px", // Riduci la dimensione del font del badge
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Arial, sans-serif",
              },
            }}
          >
            
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: "black" }}
            >
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>

          </BoxMobileDestra>



        
      </NavBarDiv>

          {/* Versione DESKTOP*/}    
    </Container>
            {/*SHOP*/}
    <Menu open={isHovered}>
      <MenuContent>
        <MenuItem>
       <Typography2>HIGH JEWELLEY</Typography2> 
       <Typography3 onClick={handleShopClickBracelets} style={{ cursor: 'pointer' }}>Bracelets</Typography3> 
       <Typography3 onClick={handleShopClickEarrings} style={{ cursor: 'pointer' }}>Earrings</Typography3> 
       <Typography3 onClick={handleShopClickNecklaces} style={{ cursor: 'pointer' }}>Necklaces</Typography3> 
       <Typography3 onClick={handleShopClick} style={{ cursor: 'pointer' }}>Rings</Typography3> 
        </MenuItem>


        <MenuItem>
        <Typography2>FINE SILVER</Typography2>
        <Typography3>Sea</Typography3> 
       <Typography3>Animals</Typography3> 
       <Typography3>Object</Typography3> 

        </MenuItem>
        <MenuItem>
        <Typography2>GIFTS</Typography2>
        <Typography3>For Her</Typography3> 
        <Typography3>For Him</Typography3> 


        </MenuItem>
        <MenuItemImage>
        <ImmagineHighJewellery src={collana_navbar}/>
        </MenuItemImage>

      </MenuContent>

    </Menu>
            {/*COLLECTIONS*/}
    <Menu open={isHoveredCollections}>
      <MenuContent>
        <MenuItem>
       <Typography2>ALL COLLECTIONS</Typography2> 
       <Typography3 onClick={handleShopClickBollywood} style={{ cursor: 'pointer' }}>Bollywood</Typography3> 
       <Typography3 onClick={handleShopClickFleurie} style={{ cursor: 'pointer' }}>Fleurie</Typography3> 
       <Typography3 onClick={handleShopClickTycoon} style={{ cursor: 'pointer' }}>Tycoon</Typography3> 
       <Typography3 onClick={handleShopClickUrania} style={{ cursor: 'pointer' }}>Urania</Typography3> 
       <Typography3 onClick={handleShopClickZingara} style={{ cursor: 'pointer' }}>Zingara</Typography3> 
        </MenuItem>


        <MenuItem>
        <h1></h1>

        </MenuItem>

        <MenuItemImage>
        <ImmagineHighJewellery src={braccialetto_navbar}/>
        </MenuItemImage>

        <MenuItemImage>
        <ImmagineHighJewellery src={collana2_navbar}/>
        </MenuItemImage>

      </MenuContent>

    </Menu>

                {/*ABOUT*/}
    <Menu open={isHoveredAbout}>
      <MenuContent>
        <MenuItem>
       <Typography2>THE HOUSE</Typography2> 
       <Typography3 onClick={handleMaisonCusi} style={{ cursor: 'pointer' }}>Maison Cusi</Typography3> 
       <Typography3 onClick={handleBoutiques} style={{ cursor: 'pointer' }}>Boutiques</Typography3> 
        </MenuItem>


        <MenuItem>
        <Typography2>EXPERTISE</Typography2>
        <Typography3 onClick={handleBoutiques} style={{ cursor: 'pointer' }}>Book an appointment</Typography3> 
        <Typography3 onClick={handleCustomerService} style={{ cursor: 'pointer' }}>Customer Service</Typography3> 
        <Typography3 onClick={handleContactUs} style={{ cursor: 'pointer' }}>Contact Us</Typography3> 

        </MenuItem>
        <MenuItem>



        </MenuItem>
        <MenuItemImage>
        <ImmagineHighJewellery src={maison_navbar}/>
        </MenuItemImage>

      </MenuContent>

    </Menu>




    <MenuSearch open={isHoveredSearch}>
    <SearchSection>
      <Line />
      <SearchBox>
        <SearchIcon>
          <i className="fas fa-search"></i>
        </SearchIcon>
        <SearchInput
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search..."
        />
      </SearchBox>
      <Line />
    </SearchSection>
    

    <ContenitoreRicerca>
    <ContenitoreRicerca2 onClick={() => setIsHoveredSearch(false)}>
        {searchedItems.length === 0 ? (
          <ABC16>No products found with this name</ABC16>
        ) : (
          searchedItems.slice(0, 4).map((item, index) => (
            <DivItems key={index}>
              <ItemSearch item={item} />
            </DivItems>
          ))
        )}
      </ContenitoreRicerca2>
    </ContenitoreRicerca>


    </MenuSearch>
    


    </BigContainer>
  );
}

export default Navbar;