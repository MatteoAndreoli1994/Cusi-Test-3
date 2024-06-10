import { Box, Button, IconButton, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
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
import ReactSlidy from 'react-slidy'
import add from '../../assets/add.png';
import close from '../../assets/meno.png';
import Footer from "../global/FooterNoSubscribe"







const Container = styled.div`
  min-height: 170vh;
  margin-top:120px;


  justify-content:center;
  display:flex;

  @media(max-width:900px){

    min-height: 200vh;
  }

  @media(max-width:680px){

    min-height: 200vh;
  }
  @media(max-width:600px){

    min-height: 250vh;
  }
  @media(max-width:450px){

    min-height: 180vh;
  }

  `;

  const StyledHashLink = styled(HashLink)`
  text-decoration: none; /* Rimuovi sottolineature */
  color: inherit; /* Usa il colore del testo predefinito */
  /* Aggiungi altri stili del bottone qui, se necessario */
`;

const Telefonata = styled.a`
text-decoration: none; /* Rimuovi sottolineature */
color: inherit; /* Usa il colore del testo predefinito */
/* Aggiungi altri stili del bottone qui, se necessario */
`;


  const Bottoni = styled.div`
    display:flex;
    flex-direction:column;

    margin-top:15%;

    width:70%;

    @media(max-width: 1200px){
      width:80%;
      margin-right: 10%;
      margin-top:12%;
    }

    @media(max-width: 900px){
      width:90%;
      margin-right: 0%;
      margin-top:10%;
    }

  `;



  const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* Centra l'immagine sia verticalmente che orizzontalmente */

  width: 50%;
  justify-content: flex-start;


  flex-direction:column;




  @media(max-width: 900px){
    width: 100%;

  }
`;

const Image = styled.img`


  @media(max-width: 1200px){
    margin-bottom:10%;



  }
  @media(max-width: 1000px){
    margin-bottom:12%;
    

  }

  @media(max-width: 900px){
    margin-top: 2%;
    width: 90%;
    height: auto;
    object-fit: cover;
    object-position: center;
    margin-bottom:0%;


  }
`;
const ImmagineQuadrataContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 100%; /* Altezza automatica per mantenere un aspect ratio quadrato */
`;

const ImmagineQuadrata = styled.img`
  position: absolute;
  top: 50%; /* Posiziona l'immagine al centro verticalmente */
  left: 0;
  transform: translateY(-50%); /* Sposta l'immagine verso l'alto del 50% della sua altezza */
  width: 100%;
  height: auto; /* Altezza automatica per mantenere l'aspect ratio */
  object-fit: cover; /* Taglia l'immagine per riempire il contenitore */
  object-position: center; /* Centra l'immagine sia verticalmente che orizzontalmente */
`;




const Image2 = styled.img`

`;
const Image1Div = styled.div`
width: 80%; /* Larghezza al 50% rispetto al container */
height: auto; /* Imposta l'altezza in base all'aspect ratio dell'immagine */
object-fit: contain; /* Mantieni l'aspect ratio e riempi l'area disponibile */
margin-bottom:3%;
margin-top:5%;

@media(max-width: 1200px){

  width: 80%; /* Larghezza al 50% rispetto al container */
}

  @media(max-width: 900px){
    display: none;
  }
`;
const Image1DivMobile = styled.div`
width:90%; /* Larghezza al 50% rispetto al container */
height: auto; /* Imposta l'altezza in base all'aspect ratio dell'immagine */
object-fit: contain; /* Mantieni l'aspect ratio e riempi l'area disponibile */
margin-bottom:0%;

display: none;

  @media(max-width: 900px){
    margin-top:4%;
    display: block;
  }
`;

const Image2Div = styled.div`
  width: 80%; /* Larghezza al 50% rispetto al container */
  height: auto; /* Imposta l'altezza in base all'aspect ratio dell'immagine */
  object-fit: contain; /* Mantieni l'aspect ratio e riempi l'area disponibile */
  margin-bottom:3%;
  @media(max-width: 1200px){

    width: 80%; /* Larghezza al 50% rispetto al container */
  }



  @media(max-width: 900px){
    display: none;
  }
`;

const ItemContainer = styled.div`

  display: flex;
  width: 95%;
  justify-content: center;


  @media(max-width: 900px){
    justify-content: flex-start;
    flex-direction: column;
  }
`;


  const TypographyCollection = styled.p`
  font-size:20px;
  color:gray;
  margin-bottom: 2%;
  margin-top: 20%;


  @media(max-width: 900px){
    font-size:17.5px;
    margin-top: 8%;
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

  &:disabled {
    background-color: lightgrey;
    color: darkgrey;
    cursor: not-allowed;
  }



  @media(max-width: 900px){
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


  @media(max-width: 900px){
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


  @media(max-width: 900px){
    font-size:30px;
  }
  `;
  const DescripionDiv = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;


  width:50%;



  @media (max-width: 900px){
    width:100%;
  }

  `;

  const Info = styled.div`
  display:flex;
  flex-direction:column;
  width:70%;
  margin-top:6%;



  @media(max-width: 1200px){
    width: 90%;
    margin-top:0%;
  }

  @media(max-width: 900px){
    width: 90%;
  }

  `;

  const TypographyDescrizioneProdotto = styled.p`
  font-size:18px;
  margin-top: 1%;
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


  padding: 20px;
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

color: gray;
display:flex;
justify-content:center;
align-items:center;
font-family: 'GTAmericaRegular';
font-size: 16px;
width:100%;
  
`;
const Dots = styled.div`
display: flex;
justify-content: center; /* Centra i puntini orizzontalmente */
align-items: center;    /* Centra i puntini verticalmente */
gap: 15px; /* Usa questa proprietà per controllare la spaziatura */
  
`;

const ButtonCustom = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 24px; /* Dimensione del puntino */
  line-height: 1.5;
  
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
transition: opacity 0.5s ease-in-out;
`;



const FaqDiv = styled.div`
  width: 100%;
  margin-top: 5%;


  postion: relative;

  @media(max-width: 1200px){
    width:100%;
    margin-top: 10%;

  }

  @media(max-width: 900px){
    width:100%;

  }
`;
const AccordionContent = styled.div`
  max-height: ${({ isOpen }) => (isOpen ? '100%' : '0')}; /* Imposta una max-height elevata quando è aperto */
  overflow: hidden;
  transition: max-height 1s ease; /* Aggiunta transizione per un effetto fluido */
  border-bottom: 1px solid black;

`;
const FilterButton = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;  /* Aggiunto per separare gli elementi */


  font-size: 16px;
  cursor: pointer;
  user-select: none; /* Evita la selezione del testo */
  width: 100%;


`;
const AccordionItem = styled.div`

width: 100%;
  padding: 5%;
  font-family: 'GTAmericaRegular';
  font-size: 16px;
  padding-left: 0;
  cursor: pointer;

`;
const FilterSign = styled.span`


  display:flex;

  align-items:center;
`;


const createStyles = isActive => ({
  background: 'transparent',
  border: 0,
  color: isActive ? '#333' : '#ccc',
  cursor: 'pointer',
  fontSize: '32px',
  margin: 0
})




const ItemDetails = () => {
  const [actualSlide, setActualSlide] = useState(0)

  const updateSlide = ({currentSlide}) => {
    setActualSlide(currentSlide)
  }
  
  



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
  const [available, setAvailable] = useState(null);

  const [imageProduct1, setImageProduct1] = useState(null);
  const [imageProduct2, setImageProduct2] = useState(null);
  const SLIDES = [imageProduct1, imageProduct2];



  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  



  const message = `${item?.attributes?.name}`;

  useEffect(() => {
    getItem();
    getItems();
    setImageProduct1(item?.attributes?.image?.data?.attributes?.formats?.medium?.url);
    setImageProduct2(item?.attributes?.image2?.data?.attributes?.formats?.medium?.url);




  }, [itemId]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setAvailable(item?.attributes?.stripe);
    setImageProduct1(item?.attributes?.image?.data?.attributes?.formats?.medium?.url);
    setImageProduct2(item?.attributes?.image2?.data?.attributes?.formats?.medium?.url);

  }, [item]);

  

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
      `https://prized-horses-45ff95e916.strapiapp.com/api/items/${itemId}?populate=image,image2`,
      {
        method: "GET",
      }
    );
    const itemJson = await item.json();
    setItem(itemJson.data);

  }

  async function getItems() {
    const items = await fetch(
      `https://prized-horses-45ff95e916.strapiapp.com/api/items?populate=image,image2`,
      {
        method: "GET",
      }
    );
    const itemsJson = await items.json();
    setItems(itemsJson.data);


  }



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

  const buttonStyle = {
    background: 'transparent',
    border: 0,
    cursor: 'pointer',
    fontSize: 72,
    height: '30%',
    margin: 'auto 10px',
    padding: 15
  }
  const [accordionState, setAccordionState] = useState({
    OurServices: false,
    ProductCare: false,
    Shippig: false,
    Size: false,
    Garanzia: false,
    Privacy: false,
    Faq: false,
    Contact: false,


    // Aggiungi altri elementi del tuo accordion qui...
  });

  const toggleAccordion = (item) => {
    setAccordionState((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };
  
  function CustomArrow({emoji, ...props}) {
    return (
      <button {...props} style={buttonStyle}>
        <span role="img" aria-label="Arrow">
          {emoji}
        </span>
      </button>
    )
  }
  
  function CustomArrowLeft(props) {
    return <CustomArrow {...props} emoji="👈" />
  }
  
  function CustomArrowRight(props) {
    return <CustomArrow {...props} emoji="👉" />
  }



  
  

  return (
    <LazyLoad once>
    <LazyLoadWrapper loaded={loaded} onLoad={handleContentLoad} >
    <link rel="stylesheet" href="https://unpkg.com/react-slidy/lib/styles.css" />

      <Container width="100%" m="80px auto"        >
        
        <ItemContainer display="flex" flexWrap="wrap" columnGap="40px" >
          {/* IMAGES */}
          <ImageContainer>
            <Image1Div>
            <Image
              alt={item?.name}
              width="100%"
              height="100%"

              src={`${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
              style={{ objectFit: "contain", display: imageLoaded ? "block" : "none" }}
              onLoad={handleImageLoad}
            />
            </Image1Div>

            <Image1DivMobile>


            <ReactSlidy doAfterSlide={updateSlide} slide={actualSlide}>
              {SLIDES.map(src => (
                <ImmagineQuadrataContainer>
                  <ImmagineQuadrata alt="" key={src} src={src} />
                </ImmagineQuadrataContainer>

              ))}
            </ReactSlidy>
            <Dots className="Dots"              style={{ objectFit: "contain", display: imageLoaded ? "flex" : "none" }}>
                {SLIDES.map((_, index) => {
              return (
                <ButtonCustom
                  key={index}
                  style={createStyles(index === actualSlide)}
                  onClick={() => updateSlide({currentSlide: index})}
                >
                  
                  &bull;
                </ButtonCustom>
              )
            })}
            </Dots>



            </Image1DivMobile>



            <Image2Div>
            <Image2
              alt={item?.name}
              width="100%"
              height="100%"
              src={`${item?.attributes?.image2?.data?.attributes?.formats?.medium?.url}`}
              style={{ objectFit: "contain", display: imageLoaded ? "block" : "none" }}
              
            />
            </Image2Div>

          </ImageContainer>

          {/* ACTIONS */}
          <DescripionDiv               style={{  display: imageLoaded ? "flex" : "none" }}>


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

                <DropdownButton onClick={handleButtonClick} disabled={`${item?.attributes?.quantity}` === "0"}>
                  {selectedOption ? (
                    <span>{selectedOption}</span>
                  ) : (
                    `${item?.attributes?.quantity}` === "0" ? (
                      <PlaceholderOption>SOLD OUT</PlaceholderOption>
                    ) : (
                      <>
                        <span>1</span>
                        <Arrow>&#x25BC;</Arrow>
                      </>
                    )
                  )}
                </DropdownButton>

                <DropdownContent isOpen={isOpen} ref={dropdownRef}>
                  {`${item?.attributes?.quantity}` !== "0" && (
                    Array.from({ length: parseInt(`${item?.attributes?.quantity}`) }, (_, index) => (
                      <DropdownOption key={index + 1} onClick={() => handleOptionClick(index + 1)}>
                        {index + 1}
                      </DropdownOption>
                    ))
                  )}
                </DropdownContent>

              </DropdownContainer>











            </Info>




            <Bottoni>






            {available && (
                <ButtonBlack
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: 0,
                    minWidth: "100%",
                    padding: "20px 40px",
                  }}
                  onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
                  disabled={item?.attributes?.quantity === "0"}
                >
                  <GtaRegular>ADD TO SHOPPING BAG</GtaRegular>
                </ButtonBlack>
              )}


              <Telefonata href="tel:+123456789">

              {available ? (
                <ButtonWhite
                  sx={{
                    backgroundColor: "white",
                    color: "black",
                    borderRadius: 0,
                    minWidth: "100%",
                    padding: "20px 40px",
                  }}
                >
                  <GtaRegular>ORDER BY PHONE</GtaRegular>
                </ButtonWhite>
              ) : (
                <ButtonBlack
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: 0,
                    minWidth: "100%",
                    padding: "20px 40px",
                  }}
                >
                  <GtaRegular>ORDER BY PHONE</GtaRegular>
                </ButtonBlack>
              )}


              </Telefonata>
              <StyledHashLink to={`/boutiques?message=${encodeURIComponent(message)}#Book`}>
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

              <FaqDiv>
      {/* prima Linea nera */}
              <AccordionContent></AccordionContent>

      {/* Prima Domanda */}
                <FilterButton onClick={() => toggleAccordion('Details')}>
                  <AccordionItem >
                    DETAILS

                  </AccordionItem>
                  <FilterSign>
                      {accordionState['Details'] ? (  // Se isOpen è true (l'accordion è aperto)
                        <img src={close} alt="Close" style={{ width: '20px', height: '20px' }} />
                      ) : (
                        <img src={add} alt="Open" style={{ width: '20px', height: '20px' }} />
                      )}
                  </FilterSign>
                </FilterButton>


                <AccordionContent isOpen={accordionState['Details']}>
                <GtaLight>{JSON.parse(JSON.stringify(item?.attributes?.shortDescription) ?? "[]")[0]?.children[0]?.text}</GtaLight>  
                      <GtaLightLightInfo>

                      </GtaLightLightInfo>
                </AccordionContent>

      {/* prima Linea nera */}


      {/* Prima Domanda */}
                <FilterButton onClick={() => toggleAccordion('Shipping')}>
                  <AccordionItem >
                    SHIPPING & RETURNS

                  </AccordionItem>
                  <FilterSign>
                      {accordionState['Shipping'] ? (  // Se isOpen è true (l'accordion è aperto)
                        <img src={close} alt="Close" style={{ width: '20px', height: '20px' }} />
                      ) : (
                        <img src={add} alt="Open" style={{ width: '20px', height: '20px' }} />
                      )}
                  </FilterSign>
                </FilterButton>


                <AccordionContent isOpen={accordionState['Shipping']}>
                <GtaLight>{JSON.parse(JSON.stringify(item?.attributes?.longDescription) ?? "[]")[0]?.children[0]?.text}</GtaLight>  
                      <GtaLightLightInfo>

                      </GtaLightLightInfo>
                </AccordionContent>
              </FaqDiv>

            </Bottoni>





            
          </DescripionDiv>




          

        </ItemContainer>




      </Container>
      <Footer/>







    </LazyLoadWrapper>
    </LazyLoad >

  );
};

export default ItemDetails;