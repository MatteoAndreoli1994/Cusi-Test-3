import React, { useState } from 'react';
import styled from 'styled-components';
import add from '../../assets/add.png';
import close from '../../assets/meno.png';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from "../global/Footer"
import { useTranslation } from 'react-i18next';

const Container = styled.div`
  display: flex;
  margin-top: 120px;
  width: 100%;
  height:auto;
  min-height: 100vh;
  justify-content: center;

`;

const CustomerServiceDiv = styled.div`
  display: flex;
  width: 85%;

  @media(max-width: 680px){
    display:none;
  }
`;

const Menu = styled.div`
  width: 35%;

`;

const MenuItem = styled.div`
margin-right: auto;
margin-bottom: 5%;

display: flex; /* Aggiunto display: flex; qui */

    &.selected {

 li {
    list-style: none;
    margin-right: 100px;
    position: relative;
    cursor: pointer;
    text-decoration: none; /* Rimuovi il sottolineato predefinito */

    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -2px;
      width: ${({ isSelected }) => (isSelected ? '100%' : '0')}; /* Mostra solo se è selezionato */
      height: 1px;
      background-color: black;
      animation: ${({ isSelected }) => (isSelected ? 'none' : 'lineAnimation 0.3s linear forwards')};
    }

    &:hover:after {
      width: ${({ isSelected }) => (isSelected ? '0' : '100%')}; /* Mostra solo se non è selezionato */
      background-color: ${({ isSelected }) => (isSelected ? 'red' : 'black')}; /* Cambia colore in base allo stato */
      animation: ${({ isSelected }) => (isSelected ? 'none' : 'lineAnimation 0.3s linear forwards')};
    }

    &.selected {
      /* Testo sottolineato con bordo di 1px sotto il testo */
      border-bottom: 1px solid black;
      padding-bottom: 1px; /* Sposta il bordo inferiore di 1 pixel più in basso */
      &:after {
        width: 0; /* Rimuovi la linea sotto il testo selezionato */
      }
    }
  }

    

    }



li {
  list-style: none; 
  margin-right: 100px;
  position: relative;
  cursor: pointer;

  &:hover {
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 1px;
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

`;

const Content = styled.div`
  flex: 1;
  padding: 20px;

  margin-top:0%;
`;

const Mobile = styled.div`
width:100%;
height: auto;

display:flex;
align-items:center;
display: none;
flex-direction:column;

@media(max-width:680px){
  display:flex;
  width:95%;
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

const GtaRegular = styled.p`
font-family: 'GTAmericaRegular';
font-size: 24px;



`;
const GtaLight = styled.p`
font-family: 'GTAmericaLight';
font-size: 16px;
margin-top:1%;
margin-bottom:2%;
width:40%;
text-align:center;

`;
const GtaRegular16 = styled.p`
font-family: 'GTAmericaRegular';
font-size: 16px;
margin-top:65px;
margin-bottom:3%;


@media(max-width: 680px){
margin-top:5px;
}

`;
const GtaRegular16Category = styled.p`
font-family: 'GTAmericaRegular';
font-size: 16px;
margin-top:2%;
margin-bottom:2%;

`;


const GtaLightLightInfo = styled.p`
font-family: 'GTAmericaRegular';
font-size: 14px;
margin-bottom:0;
margin-top:0;

`;
const GtaLightLightInfoLi = styled.li`
font-family: 'GTAmericaRegular';
font-size: 13px;
margin-bottom:0;
margin-top:0;
`;

const AccordionItem = styled.div`

width: 100%;
  padding: 4%;
  font-family: 'GTAmericaRegular';
  font-size: 16px;
  padding-left: 0;
  cursor: pointer;

`;

const AccordionContent = styled.div`
  max-height: ${({ isOpen }) => (isOpen ? '100%' : '0')}; /* Imposta una max-height elevata quando è aperto */
  overflow: hidden;
  transition: max-height 1s ease; /* Aggiunta transizione per un effetto fluido */
  border-bottom: 1px solid black;

`;

const FaqDiv = styled.div`
  width: 90%;
  margin-top:6%;
`;
const FilterSign = styled.span`


  display:flex;

  align-items:center;
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
const GrayClickableLink = styled.a`
  color: gray;
  cursor: pointer;
`;


const Legal = () => {



const location = useLocation();
  const [selectedItem, setSelectedItem] = useState('Terms & Conditions');

  useEffect(() => {
    // Estrarre il parametro 'item' dalla query string dell'URL
    const params = new URLSearchParams(location.search);
    const selectedItemFromUrl = params.get('item');

    // Se 'item' è presente e ha il valore 'privacy_policy', imposta selectedItem a 'Privacy Policy'
    if (selectedItemFromUrl === 'privacy_policy') {
      setSelectedItem('Privacy Policy');
      setAccordionState((prevState) => ({
        ...prevState,
        'Privacy Policy': true, // Apri l'accordion di Privacy Policy
      }));
    }
  }, [location.search]);


  const handleMenuItemClick = (item) => {
    setSelectedItem(item);

    
  };

  const getContent = () => {
    switch (selectedItem) {


        case 'Terms & Conditions':
          return (
            <>
      
            {t('Terms & Conditions.sections', { returnObjects: true }).map((section, index) => (
              <div key={index}>
                <GtaRegular16>{section.title}</GtaRegular16>
                <GtaLightLightInfo>
                  <div dangerouslySetInnerHTML={{ __html: section.content.replace(/\n/g, '<br>') }} />
                </GtaLightLightInfo>
              </div>
            ))}
          </>
          );


        case 'Conditions Of Sales':
          return (
          <>
          </>
          );


        case 'Privacy Policy':
          return (

            <>
            <div>
              <GtaRegular16>{t('Privacy Policy.section1.title')}</GtaRegular16>
              <GtaLightLightInfo
                dangerouslySetInnerHTML={{ __html: t('Privacy Policy.section1.content') }}
              />
            </div>
      
            <div>
              <GtaRegular16>{t('Privacy Policy.section2.title')}</GtaRegular16>
              <GtaLightLightInfo
                dangerouslySetInnerHTML={{ __html: t('Privacy Policy.section2.content') }}
              />
            </div>
      
            <div>
              <GtaRegular16>{t('Privacy Policy.section3.title')}</GtaRegular16>
              <GtaLightLightInfo
                dangerouslySetInnerHTML={{ __html: t('Privacy Policy.section3.content') }}
              />
            </div>
      
            <div>
              <GtaRegular16>{t('Privacy Policy.section4.title')}</GtaRegular16>
              <GtaLightLightInfo
                dangerouslySetInnerHTML={{ __html: t('Privacy Policy.section4.content') }}
              />
            </div>
      
            <div>
              <GtaRegular16>{t('Privacy Policy.section5.title')}</GtaRegular16>
              <GtaLightLightInfo
                dangerouslySetInnerHTML={{ __html: t('Privacy Policy.section5.content') }}
              />
            </div>
      
            <div>
              <GtaRegular16>{t('Privacy Policy.section6.title')}</GtaRegular16>
              <GtaLightLightInfo
                dangerouslySetInnerHTML={{ __html: t('Privacy Policy.section6.content') }}
              />
            </div>
      
            <div>
              <GtaRegular16>{t('Privacy Policy.section7.title')}</GtaRegular16>
              <GtaLightLightInfo
                dangerouslySetInnerHTML={{ __html: t('Privacy Policy.section7.content') }}
              />
            </div>
      
            <div>
              <GtaRegular16>{t('Privacy Policy.section8.title')}</GtaRegular16>
              <GtaLightLightInfo
                dangerouslySetInnerHTML={{ __html: t('Privacy Policy.section8.content') }}
              />
            </div>
      
            <div>
              <GtaRegular16>{t('Privacy Policy.section9.title')}</GtaRegular16>
              <GtaLightLightInfo
                dangerouslySetInnerHTML={{ __html: t('Privacy Policy.section9.content') }}
              />
            </div>
      
            <div>
              <GtaRegular16>{t('Privacy Policy.section10.title')}</GtaRegular16>
              <GtaLightLightInfo
                dangerouslySetInnerHTML={{ __html: t('Privacy Policy.section10.content') }}
              />
            </div>
      
            <div>
              <GtaRegular16>{t('Privacy Policy.section11.title')}</GtaRegular16>
              <GtaLightLightInfo
                dangerouslySetInnerHTML={{ __html: t('Privacy Policy.section11.content') }}
              />
            </div>
          </>



          );

      // Aggiungi altri casi per le voci rimanenti
      default:
        return null;
    }
  };

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
  
  
  
  const { t } = useTranslation();
  return (
    <>
    <Container>
      <CustomerServiceDiv>
        <Menu>
          <GtaRegular>Legal</GtaRegular>

          <MenuItem
            className={selectedItem === 'Terms & Conditions' ? 'selected' : ''}
            onClick={() => handleMenuItemClick('Terms & Conditions')}
          >
            <li> <GtaRegular16Category> TERMS & CONDITIONS </GtaRegular16Category></li>

          </MenuItem>

          <MenuItem
            className={selectedItem === 'Conditions Of Sales' ? 'selected' : ''}
            onClick={() => handleMenuItemClick('Conditions Of Sales')}
          >
            <li><GtaRegular16Category> CONDITIONS OF SALES </GtaRegular16Category></li>
          </MenuItem>

          <MenuItem
            className={selectedItem === 'Privacy Policy' ? 'selected' : ''}
            onClick={() => handleMenuItemClick('Privacy Policy')}
          >
            <li><GtaRegular16Category>PRIVACY POLICY</GtaRegular16Category></li>
          </MenuItem>


        </Menu>
        <Content>{getContent()}</Content>
      </CustomerServiceDiv>







      <Mobile>
        <GtaRegular> {t('Terms & Conditions.notelegali')}</GtaRegular>

        <FaqDiv>
{/* prima Linea nera */}
        <AccordionContent></AccordionContent>

{/* Prima Domanda */}
          <FilterButton onClick={() => toggleAccordion('Terms & Conditions')}>
            <AccordionItem >
            {t('Terms & Conditions.title')}

            </AccordionItem>
            <FilterSign>
                {accordionState['Terms & Conditions'] ? (  // Se isOpen è true (l'accordion è aperto)
                  <img src={close} alt="Close" style={{ width: '20px', height: '20px' }} />
                ) : (
                  <img src={add} alt="Open" style={{ width: '20px', height: '20px' }} />
                )}
            </FilterSign>
          </FilterButton>


          <AccordionContent isOpen={accordionState['Terms & Conditions']}>
          <>
      
      {t('Terms & Conditions.sections', { returnObjects: true }).map((section, index) => (
        <div key={index}>
          <GtaRegular16>{section.title}</GtaRegular16>
          <GtaLightLightInfo>
            <div dangerouslySetInnerHTML={{ __html: section.content.replace(/\n/g, '<br>') }} />
          </GtaLightLightInfo>
        </div>
      ))}
          </>


          </AccordionContent>
{/* Fine Prima Domanda */}

          <FilterButton onClick={() => toggleAccordion('Conditions Of Sales')}>
            <AccordionItem >
            {t('Conditions Of Sales.title')}
            </AccordionItem>
            <FilterSign>
                {accordionState['Conditions Of Sales'] ? (  // Se isOpen è true (l'accordion è aperto)
                  <img src={close} alt="Close" style={{ width: '20px', height: '20px' }} />
                ) : (
                  <img src={add} alt="Open" style={{ width: '20px', height: '20px' }} />
                )}
            </FilterSign>
          </FilterButton>


          <AccordionContent isOpen={accordionState['Conditions Of Sales']}>

          <>
          </>

          </AccordionContent>



<FilterButton onClick={() => toggleAccordion('Privacy Policy')}>
            <AccordionItem >
            Privacy Policy
            </AccordionItem>
            <FilterSign>
                {accordionState['Privacy Policy'] ? (  // Se isOpen è true (l'accordion è aperto)
                  <img src={close} alt="Close" style={{ width: '20px', height: '20px' }} />
                ) : (
                  <img src={add} alt="Open" style={{ width: '20px', height: '20px' }} />
                )}
            </FilterSign>
          </FilterButton>


          <AccordionContent isOpen={accordionState['Privacy Policy']}>
            <>
            <div>
              <GtaRegular16>{t('Privacy Policy.section1.title')}</GtaRegular16>
              <GtaLightLightInfo
                dangerouslySetInnerHTML={{ __html: t('Privacy Policy.section1.content') }}
              />
            </div>
      
            <div>
              <GtaRegular16>{t('Privacy Policy.section2.title')}</GtaRegular16>
              <GtaLightLightInfo
                dangerouslySetInnerHTML={{ __html: t('Privacy Policy.section2.content') }}
              />
            </div>
      
            <div>
              <GtaRegular16>{t('Privacy Policy.section3.title')}</GtaRegular16>
              <GtaLightLightInfo
                dangerouslySetInnerHTML={{ __html: t('Privacy Policy.section3.content') }}
              />
            </div>
      
            <div>
              <GtaRegular16>{t('Privacy Policy.section4.title')}</GtaRegular16>
              <GtaLightLightInfo
                dangerouslySetInnerHTML={{ __html: t('Privacy Policy.section4.content') }}
              />
            </div>
      
            <div>
              <GtaRegular16>{t('Privacy Policy.section5.title')}</GtaRegular16>
              <GtaLightLightInfo
                dangerouslySetInnerHTML={{ __html: t('Privacy Policy.section5.content') }}
              />
            </div>
      
            <div>
              <GtaRegular16>{t('Privacy Policy.section6.title')}</GtaRegular16>
              <GtaLightLightInfo
                dangerouslySetInnerHTML={{ __html: t('Privacy Policy.section6.content') }}
              />
            </div>
      
            <div>
              <GtaRegular16>{t('Privacy Policy.section7.title')}</GtaRegular16>
              <GtaLightLightInfo
                dangerouslySetInnerHTML={{ __html: t('Privacy Policy.section7.content') }}
              />
            </div>
      
            <div>
              <GtaRegular16>{t('Privacy Policy.section8.title')}</GtaRegular16>
              <GtaLightLightInfo
                dangerouslySetInnerHTML={{ __html: t('Privacy Policy.section8.content') }}
              />
            </div>
      
            <div>
              <GtaRegular16>{t('Privacy Policy.section9.title')}</GtaRegular16>
              <GtaLightLightInfo
                dangerouslySetInnerHTML={{ __html: t('Privacy Policy.section9.content') }}
              />
            </div>
      
            <div>
              <GtaRegular16>{t('Privacy Policy.section10.title')}</GtaRegular16>
              <GtaLightLightInfo
                dangerouslySetInnerHTML={{ __html: t('Privacy Policy.section10.content') }}
              />
            </div>
      
            <div>
              <GtaRegular16>{t('Privacy Policy.section11.title')}</GtaRegular16>
              <GtaLightLightInfo
                dangerouslySetInnerHTML={{ __html: t('Privacy Policy.section11.content') }}
              />
            </div>
          </>
          </AccordionContent>

{/* Fine Prima Domanda */}






         

      
        </FaqDiv>
      </Mobile>

      


    </Container>
        <Footer/>
        </>
  );
};

export default Legal;
