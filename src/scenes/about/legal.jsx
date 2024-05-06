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
  min-height: 100vh;
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


const Legal = () => {
  const [selectedItem, setSelectedItem] = useState('Privacy Policy');

  const handleMenuItemClick = (item) => {
    setSelectedItem(item);
  };

  const getContent = () => {
    switch (selectedItem) {


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


      case 'Privacy Policy':
        return (
          <>
            <GtaRegular16>Privacy Policy</GtaRegular16>
            <GtaLightLightInfo>
            Questa Informativa descrive ampiamente le pratiche che abbiamo adottato
            In questa pagina si descrivono le modalità di gestione del sito in riferimento al trattamento dei dati personali degli utenti che lo consultano. Il trattamento si basa sempre su principi di liceità e correttezza in ottemperanza a tutte le vigenti normative e vengono adottate idonee misure di sicurezza a protezione dei dati. Tale policy privacy è data anche come breve informativa ai sensi dell’art.13 D. Lgs. 196/2003 e ai sensi dell’ art. 13 GDPR 679/ 2016 Regolamento Europeo in materia di privacy, nonché ai sensi del Provvedimento in materia di cookie n. 229 dell’8 maggio 2014, si desidera informare i visitatori del sito circa l’utilizzo dei dati inseriti e dei cookie utilizzati dal sito stesso. L’informativa è resa anche ai sensi della Raccomandazione n. 2/2001 adottata dal Gruppo di lavoro istituito dall’art. 29 della direttiva n. 95/46/CE. a coloro che interagiscono con i servizi web di questo sito, al fine della protezione dei dati personali, accessibili per via telematica a partire dall’indirizzo: Utilizzando uno qualsiasi dei nostri servizi e/o accettando la presente Informativa, per esempio nell’ambito della registrazione a uno dei nostri servizi, acconsenti alla raccolta e all’uso delle Informazioni personali come descritto nella presente Informativa.

            Questa Informativa descrive ampiamente le pratiche che abbiamo adottato
            </GtaLightLightInfo>
            <h1>INFORMAZIONI PERSONALI CHE RACCOGLIAMO</h1>
            <GtaLightLightInfo>
            In ogni occasione di contatto o interazione con l’ospite e in tutti gli altri aspetti del nostro lavoro, possiamo raccogliere delle informazioni personali. Queste informazioni personali possono includere: le tue informazioni di contatto; informazioni caratteristiche personali, nazionalità, documenti di identità, informazioni di pagamento, così come dettagli di fatturazione e del conto relativi alla fatturazione elettronica; preferenze, previo consenso scritto, riguardo a marketing e comunicazione e possiamo inviarti informazioni commerciali previo tuo consenso espresso.
            </GtaLightLightInfo>
            <h1>FINALITA' DI TRATTAMENTO</h1>
            <GtaLightLightInfo>
            Il trattamento dei dati è finalizzato per le seguenti finalità:
            alla gestione dei rapporti con la clientela (emissione di fatture, preventivi), a eseguire eventuali obblighi contrattuali, alla gestione del contenzioso e nonché ad adempiere agli obblighi normativi, in particolare quelli contabili e fiscali;

            2a) Inerenti al servizio:
            all’invio (previo Suo consenso scritto) di offerte promozionali sui nostri servizi e sulle offerte praticate nonché di auguri a mezzo posta ordinaria o tramite fax o email;
            Di richieste tecniche per confezionare, completare, modificare o riparare articoli di gioielleria a piacimento del cliente e secondo la sua ordinazione, a mezzo telefonico, mail, fax

            2b) programma di ricevuta elettronica:
            possiamo automaticamente iscriverti al nostro programma di ricevuta elettronica e utilizzare il tuo indirizzo e-mail per inviarti fatture o ricevute fiscali, o documenti relativi al tuo acquisto. È tua responsabilità assicurarti che l’indirizzo e-mail in nostro possesso sia quello corretto (e preferito).
            Possiamo utilizzare il tuo indirizzo di posta elettronica per inviarti, previo consenso scritto, le nostre newletter, i nostri auguri per le festività.            
            </GtaLightLightInfo>
            <h1>ULTERIORI FINALITà</h1>

            <GtaLightLightInfo>
            I sistemi informatici e le procedure software preposte al funzionamento di questo sito web acquisiscono, nel corso del loro normale esercizio alcuni dati personali la cui trasmissione è implicita nell’uso dei protocolli di comunicazione di internet. Tali informazioni non sono raccolte per essere associate a interessati identificati, ma che per loro stessa natura potrebbero, attraverso elaborazioni ed associazioni con dati detenuti da terzi, permettere di identificare gli utenti.
In questa categoria di dati rientrano gli indirizzi IP o i nomi a dominio dei computer utilizzati dagli utenti che si connettono al sito, gli indirizzi in notazione URI (Uniform resource Identifier) delle risorse richieste, l’orario della richiesta, il metodo utilizzato nel sottoporre la richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico indicante lo stato della risposta data dal server (buon fine, errore….) ed altri parametri relativi al sistema operativo e all’ambiente informatico dell’utente.
Questi dati vengono utilizzati al solo fine di ricavare informazioni statistiche anonime sull’uso del sito e per controllarne il corretto funzionamento e vengono cancellate immediatamente dopo l’elaborazione. I dati potrebbero, altresì, essere utilizzati per l’accertamento di responsabilità in caso di ipotetici reati informatici ai danni del sito.          
            </GtaLightLightInfo>

            <h1>IDENTITA’ DEL TITOLARE DEL TRATTAMENTO</h1>

            <GtaLightLightInfo>
            Questo sito è gestito dal Titolare del trattamento, identificato nella persona del titolare e legale
rappresentante p.t. della società:<br/><br/>

CUSI MONTENAPOLEONE S.r.l.<br/>
con sede legale:<br/>
MIlano (MI), Via Montenapoleone, 21/A<br/>
P.Iva 01932840182,<br/>
mail: info@cusimontenapoleone.com<br/><br/>

Il Titolare del trattamento garantisce la sicurezza, la riservatezza e la protezione di cui sono in possesso, in qualsiasi fase del processo di trattamento degli stessi. I dati raccolti vengono utilizzati nel rispetto della normativa vigente in materia di privacy (D.Lgs. 196/ 2003 e GDPR 679/2016)
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
          <GtaRegular>Legal</GtaRegular>

          <MenuItem
            className={selectedItem === 'Shopping & Returns' ? 'selected' : ''}
            onClick={() => handleMenuItemClick('Shopping & Returns')}
          >
            <li> <GtaRegular16Category> CONDIZIONI DI VENDITA </GtaRegular16Category></li>
          </MenuItem>

          <MenuItem
            className={selectedItem === 'Cookie Policy' ? 'selected' : ''}
            onClick={() => handleMenuItemClick('Cookie Policy')}
          >
            <li><GtaRegular16Category> COOKIE POLICY </GtaRegular16Category></li>
          </MenuItem>



          <MenuItem
            className={selectedItem === 'Privacy Policy' ? 'selected' : ''}
            onClick={() => handleMenuItemClick('Privacy Policy')}
          >
            <li> <GtaRegular16Category> PRIVACY POLICY </GtaRegular16Category></li>
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

export default Legal;
