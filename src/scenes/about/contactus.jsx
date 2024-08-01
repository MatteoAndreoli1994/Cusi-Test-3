import React from 'react';
import styled from 'styled-components';
import Modella from "../../assets/modella1.avif";
import LazyLoad from 'react-lazyload';
import Footer from "../global/Footer"
import { useTranslation } from 'react-i18next';
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

  @media(max-width: 900px){
  width: 85%;
  flex-direction:column;
  }

`;

const ModelImage = styled.div`
  flex: 1;

  img {
    width: 100%;
    height: auto;
    min-height: 40vh;
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

  @media(max-width: 900px){
    width: 100%;
    gap: 0px;

  }

`;

const DivCustomerService = styled.div`
  display: flex;

  @media(max-width: 900px){
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

  @media(max-width: 900px){
    margin-bottom: 1%;
    width: 90%;
  }
`;

//FONT
const ABC = styled.p`
font-family: 'ABCGaisyr-Book';
font-size: 40px; 
margin-bottom: 0;


@media(max-width: 1200px){
  font-size: 35px; 
  
  }
  @media(max-width: 680px){
    font-size: 30px; 
    
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

@media(max-width: 800px){
  width:60%;
  backgroud-color:blue;
  font-size: 16px; 
}

@media(max-width: 680px){
  width:75%;
  font-size: 14px; 
}


`;
const GtaLightRegular = styled.p`
font-family: 'GTAmericaRegular';
font-size: 14px;

@media(max-width: 1200px){
  font-size: 13px; 
}
@media(max-width: 800px){
  font-size: 14px; 
}
@media(max-width: 680px){
  font-size: 13px; 
}
`;

const GtaLightLightInfo = styled.p`
font-family: 'GTAmericaLight';
font-size: 16px;

@media(max-width: 1200px){
  font-size: 14px; 
}
@media(max-width: 800px){
  font-size: 16px; 
}
@media(max-width: 680px){
  font-size: 14px; 
}
`;
const Collegamento = styled.a`

  text-decoration: none;
  color: gray;
  cursor: pointer;
  &:hover, &:focus, &:active {
    text-decoration: none;
    color: inherit;
  }


`;

const LazyLoadWrapper = styled.div`
opacity: ${({ loaded }) => (loaded ? 1 : 0)};
transition: opacity 3s ease-in-out;
`;

const ContactUs = () => {
  const { t } = useTranslation();
  const [loaded, setLoaded] = React.useState(false);
  const handleContentLoad = () => {
    setLoaded(true);
  };

  return (
    <LazyLoad once>
      <LazyLoadWrapper loaded={loaded} onLoad={handleContentLoad}>
        <Container>
          <ABC>{t('contactus.contactUs')}</ABC>
          <GtaLight>{t('contactus.availability')}</GtaLight>
          <ContactSection>
            <ModelImage>
              <img src={Modella} alt="Model" />
            </ModelImage>
            <InfoSection>
              <ContactInfo>
                <DivCustomerService>
                  <Box><GtaLightRegular>{t('contactus.customerService')}</GtaLightRegular></Box>
                  <Box>
                    <GtaLightLightInfo>{t('contactus.email')}</GtaLightLightInfo>
                    <GtaLightLightInfo>{t('contactus.phone')}</GtaLightLightInfo>
                  </Box>
                </DivCustomerService>
                <DivCustomerService>
                  <Box><GtaLightRegular>{t('contactus.pressInquiries')}</GtaLightRegular></Box>
                  <Box>
                    <GtaLightLightInfo>{t('contactus.email')}</GtaLightLightInfo>
                    <GtaLightLightInfo>{t('contactus.phone')}</GtaLightLightInfo>
                  </Box>
                </DivCustomerService>
                <DivCustomerService>
                  <Box><GtaLightRegular>{t('contactus.bookAppointment')} </GtaLightRegular></Box>
                  <Box>
                    <GtaLightRegular>{t('contactus.cusiMilano')}</GtaLightRegular>
                    <GtaLightLightInfo>{t('contactus.phone')}</GtaLightLightInfo>
                    <GtaLightRegular style={{ marginTop: '15px' }}>{t('contactus.cusiPortofino')}</GtaLightRegular>
                    <GtaLightLightInfo>{t('contactus.phone')}</GtaLightLightInfo>
                    <GtaLightLightInfo style={{ marginTop: '15px' }}>
                      {t('contactus.bookOnline1')} 
                      <Collegamento href="/boutiques#Book">{t('contactus.bookOnline2')} </Collegamento> 
                      {t('contactus.bookOnline3')} 
                    </GtaLightLightInfo>
                  </Box>
                </DivCustomerService>
                <DivCustomerService>
                  <Box><GtaLightRegular>{t('contactus.liveChat')}</GtaLightRegular></Box>
                  <Box><GtaLightLightInfo>{t('contactus.liveChatInfo')}</GtaLightLightInfo></Box>
                </DivCustomerService>
                {/* Aggiungi altre informazioni come indirizzi dei negozi fisici, orari di apertura, ecc. */}
              </ContactInfo>
            </InfoSection>
          </ContactSection>
        </Container>
        <Footer />
      </LazyLoadWrapper>
    </LazyLoad>
  );
};

export default ContactUs;
