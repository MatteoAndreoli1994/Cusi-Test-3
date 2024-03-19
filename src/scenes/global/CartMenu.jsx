import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "@emotion/styled";
import { shades } from "../../theme";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  setIsCartOpen,
} from "../../state";
import { useNavigate } from "react-router-dom";
import CloseIconImage from "../../assets/closeicon.png";



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
  


  
  const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;

`;
const FlexBoxImmagine = styled(Box)`

  display: flex;
  width: 90%;
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
const BoxProdotti = styled.div`
  display: flex;
  flex-direction: column;
 
  justify-content:center;
  flex: 1; /* Usa il rimanente spazio disponibile in altezza */
`;

const DivCarrello = styled(Box)`
  position: fixed;
  right: ${({ isCartOpen }) => (isCartOpen ? '-30%' : '0%')};
  bottom: 0;
  width: max(400px, 35%);
  height: 100%;
  background-color: white;
  transition: right 1s ease-in-out; /* Animazione della transizione */

`;

const Checkout = styled(Button)`
  &:hover {
    background-color: gray; /* Cambia il colore del background al passaggio del mouse */
    color: white; /* Cambia il colore del testo al passaggio del mouse */
  }
`;

const GtaRegular24 = styled.p`
font-family: 'GTAmericaRegular';
font-size: 24px;
`;
const GtaRegular14 = styled.p`
  font-family: 'GTAmericaRegular';
  font-size: 14px;
  color: gray;
  margin-bottom:0;
  margin-top:0;
  text-decoration: underline; /* Aggiungi questa linea per la sottolineatura */
  cursor: pointer; /* Aggiungi questa linea per il cursore pointer */
`;
const GtaRegular14normal = styled.p`
  font-family: 'GTAmericaRegular';
  font-size: 14px;

`;
const GtaRegular16normal = styled.p`
  font-family: 'GTAmericaRegular';
  font-size: 16px;
    margin:0;
`;

const ABC16 = styled.p`
font-family: 'ABCGaisyr-Regular';
font-size: 16px; 
margin-bottom: 0;
margin-top:1%;
`;

const InfoProdotto = styled.div`
display: flex;
flex-direction:column;
`;
const DivQuantità = styled.div`
display: flex;

align-items:center;
justify-content:left;

height:100%;

`;
const DivImmagine = styled.div`
  width: 150px;
  height: 150px;
  overflow: hidden;
  margin-right: 1px; /* Aggiorna il margine destro a tuo piacimento */
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
  return (
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
      <DivCarrello display={isCartOpen ? "block" : "none"}>
        <Box padding="30px" overflow="auto" height="100%" >
          {/* HEADER */}
          <FlexBox  marginRight={5}>
            <GtaRegular24>Shopping Bag ({cart.length})</GtaRegular24>
            <IconButton onClick={() => dispatch(setIsCartOpen({}))}>
              <CloseIcon2 src={CloseIconImage}/>
            </IconButton>
          </FlexBox>

          {/* CART LIST */}
          <Box>
            {cart.map((item) => (
              <Box key={`${item.attributes.name}-${item.id}`}  >
                <FlexBoxImmagine p="15px 0" marginRight={5}>
                  <DivImmagine >
                  <Immagine
                    alt={item?.name}
                    src={`${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
                  />
                  </DivImmagine>
                  
                  <BoxProdotti flex="1 1 60%" style={{ marginLeft: '40px' }}>
                    <FlexBoxTop mb="5px">

                      <InfoProdotto>
                      <ABC16>
                        {item.attributes.name}
                      </ABC16>
                      <ABC16>
                      {formatPrice(item.attributes.price)}
                      </ABC16>
                      </InfoProdotto>


                    </FlexBoxTop>

                    <FlexBoxBot m="15px 0">

                      <DivQuantità>

                        <Box style={{ cursor: 'pointer' }} display="flex" alignItems="center" marginLeft={0} marginRight={2} onClick={() =>
                            dispatch(decreaseCount({ id: item.id }))
                          }>
                          <GtaRegular14normal style={{ color: 'gray'}}>-</GtaRegular14normal>
                        </Box>

                        <GtaRegular14normal >{item.count}</GtaRegular14normal>


                        <Box style={{ cursor: 'pointer' }} display="flex" alignItems="center" marginRight={0} marginLeft={2} onClick={() =>
                            dispatch(increaseCount({ id: item.id }))
                          
                          }>
                        <GtaRegular14normal style={{ color: 'gray'}}>+</GtaRegular14normal> 
                        </Box>
                      </DivQuantità>

                        
                        <GtaRegular14 onClick={() =>
                                  dispatch(removeFromCart({ id: item.id }))
                                }>
                                  Remove

                      </GtaRegular14>


                    </FlexBoxBot>

                  </BoxProdotti>
                </FlexBoxImmagine>
                <Divider />
              </Box>
            ))}
          </Box>

          {/* ACTIONS */}
          <Box m="20px 0">
            <FlexBox m="20px 0">
              <GtaRegular16normal fontWeight="bold">Subtotal</GtaRegular16normal>
              <ABC16 >{formatPrice(totalPrice)}</ABC16>
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
             <GtaRegular16normal>CHECKOUT</GtaRegular16normal> 
            </Checkout>
          </Box>
        </Box>
      </DivCarrello>
    </Box>
  );
};

export default CartMenu;