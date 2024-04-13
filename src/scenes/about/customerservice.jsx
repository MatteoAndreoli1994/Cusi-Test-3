import React, { useState } from 'react';
import styled from 'styled-components';
import add from '../../assets/add.png';
import close from '../../assets/meno.png';
const Container = styled.div`
  display: flex;
  margin-top: 120px;
  width: 100%;
  height:auto;

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
  width: 40%;

`;

const MenuItem = styled.div`
margin-right: auto;
margin-bottom: 5%;

display: flex; /* Aggiunto display: flex; qui */


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

  margin-top:3%;
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
margin-top:4%;
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
  padding: 3%;
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


const CustomerService = () => {
  const [selectedItem, setSelectedItem] = useState('Our Services');

  const handleMenuItemClick = (item) => {
    setSelectedItem(item);
  };

  const getContent = () => {
    switch (selectedItem) {
      case 'Our Services':
        return (
          <>
            <GtaRegular16>Our Services</GtaRegular16>

            <GtaLightLightInfo>
              Welcome to our luxury jewelry boutique, where elegance meets craftsmanship. Our dedicated team is committed
              to providing you with an exceptional shopping experience, ensuring each piece of jewelry reflects the
              timeless beauty and sophistication you deserve.
            </GtaLightLightInfo>
            <GtaLightLightInfo>
              Explore our curated collection of exquisite jewelry, handcrafted with the finest materials and attention
              to detail. From dazzling diamonds to rare gemstones, each piece tells a story of unparalleled luxury and
              style.
            </GtaLightLightInfo>
          </>
        );
      case 'Product Care':
        return (
          <>
            <GtaRegular16>Product Care</GtaRegular16>
            <GtaLightLightInfo>
              Our luxurious jewelry pieces are crafted with precision and care. To preserve their beauty for generations,
              follow these product care guidelines:
            </GtaLightLightInfo>
            <ul>
              <GtaLightLightInfoLi>Store your jewelry in a soft pouch or box to prevent scratches.</GtaLightLightInfoLi>
              <GtaLightLightInfoLi>Avoid exposing your jewelry to chemicals, perfumes, and cosmetics.</GtaLightLightInfoLi>
              <GtaLightLightInfoLi>Clean your jewelry gently with a soft, lint-free cloth.</GtaLightLightInfoLi>
              <GtaLightLightInfoLi>For specific care instructions, refer to the care guide provided with each item.</GtaLightLightInfoLi>
            </ul>
            <GtaLightLightInfo>
              Investing in the proper care of your jewelry ensures that it remains a timeless treasure for years to come.
            </GtaLightLightInfo>
          </>
        );
      case 'Shopping & Returns':
        return (
          <>
            <div>
              <GtaRegular16>Shipping</GtaRegular16>
              <GtaLightLightInfo>
                Immerse yourself in the luxury of our online boutique. Discover and shop our exquisite collection from the
                comfort of your home.
              </GtaLightLightInfo>
              <GtaLightLightInfo>
                All orders are shipped with the utmost care and attention to detail. You will receive a shipping
                confirmation email with a tracking link to monitor the journey of your precious purchase.
              </GtaLightLightInfo>
              <GtaLightLightInfo>
                Delivery times may vary, but rest assured, we strive to deliver your order promptly. During peak seasons,
                please allow for additional delivery time.
              </GtaLightLightInfo>
            </div>
            <div>
              <GtaRegular16>Returns</GtaRegular16>
              <GtaLightLightInfo>
                While we hope you adore your purchase, we understand that preferences may change. Our return policy
                ensures a hassle-free process for returns and exchanges.
              </GtaLightLightInfo>
              <GtaLightLightInfo>
                If, for any reason, you wish to return or exchange an item, please contact our customer service team
                within 14 days of receiving your order. We are dedicated to ensuring your satisfaction.
              </GtaLightLightInfo>
            </div>
          </>
        );
      case 'Size Chart':
        return (
          <>
            <GtaRegular16>Size Chart</GtaRegular16>
            <GtaLightLightInfo>
              Finding the perfect fit is essential when it comes to jewelry. Refer to our size chart to ensure your
              selected piece complements your style and comfort.
            </GtaLightLightInfo>
            <GtaLightLightInfo>
              If you have any questions about sizing or need assistance, our customer service team is here to help. Reach
              out to us for personalized guidance.
            </GtaLightLightInfo>
          </>
        );
      case 'Garanzia':
        return (
          <>
            <GtaRegular16>Garanzia</GtaRegular16>
            <GtaLightLightInfo>
              La nostra garanzia testimonia l'impegno nella qualità e nell'eccellenza. Tutti i nostri gioielli sono
              coperti da una garanzia che attesta la genuinità dei materiali e la maestria artigianale impiegata nella
              creazione di ciascun pezzo.
            </GtaLightLightInfo>
            <GtaLightLightInfo>
              Per maggiori dettagli sulla garanzia e i suoi termini, contatta il nostro servizio clienti. Siamo qui per
              garantire la tua completa soddisfazione.
            </GtaLightLightInfo>
          </>
        );
      case 'Privacy Policy':
        return (
          <>
            <GtaRegular16>Privacy Policy</GtaRegular16>
            <GtaLightLightInfo>
              Your privacy is of the utmost importance to us. Our privacy policy outlines how we collect, use, and protect
              your personal information when you engage with our online boutique.
            </GtaLightLightInfo>
            <GtaLightLightInfo>
              Rest assured that we adhere to the highest standards of data security and confidentiality. If you have any
              privacy-related concerns, feel free to contact our privacy team.
            </GtaLightLightInfo>
          </>
        );
      case 'FAQ':
        return (
          <>
            <GtaRegular16>FAQ</GtaRegular16>
            <GtaLightLightInfo>
              Explore our frequently asked questions to find answers to common queries. Whether it's about our products,
              shipping, or returns, you'll likely find the information you need here.
            </GtaLightLightInfo>
            <GtaLightLightInfo>
              If your question isn't covered in our FAQ section, please don't hesitate to reach out to our customer
              service team. We're here to assist you.
            </GtaLightLightInfo>
          </>
        );
      case 'Contact':
        return (
          <>
            <GtaRegular16>Contact</GtaRegular16>
            <GtaLightLightInfo>
              Our customer service team is here to assist you. If you have any questions, concerns, or need personalized
              assistance, please don't hesitate to contact us.
            </GtaLightLightInfo>
            <GtaLightLightInfo>
              You can reach us via email, phone, or by filling out the contact form on our website. We aim to respond
              promptly and ensure your experience with us is seamless.
            </GtaLightLightInfo>
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
  
  
  

  return (
    <Container>
      <CustomerServiceDiv>
        <Menu>
          <GtaRegular>Customer Service</GtaRegular>
          <MenuItem
            className={selectedItem === 'Our Services' ? 'selected' : ''}
            onClick={() => handleMenuItemClick('Our Services')}
          >
           <li><GtaRegular16Category>Our Services</GtaRegular16Category></li> 
          </MenuItem>
          <MenuItem
            className={selectedItem === 'Product Care' ? 'selected' : ''}
            onClick={() => handleMenuItemClick('Product Care')}
          >
            <li><GtaRegular16Category> Product Care </GtaRegular16Category></li>
          </MenuItem>
          <MenuItem
            className={selectedItem === 'Shopping & Returns' ? 'selected' : ''}
            onClick={() => handleMenuItemClick('Shopping & Returns')}
          >
            <li> <GtaRegular16Category> Shipping & Returns </GtaRegular16Category></li>
          </MenuItem>
          <MenuItem
            className={selectedItem === 'Size Chart' ? 'selected' : ''}
            onClick={() => handleMenuItemClick('Size Chart')}
          >
            <li> <GtaRegular16Category> Size Chart </GtaRegular16Category></li>
          </MenuItem>
          <MenuItem
            className={selectedItem === 'Garanzia' ? 'selected' : ''}
            onClick={() => handleMenuItemClick('Garanzia')}
          >
            <li> <GtaRegular16Category> Garanzia </GtaRegular16Category> </li>
          </MenuItem>
          <MenuItem
            className={selectedItem === 'Privacy Policy' ? 'selected' : ''}
            onClick={() => handleMenuItemClick('Privacy Policy')}
          >
            <li> <GtaRegular16Category> Privacy Policy </GtaRegular16Category></li>
          </MenuItem>
          <MenuItem
            className={selectedItem === 'FAQ' ? 'selected' : ''}
            onClick={() => handleMenuItemClick('FAQ')}
          >
            <li> <GtaRegular16Category> FAQ </GtaRegular16Category></li>
          </MenuItem>
          <MenuItem
            className={selectedItem === 'Contact' ? 'selected' : ''}
            onClick={() => handleMenuItemClick('Contact')}
          >
            <li><GtaRegular16Category> Contact </GtaRegular16Category></li>
          </MenuItem>
        </Menu>
        <Content>{getContent()}</Content>
      </CustomerServiceDiv>







      <Mobile>
        <GtaRegular>Customer Service</GtaRegular>

        <FaqDiv>
{/* prima Linea nera */}
        <AccordionContent></AccordionContent>

{/* Prima Domanda */}
          <FilterButton onClick={() => toggleAccordion('OurServices')}>
            <AccordionItem >
              Our Services

            </AccordionItem>
            <FilterSign>
                {accordionState['OurServices'] ? (  // Se isOpen è true (l'accordion è aperto)
                  <img src={close} alt="Close" style={{ width: '20px', height: '20px' }} />
                ) : (
                  <img src={add} alt="Open" style={{ width: '20px', height: '20px' }} />
                )}
            </FilterSign>
          </FilterButton>


          <AccordionContent isOpen={accordionState['OurServices']}>
                <GtaLightLightInfo>
                  Welcome to our luxury jewelry boutique, where elegance meets craftsmanship. Our dedicated team is committed
                  to providing you with an exceptional shopping experience, ensuring each piece of jewelry reflects the
                  timeless beauty and sophistication you deserve.
                </GtaLightLightInfo>
                <GtaLightLightInfo>
                  Explore our curated collection of exquisite jewelry, handcrafted with the finest materials and attention
                  to detail. From dazzling diamonds to rare gemstones, each piece tells a story of unparalleled luxury and
                  style.
                </GtaLightLightInfo>
                <GtaLightLightInfo>
                <br></br>
                </GtaLightLightInfo>
          </AccordionContent>
{/* Fine Prima Domanda */}

          <FilterButton onClick={() => toggleAccordion('ProductCare')}>
            <AccordionItem >
                Product Care
            </AccordionItem>
            <FilterSign>
                {accordionState['ProductCare'] ? (  // Se isOpen è true (l'accordion è aperto)
                  <img src={close} alt="Close" style={{ width: '20px', height: '20px' }} />
                ) : (
                  <img src={add} alt="Open" style={{ width: '20px', height: '20px' }} />
                )}
            </FilterSign>
          </FilterButton>


          <AccordionContent isOpen={accordionState['ProductCare']}>
          <GtaLightLightInfo>
                      Welcome to our luxury jewelry boutique, where elegance meets craftsmanship. Our dedicated team is committed
                      to providing you with an exceptional shopping experience, ensuring each piece of jewelry reflects the
                      timeless beauty and sophistication you deserve.
                    </GtaLightLightInfo>
                    <GtaLightLightInfo>
                      Explore our curated collection of exquisite jewelry, handcrafted with the finest materials and attention
                      to detail. From dazzling diamonds to rare gemstones, each piece tells a story of unparalleled luxury and
                      style.
                    </GtaLightLightInfo>
                    <GtaLightLightInfo>
                    <br></br>
                    </GtaLightLightInfo>
          </AccordionContent>


<FilterButton onClick={() => toggleAccordion('Shipping')}>
            <AccordionItem >
                Shipping & returns
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
          <GtaLightLightInfo>
                      Welcome to our luxury jewelry boutique, where elegance meets craftsmanship. Our dedicated team is committed
                      to providing you with an exceptional shopping experience, ensuring each piece of jewelry reflects the
                      timeless beauty and sophistication you deserve.
                    </GtaLightLightInfo>
                    <GtaLightLightInfo>
                      Explore our curated collection of exquisite jewelry, handcrafted with the finest materials and attention
                      to detail. From dazzling diamonds to rare gemstones, each piece tells a story of unparalleled luxury and
                      style.
                    </GtaLightLightInfo>
                    <GtaLightLightInfo>
                    <br></br>
                    </GtaLightLightInfo>
          </AccordionContent>

{/* Fine Prima Domanda */}

<FilterButton onClick={() => toggleAccordion('Size')}>
            <AccordionItem >
                Size Chart
            </AccordionItem>
            <FilterSign>
                {accordionState['Size'] ? (  // Se isOpen è true (l'accordion è aperto)
                  <img src={close} alt="Close" style={{ width: '20px', height: '20px' }} />
                ) : (
                  <img src={add} alt="Open" style={{ width: '20px', height: '20px' }} />
                )}
            </FilterSign>
          </FilterButton>


          <AccordionContent isOpen={accordionState['Size']}>
          <GtaLightLightInfo>
                      Welcome to our luxury jewelry boutique, where elegance meets craftsmanship. Our dedicated team is committed
                      to providing you with an exceptional shopping experience, ensuring each piece of jewelry reflects the
                      timeless beauty and sophistication you deserve.
                    </GtaLightLightInfo>
                    <GtaLightLightInfo>
                      Explore our curated collection of exquisite jewelry, handcrafted with the finest materials and attention
                      to detail. From dazzling diamonds to rare gemstones, each piece tells a story of unparalleled luxury and
                      style.
                    </GtaLightLightInfo>
                    <GtaLightLightInfo>
                    <br></br>
                    </GtaLightLightInfo>
          </AccordionContent>

{/* Fine Prima Domanda */}

<FilterButton onClick={() => toggleAccordion('Garanzia')}>
            <AccordionItem >
                Garanzia
            </AccordionItem>
            <FilterSign>
                {accordionState['Garanzia'] ? (  // Se isOpen è true (l'accordion è aperto)
                  <img src={close} alt="Close" style={{ width: '20px', height: '20px' }} />
                ) : (
                  <img src={add} alt="Open" style={{ width: '20px', height: '20px' }} />
                )}
            </FilterSign>
          </FilterButton>


          <AccordionContent isOpen={accordionState['Garanzia']}>
          <GtaLightLightInfo>
                      Welcome to our luxury jewelry boutique, where elegance meets craftsmanship. Our dedicated team is committed
                      to providing you with an exceptional shopping experience, ensuring each piece of jewelry reflects the
                      timeless beauty and sophistication you deserve.
                    </GtaLightLightInfo>
                    <GtaLightLightInfo>
                      Explore our curated collection of exquisite jewelry, handcrafted with the finest materials and attention
                      to detail. From dazzling diamonds to rare gemstones, each piece tells a story of unparalleled luxury and
                      style.
                    </GtaLightLightInfo>
                    <GtaLightLightInfo>
                    <br></br>
                    </GtaLightLightInfo>
          </AccordionContent>

{/* Fine Prima Domanda */}

<FilterButton onClick={() => toggleAccordion('Privacy')}>
            <AccordionItem >
                Privacy Policy
            </AccordionItem>
            <FilterSign>
                {accordionState['Privacy'] ? (  // Se isOpen è true (l'accordion è aperto)
                  <img src={close} alt="Close" style={{ width: '20px', height: '20px' }} />
                ) : (
                  <img src={add} alt="Open" style={{ width: '20px', height: '20px' }} />
                )}
            </FilterSign>
          </FilterButton>


          <AccordionContent isOpen={accordionState['Privacy']}>
          <GtaLightLightInfo>
                      Welcome to our luxury jewelry boutique, where elegance meets craftsmanship. Our dedicated team is committed
                      to providing you with an exceptional shopping experience, ensuring each piece of jewelry reflects the
                      timeless beauty and sophistication you deserve.
                    </GtaLightLightInfo>
                    <GtaLightLightInfo>
                      Explore our curated collection of exquisite jewelry, handcrafted with the finest materials and attention
                      to detail. From dazzling diamonds to rare gemstones, each piece tells a story of unparalleled luxury and
                      style.
                    </GtaLightLightInfo>
                    <GtaLightLightInfo>
                    <br></br>
                    </GtaLightLightInfo>
          </AccordionContent>

{/* Fine Prima Domanda */}

<FilterButton onClick={() => toggleAccordion('Faq')}>
            <AccordionItem >
               Faq
            </AccordionItem>
            <FilterSign>
                {accordionState['Faq'] ? (  // Se isOpen è true (l'accordion è aperto)
                  <img src={close} alt="Close" style={{ width: '20px', height: '20px' }} />
                ) : (
                  <img src={add} alt="Open" style={{ width: '20px', height: '20px' }} />
                )}
            </FilterSign>
          </FilterButton>


          <AccordionContent isOpen={accordionState['Faq']}>
          <GtaLightLightInfo>
                      Welcome to our luxury jewelry boutique, where elegance meets craftsmanship. Our dedicated team is committed
                      to providing you with an exceptional shopping experience, ensuring each piece of jewelry reflects the
                      timeless beauty and sophistication you deserve.
                    </GtaLightLightInfo>
                    <GtaLightLightInfo>
                      Explore our curated collection of exquisite jewelry, handcrafted with the finest materials and attention
                      to detail. From dazzling diamonds to rare gemstones, each piece tells a story of unparalleled luxury and
                      style.
                    </GtaLightLightInfo>
                    <GtaLightLightInfo>
                    <br></br>
                    </GtaLightLightInfo>
          </AccordionContent>

{/* Fine Prima Domanda */}

<FilterButton onClick={() => toggleAccordion('Contact')}>
            <AccordionItem >
                Contact
            </AccordionItem>
            <FilterSign>
                {accordionState['Contact'] ? (  // Se isOpen è true (l'accordion è aperto)
                  <img src={close} alt="Close" style={{ width: '20px', height: '20px' }} />
                ) : (
                  <img src={add} alt="Open" style={{ width: '20px', height: '20px' }} />
                )}
            </FilterSign>
          </FilterButton>


          <AccordionContent isOpen={accordionState['Contact']}>
          <GtaLightLightInfo>
                      Welcome to our luxury jewelry boutique, where elegance meets craftsmanship. Our dedicated team is committed
                      to providing you with an exceptional shopping experience, ensuring each piece of jewelry reflects the
                      timeless beauty and sophistication you deserve.
                    </GtaLightLightInfo>
                    <GtaLightLightInfo>
                      Explore our curated collection of exquisite jewelry, handcrafted with the finest materials and attention
                      to detail. From dazzling diamonds to rare gemstones, each piece tells a story of unparalleled luxury and
                      style.
                    </GtaLightLightInfo>
                    <GtaLightLightInfo>
                    <br></br>
                    </GtaLightLightInfo>
          </AccordionContent>

{/* Fine Prima Domanda */}






         

      
        </FaqDiv>
      </Mobile>


    </Container>
  );
};

export default CustomerService;
