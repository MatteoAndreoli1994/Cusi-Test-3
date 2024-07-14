import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import add from '../../assets/add.png';
import close from '../../assets/meno.png';
import { useNavigate } from "react-router-dom";
import Footer from "../global/Footer"
import { useLocation } from 'react-router-dom';
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


const CustomerService = () => {
  const [selectedItem, setSelectedItem] = useState('Our Services');
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category');

    // Funzione per leggere i parametri della query string
    const getQueryParams = (search) => {
      return new URLSearchParams(search);
    };
  
    useEffect(() => {
      const params = getQueryParams(location.search);
      const category = params.get('category');
      
      const sections = {
        'Our Services': 'OurServices',
        'Product Care': 'ProductCare',
        'Shipping': 'Shipping',
        'Size Chart': 'Size',
        'Garanzia': 'Garanzia',
        'Privacy Policy': 'Privacy',
        'FAQ': 'FAQ'
      };
      
      if (category && sections[category]) {
        setAccordionState(prevState => ({
          ...prevState,
          [sections[category]]: true,
        }));
      }
    }, [location.search]);
  

  useEffect(() => {
    if (category) {
      setSelectedItem(category);
      console.log(category);
      console.log(selectedItem);
    }
  }, [category]);

  const navigate = useNavigate();

  const handleMenuItemClick = (item) => {
    setSelectedItem(item);
    navigate(`/customerservice?category=${item}`);
  };

  const getContent = () => {
    switch (selectedItem) {
      case 'Our Services':
        return (
          <>
            <GtaRegular16>{t('customerservice.ourservices')}</GtaRegular16>
            {t('customerservice.ourservices_description', { returnObjects: true }).map((paragraph, index) => (
              <GtaLightLightInfo key={index}>{paragraph}</GtaLightLightInfo>
            ))}
          </>
        );
      case 'Product Care':
        return (
          <>
            <GtaRegular16>{t('customerservice.productcare')}</GtaRegular16>
            <GtaLightLightInfo>{t('customerservice.productcare_description')}</GtaLightLightInfo>
            <ul>
              {t('customerservice.productcare_guide', { returnObjects: true }).map((guide, index) => (
                <GtaLightLightInfoLi key={index}>{guide}</GtaLightLightInfoLi>
              ))}
            </ul>
            <GtaLightLightInfo>{t('customerservice.productcare_description2')}</GtaLightLightInfo>
          </>
        );
      case 'Shipping':
        return (
          <>
            <div>
              <GtaRegular16>{t('customerservice.shipping')}</GtaRegular16>
              {t('customerservice.shipping_description', { returnObjects: true }).map((paragraph, index) => (
                <GtaLightLightInfo key={index}>{paragraph}</GtaLightLightInfo>
              ))}
            </div>
            <div>
              <GtaRegular16>{t('customerservice.returns')}</GtaRegular16>
              <GtaLightLightInfo>{t('customerservice.returns_description')}</GtaLightLightInfo>
            </div>
          </>
        );
      case 'Size Chart':
        return (
          <>
            <GtaRegular16>{t('customerservice.sizechart')}</GtaRegular16>
            {t('customerservice.sizechart_description', { returnObjects: true }).map((paragraph, index) => (
              <GtaLightLightInfo key={index}>{paragraph}</GtaLightLightInfo>
            ))}
          </>
        );
      case 'Garanzia':
        return (
          <>
            <GtaRegular16>{t('customerservice.garanzia')}</GtaRegular16>
            {t('customerservice.garanzia_description', { returnObjects: true }).map((paragraph, index) => (
              <GtaLightLightInfo key={index}>{paragraph}</GtaLightLightInfo>
            ))}
          </>
        );
      case 'FAQ':
        return (
          <>
            <GtaRegular16>FAQ</GtaRegular16>
            {t('customerservice.faq_description', { returnObjects: true }).map((paragraph, index) => (
              <GtaLightLightInfo key={index}>{paragraph}</GtaLightLightInfo>
            ))}
          </>
        );
      case 'Contact':
        return (
          <>
            <GtaRegular16>{t('customerservice.contact')}</GtaRegular16>
            {t('customerservice.contact_description', { returnObjects: true }).map((paragraph, index) => (
              <GtaLightLightInfo key={index}>
                {index === 0 ? (
                  <>
                    Our customer service team is <GrayClickableLink onClick={() => navigate("/contactus")}>here</GrayClickableLink> to assist you. If you have any questions, concerns, or need personalized assistance, please don't hesitate to contact us.
                  </>
                ) : (
                  paragraph
                )}
              </GtaLightLightInfo>
            ))}
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
          <GtaRegular>{t('customerservice.customerservice')}</GtaRegular>
          <MenuItem
            className={selectedItem === 'Our Services' ? 'selected' : ''}
            onClick={() => handleMenuItemClick('Our Services')}
          >
           <li><GtaRegular16Category>{t('customerservice.ourservices')}</GtaRegular16Category></li> 
          </MenuItem>
          <MenuItem
            className={selectedItem === 'Product Care' ? 'selected' : ''}
            onClick={() => handleMenuItemClick('Product Care')}
          >
            <li><GtaRegular16Category> {t('customerservice.productcare')} </GtaRegular16Category></li>
          </MenuItem>
          <MenuItem
            className={selectedItem === 'Shipping' ? 'selected' : ''}
            onClick={() => handleMenuItemClick('Shipping')}
          >
            <li> <GtaRegular16Category> {t('customerservice.shipping&returns')}</GtaRegular16Category></li>
          </MenuItem>
          <MenuItem
            className={selectedItem === 'Size Chart' ? 'selected' : ''}
            onClick={() => handleMenuItemClick('Size Chart')}
          >
            <li> <GtaRegular16Category> {t('customerservice.sizechart')} </GtaRegular16Category></li>
          </MenuItem>

          <MenuItem
            className={selectedItem === 'Contact' ? 'selected' : ''}
            onClick={() => handleMenuItemClick('Contact')}
          >
            <li><GtaRegular16Category> {t('customerservice.contact')} </GtaRegular16Category></li>
          </MenuItem>
        </Menu>
        <Content>{getContent()}</Content>
      </CustomerServiceDiv>







      <Mobile>
      <GtaRegular>{t('customerservicemobile.customerservice')}</GtaRegular>

      <FaqDiv>
        {/* Prima Linea nera */}
        <AccordionContent></AccordionContent>

        {/* Prima Domanda */}
        <FilterButton onClick={() => toggleAccordion('OurServices')}>
          <AccordionItem>{t('customerservicemobile.ourservices')}</AccordionItem>
          <FilterSign>
            {accordionState['OurServices'] ? (
              <img src={close} alt="Close" style={{ width: '20px', height: '20px' }} />
            ) : (
              <img src={add} alt="Open" style={{ width: '20px', height: '20px' }} />
            )}
          </FilterSign>
        </FilterButton>

        <AccordionContent isOpen={accordionState['OurServices']}>
          <GtaLightLightInfo>
            {t('customerservicemobile.ourservices_description_1')}
          </GtaLightLightInfo>
          <GtaLightLightInfo>
            {t('customerservicemobile.ourservices_description_2')}
          </GtaLightLightInfo>
          <GtaLightLightInfo><br /></GtaLightLightInfo>
        </AccordionContent>
        {/* Fine Prima Domanda */}

        <FilterButton onClick={() => toggleAccordion('ProductCare')}>
          <AccordionItem>{t('customerservicemobile.productcare')}</AccordionItem>
          <FilterSign>
            {accordionState['ProductCare'] ? (
              <img src={close} alt="Close" style={{ width: '20px', height: '20px' }} />
            ) : (
              <img src={add} alt="Open" style={{ width: '20px', height: '20px' }} />
            )}
          </FilterSign>
        </FilterButton>

        <AccordionContent isOpen={accordionState['ProductCare']}>
          <GtaLightLightInfo>
            {t('customerservicemobile.productcare_description')}
          </GtaLightLightInfo>
          <ul>
            <GtaLightLightInfoLi>{t('customerservicemobile.productcare_guide_1')}</GtaLightLightInfoLi>
            <GtaLightLightInfoLi>{t('customerservicemobile.productcare_guide_2')}</GtaLightLightInfoLi>
            <GtaLightLightInfoLi>{t('customerservicemobile.productcare_guide_3')}</GtaLightLightInfoLi>
            <GtaLightLightInfoLi>{t('customerservicemobile.productcare_guide_4')}</GtaLightLightInfoLi>
          </ul>
          <GtaLightLightInfo>
            {t('customerservicemobile.productcare_description2')}
          </GtaLightLightInfo>
          <GtaLightLightInfo><br /></GtaLightLightInfo>
        </AccordionContent>

        <FilterButton onClick={() => toggleAccordion('Shipping')}>
          <AccordionItem>{t('customerservicemobile.shipping')}</AccordionItem>
          <FilterSign>
            {accordionState['Shipping'] ? (
              <img src={close} alt="Close" style={{ width: '20px', height: '20px' }} />
            ) : (
              <img src={add} alt="Open" style={{ width: '20px', height: '20px' }} />
            )}
          </FilterSign>
        </FilterButton>

        <AccordionContent isOpen={accordionState['Shipping']}>
          <>
            <div>
              <GtaLightLightInfo>
                {t('customerservicemobile.shipping_description_1')}
              </GtaLightLightInfo>
              <GtaLightLightInfo>
                {t('customerservicemobile.shipping_description_2')}
              </GtaLightLightInfo>
              <GtaLightLightInfo>
                {t('customerservicemobile.shipping_description_3')}
              </GtaLightLightInfo>
            </div>
            <div>
              <GtaLightLightInfo><br /></GtaLightLightInfo>
              <GtaLightLightInfo>
                {t('customerservicemobile.returns_description')}
              </GtaLightLightInfo>
            </div>
            <GtaLightLightInfo>
              Explore our curated collection of exquisite jewelry, handcrafted with the finest materials and attention
              to detail. From dazzling diamonds to rare gemstones, each piece tells a story of unparalleled luxury and
              style.
            </GtaLightLightInfo>
            <GtaLightLightInfo><br /></GtaLightLightInfo>
          </>
        </AccordionContent>
        {/* Fine Prima Domanda */}

        <FilterButton onClick={() => toggleAccordion('Size')}>
          <AccordionItem>{t('customerservicemobile.sizechart')}</AccordionItem>
          <FilterSign>
            {accordionState['Size'] ? (
              <img src={close} alt="Close" style={{ width: '20px', height: '20px' }} />
            ) : (
              <img src={add} alt="Open" style={{ width: '20px', height: '20px' }} />
            )}
          </FilterSign>
        </FilterButton>

        <AccordionContent isOpen={accordionState['Size']}>
          <>
            <GtaLightLightInfo>
              {t('customerservicemobile.sizechart_description_1')}
            </GtaLightLightInfo>
            <GtaLightLightInfo>
              {t('customerservicemobile.sizechart_description_2')}
            </GtaLightLightInfo>
            <GtaLightLightInfo><br /></GtaLightLightInfo>
          </>
        </AccordionContent>
        {/* Fine Prima Domanda */}

        <FilterButton onClick={() => toggleAccordion('Contact')}>
          <AccordionItem>{t('customerservicemobile.contact')}</AccordionItem>
          <FilterSign>
            {accordionState['Contact'] ? (
              <img src={close} alt="Close" style={{ width: '20px', height: '20px' }} />
            ) : (
              <img src={add} alt="Open" style={{ width: '20px', height: '20px' }} />
            )}
          </FilterSign>
        </FilterButton>

        <AccordionContent isOpen={accordionState['Contact']}>
          <>
            <GtaLightLightInfo>
              {t('customerservicemobile.contact_description_1')}
              <GrayClickableLink onClick={() => navigate("/contactus")}> here </GrayClickableLink>
              {t('customerservicemobile.contact_description_2')}
            </GtaLightLightInfo>
            <GtaLightLightInfo><br /></GtaLightLightInfo>
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

export default CustomerService;
