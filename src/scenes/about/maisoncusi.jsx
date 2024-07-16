import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AnnibaleCusi from "../../assets/about2.avif";
import SpillaDelPozzo from "../../assets/about.avif";
import CollierMariaStuarda from "../../assets/about3.avif";
import ViaClerici from "../../assets/about4.avif";
import RinaldoCusi from "../../assets/about5.avif";
import RobertoCusi from "../../assets/about6.avif";
import GiorgioCusi from "../../assets/about7.avif";
import BachecaAvif from "../../assets/bacheca.avif"
import LazyLoad from 'react-lazyload';
import Footer from "../global/Footer"
import { useTranslation } from 'react-i18next';

const Container = styled.div`
  margin-top:120px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height:auto;
  align-items:center;

  overflow:hidden;
`;

const DivBacheca = styled.div`

display: flex;
flex-direction: column;
width: 100%;
height:auto;
align-items:center;


`;

const Boxstoryboard = styled.div`

display: flex;
flex-direction: row;
width: 90%;
height: auto;

margin-top: 10%;
align-items:center;


@media(max-width: 1000px){

  width: 90%;
}

@media(max-width: 900px){
  flex-direction: column;


    height: auto;

}


`;
const Boxstoryboard4 = styled.div`

display: flex;
flex-direction: row;
width: 90%;

margin-top:10%;
align-items:center;



@media(max-width: 900px){
  flex-direction: column-reverse;


    height: auto;

}


`;
const Boxstoryboard2 = styled.div`

display: flex;
flex-direction: row;
width: 90%;
height:auto;
align-items:center;
margin-top:6%;



@media(max-width: 900px){
  flex-direction: column;


    height: auto;

}




`;
const Boxstoryboard3 = styled.div`

display: flex;
flex-direction: row;
width: 90%;
align-items:center;
margin-top:10%;


@media(max-width: 900px){
  flex-direction: column-reverse;


    height: auto;

}




`;

const BoxFamiglia = styled.div`

display: flex;
flex-direction: column;
width: 79%;



align-items:center;

text-align: center; /* Centra il testo all'interno del div */
margin-bottom:5%;
margin-top:2%;

@media(max-width: 1000px){
  width: 85%;

}

@media(max-width: 900px){
  width: 100%;

}

`;

const Quote = styled.div`

display: flex;
flex-direction: column;
width: 100%;

margin-top:7%;
margin-bottom:1%;


align-items:center;
justify-content:center;

`;



const Introduzione = styled.p`
width:80%;
text-align: center;
margin-top:1%;
margin-bottom:3%;
font-family: 'GTAmericaLight';
font-size:16px;

@media(max-width: 1000px){
  font-size:14px; 
  width:85%;
  margin-bottom:6%;
}
@media(max-width: 900px){

  width:85%;

}

@media(max-width: 680px){
  font-size:14px; 
  width:85%;

}


`;

const DivImmagineBacheca = styled.div`

width:100%;
height:100%;



`;
const ImmagineBacheca = styled.img`
width:100%;
margin-bottom:4%;

@media(max-width: 1000px){

  margin-bottom:8%;
}
`;
const ImmagineFamiglia = styled.img`
width: 100%;





@media(max-width: 1000px){

  margin-bottom:4%;
}

@media(max-width: 900px){
  width: 85%;

}


`;
const DivImmagine = styled.div`

width:50%;
height:100%;

display:flex;
align-items:center;
justify-content: center;




@media(max-width:1000px){
  width:90%;
  height:auto;
  margin-bottom: 4%;
}
  @media(max-width:900px){
  width:95%;
  height:auto;
  margin-bottom: 4%;
}




`;

const ContenitoreDivInfo = styled.div`

height:100%;

width: 100%;

@media(max-width: 1200px){


}



`;

const DivInfo = styled.div`

width:50%;

align-items:center;
justify-content:center;
display:flex;
flex-direction: column;

overflow:hidden;

@media(max-width: 1000px){
  width:100%;
  height:auto;


}

@media(max-width: 900px){

  width:95%;

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
const ABC24 = styled.p`
font-family: 'ABCGaisyr-Regular';
font-size: 24px; 
margin-bottom: 0;
margin-top: 0;
width:75%;

@media(max-width:1000px){
  font-size: 21px; 


}

@media(max-width:900px){


  width:100%;
}

@media(max-width:680px){
  font-size: 21px; 

  width:100%;
}

`;
const ABC24Sinistra = styled.p`
font-family: 'ABCGaisyr-Regular';
font-size: 24px; 
margin-bottom: 0;
margin-top: 0;
width:75%;


@media(max-width:1000px){
 

  width:90%;
}
  @media(max-width:900px){
 

  width:100%;
}

@media(max-width:680px){
  font-size: 21px; 

  width:100%;
}

`;

const Description = styled.p`
font-family: 'ABCGaisyr-Book';
font-size: 16px; 
margin-bottom: 0;
width:75%;
font-weight: 200;


@media(max-width:1200px){
  font-size: 14px; 
  width:75%;
}

@media(max-width:900px){

  width:100%;
}

@media(max-width:680px){
  font-size: 14px; 
  width:100%;
}

`;
const DescriptionSinistra = styled.p`
font-family: 'ABCGaisyr-Book';
font-size: 16px; 
margin-bottom: 0;
width:75%;
font-weight: 200;



@media(max-width:1200px){
  font-size: 14px; 

}
@media(max-width:1000px){

  width:90%;
}

@media(max-width:900px){

  width:100%;
}

@media(max-width:680px){
  font-size: 14px; 
  width:100%;
}

`;
const DescriptionLight = styled.p`
font-family: 'GTAmericaLight';
font-size: 12px; 
margin-bottom: 0;
width:75%;
font-weight: 200;

@media(max-width: 900px){
  display:none;
  width:90%;
}

@media(max-width:680px){
  display:none;
  width:90%;
}

`;
const Description2 = styled.p`
font-family: 'ABCGaisyr-Book';
font-size: 16px; 
margin-bottom: 0;
margin-top: 6%;
margin-bottom: 6%;
width:88%;
font-weight: 200;
text-align:left;

@media(max-width: 1000px){

  width:88%;
  
}

@media(max-width:900px){
 

  text-align:left;
  width:85%;
  
}

@media(max-width:680px){
  font-size: 14px; 

  text-align:left;
  width:85%;
  
}

`;

const Cit = styled.p`
font-family: 'ABCGaisyr-Book';
font-size: 24px; 
width:70%;
text-align: center;



@media(max-width: 900px){
  width:80%;

}

@media(max-width: 680px){
  width:80%;
  font-size: 17px; 
}



`;
const Light16 = styled.p`
font-family: 'GTAmericaLight';
font-size: 16px; 
width:60%;
text-align: center;
margin-bottom:4%;

@media(max-width:1000px){
  width: 85%;

}

@media(max-width:900px){
  width:80%;

  margin-bottom:8%;
}

@media(max-width:680px){
  width:80%;
  font-size: 14px; 
  margin-bottom:8%;
}

`;

const ABC24Centered = styled.p`
font-family: 'ABCGaisyr-Regular';
font-size: 35px; 
margin-bottom: 0;
margin-top: 7%;

@media(max-width:1000px){
  font-size: 30px; 

}

@media(max-width:800px){
  font-size: 28px; 

}

@media(max-width:900px){

  width:88%;
  margin-bottom: 2%;

}


@media(max-width:680px){
  font-size: 25px; 

  width:85%;
  margin-bottom: 2%;

}
`;

const ImmagineAnnibaleCusi = styled.img`
width: 75%;
height: auto;


@media(max-width:1000px){


  width:90%;

}

@media(max-width:900px){


  width:100%;

}

@media(max-width:680px){


  width:100%;

}
`;
const ImmagineStuarda= styled.img`
width: 75%;



@media(max-width:1000px){

  margin-top:8%;

  width:90%;

}

@media(max-width:900px){

  margin-top:8%;

  width:100%;

}

@media(max-width:680px){


  width:100%;

}

`;

const CollieImg = styled.img`
width: 75%;
height: auto;




@media(max-width:1000px){

  margin-top:8%;

  width:90%;

}

@media(max-width:900px){

  margin-left:0%;
  width:100%;

}

`;
const RinaldoCusiImg = styled.img`
width: 75%;
height: auto;




@media(max-width:1000px){

  margin-top:8%;

  width:90%;

}

@media(max-width:900px){

  margin-left:0%;
  width:100%;

}

`;
const ImmagineStuarda2= styled.img`
width:75%;
height:auto;


@media(max-width: 1200px){

}



`;

const LazyLoadWrapper = styled.div`
opacity: ${({ loaded }) => (loaded ? 1 : 0)};
transition: opacity 1s ease-in-out;
`;
const ImmagineDelay = styled.img`
width:100%;
margin-bottom:4%;


@media(max-width: 1000px){

  margin-bottom:8%;
}
`;

const MaisonCusi = () => {






const [loaded, setLoaded] = React.useState(false);
const handleContentLoad = () => {
  setLoaded(true);
};



const { t } = useTranslation();
return (
  <>
    <LazyLoad once>
      <LazyLoadWrapper loaded={loaded} onLoad={handleContentLoad}>
        <Container>
          <DivBacheca>
            <ABC>{t('story.maisonCusi')}</ABC>
            <Light16>{t('story.intro')}</Light16>
            <ImmagineDelay src={BachecaAvif} effect="blur" />
          </DivBacheca>

          <Boxstoryboard>
            <DivImmagine>
              <ImmagineAnnibaleCusi src={AnnibaleCusi} effect="blur" />
            </DivImmagine>
            <DivInfo>
              <ABC24>1886</ABC24>
              <ABC24>{t('story.birth')}</ABC24>
              <Description>{t('story.birthDescription1')}</Description>
              <Description>{t('story.birthDescription2')}</Description>
            </DivInfo>
          </Boxstoryboard>

          <Quote>
            <Cit>{t('story.quote')}</Cit>
          </Quote>

          <Boxstoryboard2>
            <DivImmagine>
              <ImmagineStuarda2 src={SpillaDelPozzo} effect="blur" />
            </DivImmagine>
            <DivInfo>
              <Description>{t('story.wellBroochDescription1')}</Description>
              <Description>{t('story.wellBroochDescription2')}</Description>
              <DescriptionLight>{t('story.wellBroochLight')}</DescriptionLight>
            </DivInfo>
          </Boxstoryboard2>

          <Boxstoryboard3>
            <DivInfo>
              <ABC24Sinistra>1906</ABC24Sinistra>
              <ABC24Sinistra>{t('story.maryStuartNecklaceTitle')}</ABC24Sinistra>
              <DescriptionSinistra>{t('story.maryStuartNecklaceDescription')}</DescriptionSinistra>
            </DivInfo>
            <DivImmagine>
              <CollieImg src={CollierMariaStuarda} effect="blur" />
            </DivImmagine>
          </Boxstoryboard3>

          <Boxstoryboard>
            <DivImmagine>
              <ImmagineStuarda src={ViaClerici} effect="blur" />
            </DivImmagine>
            <DivInfo>
              <ABC24>1921</ABC24>
              <ABC24>{t('story.viaClericiTitle')}</ABC24>
              <Description>{t('story.viaClericiDescription')}</Description>
            </DivInfo>
          </Boxstoryboard>

          <Boxstoryboard4>
            <DivInfo>
              <ABC24Sinistra>1895-1979</ABC24Sinistra>
              <ABC24Sinistra>{t('story.rinaldoCusiTitle')}</ABC24Sinistra>
              <DescriptionSinistra               dangerouslySetInnerHTML={{
                __html: t('story.rinaldoCusiDescription').replace(/\n/g, '<br />'),
              }}/>
            </DivInfo>
            <DivImmagine>
              <RinaldoCusiImg src={RinaldoCusi} effect="blur" />
            </DivImmagine>
          </Boxstoryboard4>

          <Boxstoryboard>
            <DivImmagine>
              <ImmagineStuarda src={RobertoCusi} effect="blur" />
            </DivImmagine>
            <DivInfo>
              <ABC24>1926-1996</ABC24>
              <ABC24>{t('story.robertoCusiTitle')}</ABC24>
              <Description>{t('story.robertoCusiDescription')}</Description>
            </DivInfo>
          </Boxstoryboard>

          <BoxFamiglia>
            <ABC24Centered>{t('story.familyTitle')}</ABC24Centered>
            <Introduzione>{t('story.familyIntro')}</Introduzione>
            <ImmagineFamiglia src={GiorgioCusi} effect="blur" />
            <Description2
              dangerouslySetInnerHTML={{
                __html: t('story.familyDescription').replace(/\n/g, '<br />'),
              }}
            />
          </BoxFamiglia>
        </Container>
        <Footer />
      </LazyLoadWrapper>
    </LazyLoad>
  </>
);
};

export default MaisonCusi;
