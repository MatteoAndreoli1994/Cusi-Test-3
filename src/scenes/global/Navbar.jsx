import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import { setIsCartOpen } from "../../state";
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../../assets/logo.png';

import add from '../../assets/add.png';
import close from '../../assets/meno.png';

import { debounce } from 'lodash'; // Importa la funzione debounce da lodash

import braccialetto_navbar from '../../assets/braccialetto_navbar2.jpg';
import collana_navbar from '../../assets/collana_navbar.jpg';
import collana2_navbar from '../../assets/collana2_navbar.jpg';
import maison_navbar from '../../assets/maison2.jpg';
import { setItems } from "../../state";
import ItemSearch from "../../components/ItemSearch";
import SearchImage from "../../assets/search.png";
import ShoppingBag from "../../assets/shopping-bag.png";

const Container = styled.div`

  display: flex;
  align-items: center;
  width: 100%;
  height: 120px;
  background-color: white;
  color: black;
  position: fixed;
  top: ${props => props.top}px;
  left: 0;
  z-index: 2;
  overflow: hidden;
  transition: top 1s;

`;

const NavBarDiv = styled.div`
width: 85%;
margin: auto;
display: flex;
justify-content: center;
align-items: center;


@media(max-width:1200px){
  width: 85%;
}


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
  align-items:center;
  justify-content:center;

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

@media(max-width: 1200px){
  width: 60px;
}

@media(max-width: 900px){
  width: 55px;
}

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

  width: 100%;


  position: fixed;
  z-index: 1;

  align-items:center;
  transition: top 1s ease;

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

  margin-top:2%;



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
  margin:1%;
  align-items: flex-end; /* Modificato da justify-content a align-items */



`;
const ImmagineHighJewellery = styled.img`

  height:100%;
  object-fit: contain;
  object-position: top ; /* Imposta l'immagine dall'alto */


`;

const BigContainer = styled.div`

`;

const Typography2 = styled.p`
font-family: 'GTAmericaRegular';
font-size: 16px;
font-weight: normal;

`;
const Typography3 = styled.p`
  font-family: 'GTAmericaRegular';
  font-size: 20px;
  font-weight: normal;
  margin-bottom: 0;
  margin:3%;
  cursor: pointer;
  color: ${(props) => (props.isHovered ? 'gray' : 'inherit')};
  transition:  margin-left 0.2s;
  color:black;
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
const LensIcon = styled.div`
  width: 22px; /* Imposta la larghezza dell'icona */
  height: 22px; /* Imposta l'altezza dell'icona */
  cursor: pointer;
  margin-top: 0%; /* Aggiunto margine superiore per allineare con l'hamburger */
  margin-left: 19%;
  background-image: url(${SearchImage}); /* Imposta l'immagine di sfondo con il percorso del tuo file PNG */
  background-size: cover; /* Assicura che l'immagine copra completamente l'elemento */
`;
const LensIconDesktop = styled.div`
  width: 22px; /* Imposta la larghezza dell'icona */
  height: 22px; /* Imposta l'altezza dell'icona */
  cursor: pointer;
  margin-top: 0%; /* Aggiunto margine superiore per allineare con l'hamburger */
  margin-left: 0%;
  background-image: url(${SearchImage}); /* Imposta l'immagine di sfondo con il percorso del tuo file PNG */
  background-size: cover; /* Assicura che l'immagine copra completamente l'elemento */
`;
const ShoppingBagOutlined2 = styled.div`
  width: 24px; /* Imposta la larghezza dell'icona */
  height: 24px; /* Imposta l'altezza dell'icona */
  cursor: pointer;
  margin-top: 0%; /* Aggiunto margine superiore per allineare con l'hamburger */
  margin-left: 0%;
  background-image: url(${ShoppingBag}); /* Imposta l'immagine di sfondo con il percorso del tuo file PNG */
  background-size: cover; /* Assicura che l'immagine copra completamente l'elemento */
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
const DivCategoriaProdotti = styled.div`
margin-bottom:5%;
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
  background-color:white;




  left: ${({ open }) => (open ? '0%' : '-90%')};
  transition: left 0.5s ease;


  


`;


const BoxMenuMobile = styled(Box)`
display: none;


@media (max-width: 1200px) {

  display: flex;

}

`;
const BoxMenuGrayOutSearch = styled(Box)`
margin-top:150px;
display: flex;




`;
// Definisci i componenti styled
const ContainerFiltri = styled.div`
  display: flex;
  flex-direction: column;

  margin: 20px;
  margin-top: 10vh;

min-height:85%;
height:auto;


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
max-height: ${({ visible }) => (visible ? '600px' : '0')}; /* Imposta una max-height elevata quando è aperto */
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
const FilterButtonContainer = styled.div`
  margin-top: auto; /* Spinge il contenuto verso l'alto per far spazio al div rosso in fondo */

`;

const FilterButton2 = styled.div`

  padding: 8px;
  font-size: 16px;
  cursor: pointer;
  user-select: none;
  width: 100%;
`;
//font
const ABC16 = styled.p`
font-family: 'GTAmericaRegular';
  font-size: 14px; 



  color: gray;
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
max-height: ${({ visible }) => (visible ? '800px' : '0')}; /* Imposta una max-height elevata quando è aperto */
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
const Margin = styled.div`

margin-bottom: 4%;




`;

const SearchSection = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  margin-top: 2%;
  flex-direction: column;

`;

const ContenitoreRicerca = styled.div`
  width: 100%;
  height: auto;
  margin-top: 1%;
  margin-bottom: 1%;
  display:flex;

  justify-content:center;



  @media(max-width: 750px){
    margin-top: 0%;
    margin-bottom: 0%;
  }

`;
const ContenitoreRicerca2 = styled.div`
  width: 80%;


  display:flex;
  justify-content:center;

  align-items:center;

  @media(max-width:750px){
    flex-direction:column;

  }
`;
const DivItems = styled.div`
  width: 100%;
  height: auto;

  display:flex;
  margin-right: 2%;
  margin-left: 2%;
  align-items:center;
  flex-direction: column;
  justify-content:center;



`;

const Line = styled.div`
  width: 100%;
  border-top: 1px solid #ccc;

`;

const Line2 = styled.div`
  width: 100%;
  border-top: 1px solid #ccc;
margin-top:1%;
display:none;

@media(max-width: 750px){
  display: block;
}


`;

const HyperLink = styled.a`
  color:black;
  text-decoration: none;  // Rimuove la sottolineatura predefinita del link

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
  padding: 15px;

  width: 100%; /* larghezza del campo di ricerca */
`;

const Placeholder = styled.span`
  color: #999;
`;
const Collegamento = styled.a`
  margin-right: 4%;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  &:hover, &:focus, &:active {
    text-decoration: none;
    color: inherit;
  }


`;


function Navbar() {



  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  const [containerTop, setContainerTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      const scrollDifference = currentPosition - scrollPosition;
  
      if (scrollDifference > 0 && currentPosition > 1000) {
        // Scrolling down by at least 500px
        setContainerTop(-250);
      } else if (scrollDifference < 0) {
        // Scrolling up
        setContainerTop(0);
      }
      setScrollPosition(currentPosition);
    };
  
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);




const [value, setValue] = useState("all");
const items = useSelector((state) => state.cart.items);


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
  const [showFineObject, setShowFineObject] = useState(false);
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

  const handleFilterClickOutSearch = () => {
    setIsHoveredSearch(!isHoveredSearch);
  };




  const handleShopClick = () => {
    setIsHovered(false)
    setIsFilterVisible(false)
    setshowShopInfo(false);
    navigate('/shopRings');
  };
  const handleShopClickEnamelledChains = () => {
    setIsHovered(false)
    setIsFilterVisible(false)
    setshowShopInfo(false);
    navigate('/shopEnamelledChains');
  };
  const handleShopClickAnimals = () => {
    setIsHovered(false)
    setIsFilterVisible(false)
    setshowShopInfo(false);
    navigate('/shopAnimals');
  };
  const handleShopClickSea = () => {
    setIsHovered(false)
    setIsFilterVisible(false)
    setshowShopInfo(false);
    navigate('/shopSea');
  };

  const handleHome = () => {
    setIsHovered(false)
    setIsHoveredSearch(false); 
    setIsHoveredAbout(false);
     setIsHoveredCollections(false);
      setIsHovered(false);
    
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
  const handleBook = () => {
    setIsHoveredAbout(false)
    setIsFilterVisible(false)
    navigate('/boutiques#Book');
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
    if (query === "") {
      return false;
    }
    return item.attributes.collection.toLowerCase().includes(query) || 
           item.attributes.category.toLowerCase().includes(query);
  });


  
  const { t } = useTranslation();

  return (
    <>

    <BigContainer     
    onMouseLeave={() => { setIsHovered(false); setIsHoveredCollections(false); setIsHoveredAbout(false); setIsHoveredSearch(false);}}>
    {/*HAMBURGER MENU OPENED*/ }





    <DivCarrello open={isFilterVisible} >
          <ContainerFiltri>

          <FilterButton onClick={handleShowShopInfo}>
            <FilterButtonText>{t('navbar.shop')}</FilterButtonText>
            <FilterSign>
              {showShopInfo ? (
                <img src={close} alt="Add" style={{ width: '20px', height: '20px' }} />
              ) : (
                <img src={add} alt="Add" style={{ width: '20px', height: '20px' }} />
              )}
            </FilterSign>
          </FilterButton>
            


            <InfoContainer visible={showShopInfo}>
              <GtaRegularMobile onClick={() => setShowHighJewellery(prevState => !prevState)}>{t('navbar.highjewellery')}</GtaRegularMobile>
                <HighJewellery  visible={showHighJewellery}>
                  <Margin>
                  <GtaRegular onClick={handleShopClickBracelets} style={{ cursor: 'pointer' }}>{t('navbar.bracelets')}</GtaRegular> 
                  <GtaRegular onClick={handleShopClickEarrings} style={{ cursor: 'pointer' }}>{t('navbar.earrings')}</GtaRegular> 
                  <GtaRegular onClick={handleShopClickNecklaces} style={{ cursor: 'pointer' }}>{t('navbar.necklaces')}</GtaRegular> 
                  <GtaRegular onClick={handleShopClick} style={{ cursor: 'pointer' }}>{t('navbar.rings')}</GtaRegular> 
                  <GtaRegular onClick={handleShopClickEnamelledChains} style={{ cursor: 'pointer' }}>{t('navbar.enamelledchains')}</GtaRegular> 
                  </Margin>
                </HighJewellery>

              <GtaRegularMobile onClick={() => setShowFineObject(prevState => !prevState)} >{t('navbar.fineobject')}</GtaRegularMobile>
              <HighJewellery visible={showFineObject}>
                <Margin>

                  <GtaRegular onClick={handleShopClickAnimals} style={{ cursor: 'pointer' }}>{t('navbar.animals')}</GtaRegular> 
                  <GtaRegular onClick={handleShopClickSea} style={{ cursor: 'pointer' }}>{t('navbar.sea')}</GtaRegular> 
                </Margin>
              </HighJewellery>

              <GtaRegularMobile>{t('navbar.gifts')}</GtaRegularMobile>
              <HighJewellery>
                test
              </HighJewellery>
                
            </InfoContainer>


            <FilterButton onClick={handleShowCollection}>
              <FilterButtonText>{t('navbar.collections')}</FilterButtonText>
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
            <HyperLink href="/shopZingara" ><GtaRegular>Zingara</GtaRegular></HyperLink> 
              <HyperLink href="/shopUrania" ><GtaRegular>Urania</GtaRegular></HyperLink> 
              <HyperLink href="/shopTycoon" ><GtaRegular>Tycoon</GtaRegular></HyperLink> 
              <HyperLink href="/shopFleurie" ><GtaRegular>Fleurie</GtaRegular></HyperLink> 
              <HyperLink href="/shopBollywood" ><GtaRegular>Bollywood</GtaRegular></HyperLink> 
            </HighJewellery>

            </InfoContainer>

            <FilterButton onClick={handleShowAboutInfo}>
              <FilterButtonText>{t('navbar.about')}</FilterButtonText>
              <FilterSign>
                {showAboutInfo ? (
                  <img src={close} alt="Add" style={{ width: '20px', height: '20px' }} />
                ) : (
                  <img src={add} alt="Add" style={{ width: '20px', height: '20px' }} />
                )}
              </FilterSign>
            </FilterButton>

            <InfoContainer visible={showAboutInfo}>
            <GtaRegularMobile onClick={() => setShowHouseInfo(prevState => !prevState)}>{t('navbar.thehouse')}</GtaRegularMobile>

                <HighJewellery  visible={showHouseInfo}>
                  <Margin>
                  <GtaRegular onClick={handleMaisonCusi} style={{ cursor: 'pointer' }}>{t('navbar.story')}</GtaRegular> 
                  <GtaRegular onClick={handleBoutiques} style={{ cursor: 'pointer' }}>Boutiques</GtaRegular> 
                  </Margin>
                </HighJewellery>


              <GtaRegularMobile onClick={() => setShowExpertiseInfo(prevState => !prevState)}>{t('navbar.expertise')}</GtaRegularMobile>

              <HighJewellery  visible={showExpertiseInfo}>
                  <GtaRegular onClick={handleBoutiques} style={{ cursor: 'pointer' }}><Collegamento href="/boutiques#Book">{t('navbar.bookanappointment')}</Collegamento></GtaRegular> 
                  <GtaRegular onClick={handleCustomerService} style={{ cursor: 'pointer' }}>{t('navbar.customerservice')}</GtaRegular> 
                  <GtaRegular onClick={handleContactUs} style={{ cursor: 'pointer' }}>{t('navbar.contactus')}</GtaRegular> 
                </HighJewellery>

            </InfoContainer>


                <FilterButtonContainer>

                <FilterButton2>
                 <Typography3>EUR/IT</Typography3> 
                </FilterButton2>
                </FilterButtonContainer>



      


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




    <Container top={containerTop}>

      <NavBarDiv>

      
        <BoxSinistra> 
            <Ul>
                
            <li  onMouseEnter={() => { setIsHoveredSearch(false); setIsHovered(true); setIsHoveredCollections(false); setIsHoveredAbout(false);}}>    
                <Typography2 >
                {t('navbar.shop')}
                </Typography2>
            </li>
            <li onMouseEnter={() => { setIsHoveredSearch(false); setIsHoveredCollections(true); setIsHovered(false); setIsHoveredAbout(false);}}>    
                <Typography2 >
                {t('navbar.collections')}
                </Typography2>
            </li>
            <li onMouseEnter={() => {setIsHoveredSearch(false); setIsHoveredAbout(true); setIsHoveredCollections(false); setIsHovered(false); } }>    
                <Typography2 >
                {t('navbar.about')}
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
          
          <IconButton sx={{ color: "black" }} onClick={() => setIsHoveredSearch(prevState => !prevState)} onMouseEnter={() => {setIsHoveredAbout(false); setIsHoveredCollections(false); setIsHovered(false); } }>
            <LensIconDesktop  />
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
                backgroundColor: "black",
                fontSize: "8px", // Riduci la dimensione del font del badge
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Arial, sans-serif",
              },
            }}
          >
            <IconButton
              onClick={() => { dispatch(setIsCartOpen({}));  setIsHoveredSearch(false);  setIsHoveredSearch(false); setIsHoveredAbout(false); setIsHoveredCollections(false); setIsHovered(false);     } }
              sx={{ color: "black" }}
            >
              <ShoppingBagOutlined2 />
            </IconButton>
          </Badge>




        </BoxDestra>

        {/* Versione Mobile*/}
        <BoxMobileSinistra>
        <HamburgerIcon onClick={() => {
          handleFilterClick();
          setIsHoveredSearch(false);
        }}>
          <div></div>
          <div></div>
          <div></div>
        </HamburgerIcon>

        <LensIcon onMouseEnter={() => {setIsHoveredAbout(false); setIsHoveredCollections(false); setIsHovered(false); } } onClick={() => setIsHoveredSearch(prevState => !prevState)}/>

        </BoxMobileSinistra>

          <BoxMobileDestra>

      
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
                backgroundColor: "black",
                fontSize: "8px", // Riduci la dimensione del font del badge
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Arial, sans-serif",
              },
            }}
          >
            
            <IconButton
              onClick={() => { dispatch(setIsCartOpen({}));  setIsHoveredSearch(false);  setIsHoveredSearch(false);  setIsHoveredSearch(false); setIsHoveredAbout(false); setIsHoveredCollections(false); setIsHovered(false);   } }

              sx={{ color: "black" }}
            >
              <ShoppingBagOutlined2 />
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
        <DivCategoriaProdotti>
        <Typography2>{t('navbar.highjewellery')}</Typography2> 
        </DivCategoriaProdotti>

       <Typography3 onClick={handleShopClickBracelets} style={{ cursor: 'pointer' }}>    {t('navbar.bracelets')}</Typography3> 
       <Typography3 onClick={handleShopClickEarrings} style={{ cursor: 'pointer' }}>    {t('navbar.earrings')}</Typography3> 
       <Typography3 onClick={handleShopClickNecklaces} style={{ cursor: 'pointer' }}>    {t('navbar.necklaces')}</Typography3> 
       <Typography3 onClick={handleShopClick} style={{ cursor: 'pointer' }}>    {t('navbar.rings')}</Typography3>
       <Typography3 onClick={handleShopClickEnamelledChains} style={{ cursor: 'pointer' }}>{t('navbar.enamelledchains')}</Typography3>  
        </MenuItem>


        <MenuItem>
        <DivCategoriaProdotti>
        <Typography2>{t('navbar.fineobject')}</Typography2>
        </DivCategoriaProdotti>

        <Typography3 onClick={handleShopClickAnimals} style={{ cursor: 'pointer' }}>{t('navbar.animals')}</Typography3> 
        <Typography3 onClick={handleShopClickSea} style={{ cursor: 'pointer' }}>{t('navbar.sea')}</Typography3> 


        </MenuItem>
        <MenuItem>
        <DivCategoriaProdotti>
        <Typography2>{t('navbar.gifts')}</Typography2>
        </DivCategoriaProdotti>
        <Typography3>{t('navbar.forher')}</Typography3> 
        <Typography3>{t('navbar.forhim')}</Typography3> 


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
        <DivCategoriaProdotti>
       <Typography2>ALL COLLECTIONS</Typography2> 
       </DivCategoriaProdotti>
       <HyperLink href="/shopBollywood" ><Typography3>Bollywood</Typography3></HyperLink> 
       <HyperLink href="/shopFleurie" ><Typography3>Fleurie</Typography3></HyperLink> 
       <HyperLink href="/shopTycoon" ><Typography3>Tycoon</Typography3></HyperLink> 
       <HyperLink href="/shopUrania" ><Typography3>Urania</Typography3></HyperLink> 
       <HyperLink href="/shopZingara" ><Typography3>Zingara</Typography3></HyperLink> 
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
        <DivCategoriaProdotti>
       <Typography2>{t('navbar.thehouse')}</Typography2> 
       </DivCategoriaProdotti>
       <Typography3 onClick={handleMaisonCusi} style={{ cursor: 'pointer' }}>{t('navbar.story')}</Typography3> 
       <Typography3 onClick={handleBoutiques} style={{ cursor: 'pointer' }}>Boutiques</Typography3> 
        </MenuItem>


        <MenuItem>
        <DivCategoriaProdotti>
        <Typography2>{t('navbar.expertise')}</Typography2>
        </DivCategoriaProdotti>
        <Typography3 onClick={handleBook} style={{ cursor: 'pointer' }}><Collegamento href="/boutiques#Book">{t('navbar.bookanappointment')}</Collegamento></Typography3> 
        <Typography3 onClick={handleCustomerService} style={{ cursor: 'pointer' }}>{t('navbar.customerservice')}</Typography3> 
        <Typography3 onClick={handleContactUs} style={{ cursor: 'pointer' }}>{t('navbar.contactus')}</Typography3> 

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
          placeholder={t('search.search')}
          style={{ fontFamily: 'Arial' }}
          
        />
      </SearchBox>
      <Line />
    </SearchSection>
    

    <ContenitoreRicerca>
    <ContenitoreRicerca2 onClick={() => setIsHoveredSearch(false)}>
        {searchedItems.length === 0 ? (
          <ABC16>{t('search.result1')}</ABC16>
        ) : (
          searchedItems.slice(0, 3).map((item, index) => (
            <DivItems key={index}>
              <ItemSearch item={item} />
              <Line2 />
            </DivItems>
            
          ))
        )}
      </ContenitoreRicerca2>
    </ContenitoreRicerca>


    </MenuSearch>

    <BoxMenuGrayOutSearch 
        display={isHoveredSearch ? "flex" : "none"}
        backgroundColor="rgba(0, 0, 0, 0)"
        position="fixed"
        zIndex={0}
        width="100%"  // Cambiato da 100% a 70%
        height="100%"
        right="0"    // Cambiato da left a right
        top="0"
        overflow="auto"
        onClick={handleFilterClickOutSearch}
        onMouseEnter={() => {setIsHoveredSearch(false);}}
      >





      </BoxMenuGrayOutSearch>
    


    </BigContainer>

    </>
  );
}

export default Navbar;