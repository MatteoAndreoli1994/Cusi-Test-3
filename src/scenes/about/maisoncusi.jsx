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
import Footer from "../global/FooterNoSubscribe"

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
width: 85%;
height: auto;

margin-top: 6%;

@media(max-width: 1000px){

  width: 85%;
}

@media(max-width: 680px){
  flex-direction: column;


    height: auto;

}


`;
const Boxstoryboard4 = styled.div`

display: flex;
flex-direction: row;
width: 85%;

margin-top:6%;



@media(max-width: 680px){
  flex-direction: column-reverse;


    height: auto;

}


`;
const Boxstoryboard2 = styled.div`

display: flex;
flex-direction: row;
width: 85%;
height:auto;

margin-top:6%;


@media(max-width: 680px){
  flex-direction: column;


    height: auto;

}




`;
const Boxstoryboard3 = styled.div`

display: flex;
flex-direction: row;
width: 85%;

margin-top:6%;


@media(max-width: 680px){
  flex-direction: column-reverse;


    height: auto;

}




`;

const BoxFamiglia = styled.div`

display: flex;
flex-direction: column;
width: 85%;



align-items:center;

text-align: center; /* Centra il testo all'interno del div */
margin-bottom:5%;
margin-top:2%;

@media(max-width: 680px){
  width: 100%;

}

`;

const Quote = styled.div`

display: flex;
flex-direction: column;
width: 100%;

margin-top:2%;



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
min-height: 30vh;




@media(max-width: 1000px){

  margin-bottom:4%;
}

@media(max-width: 680px){
  width: 85%;

}


`;
const DivImmagine = styled.div`

width:50%;
height:100%;

display:flex;
align-items:center;
justify-content: flex-start;




@media(max-width:1000px){
  width:100%;
  height:auto;
  margin-bottom: 4%;
}


`;
const DivImmagine2 = styled.div`

width:50%;
height:100%;
display:flex;
align-items:center;
justify-content:center;



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
  margin-top:4%;

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
width:100%;


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

@media(max-width:680px){
  font-size: 14px; 
  width:100%;
}

`;
const DescriptionSinistra = styled.p`
font-family: 'ABCGaisyr-Book';
font-size: 16px; 
margin-bottom: 0;
width:100%;
font-weight: 200;

@media(max-width:1200px){
  font-size: 14px; 

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

@media(max-width:680px){
  display:none;
  width:90%;
}

`;
const Description2 = styled.p`
font-family: 'ABCGaisyr-Book';
font-size: 16px; 
margin-bottom: 0;
margin-top: 4%;
width:88%;
font-weight: 200;

@media(max-width: 1000px){

  width:88%;
  
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
margin-bottom:4%;
margin-top:3%;

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

@media(max-width:680px){
  font-size: 25px; 

  width:88%;
  margin-bottom: 2%;

}
`;

const ImmagineAnnibaleCusi = styled.img`
width: 100%;
height: auto;
min-height: 30vh;

@media(max-width:1000px){


  width:100%;

}

@media(max-width:680px){


  width:100%;

}
`;
const ImmagineStuarda= styled.img`
width: 100%;
min-height: 30vh;


@media(max-width:1000px){

  margin-top:8%;

  width:100%;

}

@media(max-width:680px){


  width:100%;

}

`;

const CollieImg = styled.img`
width: 100%;
height: auto;
min-height: 30vh;
margin-left:15%;


@media(max-width:1000px){

  margin-top:8%;

  width:100%;

}

@media(max-width:680px){

  margin-left:0%;
  width:100%;

}

`;
const RinaldoCusiImg = styled.img`
width: 90%;
height: auto;
min-height: 30vh;
margin-left:12.5%;


@media(max-width:1000px){

  margin-top:8%;

  width:100%;

}

@media(max-width:680px){

  margin-left:0%;
  width:100%;

}

`;
const ImmagineStuarda2= styled.img`
width:100%;
height:auto;
min-height: 30vh;



`;

const LazyLoadWrapper = styled.div`
opacity: ${({ loaded }) => (loaded ? 1 : 0)};
transition: opacity 3s ease-in-out;
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




  return (
    <>
      <LazyLoad once>
      <LazyLoadWrapper loaded={loaded} onLoad={handleContentLoad}>

<Container>
    <DivBacheca>

        <ABC>Maison Cusi</ABC>
        <Light16>The historic jewelry store founded in 1886 by Annibale Cusi marked the beginning of an era that has lasted for five generations. Over these 131 years, Cusi has become one of the most prestigious names among Italian jewelers.
        </Light16>


        
        <ImmagineDelay
          src={BachecaAvif}

          effect="blur" // Aggiungi l'effetto di sfocatura
        />



    </DivBacheca>


    <Boxstoryboard>
        <DivImmagine>
        <ImmagineAnnibaleCusi src={AnnibaleCusi} effect="blur"/>

        </DivImmagine>

        <DivInfo>
        <ABC24>1886</ABC24>
        <ABC24>Birth of the Cusi brand</ABC24>
        <Description>Annibale CUSI (September 18, 1863 – October 28, 1930), the eleventh child of Pietro CUSI and Giuseppina Villa, began working at a very young age as an apprentice in a workshop. Back then, the craft was taught by practicing from early childhood, working closely with goldsmith artisans. For Annibale, it was no different; he started at just 9 years old and soon gained considerable experience, standing out for his artistic talents and craftsmanship skills.
        </Description>
        <Description>
        The long period spent behind the goldsmith's benches allowed the young Annibale to make the trade his own, also developing within himself the courage and entrepreneurial skills that, at the age of 23, precisely in 1886, led him to leave the workshop and open his own laboratory in Via della Farine in the heart of Milan, just a few steps from the Duomo and Teatro alla Scala. Thus, the CUSI brand was born.
        </Description>

            

        </DivInfo>

    </Boxstoryboard>


    <Quote>        
        <Cit>"Each jewel has its own story, and represents today's luxury 
        and with it the time we dedicate to ourselves,
        whatever object you choose, it will be yours, unique and unrepeatable, as is your life."
        </Cit>
    </Quote>

    <Boxstoryboard2>
    <DivImmagine >
    <ImmagineStuarda2 src={SpillaDelPozzo}  effect="blur"/>
    </DivImmagine>


        <DivInfo>

        <Description>In his Atelier on Via delle Farine, number 8, young Annibale laid the foundations that would lead him in a few years to make the Cusi brand one of the most appreciated brands by the aristocracy and nobility of Milan. </Description>

        <Description>
        The fervent arrival of Art Nouveau at the end of the 19th century revitalized the art of jewelry, referring to nature as the main inspirational subject. In Europe, it was a true revolution in art, and in Milan, the Liberty style was eagerly embraced. During those years of beauty, Cusi created unique and extraordinary jewelry collections, using innovative materials and rare colored gems.
        </Description>
        <DescriptionLight>
        On the left, the famous Platinum and Diamond Well Brooch, along with its design, created by Annibale and still affectionately preserved by the Cusi family.
        </DescriptionLight>

            

        </DivInfo>

    </Boxstoryboard2>

    <Boxstoryboard3>

        <DivInfo>
        <ABC24Sinistra>1906</ABC24Sinistra> 
        <ABC24Sinistra>The Necklace of Mary Stuart</ABC24Sinistra>
        <DescriptionSinistra>
        In 1906, Milan was the protagonist of the International Exposition, a true success. Forty states participated, and the city was visited by almost 5 million people, a record for the time. In the Decorative Arts section, Cusi exhibited its jewelry and won the Grand Prize thanks to a masterpiece of goldsmith art, the necklace called "Mary Stuart", a work that required two years of work by the workshop artisans, who made it in "Platiuralium," a special alloy invented by Cusi consisting of platinum, gold, silver, and aluminum with unique lightweight characteristics. The "Collar" was studded with about 15,000 diamonds, pearls, and rubies. The architecture was complex as all parts were articulated, allowing for articulated movements. Those who wrote about it described it as, despite its grandeur, light as lace.
        </DescriptionSinistra>

            

        </DivInfo>

        <DivImmagine>
        <CollieImg src={CollierMariaStuarda} effect="blur"/>

        </DivImmagine>

    </Boxstoryboard3>

    <Boxstoryboard>
        <DivImmagine>
        <ImmagineStuarda src={ViaClerici} effect="blur"/>

        </DivImmagine>

        <DivInfo>
        <ABC24>1921</ABC24> 
        <ABC24>Via Clerici, 1</ABC24>
        <Description>
        After the painful period of the Great War 1915-18, Annibale CUSI, now an internationally renowned expert in precious stones and pearls, resumed his activity with renewed energy, and soon expansion was necessary. So, in 1922, Annibale and his twenty-seven-year-old son Rinaldo had the elegant Palazzo CUSI built at Via Clerici 1, the family's own headquarters, sales atelier, and production laboratories. In 1921, Annibale was proclaimed Knight of Labor.
        </Description>

            

        </DivInfo>



    </Boxstoryboard>

    <Boxstoryboard4>


        <DivInfo>
        <ABC24Sinistra>1895-1979</ABC24Sinistra> 
        <ABC24Sinistra>
          Rinaldo Cusi
        </ABC24Sinistra>

        <DescriptionSinistra>
        In the twentieth century, the CUSI brand was appreciated not only by the most important families of Milanese aristocracy but also by the Italian Royal Family, boasting numerous collaborations for King Vittorio Emanuele III, with S.A.R. Vittorio Emanuele the Count of Turin and the Duke of Aosta Amedeo di Savoia. The three royal emblems in those years adorned the letterhead and logo of Gioielleria Cusi. With great skill and charisma, Rinaldo exported our style abroad, where the international market responded with wide consensus. Always a great expert and collector of jewelry, precious gems, but above all of pearls, he handed over the helm of the company to his son Roberto CUSI in his old age.

        </DescriptionSinistra>

            

        </DivInfo>


        <DivImmagine>
        <RinaldoCusiImg src={RinaldoCusi} effect="blur"/>

        </DivImmagine>


    </Boxstoryboard4>

    <Boxstoryboard>

        <DivImmagine>
        <ImmagineStuarda src={RobertoCusi} effect="blur"/>

        </DivImmagine>


          <DivInfo>
            <ABC24>1926-1996</ABC24> 
            <ABC24>
              Roberto Cusi
            </ABC24>

            <Description>
            With Roberto CUSI (1926 – 1996), the company consolidated, and in 1964, the exclusive headquarters in Portofino was inaugurated, and after only two years, also the current headquarters in Milan at Via Montenapoleone, 21, a symbolic location for excellence in fashion and luxury worldwide. Subsequently, in 2004, at the Portofino branch, CUSI became an official ROLEX dealer, and in 2013, it dedicated an entire Atelier next to its jewelry store.

            </Description>

              

          </DivInfo>







    </Boxstoryboard>


    <BoxFamiglia>
        <ABC24Centered>The Cusi tradition continues with the new generations.</ABC24Centered>
        <Introduzione>
        The historic jewelry store founded in 1886 by Annibale Cusi marked the beginning of an era that has lasted for five generations; over these 131 years, Cusi has become one of the most prestigious names among Italian jewelers.
        </Introduzione>

        <ImmagineFamiglia src={GiorgioCusi}  effect="blur" />

        <Description2>
Today, the family tradition continues thanks to the commitment and passion of Giorgio Nicola Cusi, his wife Roberta Cusi, and their children Alessia and Alessandro. Cusi is not just a name: it's passion, professionalism, security, tradition—it's something familiar; our goal is to make our customers feel at home.
<br/><br/>
This brief retrospective tells the story, the evolution of the concept of jewelry, and how we are tied to tradition, maintaining the quality of the past while gradually introducing a perspective of modernity and design. Italian high jewelry, based on tradition and innovation, which can be admired at the locations on Via Montenapoleone and in Portofino, combines the highest expressions of art such as design, craftsmanship, attention to detail, and the search for rare gems from the most remote corners of the earth. It is with this philosophy that the Cusi family wants to pass on the tradition to the new generations.

        </Description2>




    </BoxFamiglia>

    
</Container>

<Footer/>

        </LazyLoadWrapper>
  </LazyLoad>
    </>
  );
};

export default MaisonCusi;
