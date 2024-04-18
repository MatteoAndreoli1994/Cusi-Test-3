import { Box, Button, IconButton, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Item from "../../components/Item";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { addToCart } from "../../state";
import { useDispatch } from "react-redux";
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import LazyLoad from 'react-lazyload';
import React from "react";
import { useNavigate } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Container = styled.div`
  min-height: 100vh;
  margin-top:120px;


  justify-content:center;
  display:flex;

  `;
  const StyledHashLink = styled(HashLink)`
  text-decoration: none; /* Rimuovi sottolineature */
  color: inherit; /* Usa il colore del testo predefinito */
  /* Aggiungi altri stili del bottone qui, se necessario */
`;

  const Bottoni = styled.div`
    display:flex;
    flex-direction:column;

    margin-top:10%;

    width:70%;

    @media(max-width: 1200px){
      width:80%;
      margin-right: 10%;
    }

    @media(max-width: 680px){
      width:90%;
      margin-right: 0%;
    }

  `;



  const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* Centra l'immagine sia verticalmente che orizzontalmente */

  width: 50%;
  justify-content: flex-start;


  flex-direction:column;




  @media(max-width: 680px){
    width: 100%;

  }
`;

const Image = styled.img`
  width: 70%; /* Larghezza al 50% rispetto al container */
  height: auto; /* Imposta l'altezza in base all'aspect ratio dell'immagine */
  object-fit: contain; /* Mantieni l'aspect ratio e riempi l'area disponibile */

  margin-bottom:5%;

  @media(max-width: 1200px){
    margin-bottom:10%;

  }
  @media(max-width: 1000px){
    margin-bottom:12%;

  }

  @media(max-width: 680px){
    margin-top: 2%;
    width: 90%;
    height: auto;
    object-fit: cover;
    object-position: center;
    margin-bottom:0%;

  }
`;

const Image2 = styled.img`

`;
const Image2Div = styled.div`
  width: 70%; /* Larghezza al 50% rispetto al container */
  height: auto; /* Imposta l'altezza in base all'aspect ratio dell'immagine */
  object-fit: contain; /* Mantieni l'aspect ratio e riempi l'area disponibile */
  margin-bottom:3%;


  @media(max-width: 680px){
    display: none;
  }
`;

const ItemContainer = styled.div`

  display: flex;
  width: 100%;
  justify-content: center;


  @media(max-width: 680px){
    flex-direction: column;
  }
`;


  const TypographyCollection = styled.p`
  font-size:20px;
  color:gray;
  margin-bottom: 2%;
  margin-top: 20%;


  @media(max-width: 680px){
    font-size:17.5px;
  }
  
  `;
  
// Definisci il componente ButtonBlack come variante di Button
const ButtonBlack = styled(Button)`
  background-color: black;
  color: white;
  border-radius: 0;
  min-width: 100%;
  padding: 20px 40px;
  margin: 20px 0;
  cursor: pointer;

  && {
    transition: background-color 0.3s ease;
    margin-bottom: 20px;


    &:hover {
      background-color: ${shades.primary[300]}; /* Cambia il colore a tuo piacimento */
    }
  }

  @media(max-width: 680px){
    && {
      transition: background-color 0.3s ease;
      margin-bottom: 8px;
    }
  }

  
`;

const ButtonWhite = styled(Button)`


  && {
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
      margin-bottom: 8px;
      margin-top: 8px;
    }
  }
`;

  const TypographyName = styled.p`
  font-size:35px;
  margin-top: 0;


  margin-bottom: 3%;


  @media(max-width: 680px){
    font-size:30px;
  }
  `;
  const DescripionDiv = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;



  width:50%;


  @media (max-width: 680px){
    width:100%;
  }

  `;

  const Info = styled.div`
  display:flex;
  flex-direction:column;
  width:70%;



  @media(max-width: 1200px){
    width: 90%;
  }

  @media(max-width: 680px){
    width: 90%;
  }

  `;

  const TypographyDescrizioneProdotto = styled.p`
  font-size:18px;
  margin-top: 0;
  margin-bottom: 4%;

  @media(max-width: 680px){
    font-size:16px;
  }


  `;

  const TypographyPrice = styled.p`
  font-size:30px;
  margin-top: 0;

  font-weight: 600

  @media(max-width: 680px){
    font-size:26px;
  }

  `;

  const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;

  width:40%;

`;

const DropdownButton = styled.button`
  background-color: transparent;
  width:100%;
  color: gray;
  padding: 24px;
  border: 1px solid black; /* Aggiunto il bordo nero */
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  font-size: 15px; /* Modifica la grandezza del testo all'interno del pulsante */
  font-weight: 300; /* Puoi modificare il peso del testo se necessario */

  @media(max-width: 680px){
    font-size:14px;
    padding: 14px;
  }
`;

const Arrow = styled.span`
  margin-left: 40px;
  color: black; /* Aggiunto il colore nero per il triangolo */
`;

const DropdownContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border: 1px solid black; /* Aggiunto il bordo nero */
  width:100%;
  margin-top: -1px; /* Rimuove la distanza tra DropdownButton e DropdownContent */
`;

const DropdownOption = styled.div`
  padding: 18px;
  cursor: pointer;
  border-bottom: 1px solid black; /* Aggiunto il bordo nero al fondo di ogni elemento */
  

  &:hover {
    background-color: #ddd;
  }

  &:last-child {
    border-bottom: none; /* Rimuove il bordo inferiore all'ultimo elemento della lista */
  }


  @media(max-width: 680px){
    padding: 14px;
  }

`;

const PlaceholderOption = styled.div`
  padding: 10px;
  color: gray;

  
`;
//FONT
const ABC = styled.p`
font-family: 'ABCGaisyr-Book';
font-size: 32px; 
margin-bottom: 0;
margin-top: 0;

@media(max-width: 680px){
  font-size:28px;
  font-family: 'ABCGaisyr-Book';
}

`;

const GtaRegular = styled.p`
font-family: 'GTAmericaRegular';
font-size: 16px;
margin-bottom: 0;
margin-top: 0;

@media(max-width: 680px){
  font-size:14px;
}


`;
const GtaLight = styled.p`
font-family: 'GTAmericaLight';
font-size: 16px;
margin-bottom: 0;
margin-top: 0;


@media(max-width: 680px){
  font-size:14px;
}


`;
const ABC24 = styled.p`
font-family: 'ABCGaisyr-Regular';
font-size: 24px; 
margin-bottom: 0;
margin-top: 5%;

@media(max-width: 680px){
  font-size:21px;
}

`;

const GtaLightLightInfo = styled.p`
font-family: 'GTAmericaRegular';
font-size: 16px;

@media(max-width: 680px){
  font-size:14px;
}
`;
const LazyLoadWrapper = styled.div`
opacity: ${({ loaded }) => (loaded ? 1 : 0)};
transition: opacity 1s ease-in-out;
`;




const ItemDetails = () => {



  const navigate = useNavigate();
  const [loaded, setLoaded] = React.useState(false);
  const handleContentLoad = () => {
    setLoaded(true);
  };
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [value, setValue] = useState("description");
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);
  const [imageLoaded, setImageLoaded] = useState(false);
  const message = `${item?.attributes?.name}`;

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // Funzione per formattare il prezzo
  const formatPrice = (price) => {
    return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(price);
  };

  const handleAddToCart = () => {
    // Verifica se l'elemento è già presente nel carrello
    const isItemInCart = items.some(cartItem => cartItem.id === item.id);

    if (!isItemInCart) {
      // Se l'elemento non è presente nel carrello, aggiungilo
      dispatch(addToCart({ item: { ...item, count } }));
    } else {
      // Se l'elemento è già presente nel carrello, gestisci l'azione di conseguenza
      console.log('L\'elemento è già presente nel carrello.');
      // Puoi mostrare un messaggio all'utente o eseguire altre azioni necessarie.
    }
  };

  async function getItem() {
    const item = await fetch(
      `https://prized-horses-45ff95e916.strapiapp.com/api/items/${itemId}?populate=image`,
      {
        method: "GET",
      }
    );
    const itemJson = await item.json();
    setItem(itemJson.data);
  }

  async function getItems() {
    const items = await fetch(
      `https://prized-horses-45ff95e916.strapiapp.com/api/items?populate=image`,
      {
        method: "GET",
      }
    );
    const itemsJson = await items.json();
    setItems(itemsJson.data);
  }

  useEffect(() => {
    getItem();
    getItems();
  }, [itemId]); // eslint-disable-line react-hooks/exhaustive-deps

  const [isOpen, setIsOpen] = useState(false);

  const [selectedOption, setSelectedOption] = useState(null);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value) => {
    setCount(value); // Aggiorna il valore
    setSelectedOption(value); // Aggiorna il valore selezionato
    setIsOpen(false); // Chiudi la finestra di scelta
  };


  const handleBook = () => {
    navigate('/boutiques#Book');
  };



  
  

  return (
    <LazyLoad once>
    <LazyLoadWrapper loaded={loaded} onLoad={handleContentLoad}>

      <Container width="100%" m="80px auto" >
        
        <ItemContainer display="flex" flexWrap="wrap" columnGap="40px">
          {/* IMAGES */}
          <ImageContainer>

        <Image
          alt={item?.name}
          width="100%"
          height="100%"
          src={`${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
          style={{ objectFit: "contain", display: imageLoaded ? "block" : "none" }}
          onLoad={handleImageLoad}
        />
            <Image2Div>
            <Image2
              alt={item?.name}
              width="100%"
              height="100%"
              src={`${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
              style={{ objectFit: "contain", display: imageLoaded ? "block" : "none" }}
              
            />
            </Image2Div>

          </ImageContainer>

          {/* ACTIONS */}
          <DescripionDiv>


            <Info>
            <TypographyCollection><GtaRegular>{item?.attributes?.collection}</GtaRegular></TypographyCollection>
              <TypographyName><ABC> {item?.attributes?.name} </ABC> </TypographyName>

          {/* INFO PRODOTTO */}
              <TypographyDescrizioneProdotto>
                <GtaLight>{JSON.parse(JSON.stringify(item?.attributes?.longDescription) ?? "[]")[0]?.children[0]?.text}</GtaLight>  

              </TypographyDescrizioneProdotto>

              <TypographyPrice><ABC24>  {formatPrice(item?.attributes?.price)} </ABC24></TypographyPrice>
          {/* END:INFO PRODOTTO */}

          {/* SIZE E QUANTITY */}

              <TypographyDescrizioneProdotto>
              <GtaRegular>Quantity</GtaRegular> 
              </TypographyDescrizioneProdotto>



              <DropdownContainer>
                <DropdownButton onClick={handleButtonClick}>
                  <span>{selectedOption || '1'}</span>
                  <Arrow>&#9660;</Arrow>
                </DropdownButton>
                
                <DropdownContent isOpen={isOpen}>
                  <DropdownOption onClick={() => handleOptionClick(1)}>1</DropdownOption>
                  <DropdownOption onClick={() => handleOptionClick(2)}>2</DropdownOption>
                  <DropdownOption onClick={() => handleOptionClick(3)}>3</DropdownOption>
                  {/* Aggiungi altre opzioni secondo necessità */}
                </DropdownContent>
              </DropdownContainer>






            </Info>




            <Bottoni>






              <ButtonBlack
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: 0,
                  minWidth: "100%",
                  padding: "20px 40px",

                }}
                onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
              >
                <GtaRegular> ADD TO SHOPPING BAG </GtaRegular>
              </ButtonBlack>

              <ButtonWhite
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: 0,
                  minWidth: "100%",
                  padding: "20px 40px",

                }}
                onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
              >
                <GtaRegular> ORDER BY PHONE </GtaRegular>
              </ButtonWhite>
              <StyledHashLink to={`/boutiques?message=${encodeURIComponent(message)}`}>
              <ButtonWhite
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: 0,
                  minWidth: "100%",
                  padding: "20px 40px",

                }}

              >

                <GtaRegular> BOOK AN APPOINTMENT </GtaRegular>

              </ButtonWhite>
              </StyledHashLink>


            </Bottoni>

            
          </DescripionDiv>
        </ItemContainer>




      </Container>

    </LazyLoadWrapper>
    </LazyLoad >

  );
};

export default ItemDetails;