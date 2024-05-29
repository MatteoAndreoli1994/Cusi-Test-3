import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import Maison1 from "../../assets/maison1.jpg"
import Maison2 from "../../assets/maison2.jpg"
import { useLocation } from 'react-router-dom';
import emailjs from "@emailjs/browser";
import { BarLoader, ClipLoader } from 'react-spinners';
import LazyLoad from 'react-lazyload';
import { HashLink } from 'react-router-hash-link';
import Footer from "../global/FooterNoSubscribe"

const StyledHashLink = styled(HashLink)`
text-decoration: none; /* Rimuovi sottolineature */
color: inherit; /* Usa il colore del testo predefinito */
/* Aggiungi altri stili del bottone qui, se necessario */
`;

const SubscribeButton = styled.button`
  background-color: black;
  color: white;
  padding: 18px;
  border: 1px solid #000;
  width: 120px;

  cursor: pointer;
  font-size: 13px;

  margin: 5% auto 0;
  display: flex; /* Use flex container */
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
  height: 30px;

  text-align: center;

`;


const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
min-height: 200vh;
margin-top:120px;
align-items: center;
margin-bot:1%;
overflow:hidden;


`;

  const Box = styled.div`

display: flex;
flex-direction: row;
width: 85%;

margin-bottom:2%;
margin-top:2%;

align-items:center;

margin-top:3%;


@media(max-width:900px){
  flex-direction: column;
  align-items:flex-start;


}


`;
const DivImmagine = styled.div`

width:50%;
height:100%;
display:flex;
align-items:center;
justify-content:center;




@media(max-width:900px){
  width:100%;
}
`;
const Descrizione = styled.p`
width:100%;

font-family: 'ABCGaisyr-Book';
font-size: 20px; 
margin-top:0;
margin-bottom:1%;
font-weight: normal; 

@media(max-width:680px){
  font-size: 17.5px; 
}

`;
const TitoloStoryBoard = styled.p`
  width: 100%;

  font-family: 'ABCGaisyr-Book';
  font-size: 36px;
  align-items: center;
  justify-content: center;
  margin-bottom:1%;

  @media(max-width:680px){
    font-size: 31.5px;

  }
`;
const DivInfo = styled.div`

width:50%;
height:100%;
align-items:center;

justify-content:center;


display:flex;
flex-direction: column;

@media(max-width: 900px){
  width: 100%;
}





`;

const Maison2Img = styled.img`
width:100%;
min-height:50vh;
@media(max-width:900px){

}
`;
const Titolo = styled.h1`
margin-top:4%;
margin-bottom:1%;
`;

const Introduzione = styled.p`
width:50%;
text-align: center;
margin-top:0;
margin-bottom:3%;

`;

const FormContainer = styled.div`
  width: 60%;

  padding: 20px;

  border-radius: 10px;
  margin: 20px auto;



  @media(max-width: 1200px){
    width: 89%;

  }

  @media(max-width: 900px){
    width:91%;
  }
  @media(max-width: 480px){
    width:95%;
  }

`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px; /* Aumenta la distanza tra le checkbox */
  margin-top:2%;

  width:100%;
  height:100%;


  
  @media(max-width: 680px){
    margin-top:4%;
    margin-bottom:2%;

  }
`;

const Checkbox = styled.input`
  position: relative;
  width: 2em;
  height: 2em;
  background-color: white;
  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid #ddd;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
  margin-right:10px;


  &:checked {
    background-color: transparent;

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 70%;
      height: 70%;
      background-color: black;
      border-radius: 50%;
    }
  }
`;
const Checkbox2 = styled.input`
  position: relative;
  width: 2em;
  height: 2em;
  background-color: white;
  border: 1px solid black;
  vertical-align: middle;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
  padding: 0; /* Rimuovi il padding */
  margin-top: 13px; /* Rimuovi il margin */
  border-radius: 0; /* Rimuovi i bordi arrotondati */

  margin-right:10px;
  margin-left:0px;

  &:checked {
    &::before {
      content: '✔';
      display: flex;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 1.2em;
      color: black;
    }
  }

  @media (max-width: 900px) {
    width: 2em;
    height: 2em;
  }
`;






const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;

`;
const CheckboxLabel2 = styled.label`
  display: flex;
  width: 100%;

  height:100%;

  @media(max-width: 800px){
    margin-top:4%;
  }








`;
const DivCheckBox = styled.div`

  height: 20px; /* Altezza desiderata */
  width:40px;
  display: flex;
  align-items: center; /* Centra verticalmente */
  justify-content: left; /* Centra orizzontalmente */

`;


const FlexContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

`;
const DivInserimento = styled.div`

  display:flex;
  width:60%;
  height:100%;
  flex-direction:column;



@media(max-width: 1200px){
  width:70%;
  margin-left:0;
}

@media(max-width: 900px){
  width:75%;
  margin-left:0;

}
@media(max-width: 800px){
  width:75%;
  margin-left:0;


}


  @media(max-width: 900px){
    width:100%;
    margin-left:0;
  }

`;

const Subtitle = styled.div`

  display:flex;
  width:36%;
  height:100%;
  flex-direction:column;
  margin-top:1%;
  align-items:center;
  tex-align:center;
  justify-content:center;


  @media(max-width: 900px){
    width:80%;

  }

`;

const InputLabel = styled.label`
  display: flex;
  flex-direction: column;

  margin-top: 20px;
  width:50%;

  span {
    font-size: 16px; // Modifica la grandezza del font del sottotitolo qui
  }

`;
const InputLabelSolo = styled.label`
  display: flex;
  flex-direction: column;

  margin-top: 20px;
  width:100%;

  span {
    font-size: 16px; // Modifica la grandezza del font del sottotitolo qui
  }


`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid black;
  border-radius: 0; /* Rimuovi i bordi arrotondati */
  margin-top: 14px;
  padding-bottom: 3px; /* Aggiungi spazio per separare la linea dal testo */
  outline: none; /* Disattiva l'outline */
  width: 100%; /* Occupa il 50% della larghezza del FormContainer */
  font-size: 16px; // Modifica la grandezza del font qui
  background-color:white;
  color:black;
  font-family: 'GTAmericaLight';
  padding-left: 0; /* Imposta il padding sinistro a zero */


  @media(max-width:680px){
    font-size: 14px; 
  }

`;
const InputSelect = styled.select`
  border: none;
  border-bottom: 1px solid black;
  margin-top: 14px;
  padding-bottom: 3px;
  outline: none;
  width: 100%;
  border-radius: 0; /* Rimuovi i bordi arrotondati */
  appearance: none; /* Nasconde la freccia della selezione predefinita */
  background-color: transparent; /* Imposta lo sfondo trasparente */
  color:black;
  font-family: 'GTAmericaLight';
  padding-left: 0; /* Imposta il padding sinistro a zero */

  /* Personalizza il caret (la freccia sulla sinistra) */
  background-image: url('data:image/svg+xml;utf8,<svg fill="black" height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>');
  background-repeat: no-repeat;
  background-position: right center;
  padding-right: 20px; /* Spazio per la freccia */

  option[value="Cusi Montenapoleone"] {
    font-family: 'GTAmericaLight';
  }



`;

//FONT
const ABC = styled.p`
font-family: 'ABCGaisyr-Book';
font-size: 40px; 
margin-bottom: 0%;
margin-top:4%;

@media(max-width: 1200px){
  font-size: 35px; 
  
  }
  @media(max-width: 680px){
    font-size: 30px; 
    
    }


`;
const AbcGrassetto = styled.p`
font-family: 'ABCGaisyr-Regular';
font-size: 17.5px; 
margin-bottom: 0;

@media(max-width:680px){
  font-size: 15.6px; 
}


`;

const GtaRegular = styled.p`
font-family: 'GTAmericaRegular';
font-size: 16px;
margin-left:10px;
width:85%;

@media(max-width:680px){
  font-size: 14px;
}

`;
const GtaRegular16 = styled.p`
font-family: 'GTAmericaRegular';
font-size: 16px;


@media(max-width:680px){
  font-size: 14px; 
}



`;
const GtaLight = styled.p`
font-family: 'GTAmericaLight';
font-size: 16px;
margin-top:1%;
margin-bottom:2%;

@media(max-width:680px){
  font-size: 14px; 
}


`;
const GtaLightCenter = styled.p`
font-family: 'GTAmericaLight';
font-size: 16px;
margin-top:1%;
margin-bottom:2%;

text-align:center;

@media(max-width:680px){
  font-size: 14px; 
}


`;
const GtaLightCentered = styled.p`
font-family: 'GTAmericaLight';
font-size: 16px;
margin-top:0;
margin-bottom:0;



@media(max-width:680px){
  font-size: 11px; 
  margin-top:0;
  width:100%;
  
}

`;
const LazyLoadWrapper = styled.div`
opacity: ${({ loaded }) => (loaded ? 1 : 0)};
transition: opacity 3s ease-in-out;
`;

const DivInfo2 = styled.div`
display: flex;
min-height: 100px;
align-items: center;
justify-content: flex-start;
flex-direction: column;
overflow: hidden;


margin-bottom: 20px;
margin-top:4%;
transition: min-height 0.5s ease;
width: 50%;

@media(max-width:680px){
  width:80%;
}

`;
const DivDescrizione = styled.div`
display: flex;
width: 100%;

margin-bottom: 2%;
align-items: flex-start;
justify-content: center;
text-align: center;

`;


const Boutiques = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const message = searchParams.get('message');

  

  // Verifica se il messaggio è presente nell'URL
  if (message) {
    // Trova l'elemento con ID 'Book'
    const bookElement = document.getElementById('Book');

    // Controlla se l'elemento esiste
    if (bookElement) {
        // Scorri la visuale della pagina verso l'elemento 'Book'
        bookElement.scrollIntoView({ behavior: 'smooth' });
    }
  }


  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionNewsletter, setSelectedOptionNewsletter] = useState(null);
  const [selectedBoutique, setSelectedBoutique] = useState('');
  const [loaded, setLoaded] = React.useState(false);
  const handleContentLoad = () => {
    setLoaded(true);
  };


  const handleBoutiqueChange = (event) => {
    setSelectedBoutique(event.target.value);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i20lvko",
        "template_d5ye4wj",
        form.current,
        "rvcubz2OA8D2-5HVf"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


  const handleCheckboxChange = (option) => {
    setSelectedOption(option);
  };
  const handleCheckboxChangeNewsletter = (checked) => {
    setSelectedOptionNewsletter(checked);

  };
  
const [loading, setLoading] = useState(false);
const [sent, setSent] = useState(false);
const handleSubmit = (e) => {
  e.preventDefault();

  // Imposta lo stato di caricamento su true
  setLoading(true);

  // Simula una richiesta asincrona
  setTimeout(() => {
    // Imposta lo stato di caricamento su false
    setLoading(false);

    // Imposta lo stato "sent" su true
    setSent(true);
  }, 2000); // 2000 millisecondi = 2 secondi
};

useEffect(() => {
  const handleHashChange = () => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  handleHashChange(); // Scroll on initial load
  window.addEventListener('hashchange', handleHashChange); // Scroll on hash change

  return () => {
    window.removeEventListener('hashchange', handleHashChange);
  };
}, []);


  
  

  




  




  return (
    <>

        
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>
<Container>


  <ABC>Boutiques</ABC>
  <DivDescrizione>
    <GtaRegular>We would be delighted to welcome you so that you may discover 
    and try on your favorite creations.
    </GtaRegular>
  </DivDescrizione>




  <Box>
    <DivImmagine>
      <Maison2Img src={Maison2}/>

    </DivImmagine>

    <DivInfo>
      <DivInserimento>

        <TitoloStoryBoard>Milano</TitoloStoryBoard>
        <Descrizione>Via Montenapoleone 21/A, 20121, Italy</Descrizione>
        <Descrizione></Descrizione>    <Descrizione></Descrizione>
        <AbcGrassetto>Monday - Saturday</AbcGrassetto>
        <Descrizione>10:30-13:30</Descrizione>
        <Descrizione>15:00-19:00</Descrizione>
        <Descrizione></Descrizione>    <Descrizione></Descrizione>
        <AbcGrassetto>Contact Us</AbcGrassetto>
        <Descrizione>(+39) 0276014323 </Descrizione>

      </DivInserimento>



        

    </DivInfo>

  </Box>

  <Box>
    <DivImmagine>
      <Maison2Img src={Maison1}/>

    </DivImmagine>

    <DivInfo>
    <DivInserimento>
      <TitoloStoryBoard>Portofino</TitoloStoryBoard>
      <Descrizione>Calata Marconi 14, 16034 Italy</Descrizione>
      <Descrizione></Descrizione>    <Descrizione></Descrizione>
      <AbcGrassetto>Monday - Saturday</AbcGrassetto>
      <Descrizione>10:30-13:30</Descrizione>
      <Descrizione>15:00-19:00</Descrizione>
      <Descrizione></Descrizione>    <Descrizione></Descrizione>
      <AbcGrassetto>Contact Us</AbcGrassetto>
      <Descrizione>(+39) 0373214621 </Descrizione>
    </DivInserimento>

        

    </DivInfo>

  </Box>


  <ABC id="Book">Book an appointment</ABC>
  <Subtitle>  <GtaLightCenter>Our staff will respond from Monday to Friday from 9 am to 7 pm 
and on Saturdays from 9 am to 5 pm. 
  </GtaLightCenter>
</Subtitle>





  <FormContainer >
  <form ref={form} onSubmit={sendEmail}>
      <span><GtaLight > Title*</GtaLight></span>

      <CheckboxContainer >
        <CheckboxLabel>
          <Checkbox
            type="checkbox"
            checked={selectedOption === 'Mr.'}
            onChange={() => handleCheckboxChange('Mr.')}
          />


          <span><GtaLight>Mr.</GtaLight></span>
        </CheckboxLabel>
        <CheckboxLabel>
          <Checkbox
            type="checkbox"
            checked={selectedOption === 'Miss, Mrs, Ms'}
            onChange={() => handleCheckboxChange('Miss, Mrs, Ms')}
          />

          <span><GtaLight> Miss</GtaLight></span>
        </CheckboxLabel>
        <CheckboxLabel>
          <Checkbox
            type="checkbox"
            checked={selectedOption === "I'd rather not say"}
            onChange={() => handleCheckboxChange("I'd rather not say")}
          />

          <span><GtaLight> I'd rather not say </GtaLight></span>
        </CheckboxLabel>

        <Input type="hidden" name="user_title" value={selectedOption} />
      </CheckboxContainer>


      {/* Altre parti del form possono essere aggiunte qui */}

      <FlexContainer>
        <InputLabel>
          <span><GtaLight> First Name* </GtaLight></span>
          <Input type="text" name="user_name" />
        </InputLabel>
        <InputLabel>
          <span><GtaLight> Last Name* </GtaLight></span>
          <Input type="text" name="user_lastname"/>
        </InputLabel>
      </FlexContainer>

      <FlexContainer >
        <InputLabel>
          <span> <GtaLight> E-mail* </GtaLight></span>
          <Input type="email" name="user_email" />
        </InputLabel>
        <InputLabel>
          <span> <GtaLight> Phone Number* </GtaLight></span>
          <Input type="tel" name="user_phonenumber"/>
        </InputLabel>
      </FlexContainer>

      <FlexContainer>
        <InputLabelSolo>
          <span><GtaLight> Select Boutique* </GtaLight></span>
          <InputSelect
            type="text"
            name="user_boutiques"
            value={selectedBoutique}
            onChange={handleBoutiqueChange}
          >
            <option value="Cusi Montenapoleone"><GtaLight>Cusi Montenapoleone</GtaLight></option>

            <option value="Cusi Portofino"><GtaLight>Cusi Portofino </GtaLight></option>
          </InputSelect>
        </InputLabelSolo>

      </FlexContainer>

      <FlexContainer >
        <InputLabel>
          <span><GtaLight> Appointment Date* </GtaLight></span>
          <Input type="date" name="user_date"/>
        </InputLabel>
        <InputLabel>
          <span> <GtaLight>Time*</GtaLight></span>
          <Input type="time" name="user_dateh"/>
        </InputLabel>
      </FlexContainer>

            <FlexContainer >
        <InputLabelSolo>
          <span ><GtaLight> Product* </GtaLight></span>
          <Input
                type="text"
                name="product"
                value={message}
                readOnly={message} // Imposta readOnly a true se non c'è un messaggio nell'URL
                
              />
        </InputLabelSolo>

      </FlexContainer>

      <FlexContainer >
        <InputLabelSolo>
          <span ><GtaLight> Message* </GtaLight></span>
          <Input type="text" name="message" />
        </InputLabelSolo>

      </FlexContainer>



      

      <CheckboxContainer>
        <CheckboxLabel2>
        <DivCheckBox>
          <Checkbox2
          type="checkbox"
          checked={selectedOptionNewsletter === true}
          onChange={(event) => handleCheckboxChangeNewsletter(event.target.checked)}
          />
        </DivCheckBox>



          <span> <GtaLightCentered> Be the first to hear about new arrivals from our special events, and other news from the world of Cusi. </GtaLightCentered></span>
          <Input type="hidden" name="user_newsletter" value={selectedOptionNewsletter} />
        </CheckboxLabel2>

      </CheckboxContainer>

      <SubscribeButton type="submit" onClick={handleSubmit} disabled={loading}>
        {loading ? (
          <ClipLoader color={'#fff'} loading={loading} size={20} />
        ) : sent ? (
          <GtaRegular16> SENT </GtaRegular16>
        ) : (
          <GtaRegular16> BOOK </GtaRegular16>
        )}
      </SubscribeButton>






    </form>
    </FormContainer>





</Container>

<Footer/>



    </>
  );
};

export default Boutiques;
