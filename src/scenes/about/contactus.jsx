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


const ContactSection = styled.div`
  display: flex;
  width: 80%;
  margin-top: 20px;
  backgroud-color:blue;

  @media(max-width: 680px){
  width: 85%;
    flex-direction:column;
  }

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

  @media(max-width: 1200px){
    width: 93%;
    gap: 7px;

  }
  @media(max-width: 1000px){
    width: 96%;
    gap: 5px;

  }

  @media(max-width: 680px){
    width: 100%;
    gap: 0px;

  }

`;

const DivCustomerService = styled.div`
  display: flex;

  @media(max-width: 680px){
    margin-top: 8%;

    flex-direction:column;
  }
`;

const Box = styled.div`
  width: 50%;


  display: flex;
  flex-direction: column;
  margin-bottom: 10%;
  margin-right:0;

  p {
    margin: 0;

  }

  @media(max-width: 680px){
    margin-bottom: 1%;
    width: 90%;
  }
`;

//FONT
const ABC = styled.p`
font-family: 'ABCGaisyr-Book';
font-size: 40px; 
margin-bottom: 0;


@media(max-width:1200px){
  font-size: 35px; 
}


`;


const GtaLight = styled.p`
font-family: 'GTAmericaLight';
font-size: 16px;
margin-top:1%;
margin-bottom:2%;
width:40%;
text-align:center;

@media(max-width: 1200px){
  width:60%;
  backgroud-color:blue;
  font-size: 14px; 
}

@media(max-width: 680px){
  width:70%;
}


`;
const GtaLightRegular = styled.p`
font-family: 'GTAmericaRegular';
font-size: 14px;

@media(max-width: 1200px){
  font-size: 13px; 
}
`;

const GtaLightLightInfo = styled.p`
font-family: 'GTAmericaLight';
font-size: 16px;

@media(max-width: 1200px){
  font-size: 14px; 
}
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
