import React, { useState } from 'react';
import styled from 'styled-components';
import add from '../../assets/add.png';
import close from '../../assets/meno.png';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

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


        case 'Privacy Policy':
          return (

            <>
            <div>
              <GtaRegular16>PRIVACY AND WEBSITE BROWSING INFORMATION</GtaRegular16>
              <GtaLightLightInfo>
                This Information broadly describes the practices we have adopted. 
                <br/><br/>
                This page describes the management methods of the site with reference to the processing of personal data of users who consult it. The processing is always based on principles of lawfulness and correctness in compliance with all current regulations and appropriate security measures are adopted to protect the data. This privacy policy is also provided as brief information pursuant to art.13 of Legislative Decree 196/2003 and pursuant to art. 13 GDPR 679/2016 European Regulation on privacy, as well as pursuant to the Cookie Provision no. 229 of May 8, 2014, we wish to inform site visitors about the use of the data entered and the cookies used by the site itself. The information is also provided pursuant to Recommendation no. 2/2001 adopted by the working group established by art. 29 of directive no. 95/46/CE to those who interact with the web services of this site, for the protection of personal data, accessible electronically from the address: By using any of our services and/or accepting this Information, for example as part of the registration for one of our services, you consent to the collection and use of Personal Information as described in this Information.
              </GtaLightLightInfo>
            </div>

            <div>
              <GtaRegular16>PERSONAL INFORMATION WE COLLECT</GtaRegular16>
              <GtaLightLightInfo>
                On every occasion of contact or interaction with the guest and in all other aspects of our work, we may collect personal information. This personal information may include: your contact information; personal characteristics, nationality, identity documents, payment information, as well as billing details and account details related to electronic billing; preferences, with your written consent, regarding marketing and communication, and we may send you commercial information with your explicit consent.
              </GtaLightLightInfo>
            </div>

            <div>
              <GtaRegular16>PURPOSE OF PROCESSING</GtaRegular16>
              <GtaLightLightInfo>
                Data processing is aimed at the following purposes:
                <br/><br/>
                for the management of customer relations (issuance of invoices, quotes), to fulfill any contractual obligations, to manage disputes, as well as to comply with regulatory obligations, especially accounting and tax ones;
                <br/><br/>
                2a) Related to the service:
                <br/><br/>
                to send (with your written consent) promotional offers on our services and offers as well as greetings by ordinary mail or via fax or email;
                Technical requests to tailor, complete, modify, or repair jewelry items to the customer's liking and according to their order, by phone, mail, fax
                <br/><br/>
                2b) Electronic receipt program:
                <br/><br/>
                we may automatically enroll you in our electronic receipt program and use your email address to send you invoices or tax receipts, or documents related to your purchase. It is your responsibility to ensure that the email address we have is correct (and preferred).
                We may use your email address to send you, with your written consent, our newsletters, our holiday greetings.
                <br/><br/>
                Additional purposes
                <br/><br/>
                The computer systems and software procedures used to operate this website acquire, during their normal operation, some personal data whose transmission is implicit in the use of Internet communication protocols. These informations are not collected to be associated with identified data subjects, but that by their very nature could, through processing and associations with data held by third parties, allow users to be identified.
                This category of data includes IP addresses or domain names of the computers used by users who connect to the site, URI (Uniform Resource Identifier) addresses of the requested resources, the time of the request, the method used to submit the request to the server, the size of the file obtained in response, the numerical code indicating the status of the response given by the server (successful, error, etc.), and other parameters relating to the user's operating system and computer environment.
                These data are used only to obtain anonymous statistical information on the use of the site and to check its correct functioning and are deleted immediately after processing. The data could also be used to ascertain responsibility in case of hypothetical computer crimes against the site.
              </GtaLightLightInfo>
            </div>

            <div>
              <GtaRegular16>DATA CONTROLLER'S IDENTITY</GtaRegular16>
              <GtaLightLightInfo>
                This site is managed by the Data Controller, identified in the person of the current owner and legal representative of the company:
                <br/><br/>
                CUSI MONTENAPOLEONE S.r.l.
                <br/>registered office: Milan (MI), Via Montenapoleone, 21/A
                <br/>VAT number 01932840182
                <br/>email: info@cusimontenapoleone.com;
                <br/><br/>
                The Data Controller ensures the security, confidentiality, and protection of the data it holds, at any stage of the processing process. The collected data are used in compliance with the current privacy regulations (Legislative Decree 196/2003 and GDPR 679/2016).
              </GtaLightLightInfo>
            </div>

            <div>
              <GtaRegular16>PLACE OF PROCESSING</GtaRegular16>
              <GtaLightLightInfo>
                The data will be processed by the data controller at its registered office and operational headquarters.
              </GtaLightLightInfo>
            </div>

            <div>
              <GtaRegular16>NATURE OF DATA PROVISION</GtaRegular16>
              <GtaLightLightInfo>
                For the purposes referred to in point 2, the provision of data is mandatory, and failure to provide it may make it impossible to obtain what is requested. For the purposes referred to in points 2a) and 2b), the provision of data is optional and does not prevent the provision of the requested service.
              </GtaLightLightInfo>
            </div>

            <div>
              <GtaRegular16>REFUSAL TO PROVIDE DATA</GtaRegular16>
              <GtaLightLightInfo>
                The data subject may refuse to provide their navigation data to the Data Controller. To do this, they must disable cookies by following the instructions provided by the browser in use. Disabling cookies may worsen the navigation functionality of the site.
              </GtaLightLightInfo>
            </div>

            <div>
              <GtaRegular16>DATA RECIPIENTS</GtaRegular16>
              <GtaLightLightInfo>
                No data derived from the web service (thus navigation data specified above and cookies) is communicated or disseminated (except for communication to judicial or police authorities if necessary).
                The data are processed by personnel specifically appointed in writing to process the data (administrative staff and public relations staff, including those external to the Company, IT systems management staff, including those external to the Company who may also perform system administrator functions and are in this case appointed as such pursuant to the Privacy Guarantor's Provision and subsequent amendments, interns, our consultants, and individuals appointed to the specific management of IT systems, including those external to the Company) only if the processing is necessary for the performance of their duties, performing only the necessary operations for the performance of their duties.
              </GtaLightLightInfo>
            </div>

            <div>
              <GtaRegular16>RIGHTS OF DATA SUBJECTS</GtaRegular16>
              <GtaLightLightInfo>
                Pursuant to art. 7 of the Privacy Code and arts. 15 (right of access), 16 (right of rectification), 17 (right to erasure), 18 (right to restriction of processing), 20 (right to data portability), 21 (right to object), and 22 (right to object to automated decision-making) of GDPR 679/2016, the data subject will exercise their rights by writing to the Data Controller at the address indicated above or via email at info@cusimontenapoleone.com, and will have the right to obtain without delay, from the Data Controller, information on the existence of the processing of personal data concerning them, the purposes, the methods of processing, the logic applied in case of processing carried out with the aid of electronic instruments, the identifying details of the Data Controller and the managers, the subjects or categories of subjects to whom the personal data may be communicated or who may become aware of them as managers or appointees.
                <br/><br/>
                The data subject has the right to obtain the updating, rectification or, when interested, the integration of the data, the erasure, anonymization, or blocking of data processed unlawfully, including data that does not need to be retained for the purposes for which the data were collected or subsequently processed, the certification that the operations referred to in letters a) and b) have been made known, also as regards their content, to those to whom the data have been communicated or disseminated, except where such compliance is impossible or involves a manifestly disproportionate effort compared to the protected right.
                <br/><br/>
                The data subject has the right to object, in whole or in part:
                <br/><br/>
                a) for legitimate reasons to the processing of personal data concerning them, even if pertinent to the purpose of collection;
                <br/><br/>
                b) to the processing of personal data concerning them for the purpose of sending advertising materials or direct selling or for carrying out market research or commercial communication.
              </GtaLightLightInfo>
            </div>

            <div>
              <GtaRegular16>COOKIES</GtaRegular16>
              <GtaLightLightInfo>
                Cookies are small text files that are sent to your computer. This site uses the following third-party technical cookies: Google Analytics. This site does not use profiling cookies. The computer systems and software procedures used to operate this website acquire, during their normal operation, some personal data whose transmission is implicit in the use of Internet communication protocols. These informations are not collected to be associated with identified data subjects, but that by their very nature could, through processing and associations with data held by third parties, allow users to be identified.
              </GtaLightLightInfo>
            </div>

            <div>
              <GtaRegular16>Google Analytics</GtaRegular16>
              <GtaLightLightInfo>
                Our site uses Google Analytics from Google, Inc. (hereinafter "Google") to generate statistics on the use of the website; Google Analytics uses cookies (not third-party) that do not store personal data. The information obtained from the cookies about users' use of the website (including IP addresses) will be transmitted by the user's browser to Google, located at 1600 Amphitheatre Parkway, Mountain View, CA 94043, United States, and stored on the company's servers.
                <br/><br/>
                According to the terms of service in force, Google will use this information, as an independent data controller, for the purpose of tracking and examining the use of the website, compiling reports on website activities for website operators, and providing other services related to website activities, connection methods (mobile, PC, used browsers, etc.), and search and reach methods of the website pages. Google may also transfer this information to third parties where required by law or where such third parties process the above information on behalf of Google. Google will not associate users' IP addresses with any other data held by Google. By using this site, the user consents to the processing of their data by Google for the methods and purposes indicated above.
                <br/><br/>
                According to a specific agreement (DPA), Google Analytics has been set to anonymize the IP addresses of users visiting our website. Anonymization involves masking the last part of the visitor's IP address, making it impossible to trace back to the individual user.
                <br/><br/>
                The transmission of such data is regulated by a specific agreement between the Company and Google Inc. For more information on Google's data protection policies, you can consult the following link: https://policies.google.com/privacy?hl=en.
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
        <GtaRegular>Customer Service</GtaRegular>

        <FaqDiv>
{/* prima Linea nera */}
        <AccordionContent></AccordionContent>

{/* Prima Domanda */}
          <FilterButton onClick={() => toggleAccordion('Terms & Conditions')}>
            <AccordionItem >
            Terms & Conditions

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
          <GtaRegular16>TERMS & CONDITIONS</GtaRegular16>
            <div>
            <GtaRegular16></GtaRegular16>
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
          </AccordionContent>
{/* Fine Prima Domanda */}

          <FilterButton onClick={() => toggleAccordion('Conditions Of Sales')}>
            <AccordionItem >
            Conditions Of Sales
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
          <GtaRegular16>CONDITIONS OF SALES</GtaRegular16>
            <div>
              <GtaRegular16></GtaRegular16>
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
    <GtaRegular16>PRIVACY AND WEBSITE BROWSING INFORMATION</GtaRegular16>
    <GtaLightLightInfo>
      This Information broadly describes the practices we have adopted. 
      <br/><br/>
      This page describes the management methods of the site with reference to the processing of personal data of users who consult it. The processing is always based on principles of lawfulness and correctness in compliance with all current regulations and appropriate security measures are adopted to protect the data. This privacy policy is also provided as brief information pursuant to art.13 of Legislative Decree 196/2003 and pursuant to art. 13 GDPR 679/2016 European Regulation on privacy, as well as pursuant to the Cookie Provision no. 229 of May 8, 2014, we wish to inform site visitors about the use of the data entered and the cookies used by the site itself. The information is also provided pursuant to Recommendation no. 2/2001 adopted by the working group established by art. 29 of directive no. 95/46/CE to those who interact with the web services of this site, for the protection of personal data, accessible electronically from the address: By using any of our services and/or accepting this Information, for example as part of the registration for one of our services, you consent to the collection and use of Personal Information as described in this Information.
    </GtaLightLightInfo>
  </div>

  <div>
    <GtaRegular16>PERSONAL INFORMATION WE COLLECT</GtaRegular16>
    <GtaLightLightInfo>
      On every occasion of contact or interaction with the guest and in all other aspects of our work, we may collect personal information. This personal information may include: your contact information; personal characteristics, nationality, identity documents, payment information, as well as billing details and account details related to electronic billing; preferences, with your written consent, regarding marketing and communication, and we may send you commercial information with your explicit consent.
    </GtaLightLightInfo>
  </div>

  <div>
    <GtaRegular16>PURPOSE OF PROCESSING</GtaRegular16>
    <GtaLightLightInfo>
      Data processing is aimed at the following purposes:
      <br/><br/>
      for the management of customer relations (issuance of invoices, quotes), to fulfill any contractual obligations, to manage disputes, as well as to comply with regulatory obligations, especially accounting and tax ones;
      <br/><br/>
      2a) Related to the service:
      <br/><br/>
      to send (with your written consent) promotional offers on our services and offers as well as greetings by ordinary mail or via fax or email;
      Technical requests to tailor, complete, modify, or repair jewelry items to the customer's liking and according to their order, by phone, mail, fax
      <br/><br/>
      2b) Electronic receipt program:
      <br/><br/>
      we may automatically enroll you in our electronic receipt program and use your email address to send you invoices or tax receipts, or documents related to your purchase. It is your responsibility to ensure that the email address we have is correct (and preferred).
      We may use your email address to send you, with your written consent, our newsletters, our holiday greetings.
      <br/><br/>
      Additional purposes
      <br/><br/>
      The computer systems and software procedures used to operate this website acquire, during their normal operation, some personal data whose transmission is implicit in the use of Internet communication protocols. These informations are not collected to be associated with identified data subjects, but that by their very nature could, through processing and associations with data held by third parties, allow users to be identified.
      This category of data includes IP addresses or domain names of the computers used by users who connect to the site, URI (Uniform Resource Identifier) addresses of the requested resources, the time of the request, the method used to submit the request to the server, the size of the file obtained in response, the numerical code indicating the status of the response given by the server (successful, error, etc.), and other parameters relating to the user's operating system and computer environment.
      These data are used only to obtain anonymous statistical information on the use of the site and to check its correct functioning and are deleted immediately after processing. The data could also be used to ascertain responsibility in case of hypothetical computer crimes against the site.
    </GtaLightLightInfo>
  </div>

  <div>
    <GtaRegular16>DATA CONTROLLER'S IDENTITY</GtaRegular16>
    <GtaLightLightInfo>
      This site is managed by the Data Controller, identified in the person of the current owner and legal representative of the company:
      <br/><br/>
      CUSI MONTENAPOLEONE S.r.l.
      <br/>registered office: Milan (MI), Via Montenapoleone, 21/A
      <br/>VAT number 01932840182
      <br/>email: info@cusimontenapoleone.com;
      <br/><br/>
      The Data Controller ensures the security, confidentiality, and protection of the data it holds, at any stage of the processing process. The collected data are used in compliance with the current privacy regulations (Legislative Decree 196/2003 and GDPR 679/2016).
    </GtaLightLightInfo>
  </div>

  <div>
    <GtaRegular16>PLACE OF PROCESSING</GtaRegular16>
    <GtaLightLightInfo>
      The data will be processed by the data controller at its registered office and operational headquarters.
    </GtaLightLightInfo>
  </div>

  <div>
    <GtaRegular16>NATURE OF DATA PROVISION</GtaRegular16>
    <GtaLightLightInfo>
      For the purposes referred to in point 2, the provision of data is mandatory, and failure to provide it may make it impossible to obtain what is requested. For the purposes referred to in points 2a) and 2b), the provision of data is optional and does not prevent the provision of the requested service.
    </GtaLightLightInfo>
  </div>

  <div>
    <GtaRegular16>REFUSAL TO PROVIDE DATA</GtaRegular16>
    <GtaLightLightInfo>
      The data subject may refuse to provide their navigation data to the Data Controller. To do this, they must disable cookies by following the instructions provided by the browser in use. Disabling cookies may worsen the navigation functionality of the site.
    </GtaLightLightInfo>
  </div>

  <div>
    <GtaRegular16>DATA RECIPIENTS</GtaRegular16>
    <GtaLightLightInfo>
      No data derived from the web service (thus navigation data specified above and cookies) is communicated or disseminated (except for communication to judicial or police authorities if necessary).
      The data are processed by personnel specifically appointed in writing to process the data (administrative staff and public relations staff, including those external to the Company, IT systems management staff, including those external to the Company who may also perform system administrator functions and are in this case appointed as such pursuant to the Privacy Guarantor's Provision and subsequent amendments, interns, our consultants, and individuals appointed to the specific management of IT systems, including those external to the Company) only if the processing is necessary for the performance of their duties, performing only the necessary operations for the performance of their duties.
    </GtaLightLightInfo>
  </div>

  <div>
    <GtaRegular16>RIGHTS OF DATA SUBJECTS</GtaRegular16>
    <GtaLightLightInfo>
      Pursuant to art. 7 of the Privacy Code and arts. 15 (right of access), 16 (right of rectification), 17 (right to erasure), 18 (right to restriction of processing), 20 (right to data portability), 21 (right to object), and 22 (right to object to automated decision-making) of GDPR 679/2016, the data subject will exercise their rights by writing to the Data Controller at the address indicated above or via email at info@cusimontenapoleone.com, and will have the right to obtain without delay, from the Data Controller, information on the existence of the processing of personal data concerning them, the purposes, the methods of processing, the logic applied in case of processing carried out with the aid of electronic instruments, the identifying details of the Data Controller and the managers, the subjects or categories of subjects to whom the personal data may be communicated or who may become aware of them as managers or appointees.
      <br/><br/>
      The data subject has the right to obtain the updating, rectification or, when interested, the integration of the data, the erasure, anonymization, or blocking of data processed unlawfully, including data that does not need to be retained for the purposes for which the data were collected or subsequently processed, the certification that the operations referred to in letters a) and b) have been made known, also as regards their content, to those to whom the data have been communicated or disseminated, except where such compliance is impossible or involves a manifestly disproportionate effort compared to the protected right.
      <br/><br/>
      The data subject has the right to object, in whole or in part:
      <br/><br/>
      a) for legitimate reasons to the processing of personal data concerning them, even if pertinent to the purpose of collection;
      <br/><br/>
      b) to the processing of personal data concerning them for the purpose of sending advertising materials or direct selling or for carrying out market research or commercial communication.
    </GtaLightLightInfo>
  </div>

  <div>
    <GtaRegular16>COOKIES</GtaRegular16>
    <GtaLightLightInfo>
      Cookies are small text files that are sent to your computer. This site uses the following third-party technical cookies: Google Analytics. This site does not use profiling cookies. The computer systems and software procedures used to operate this website acquire, during their normal operation, some personal data whose transmission is implicit in the use of Internet communication protocols. These informations are not collected to be associated with identified data subjects, but that by their very nature could, through processing and associations with data held by third parties, allow users to be identified.
    </GtaLightLightInfo>
  </div>

  <div>
    <GtaRegular16>Google Analytics</GtaRegular16>
    <GtaLightLightInfo>
      Our site uses Google Analytics from Google, Inc. (hereinafter "Google") to generate statistics on the use of the website; Google Analytics uses cookies (not third-party) that do not store personal data. The information obtained from the cookies about users' use of the website (including IP addresses) will be transmitted by the user's browser to Google, located at 1600 Amphitheatre Parkway, Mountain View, CA 94043, United States, and stored on the company's servers.
      <br/><br/>
      According to the terms of service in force, Google will use this information, as an independent data controller, for the purpose of tracking and examining the use of the website, compiling reports on website activities for website operators, and providing other services related to website activities, connection methods (mobile, PC, used browsers, etc.), and search and reach methods of the website pages. Google may also transfer this information to third parties where required by law or where such third parties process the above information on behalf of Google. Google will not associate users' IP addresses with any other data held by Google. By using this site, the user consents to the processing of their data by Google for the methods and purposes indicated above.
      <br/><br/>
      According to a specific agreement (DPA), Google Analytics has been set to anonymize the IP addresses of users visiting our website. Anonymization involves masking the last part of the visitor's IP address, making it impossible to trace back to the individual user.
      <br/><br/>
      The transmission of such data is regulated by a specific agreement between the Company and Google Inc. For more information on Google's data protection policies, you can consult the following link: https://policies.google.com/privacy?hl=en.
    </GtaLightLightInfo>
  </div>
            </>
          </AccordionContent>

{/* Fine Prima Domanda */}






         

      
        </FaqDiv>
      </Mobile>


    </Container>
  );
};

export default Legal;
