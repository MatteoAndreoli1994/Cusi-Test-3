import React from 'react';
import styled from 'styled-components';
import Modella from "../../assets/modella1.png";

const Container = styled.div`
  display: flex;
  margin-top: 120px;
  width: 100%;

  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 10%;
  font-size: 12px; /* Imposta la dimensione del font del corpo del testo */
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 10px;
  font-size: 2em; /* Esempio: il doppio della dimensione del font del corpo del testo */
`;

const Subtitle = styled.p`
  width:40%;
  text-align: center;
  margin-bottom: 20px;
  font-size: 15px; /* Esempio: 1,5 volte la dimensione del font del corpo del testo */
`;

const ContactSection = styled.div`
  display: flex;
  width: 80%;
  margin-top: 20px;
`;

const ModelImage = styled.div`
  flex: 1;
  margin-right: 20px;
  img {
    width: 100%;
    height: auto;
  }
`;

const InfoSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* Aggiunto per allineare gli elementi alla fine del container */


  justify-content: center;

`;


const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  height: 80%;
  width: 90%;
  justify-content: center;

`;

const DivCustomerService = styled.div`
  display: flex;

`;

const Box = styled.div`
  width: 50%;


  display: flex;
  flex-direction: column;
  margin-bottom: 10%;
  margin-right:0;

  p {
    margin: 0;
    font-size: 1.2em; /* Esempio: 1,2 volte la dimensione del font del corpo del testo */
  }
`;

//FONT
const ABC = styled.p`
font-family: 'ABCGaisyr-Book';
font-size: 40px; 
margin-bottom: 0;


`;

const GtaRegular = styled.p`
font-family: 'GTAmericaRegular';
font-size: 16px;
width:30%;
text-align: center;


`;
const GtaLight = styled.p`
font-family: 'GTAmericaLight';
font-size: 16px;
margin-top:1%;
margin-bottom:2%;
width:40%;
text-align:center;

`;
const GtaLightRegular = styled.p`
font-family: 'GTAmericaRegular';
font-size: 14px;
`;

const GtaLightLightInfo = styled.p`
font-family: 'GTAmericaLight';
font-size: 16px;
`;

const ContactUs = () => {
  return (
    <Container>
      <ABC>Contact Us</ABC>
      <GtaLight>Our personal advisors are available to answer any questions from Monday to Friday from 9 am to 7 pm and on Saturdays from 9 am to 5 pm.</GtaLight>
      <ContactSection>
        <ModelImage>
          <img src={Modella} alt="Model" />
        </ModelImage>

        <InfoSection>
          <ContactInfo>
            <DivCustomerService>
              <Box><GtaLightRegular> CUSTOMER SERVICE </GtaLightRegular></Box>
              <Box>
                <GtaLightLightInfo>gioielleriacusiecommerce@gmail.com</GtaLightLightInfo>
                <GtaLightLightInfo>(+39) 0266019768</GtaLightLightInfo>
              </Box>
            </DivCustomerService>
            <DivCustomerService>
              <Box><GtaLightRegular> PRESS INQUIRES </GtaLightRegular></Box>
              <Box>
                <GtaLightLightInfo>gioielleriacusiecommerce@gmail.com</GtaLightLightInfo>
                <GtaLightLightInfo>(+39) 0266019768</GtaLightLightInfo>
              </Box>
            </DivCustomerService>
            <DivCustomerService>
              <Box><GtaLightRegular> BOOK AN APPOINTMENT </GtaLightRegular></Box>
              <Box>
               <GtaLightRegular> Cusi Milano </GtaLightRegular>
               <GtaLightLightInfo>(+39) 0266019768</GtaLightLightInfo>
               <GtaLightRegular style={{ marginTop: '15px' }}> Cusi Portofino </GtaLightRegular>
               <GtaLightLightInfo>(+39) 0266019768</GtaLightLightInfo>
               <GtaLightLightInfo style={{ marginTop: '15px' }}> Click here to book an appointment online </GtaLightLightInfo>

              </Box>
            </DivCustomerService>
            <DivCustomerService>
              <Box><GtaLightRegular> LIVE CHAT </GtaLightRegular></Box> <Box><GtaLightLightInfo>Click here to talk in real time to an expert</GtaLightLightInfo></Box>
            </DivCustomerService>
            {/* Aggiungi altre informazioni come indirizzi dei negozi fisici, orari di apertura, ecc. */}
          </ContactInfo>
        </InfoSection>
      </ContactSection>
    </Container>
  );
};

export default ContactUs;
