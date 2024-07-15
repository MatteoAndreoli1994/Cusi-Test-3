import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled, { keyframes } from 'styled-components';
import { shades } from "../../theme";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  setIsCartOpen,
} from "../../state";
import { useNavigate } from "react-router-dom";
import CloseIconImage from "../../assets/closeicon.png";
import { useTranslation } from 'react-i18next';

const DivCarrello = styled(Box)`
    position: fixed;

    bottom: 0;
    width:  35%;
    height: 100%;
    background-color: white;

    right: ${({ open }) => (open ? '0%' : '-90%')};
    transition: right 0.5s ease;

    z-index: 99;

  
    @media(max-width: 1200px){
      width:  85%;
    }
  `;
  const MenuItem = styled.div`
  width: 90%;

  height:50%;
  display: flex;
  flex-direction:column;

margin-top: 15%;

`;
const Typography2 = styled.p`
font-family: 'GTAmericaRegular';
font-size: 22px;
font-weight: normal;
margin-top:0;
margin-bottom:0;
`;
const Typography3 = styled.p`
  font-family: 'GTAmericaRegular';
  font-size: 18px;
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

  
  const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  

`;
const FlexBoxImmagine = styled(Box)`

  display: flex;
  width: 98%;
  margin-right: 1px; /* Aggiorna il margine destro a tuo piacimento */
  
`;

const FlexBoxTop = styled(Box)`
display: flex;
justify-content: space-between;




`;
const FlexBoxBot = styled(Box)`
display: flex;
justify-content: space-between;
align-items: center;


margin-bottom:0;
margin-top:15px;


`;

const Add = styled(Box)`
margin-left:15px;
margin-right:0px;


@media(max-width: 350px){

margin-left:7px;
margin-right:0px;
}
`;
const Remove = styled(Box)`
margin-left:0;
margin-right:15px;


@media(max-width: 350px){

margin-left:0;
margin-right:7px;
}
`;

const BoxProdotti = styled.div`
  display: flex;
  flex-direction: column;

  width:100%;

  
 
  justify-content:center;
  flex: 1; /* Usa il rimanente spazio disponibile in altezza */
`;



const Checkout = styled(Button)`
  && {
    &:hover {
      color: white; /* Cambia il colore del testo al passaggio del mouse */
      background-color: ${shades.primary[300]}; /* Cambia il colore a tuo piacimento */
    }
  }
`;

const GtaRegular24 = styled.p`
font-family: 'GTAmericaRegular';
font-size: 24px;

@media(max-width: 680px){
  font-size: 21px;
}
`;
const GtaRegular14 = styled.p`
  font-family: 'GTAmericaRegular';
  font-size: 14px;
  color: gray;
  margin-bottom:0;
  margin-top:0;
  text-decoration: underline; /* Aggiungi questa linea per la sottolineatura */
  cursor: pointer; /* Aggiungi questa linea per il cursore pointer */


  @media(max-width: 680px){
    font-size: 12px;
  }
`;
const GtaRegular14normal = styled.p`
  font-family: 'GTAmericaRegular';
  font-size: 14px;

  @media(max-width: 680px){
    font-size: 14px;

  }

`;
const GtaRegular16normal = styled.p`
  font-family: 'GTAmericaRegular';
  font-size: 16px;
    margin:0;
    color:gray;

    @media(max-width: 680px){
      font-size: 14px;
    }
`;
const GtaRegular16normalTotale = styled.p`
  font-family: 'GTAmericaRegular';
  font-size: 17px;
  margin: 0;
  color: gray;


  @media(max-width: 680px) {
    font-size: 14px;
  }
`;
const GtaRegular16normalW = styled.p`
  font-family: 'GTAmericaRegular';
  font-size: 16px;
    margin:0;
    color:white;

    @media(max-width: 680px){
      font-size: 14px;
    }
`;

const ABC16 = styled.p`
font-family: 'ABCGaisyr-Book';
font-size: 16px; 
margin-bottom: 0;
margin-top:1%;

@media(max-width: 680px){
  font-size: 14px; 
}
`;
const ABC16Totale = styled.p`
font-family: 'ABCGaisyr-Book';
font-size: 16px; 
margin-bottom: 0;
margin-top:1%;

  
@media(max-width: 680px){
  font-size: 14px; 
}
`;

const InfoProdotto = styled.div`
display: flex;
flex-direction:column;

`;
const DivQuantità = styled.div`
display: flex;

align-items:center;
justify-content:left;

height:auto;


`;
const DivImmagine = styled.div`
  
  width: 150px;
  height: 150px;
  overflow: hidden;
  margin-right: 1px; /* Aggiorna il margine destro a tuo piacimento */

  @media(max-width: 680px){
    width: 110px;
    height: 110px;
  }

    @media(max-width: 380px){
    width: 100px;
    height: 100px;
  }

      @media(max-width: 350px){
    width: 85px;
    height: 85px;
  }

`;
const Immagine = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
const CloseIcon2 = styled.img`
  width: 23px;
  height: 23px;

`;







const CartMenu = () => {


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  const totalPrice = cart.reduce((total, item) => {
    return total + item.count * item.attributes.price;
  }, 0);
  const handleBackgroundClick = (event) => {
    // Verifica se l'utente ha cliccato il background grigio
    if (event.target === event.currentTarget) {
      dispatch(setIsCartOpen({}));
    }
  };
    // Funzione per formattare il prezzo
    const formatPrice = (price) => {
      return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(price);
    };

    const handleShopClickBollywood = () => {

      navigate('/shopBollywood');
    };
  
    const handleShopClickFleurie = () => {

      navigate('/shopFleurie');
    };
    const handleShopClickTycoon = () => {

      navigate('/shopTycoon');
    };
    const handleShopClickUrania = () => {

      navigate('/shopUrania');
    };
    const handleShopClickZingara = () => {

      navigate('/shopZingara');
    };
  


  const { t } = useTranslation();
  return (
    <> 
    <DivCarrello open={isCartOpen}>
    <Box      padding="30px" overflow="auto" height="100%" >
      {/* HEADER */}


      <FlexBox  marginRight={0}>
        {cart.length==0 ?
        (<>
        <GtaRegular24>{t('cartmenu.yourbag')}</GtaRegular24>

        <IconButton onClick={() => dispatch(setIsCartOpen({}))}>
          <CloseIcon2 src={CloseIconImage}/>
        </IconButton>
        </>)
        :
        
        (<>

        <GtaRegular24>{t('cartmenu.yourbag')} ({cart.length})</GtaRegular24>
        <IconButton onClick={() => dispatch(setIsCartOpen({}))}>
          <CloseIcon2 src={CloseIconImage}/>
        </IconButton>
        
        </>)

        }

        
      </FlexBox>

      {/* CART LIST */}
      <Box>
        {cart.map((item) => (
          <Box key={`${item.attributes.name}-${item.id}`}  >
            <FlexBoxImmagine p="15px 0" marginRight={5}  >
              <DivImmagine >
    
                                 <Immagine
                alt={item?.name}
                src={`${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
              />


              </DivImmagine>
              
              <BoxProdotti flex="1 1 60%" style={{ marginLeft: '10%' }}>
                <FlexBoxTop >

                  <InfoProdotto>
                  <ABC16>
                    {item.attributes.name}
                  </ABC16>
                  <ABC16>
                  {formatPrice(item.attributes.price)}
                  </ABC16>
                  </InfoProdotto>


                </FlexBoxTop>

                <FlexBoxBot m="5px 0">

                  <DivQuantità>

                    <Remove style={{ cursor: 'pointer' }} display="flex" alignItems="center" onClick={() =>
                        dispatch(decreaseCount({ id: item.id }))
                      }>
                      <GtaRegular14normal style={{ color: 'gray'}}>-</GtaRegular14normal>
                    </Remove>

                    <GtaRegular14normal >{item.count}</GtaRegular14normal>


                    <Add style={{ cursor: 'pointer' }} display="flex" alignItems="center"  onClick={() =>
                        dispatch(increaseCount({ id: item.id }))
                      
                      }>
                    <GtaRegular14normal style={{ color: 'gray'}}>+</GtaRegular14normal> 
                    </Add>
                  </DivQuantità>

                    
                  <GtaRegular14 onClick={() =>
                              dispatch(removeFromCart({ id: item.id }))
                            }>
                              {t('cartmenu.remove')}

                  </GtaRegular14>


                </FlexBoxBot>

              </BoxProdotti>
            </FlexBoxImmagine>
            <Divider />
          </Box>
        ))}
      </Box>

      {/* ACTIONS */}





      {cart.length==0 ?
        (<>
         <GtaRegular16normal>{t('cartmenu.yourbag_description')}</GtaRegular16normal> 


        {/*
         <MenuItem>
          <Typography2>Discover our collection</Typography2> 
          <Typography3 onClick={handleShopClickBollywood} style={{ cursor: 'pointer' }}>Bollywood</Typography3> 
          <Typography3 onClick={handleShopClickFleurie} style={{ cursor: 'pointer' }}>Fleurie</Typography3> 
          <Typography3 onClick={handleShopClickTycoon} style={{ cursor: 'pointer' }}>Tycoon</Typography3> 
          <Typography3 onClick={handleShopClickUrania} style={{ cursor: 'pointer' }}>Urania</Typography3> 
          <Typography3 onClick={handleShopClickZingara} style={{ cursor: 'pointer' }}>Zingara</Typography3> 
        </MenuItem> 
        */ }

        </>)
        :
        
        (<>
      <Box m="20px 0">
        <FlexBox m="20px 0">
          <GtaRegular16normal fontWeight="bold">{t('checkout.subtotal')}</GtaRegular16normal>

          <ABC16 >{formatPrice(totalPrice)}</ABC16>


        </FlexBox>
        <FlexBox m="20px 0">
          <GtaRegular16normal fontWeight="bold">{t('checkout.shipping')}</GtaRegular16normal>

          <ABC16 >{t('checkout.free')}</ABC16>


        </FlexBox>

        <FlexBox m="20px 0">
          <GtaRegular16normalTotale fontWeight="bold">{t('checkout.total')}</GtaRegular16normalTotale>

          <ABC16Totale >{formatPrice(totalPrice)}</ABC16Totale >


        </FlexBox>

        <Checkout
          sx={{
            backgroundColor: "black",
            color: "white",
            borderRadius: 0,
            minWidth: "100%",
            padding: "20px 40px",
            m: "20px 0",
          }}
          onClick={() => {
            navigate("/checkout");
            dispatch(setIsCartOpen({}));
          }}
        >
         <GtaRegular16normalW>CHECKOUT</GtaRegular16normalW> 
        </Checkout>
      </Box>

        
        </>)

        }
    </Box>


  </DivCarrello>


  <Box
      display={isCartOpen ? "block" : "none"}
      backgroundColor="rgba(0, 0, 0, 0.4)"
      position="fixed"
      zIndex={10}
      width="100%"
      height="100%"
      left="0"
      top="0"
      overflow="auto"
      onClick={handleBackgroundClick}  // Aggiungi l'handler per il click sullo sfondo


    >

    </Box>
    
    </>

  );
};

export default CartMenu;