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
font-family: 'GTAmericaBold';
font-size: 16px;
margin-top:4%;
margin-bottom:3%;


`;
const GtaRegular16Category = styled.p`
font-family: 'GTAmerica';
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
  const [selectedItem, setSelectedItem] = useState('Terms & Conditions');

  const handleMenuItemClick = (item) => {
    setSelectedItem(item);
  };

  const getContent = () => {
    switch (selectedItem) {


      case 'Terms & Conditions':
        return (
<>
  <div>
    <GtaRegular16>Termini di utilizzo</GtaRegular16>
    <GtaLightLightInfo>
      Cusi Termini di utilizzo
      Ultimo aggiornamento: Maggio 2024<br/><br/>
    </GtaLightLightInfo>
  </div>

  <div>
    <GtaRegular16>    Informazioni su Cusi e i presenti Termini di utilizzo</GtaRegular16>

    <GtaLightLightInfo>

      Questo sito è gestito dal Titolare del trattamento, identificato nella persona del titolare e legale rappresentante p.t. della società:<br/>      <br/>
      CUSI MONTENAPOLEONE S.r.l.
      <br/> sede legale: Milano (MI), Via Montenapoleone, 21/A
      <br/> P.Iva 01932840182
      <br/>mail: info@cusimontenapoleone.com
      <br/>      <br/>
      I presenti termini di utilizzo ("Termini di utilizzo") regolano l'utilizzo delle Piattaforme di Cusi. Con l'accesso e l'utilizzo delle Piattaforme, manifestate il vostro consenso e accettazione dei presenti Termini di utilizzo. In caso di disaccordo con tali Termini, non siete autorizzati a utilizzare le Piattaforme.
    </GtaLightLightInfo>
  </div>

  <div>
    <GtaRegular16>Aggiornamenti ai presenti Termini di utilizzo</GtaRegular16>
    <GtaLightLightInfo>
      Periodicamente, potremmo apportare modifiche ai presenti Termini di utilizzo. Vi invitiamo a controllare regolarmente per restare aggiornati. L'ultima versione sarà sempre disponibile sulle Piattaforme e diventerà efficace immediatamente dopo la pubblicazione. L'utilizzo continuato delle Piattaforme costituirà l'accettazione di tali modifiche.
    </GtaLightLightInfo>
  </div>
  <div>
    <GtaRegular16>Informazioni sui nostri servizi di hosting</GtaRegular16>
    <GtaLightLightInfo>
      I servizi di hosting per il sito web di Cusi sono forniti da Netlify, Inc. located at 512 2nd Street, Suite 200 San Francisco, CA 94107.
    </GtaLightLightInfo>
  </div>
  <div>
    <GtaRegular16>La nostra informativa sulla privacy</GtaRegular16>
    <GtaLightLightInfo>
      La nostra prassi di raccolta dei dati all’interno della piattaforma eCommerce Cusi è disciplinata dai termine della nostra Informativa sulla privacy resa disponibile da Iubenda. Vi invitiamo a leggerla per comprendere come trattiamo i vostri dati.
    </GtaLightLightInfo>
  </div>
  <div>
    <GtaRegular16>e-Commerce di Cusi – Condizioni di vendita</GtaRegular16>
    <GtaLightLightInfo>
      I clienti che effettuano acquisti online attraverso il nostro e-commerce devono consultare le Condizioni di vendita, che regolano i termini e le condizioni di tali transazioni.
    </GtaLightLightInfo>
  </div>
  <div>
    <GtaRegular16>Utilizzo dei contenuti sulle Piattaforme</GtaRegular16>
    <GtaLightLightInfo>
      Cusi offre informazioni sui propri prodotti e servizi attraverso tale piattaforma per uso personale dei visitatori. Le rappresentazioni visive dei prodotti sono accuratamente create, tuttavia, possono verificarsi lievi variazioni nei colori o nel design. Si consiglia di visitare i nostri punti vendita o contattarci direttamente per maggiori informazioni prima di effettuare un acquisto.
      Potete scaricare o stampare i contenuti dalle Piattaforme esclusivamente per uso personale, non commerciale, a condizione che vengano mantenuti intatti i diritti di proprietà intellettuale e non vengano alterate le note relative ai diritti.
    </GtaLightLightInfo>
  </div>
  <div>
    <GtaRegular16>Comunicazioni e feedback</GtaRegular16>
    <GtaLightLightInfo>
      Accogliamo con favore i vostri feedback e suggerimenti. Si prega di inviarli a info@cusimontenapoleone.com. Tutte le comunicazioni inviate a Cusi saranno trattate in conformità con la nostra Informativa sulla privacy.
    </GtaLightLightInfo>
  </div>
  <div>
    <GtaRegular16>Limitazione di responsabilità</GtaRegular16>
    <GtaLightLightInfo>
      Cusi si impegna a fornire informazioni precise e complete attraverso tale piattaforma, tuttavia, non può garantire la completezza o l'accuratezza dei contenuti. Inoltre, non assumiamo responsabilità per eventuali danni derivanti dall'utilizzo delle Piattaforme o dall'accesso ai contenuti.
      Non garantiamo che gli aspetti funzionali e/o tecnici delle Piattaforme o del nostro materiale saranno privi di errori, né che i server che rendono disponibili le Piattaforme saranno esenti da virus o altri componenti dannosi. Nel caso in cui l'utilizzo delle Piattaforme causasse la necessità di assistenza o la sostituzione di beni o dati, Cusi non sarà responsabile di tali costi.
    </GtaLightLightInfo>
  </div>
  <div>
    <GtaRegular16>Nota sui marchi e il diritto d'autore</GtaRegular16>
    <GtaLightLightInfo>
      Tutti i marchi e i contenuti presenti sulle Piattaforme sono di proprietà di Cusi o utilizzati con autorizzazione. È severamente vietato utilizzare tali marchi o contenuti senza il nostro consenso scritto.
    </GtaLightLightInfo>
  </div>
  <div>
    <GtaRegular16>Link e collegamenti</GtaRegular16>
    <GtaLightLightInfo>
      Le Piattaforme possono contenere collegamenti a siti web di terze parti. Cusi non è responsabile dei contenuti o delle pratiche di privacy di tali siti. L'accesso a tali siti avviene a proprio rischio.
    </GtaLightLightInfo>
  </div>
  <div>
    <GtaRegular16>Risoluzione e sospensione</GtaRegular16>
    <GtaLightLightInfo>
      Cusi si riserva il diritto di terminare o sospendere l'accesso alla Piattaforma per violazioni dei presenti Termini di utilizzo o per altri motivi a nostra discrezione.
    </GtaLightLightInfo>
  </div>
  <div>
    <GtaRegular16>Disposizioni generali</GtaRegular16>
    <GtaLightLightInfo>
      I presenti Termini di utilizzo costituiscono l'accordo completo tra voi e Cusi per l'utilizzo delle Piattaforme. Qualsiasi modifica o rinuncia deve essere effettuata per iscritto e firmata da entrambe le parti.
    </GtaLightLightInfo>
  </div>
  <div>
    <GtaRegular16>Legge applicabile e foro competente</GtaRegular16>
    <GtaLightLightInfo>
      I presenti Termini di utilizzo sono disciplinati e interpretati in base alla legge Italiana senza riferimento a disposizioni sui conflitti di legge. Eventuali controversie saranno risolte in Tribunale.
    </GtaLightLightInfo>
  </div>
</>

        );


        case 'Conditions Of Sales':
          return (
  <>
    <div>
      <GtaRegular16>CONDIZIONI DI VENDITA DI CUSI</GtaRegular16>
      <GtaLightLightInfo>
        Cusi Condizioni di Vendita
        Ultimo aggiornamento: Gennaio 2024<br/><br/>
      </GtaLightLightInfo>
    </div>
  
    <div>
      <GtaRegular16>    Informazioni su Cusi e i presenti Termini di utilizzo</GtaRegular16>
  
      <GtaLightLightInfo>
  
        Questo sito è gestito dal Titolare del trattamento, identificato nella persona del titolare e legale rappresentante p.t. della società:<br/>      <br/>
        CUSI MONTENAPOLEONE S.r.l.
        <br/> sede legale: Milano (MI), Via Montenapoleone, 21/A
        <br/> P.Iva 01932840182
        <br/>mail: info@cusimontenapoleone.com
        <br/>      <br/>
        I presenti termini di utilizzo ("Termini di utilizzo") regolano l'utilizzo delle Piattaforme di Cusi. Con l'accesso e l'utilizzo delle Piattaforme, manifestate il vostro consenso e accettazione dei presenti Termini di utilizzo. In caso di disaccordo con tali Termini, non siete autorizzati a utilizzare le Piattaforme.
      </GtaLightLightInfo>
    </div>
  
    <div>
      <GtaRegular16>Aggiornamenti ai presenti Termini di utilizzo</GtaRegular16>
      <GtaLightLightInfo>
        Periodicamente, potremmo apportare modifiche ai presenti Termini di utilizzo. Vi invitiamo a controllare regolarmente per restare aggiornati. L'ultima versione sarà sempre disponibile sulle Piattaforme e diventerà efficace immediatamente dopo la pubblicazione. L'utilizzo continuato delle Piattaforme costituirà l'accettazione di tali modifiche.
      </GtaLightLightInfo>
    </div>
    <div>
      <GtaRegular16>Informazioni sui nostri servizi di hosting</GtaRegular16>
      <GtaLightLightInfo>
        I servizi di hosting per il sito web di Cusi sono forniti da Netlify, Inc. located at 512 2nd Street, Suite 200 San Francisco, CA 94107.
      </GtaLightLightInfo>
    </div>
    <div>
      <GtaRegular16>La nostra informativa sulla privacy</GtaRegular16>
      <GtaLightLightInfo>
        La nostra prassi di raccolta dei dati all’interno della piattaforma eCommerce Cusi è disciplinata dai termine della nostra Informativa sulla privacy resa disponibile da Iubenda. Vi invitiamo a leggerla per comprendere come trattiamo i vostri dati.
      </GtaLightLightInfo>
    </div>
    <div>
      <GtaRegular16>e-Commerce di Cusi – Condizioni di vendita</GtaRegular16>
      <GtaLightLightInfo>
        I clienti che effettuano acquisti online attraverso il nostro e-commerce devono consultare le Condizioni di vendita, che regolano i termini e le condizioni di tali transazioni.
      </GtaLightLightInfo>
    </div>
    <div>
      <GtaRegular16>Utilizzo dei contenuti sulle Piattaforme</GtaRegular16>
      <GtaLightLightInfo>
        Cusi offre informazioni sui propri prodotti e servizi attraverso tale piattaforma per uso personale dei visitatori. Le rappresentazioni visive dei prodotti sono accuratamente create, tuttavia, possono verificarsi lievi variazioni nei colori o nel design. Si consiglia di visitare i nostri punti vendita o contattarci direttamente per maggiori informazioni prima di effettuare un acquisto.
        Potete scaricare o stampare i contenuti dalle Piattaforme esclusivamente per uso personale, non commerciale, a condizione che vengano mantenuti intatti i diritti di proprietà intellettuale e non vengano alterate le note relative ai diritti.
      </GtaLightLightInfo>
    </div>
    <div>
      <GtaRegular16>Comunicazioni e feedback</GtaRegular16>
      <GtaLightLightInfo>
        Accogliamo con favore i vostri feedback e suggerimenti. Si prega di inviarli a info@cusimontenapoleone.com. Tutte le comunicazioni inviate a Cusi saranno trattate in conformità con la nostra Informativa sulla privacy.
      </GtaLightLightInfo>
    </div>
    <div>
      <GtaRegular16>Limitazione di responsabilità</GtaRegular16>
      <GtaLightLightInfo>
        Cusi si impegna a fornire informazioni precise e complete attraverso tale piattaforma, tuttavia, non può garantire la completezza o l'accuratezza dei contenuti. Inoltre, non assumiamo responsabilità per eventuali danni derivanti dall'utilizzo delle Piattaforme o dall'accesso ai contenuti.
        Non garantiamo che gli aspetti funzionali e/o tecnici delle Piattaforme o del nostro materiale saranno privi di errori, né che i server che rendono disponibili le Piattaforme saranno esenti da virus o altri componenti dannosi. Nel caso in cui l'utilizzo delle Piattaforme causasse la necessità di assistenza o la sostituzione di beni o dati, Cusi non sarà responsabile di tali costi.
      </GtaLightLightInfo>
    </div>
    <div>
      <GtaRegular16>Nota sui marchi e il diritto d'autore</GtaRegular16>
      <GtaLightLightInfo>
        Tutti i marchi e i contenuti presenti sulle Piattaforme sono di proprietà di Cusi o utilizzati con autorizzazione. È severamente vietato utilizzare tali marchi o contenuti senza il nostro consenso scritto.
      </GtaLightLightInfo>
    </div>
    <div>
      <GtaRegular16>Link e collegamenti</GtaRegular16>
      <GtaLightLightInfo>
        Le Piattaforme possono contenere collegamenti a siti web di terze parti. Cusi non è responsabile dei contenuti o delle pratiche di privacy di tali siti. L'accesso a tali siti avviene a proprio rischio.
      </GtaLightLightInfo>
    </div>
    <div>
      <GtaRegular16>Risoluzione e sospensione</GtaRegular16>
      <GtaLightLightInfo>
        Cusi si riserva il diritto di terminare o sospendere l'accesso alla Piattaforma per violazioni dei presenti Termini di utilizzo o per altri motivi a nostra discrezione.
      </GtaLightLightInfo>
    </div>
    <div>
      <GtaRegular16>Disposizioni generali</GtaRegular16>
      <GtaLightLightInfo>
        I presenti Termini di utilizzo costituiscono l'accordo completo tra voi e Cusi per l'utilizzo delle Piattaforme. Qualsiasi modifica o rinuncia deve essere effettuata per iscritto e firmata da entrambe le parti.
      </GtaLightLightInfo>
    </div>
    <div>
      <GtaRegular16>Legge applicabile e foro competente</GtaRegular16>
      <GtaLightLightInfo>
        I presenti Termini di utilizzo sono disciplinati e interpretati in base alla legge Italiana senza riferimento a disposizioni sui conflitti di legge. Eventuali controversie saranno risolte in Tribunale.
      </GtaLightLightInfo>
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
  
  
  

  return (
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
