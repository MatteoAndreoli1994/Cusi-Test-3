import React, { useState } from 'react';
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
import { LazyLoadImage } from 'react-lazy-load-image-component'; // Importa LazyLoadImage dalla libreria


const MaisonCusi = () => {


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

margin-top: 6%;



@media(max-width: 1000px){
  flex-direction: column;


    height: auto;

}


`;
const Boxstoryboard4 = styled.div`

display: flex;
flex-direction: row;
width: 90%;

margin-top:6%;



@media(max-width: 1000px){
  flex-direction: column-reverse;


    height: auto;

}


`;
const Boxstoryboard2 = styled.div`

display: flex;
flex-direction: row;
width: 90%;

margin-top:6%;


@media(max-width: 1000px){
  flex-direction: column;


    height: auto;

}




`;
const Boxstoryboard3 = styled.div`

display: flex;
flex-direction: row;
width: 90%;

margin-top:6%;

@media(max-width: 1000px){
  flex-direction: column-reverse;


    height: auto;

}




`;

const BoxFamiglia = styled.div`

display: flex;
flex-direction: column;
width: 100%;



align-items:center;

text-align: center; /* Centra il testo all'interno del div */
margin-bottom:5%;
margin-top:2%;

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
width:60%;
text-align: center;
margin-top:1%;
margin-bottom:3%;
font-family: 'GTAmericaLight';
font-size:16px;

@media(max-width: 1000px){
  font-size:14px; 
  width:80%;
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
const ImmagineFamiglia = styled(LazyLoadImage)`
width: 85%;

@media(max-width: 1000px){

  margin-bottom:4%;
}

@media(max-width: 680px){
  width: 90%;

}


`;
const DivImmagine = styled.div`

width:50%;

display:flex;
align-items:center;
justify-content:center;



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
background-color: blue;
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
margin-bottom: 0;

@media(max-width:1200px){
  font-size: 35px; 
}


`;
const ABC24 = styled.p`
font-family: 'ABCGaisyr-Regular';
font-size: 24px; 
margin-bottom: 0;
margin-top: 0;
width:75%;


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
width:60%;
font-weight: 200;

@media(max-width: 1000px){

  width:80%;
  
}

@media(max-width:680px){
  font-size: 14px; 

  text-align:left;
  width:90%;
  
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
font-size: 40px; 
margin-bottom: 0;
margin-top: 7%;

@media(max-width:1000px){
  font-size: 30px; 

}

@media(max-width:800px){
  font-size: 28px; 

}

@media(max-width:680px){
  font-size: 21px; 

  width:80%;
  margin-bottom: 2%;

}
`;

const ImmagineAnnibaleCusi = styled.img`
width: 100%;
height: auto;


@media(max-width:1000px){


  width:75%;

}

@media(max-width:680px){


  width:100%;

}
`;
const ImmagineStuarda= styled(LazyLoadImage)`
width: 80%;
height: auto;


@media(max-width:1000px){

  margin-top:8%;

  width:75%;

}

@media(max-width:680px){


  width:100%;

}

`;

const LazyLoadWrapper = styled.div`
opacity: ${({ loaded }) => (loaded ? 1 : 0)};
transition: opacity 3s ease-in-out;
`;
const ImmagineDelay = styled(LazyLoadImage)`
width:100%;
margin-bottom:4%;

@media(max-width: 1000px){

  margin-bottom:8%;
}
`;


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
        <Light16>La storica gioielleria fondata nel 1886 da Annibale Cusi ha segnato l’inizio di un’epoca che dura da cinque generazioni
           durante questi 131 anni Cusi è diventato uno dei nomi più prestigiosi tra i gioiellieri Italiani.
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
        <ABC24>Nascita del marchio Cusi</ABC24>
        <Description>Annibale CUSI (18 Settembre 1863 – 28 Ottobre 1930) undicesimo figlio di Pietro CUSI e Giuseppina Villa, cominciò a lavorare in giovanissima età come garzone di bottega, allora il mestiere si insegnava praticando fin dalla prima infanzia lavorando a stretto contatto con gli artigiani orafi. Per Annibale non fu diverso, iniziò a soli 9 anni e presto acquisì una certa esperienza, distinguendosi per le sue spiccate doti artistiche e abilità artigiane.
        </Description>
        <Description>
          Il lungo periodo passato dietro ai banchi orafi permise al giovane di far proprio il mestiere, maturando in se anche quel coraggio e abilità imprenditoriale che a soli 23 anni e più precisamente nel 1886 lo spinsero a lasciare la bottega ed aprire un proprio laboratorio in via della Farine nel pieno centro di Milano a pochi passi dal Duomo e dal Teatro alla Scala.
          Nacque così il marchio CUSI.
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
    <ImmagineStuarda src={SpillaDelPozzo} style={{ width: '70%', height: "auto" }} effect="blur"/>
    </DivImmagine>


        <DivInfo>

        <Description>Nel proprio Atelier di Via delle Farine al numero 8 il giovane Annibale getterà le fondamenta che lo porteranno in pochi anni a fare del marchio Cusi uno dei brand più apprezzati dall’aristocrazia e dalla nobiltà Milanese.         </Description>

        <Description>
Il fervente arrivo dell’Art Nouveau a fine 800 rivitalizzò l’arte della gioielleria, riferendosi alla natura come principale soggetto ispiratore. 
In Europa fu una vera e propria rivoluzione dell’arte e a Milano lo stile Liberty non si fece attendere. Cusi in quegl’anni di bellezza da vita a collezioni di gioielli uniche e straordinarie, utilizzando materiali innovativi e gemme di colore rare.
        </Description>
        <DescriptionLight>
        A sinistra, la famosa Spilla del Pozzo in platino e diamanti con il relativo disegno realizzata da Annibale e tutt’oggi conservata con affetto iconico dalla famiglia Cusi.
        </DescriptionLight>

            

        </DivInfo>

    </Boxstoryboard2>

    <Boxstoryboard3>

        <DivInfo>
        <ABC24>1906</ABC24> 
        <ABC24>Il Collier di Maria Stuarda</ABC24>
        <Description>
          Nel 1906 Milano fu protagonista dell’Esposizione Internazionale,
          un vero successo, parteciparono infatti 40 stati e la città fu visitata da quasi 5 milioni di persone,
          un vero record per l’epoca. Nella sezione delle Arti Decorative Cusi espose i suoi gioielli,
          e vinse il Gran Premio grazie ad un capolavoro dell’arte orafa, il collier chiamato “Maria Stuarda”,
          un’opera che richiese due anni di lavoro da parte degli artigiani della bottega,
          che la realizzarono in “Platiuralium” una speciale lega inventata da Cusi composta da platino,
          oro, argento e alluminio con caratteristiche di leggerezza uniche.
          Il “Colletto” era tempestato di circa 15000 diamanti, perle e rubini.
          L’architettura era complessa in quanto tutte le parti erano snodate e permettevando quindi movimenti articolati.
          Chi scrisse su di essa la definì, nonostante l’imponenza, leggera come un pizzo.
        </Description>

            

        </DivInfo>

        <DivImmagine>
        <ImmagineStuarda src={CollierMariaStuarda} effect="blur"/>

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
        Dopo la dolorosa parentesi della grande guerra 1915-18,
        Annibale CUSI divenuto ormai un esperto di fama internazionale nel campo delle pietre preziose e delle perle,
        riprese con rinnovata energia la sua attività e presto fu necessario ingrandirsi.
        Così che nel 1922 Annibale ed il figlio Rinaldo allora ventisettenne,
        fecero costruire in via Clerici 1 l’elegante Palazzo CUSI, sede propria della famiglia,
        dell’atelier di vendita e dei laboratori di produzione. Nel 1921 Annibale fu proclamato Cavaliere del Lavoro.
        </Description>

            

        </DivInfo>



    </Boxstoryboard>

    <Boxstoryboard4>


        <DivInfo>
        <ABC24>1895-1979</ABC24> 
        <ABC24>
          Rinaldo Cusi
        </ABC24>

        <Description>
          Il marchio CUSI, nel ventennio del XX secolo fu apprezzato non solo dalle più importanti 
          famiglie dell’aristocrazia milanese, ma anche dalla Famiglia Reale Italiana, tanto da vantare numerose collaborazioni per il Re,Vittorio Emanuele III,
          con S.A.R. Vittorio Emanuele il Conte di Torino ed il Duca di Aosta Amedeo di Savoia. 
          I tre stemmi reali in quegl’anni decorano la carta intestata e il logo della Gioielleria Cusi. 

          Rinaldo seppe con grande abilità e carisma esportare il nostro stile anche all’estero,
          dove il mercato internazionale rispose con ampio consenso. Da sempre grande esperto e collezionista di gioielli,
          gemme preziose, ma sopratutto di perle, cedette in età al figlio Roberto CUSI il timone dell’azienda.

        </Description>

            

        </DivInfo>


        <DivImmagine>
        <ImmagineStuarda src={RinaldoCusi} effect="blur"/>

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
            Con Roberto CUSI (1926 – 1996), l’azienda si consolida e nel 1964 viene innaugurata l’esclusiva sede di Portofino,
            e dopo soli due anni anche l’attuale sede di Milano in via Montenapoleone al numero 21,
            location simbolo per eccellenza della moda e del lusso nel mondo.
            Successivamente nel 2004 nella filiale di Portofino CUSI diventa concessionario ufficiale ROLEX e nel 2013 
            vi dedica interamente un Atelier accanto alla propria gioielleria.

            </Description>

              

          </DivInfo>







    </Boxstoryboard>


    <BoxFamiglia>
        <ABC24Centered>La tradizione Cusi continua con le nuove generazioni</ABC24Centered>
        <Introduzione>
        La storica gioielleria fondata nel 1886 da Annibale Cusi ha segnato l’inizio di un’epoca che dura da cinque generazioni; 
        durante questi 131 anni Cusi è diventato uno dei nomi più prestigiosi tra i gioiellieri Italiani.
        </Introduzione>

        <ImmagineFamiglia src={GiorgioCusi}  effect="blur"/>

        <Description2>
        Oggi la tradizione della famiglia prosegue grazie all’impegno e la passione di Giorgio Nicola Cusi, della moglie Roberta Cusi e dei figli Alessia e Alessandro.
        Cusi non è solo un nome: è passione, professionalità, sicurezza, tradizione, è qualcosa di familiare; il nostro scopo è quello di far sentire i nostri clienti come a casa.
<br/><br/>
        Questa breve retrospettiva che racconta la storia, l’evoluzione del concetto di gioielleria e di quanto siamo legati alla tradizione, mantenendo sì la qualità del passato, ma introducendo via via una prospettiva di attualità e design.‍
        L’alta gioielleria italiana basata su tradizione e innovazione, che si può ammirare nelle sedi di via Montenapoleone e di Portofino, fonde in sé le massime espressioni d’arte quali il disegno, la progettazione, la lavorazione artigianale, 
        la cura del dettaglio e in più la ricerca di gemme rare provenienti dai più remoti angoli della terra. E’ con questa filosofia che la famiglia Cusi vuole tramandare la tradizione alle nuove generazioni.

        </Description2>




    </BoxFamiglia>

    
</Container>

        </LazyLoadWrapper>
  </LazyLoad>
    </>
  );
};

export default MaisonCusi;
