import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
// Importa il componente Link da react-router-dom
import { Link } from 'react-router-dom'; // Se usi React Router
import Newsletter from "@strapi-newsletter/react";
import { subscribeUser } from "@strapi-newsletter/react";
import SortImage from "../../assets/down.png";
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedLanguage } from '../../state/languageSlice';
import { useTranslation } from 'react-i18next';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height:auto;
    color: black;
    margin-top: 4%;



    overflow: hidden;





`;

const RowContainer = styled.div`
  display: flex;
  width: 95%;

  height:auto;

  @media(max-width:900px){
    width: 91%;
  }


  @media(max-width:680px){
    display:flex;

    width:94%;
  }

`;

const Column = styled.div`
  flex: 1;
  padding: 20px;
  text-align: left;

  height:auto;

  flex-direction:column;

  min-width:15%;
`;
const ColumnSocial = styled.div`
  flex: 1;
  padding: 20px;
  text-align: left;

  height:auto;

  flex-direction:column;

  min-width:15%;

  @media(max-width:900px){
    display:none;
  }

`;
const ColumnMobile = styled.div`
  flex: 1;
  padding: 20px;
  text-align: left;

  height:auto;

  flex-direction:column;

  min-width:15%;
  display:none;

  @media(max-width:900px){
    display:block;

  }
`;
const RawMobile = styled.div`
  display:flex;
`;

const ColumnLogo = styled.div`
  flex: 1;
  padding: 20px;
  text-align: left;

  height:auto;

  flex-direction:column;

  min-width:15%;

  @media(max-width:900px){
    display:none;
  }

`;

const LastColumn = styled.div`
  flex: 2;
  padding: 20px;
  text-align: left;


    @media(max-width:900px){
      display:none;
    }

`;
const LastColumnMobile = styled.div`
  flex: 2;
  padding: 20px;
  text-align: left;
  display:none;


  @media(max-width:900px){
    display:flex;
    flex-direction:column;
    width:91%;
  }

  @media(max-width:680px){
    display:flex;
    flex-direction:column;
    width:94%;
  }


`;

const CopyrightContainer = styled.div`

  color: black;
  justify-content: space-between;
  display: flex;
  width: 95%;
  align-items: center;
  margin-top: auto; /* Imposta il margin-top a auto per spingere il div in basso */
  color:black;

  @media(max-width:900px){
    display:none;

  }

`;
const CopyrightContainerMobile = styled.div`

  display:none;

  width:70%;
  align-items:center;
  
  @media(max-width:900px){
        margin-top:10%;
    display:flex;
    flex-direction: column;
  align-items:center;
    width:80%;
  }
      @media(max-width:680px){

    display:flex;
    flex-direction: column;
  align-items:center;
    width:83%;

  }
`;
const DivLingua = styled.div`

  color: black;
  display: flex;
  justify-content: space-between;
  width: 40%;
  align-items: center;
  padding: 10px;

  margin-right:1.5%;

  @media(max-width:900px){
    width: 50%;

  }
  @media(max-width:900px){
    width: 100%;
    background-color:blue;
    padding: 0px;
    align-items: flex-start;


  }
`;

const DivLinguaMobile = styled.div`

  color: black;
  display: flex;
  justify-content: space-between;
  width: 40%;
  align-items: center;
  padding: 10px;

  margin-right:1.5%;

  @media(max-width:900px){
    width: 50%;

  }
  @media(max-width:900px){
    width: 100%;

    padding: 0px;
    align-items: flex-start;




  }
`;
const DivLinguaMobile2 = styled.div`

  color: black;
  display: flex;
  justify-content: space-between;
  width: 40%;
  align-items: center;

  margin-bottom:5%;

  margin-right:1.5%;


  @media(max-width:900px){
    width: 100%;

  }
  @media(max-width:900px){
    width: 100%;







  }

  @media(max-width:390px){

  }
`;

const Logo = styled.div`
display: flex; /* Aggiunto display: flex; qui */
position:absolute;
margin-top:1%;



&:hover {
    cursor: pointer;
  }

`;

const ImmagineLogo = styled.img`
width: 60%;


`;

const SubscribeContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0; /* Rimuovi eventuali margini impostati precedentemente */
  height: 20%;




  
`;

const TextBox = styled.input`
  flex: 1;
  padding: 17px;
  border: 1px solid #000;
  margin: 0; /* Rimuovi eventuali margini impostati precedentemente */
  border-radius: 0;



  @media(max-width: 900px){

    margin-top: 1.5%;
  
  }

  @media(max-width: 680px){
    font-size: 14px;
    margin-top: 1.5%;
  
  }

    @media(max-width: 360px){
    padding: 8px;
    font-size: 12px;


  
  }
  
  
`;

const SubscribeButton = styled.button`
  background-color: black;
  color: white;
  font-family: 'GTAmericaRegular';
  border: 1px solid #000;
  width:40%;
  cursor: pointer;
  font-size: 14px;
  margin: 0; /* Rimuovi eventuali margini impostati precedentemente */

  @media(max-width:1200px){
    font-size: 11px;

  }

  @media(max-width:900px){
    font-size: 12px;
    margin-top:1.5%;

  }

  @media(max-width:680px){
    font-size: 14px;
    margin-top:1.5%;
    
  }

      @media(max-width: 360px){
    padding: 8px;
    font-size: 12px;


  
  }
  
`;

const GtaRegular = styled.p`
font-family: 'GTAmericaRegular';
font-size: 14px;

  @media(max-width:390px){

  font-size: 13px;

  }


  @media(max-width:350px){

  font-size: 11.3px;

  }


`;
const GtaRegularSubscribe = styled.p`
font-family: 'GTAmericaRegular';
font-size: 16px;


    @media(max-width:1200px){
    font-size: 11px;

  }

  @media(max-width:900px){
    font-size: 12px;


  }

  @media(max-width:680px){
    font-size: 14px;

    
  }

      @media(max-width: 360px){

    font-size: 12px;


  
  }


`;
const GtaRegular2 = styled.p`
font-family: 'GTAmericaRegular';
font-size: 16px;
margin:0;
font-size: 14px;

  @media(max-width:390px){

  font-size: 13px;

  }


  @media(max-width:350px){

  font-size: 11.3px;

  }

`;
const GtaRegularCopy = styled.p`
font-family: 'GTAmericaRegular';
font-size: 14px;

@media(max-width: 900px){
  margin:0;
  margin-bottom:15px;
}

@media(max-width:390px){

font-size: 13px;
}

@media(max-width:350px){

font-size: 11.5px;
}


`;


const GtaRegularLegalPol = styled.a`
font-family: 'GTAmericaRegular';
font-size: 14px;
cursor: pointer;



  @media(max-width:390px){

    font-size: 13px;
  }

  @media(max-width:350px){

font-size: 11.5px;
}


`;
const GtaRegularSort = styled.a`
font-family: 'GTAmericaRegular';
font-size: 14px;
cursor: pointer;



  @media(max-width:390px){

    font-size: 13px;
  }

  @media(max-width:350px){

font-size: 11.5px;
}


`;

const GtaLight = styled.p`
font-family: 'GTAmericaLight';
font-size: 14px;

  @media(max-width:390px){

  font-size: 13px;

  }


  @media(max-width:350px){

  font-size: 11.3px;

  }

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
const CustomButton = styled.button`

border: none;
background-color:white;
cursor: pointer;
display:flex;

color: black;
align-items:center;
justify-content:center;

`;
const CustomButton2 = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Allinea gli elementi a sinistra */
  color: black;
  height: 100%;
  padding: 0; /* Rimuove il padding interno */

`;

const SortImage2 = styled.img`
  width: 20px;
  transform: ${({ showOptions }) => (showOptions ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease;
  margin-left:10%;


  @media(max-width: 900px){
  width: 17px;

  }

    @media(max-width: 450px){
  width: 15px;

  }
`;
const Option = styled.div`
position: absolute;
bottom:15px;
margin-left:13%;
  cursor: pointer;

  &:hover {

  }


@media(max-width: 900px){
bottom:10px;

margin-left:2.8%;
}
`;
const FilterOptionsBox = styled.div`
  position: relative;
 bottom:5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  display: ${({ show }) => (show ? 'block' : 'none')};
`;


const handleUserSubscribe = async (email) => {
  try {
    await subscribeUser(email, 'https://cusi-strapi-3690cb0bf021.herokuapp.com');
    alert('Successfully subscribed!');
  } catch (error) {
    console.error('Failed to subscribe:', error);
    alert('Failed to subscribe. Please try again later.');
  }
};



function Footer() {

  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;

    if (!email) {
      alert('Please enter your email.');
      return;
    }

    try {
      await handleUserSubscribe(email);
      setEmail(''); // Pulisce il campo email dopo la sottoscrizione
    } catch (error) {
      console.error('Error subscribing:', error);
      alert('Failed to subscribe. Please try again later.');
    }
  };

  
  
  //Privacy Policy
  useEffect(() => {
    // Funzione per aprire il popup di consenso
    const openConsentPopup = () => {
      const overlay = document.querySelector('.cky-overlay.cky-hide');
      const popup = document.querySelector('.cky-modal.cky-sidebar-left');
      const revisitButton = document.querySelector('.cky-btn-revisit-wrapper.cky-revisit-bottom-left');

      if (overlay && popup && revisitButton) {
        overlay.classList.remove('cky-hide');
  
        popup.classList.add('cky-modal-open');
        revisitButton.classList.add('cky-revisit-hide');
      } else {
        console.error('Consent popup elements not found');
      }
    };

    // Aggiungi l'event listener alla voce Privacy Policy
    const privacyPolicyLink = document.getElementById('privacyPolicyLink');
    if (privacyPolicyLink) {
      privacyPolicyLink.addEventListener('click', openConsentPopup);
    }

    // Cleanup function
    return () => {
      if (privacyPolicyLink) {
        privacyPolicyLink.removeEventListener('click', openConsentPopup);
      }
    };


  }, []);

  //Cookie Policy
  useEffect(() => {
    // Funzione per aprire il popup di consenso
    const openConsentPopup = () => {
      const overlay = document.querySelector('.cky-overlay.cky-hide');
      const popup = document.querySelector('.cky-modal.cky-sidebar-left');
      const revisitButton = document.querySelector('.cky-btn-revisit-wrapper.cky-revisit-bottom-left');

      if (overlay && popup && revisitButton) {
        overlay.classList.remove('cky-hide');
  
        popup.classList.add('cky-modal-open');
        revisitButton.classList.add('cky-revisit-hide');
      } else {
        console.error('Consent popup elements not found');
      }
    };

    // Aggiungi l'event listener alla voce Privacy Policy
    const cookiePolicyLink = document.getElementById('cookiePolicyLink');
    if (cookiePolicyLink) {
      cookiePolicyLink.addEventListener('click', openConsentPopup);
    }

    // Cleanup function
    return () => {
      if (cookiePolicyLink) {
        cookiePolicyLink.removeEventListener('click', openConsentPopup);
      }
    };

    
  }, []);

  //Privacy Policy Mobile
  useEffect(() => {
    // Funzione per aprire il popup di consenso
    const openConsentPopup = () => {
      const overlay = document.querySelector('.cky-overlay.cky-hide');
      const popup = document.querySelector('.cky-modal.cky-sidebar-left');
      const revisitButton = document.querySelector('.cky-btn-revisit-wrapper.cky-revisit-bottom-left');

      if (overlay && popup && revisitButton) {
        overlay.classList.remove('cky-hide');
  
        popup.classList.add('cky-modal-open');
        revisitButton.classList.add('cky-revisit-hide');
      } else {
        console.error('Consent popup elements not found');
      }
    };

    // Aggiungi l'event listener alla voce Privacy Policy
    const privacyPolicyLinkMobile = document.getElementById('privacyPolicyLinkMobile');
    if (privacyPolicyLinkMobile) {
      privacyPolicyLinkMobile.addEventListener('click', openConsentPopup);
    }

    // Cleanup function
    return () => {
      if (privacyPolicyLinkMobile) {
        privacyPolicyLinkMobile.removeEventListener('click', openConsentPopup);
      }
    };


  }, []);

  //Cookie Policy Mobile
  useEffect(() => {
    // Funzione per aprire il popup di consenso
    const openConsentPopup = () => {
      const overlay = document.querySelector('.cky-overlay.cky-hide');
      const popup = document.querySelector('.cky-modal.cky-sidebar-left');
      const revisitButton = document.querySelector('.cky-btn-revisit-wrapper.cky-revisit-bottom-left');

      if (overlay && popup && revisitButton) {
        overlay.classList.remove('cky-hide');
  
        popup.classList.add('cky-modal-open');
        revisitButton.classList.add('cky-revisit-hide');
      } else {
        console.error('Consent popup elements not found');
      }
    };

    // Aggiungi l'event listener alla voce Privacy Policy
    const cookiePolicyLinkMobile = document.getElementById('cookiePolicyLinkMobile');
    if (cookiePolicyLinkMobile) {
      cookiePolicyLinkMobile.addEventListener('click', openConsentPopup);
    }

    // Cleanup function
    return () => {
      if (cookiePolicyLinkMobile) {
        cookiePolicyLinkMobile.removeEventListener('click', openConsentPopup);
      }
    };

    
  }, []);



    const navigate = useNavigate();

    const [selectedLanguage, setSelectedLanguage] = useState("IT");

    const changeLanguage = (language) => {
      setSelectedLanguage(language);
      navigate(`/${language}`); // Naviga alla home page con il parametro della lingua
    };

    const [showFilterOptions, setShowFilterOptions] = useState(false);
    const handleFilterClick2 = () => {
      setShowFilterOptions(!showFilterOptions);
    };
    const filterOptionsRef = useRef(null);

    const handleLanguageChange = (language) => {
      setSelectedLanguage(language);
      setShowFilterOptions(false);
      
    };
  
    const { t } = useTranslation();
  


    return (
      <Container>
        <LastColumnMobile>
          <GtaRegular>{t('footer.signUpToOurNewsletter')}</GtaRegular>
          <GtaLight>{t('footer.beTheFirstToHear')}</GtaLight>
          <form onSubmit={handleSubmit}>
            <SubscribeContainer>
              <TextBox
                type="email"
                name="email"
                placeholder={t('footer.yourEmail')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <SubscribeButton type="submit"><GtaRegularSubscribe>{t('footer.subscribe')}</GtaRegularSubscribe></SubscribeButton>
            </SubscribeContainer>
          </form>
        </LastColumnMobile>
    
        <RowContainer>
          <ColumnLogo>
            <Logo
              onClick={() => navigate("/")}
              sx={{ "&:hover": { cursor: "pointer" } }}
              color={shades.secondary[500]}
            >
              <ImmagineLogo src={logo} />
            </Logo>
          </ColumnLogo>
    
          <Column>
            <GtaRegular>{t('footer.customerService')}</GtaRegular>
            <GtaRegular>
              <Collegamento onClick={() => navigate("/customerservice?category=Our Services")}>
                {t('footer.ourServices')}
              </Collegamento>
            </GtaRegular>
            <GtaRegular>
              <Collegamento onClick={() => navigate("/customerservice?category=Product Care")}>
                {t('footer.productCare')}
              </Collegamento>
            </GtaRegular>
            <GtaRegular>
              <Collegamento onClick={() => navigate("/customerservice?category=Shipping")}>
                {t('footer.shippingReturns')}
              </Collegamento>
            </GtaRegular>
            <GtaRegular>
              <Collegamento onClick={() => navigate("/customerservice?category=Size Chart")}>
                {t('footer.sizeChart')}
              </Collegamento>
            </GtaRegular>

          </Column>
    
          <Column>
            <GtaRegular>{t('footer.contact')}</GtaRegular>
            <GtaRegular>
              <Collegamento onClick={() => navigate("/contactus")}>
                {t('footer.contact2')}
              </Collegamento>
            </GtaRegular>
            <GtaRegular>
              <Collegamento href="/boutiques#Book">
                {t('footer.bookAnAppointment')}
              </Collegamento>
            </GtaRegular>
            <GtaRegular>
              <Collegamento href="/boutiques">
                {t('footer.boutiques')}
              </Collegamento>
            </GtaRegular>
          </Column>
    
          <ColumnSocial>
            <GtaRegular>{t('footer.social')}</GtaRegular>
            <GtaRegular>
              <Collegamento href="https://www.instagram.com/cusimontenapoleone/">
                {t('footer.instagram')}
              </Collegamento>
            </GtaRegular>
          </ColumnSocial>
    
          <LastColumn>
            <GtaRegular>{t('footer.signUpToOurNewsletter')}</GtaRegular>
            <GtaRegular>{t('footer.beTheFirstToHear')}</GtaRegular>
            <form onSubmit={handleSubmit}>
              <SubscribeContainer>
                <TextBox
                  type="email"
                  name="email"
                  placeholder={t('footer.yourEmail')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <SubscribeButton type="submit">{t('footer.subscribe')}</SubscribeButton>
              </SubscribeContainer>
            </form>
          </LastColumn>
        </RowContainer>
    
        <RowContainer>
          <ColumnMobile>
            <GtaRegular>{t('footer.social')}</GtaRegular>
            <GtaRegular>
              <Collegamento href="https://www.instagram.com/cusimontenapoleone/">
                {t('footer.instagram')}
              </Collegamento>
            </GtaRegular>
            <GtaRegular>{t('footer.facebook')}</GtaRegular>
          </ColumnMobile>
        </RowContainer>
    
        <CopyrightContainer>
          <GtaRegular>{t('footer.copyright')}</GtaRegular>
          <DivLingua>
            <Collegamento onClick={() => navigate("/legal?item=privacy_policy")} style={{ textDecoration: 'none', color: 'black' }}>
              <GtaRegular>{t('footer.privacyPolicy')}</GtaRegular>
            </Collegamento>
            <Collegamento id="cookiePolicyLink" style={{ textDecoration: 'none', color: 'black' }}>
              <GtaRegular>{t('footer.cookiePolicy')}</GtaRegular>
            </Collegamento>
            <GtaRegularLegalPol onClick={() => navigate("/legal")}>{t('footer.legal')}</GtaRegularLegalPol>
            <div>
              <FilterOptionsBox ref={filterOptionsRef} show={showFilterOptions}>
                {selectedLanguage !== "EN" && <Option onClick={() => handleLanguageChange('EN')}><GtaRegular2>EN</GtaRegular2></Option>}
                {selectedLanguage !== "IT" && <Option onClick={() => handleLanguageChange('IT')}><GtaRegular2>IT</GtaRegular2></Option>}
              </FilterOptionsBox>
              <CustomButton onClick={handleFilterClick2}>
                <GtaRegular2>{selectedLanguage}</GtaRegular2>
                <SortImage2 src={SortImage} alt="Filter" showOptions={showFilterOptions} />
              </CustomButton>
            </div>
          </DivLingua>
        </CopyrightContainer>
    
        <CopyrightContainerMobile>
          <DivLinguaMobile2>
            <GtaRegularLegalPol onClick={() => navigate("/legal")}>{t('footer.legal')}</GtaRegularLegalPol>
            <GtaRegularLegalPol onClick={() => navigate("/legal?item=privacy_policy")} style={{ textDecoration: 'none', color: 'black' }}>{t('footer.privacyPolicy')}</GtaRegularLegalPol>
            <GtaRegularLegalPol id="cookiePolicyLinkMobile" style={{ textDecoration: 'none', color: 'black' }}>{t('footer.cookiePolicy')}</GtaRegularLegalPol>
            <div>
              <FilterOptionsBox ref={filterOptionsRef} show={showFilterOptions}>
                {selectedLanguage !== "EN" && <Option onClick={() => handleLanguageChange('EN')}><GtaRegularLegalPol>EN</GtaRegularLegalPol></Option>}
                {selectedLanguage !== "IT" && <Option onClick={() => handleLanguageChange('IT')}><GtaRegularLegalPol>IT</GtaRegularLegalPol></Option>}
              </FilterOptionsBox>
              <CustomButton2 onClick={handleFilterClick2}>
                <GtaRegularLegalPol>{selectedLanguage}</GtaRegularLegalPol>
                <SortImage2 src={SortImage} alt="Filter" showOptions={showFilterOptions} />
              </CustomButton2>
            </div>
          </DivLinguaMobile2>
          <GtaRegularCopy>{t('footer.copyright2')}</GtaRegularCopy>
        </CopyrightContainerMobile>
      </Container>
    );
}

export default Footer;
