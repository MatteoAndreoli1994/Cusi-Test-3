import React, { useState } from 'react';
import styled from 'styled-components';
import video2 from '../../assets/video2.mp4';
import ShoppingList from './ShoppingList2&mobile';
import Modella2 from"../../assets/modellasmeraldo.avif";
import Modella3 from"../../assets/modellazingara.avif";
import Anello1 from"../../assets/modella2.avif";
import SelectedItem1White from"../../assets/A58.avif";
import SelectedItem1Model from"../../assets/urania.avif";
import Maison from"../../assets/maison1.avif";
import 'react-lazy-load-image-component/src/effects/blur.css';
// Importa LazyLoadImage e il suo effetto di sfocatura
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useEffect } from "react";
import { isSafari } from 'react-device-detect';
import { useTranslation } from 'react-i18next';


import Anello1White from"../../assets/A2.avif";


import { useNavigate } from "react-router-dom";
import LazyLoad from 'react-lazyload';
import Footer from "../global/Footer";

const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin-top:120px;




`;

const GifBox = styled.div`
position: relative;

display: ${({ isSafari }) => (isSafari ? 'none' : 'flex')};
min-height:80vh;
justify-content:center;



overflow: hidden;

background-size: cover;
margin-bottom: 2%;

`;

const GifBoxSafari = styled.div`
position: relative;

display: ${({ isSafari }) => (isSafari ? 'none' : 'flex')};
min-height:80vh;
justify-content:center;



overflow: hidden;

background-size: cover;
margin-bottom: 2%;


@media(max-width:680px){
  
}
`;



const IconicCollectionDiv = styled.div`

display: flex;
width: 100%;


align-items:center;
flex-direction:column;
margin-bottom:6.5%;


@media(max-width: 1200px){
margin-bottom:12.5%;
}



`;
const MarginDiv = styled.div`

position:relative;


@media(max-width: 800px){
margin-bottom:10%;
}




`;


const Collection1DivIconic = styled.div`
display: flex;
width: 50%;
height: auto;
align-items: center;
flex-direction: column;
justify-content: flex-start;

align-self: flex-start; /* Aggiungi questa riga per allineare l'altezza al massimo tra i due div */

@media(max-width:800px){

width:100%;
margin-bottom:1%;
}
`;
const Collection1DivIconic2Mobile = styled.div`
display: flex;
width: 50%;
height: auto;
align-items: center;
flex-direction: column;
justify-content: flex-start;
display:none;
align-self: flex-start; /* Aggiungi questa riga per allineare l'altezza al massimo tra i due div */

@media(max-width:800px){

width:100%;

display:flex;
}
`;
const Collection1DivIconic2 = styled.div`
display: flex;
width: 50%;
height: auto;
align-items: center;
flex-direction: column;
justify-content: center;

align-self: center;

@media(max-width:800px){

width:100%;

display:none;
}
`;
const Collection1DivIconic2_2 = styled.div`
display: flex;
width: 90%;
height: auto;
align-items: center;

flex-direction: column;




@media(max-width:800px){

width:100%;

display:none;
}
`;
const Collection2DivIconic = styled.div`
display: flex;
width: 50%;
height: auto;
align-items: center;
flex-direction: column;
justify-content: center;

align-self: center; /* Aggiungi questa riga per allineare l'altezza al massimo tra i due div */

@media(max-width:800px){

width:100%;
margin-bottom:1%;
}
`;
const Collection2DivIconic_2 = styled.div`
display: flex;
width: 90%;
height: auto;
align-items: center;
flex-direction: column;


@media(max-width:800px){

width:100%;
margin-bottom:1%;
}
`;

const Collection1Div = styled.div`

display: flex;
width: 50%;
height:auto;

align-items:center;
flex-direction:column;

justify-content:center;

@media(max-width:800px){

width:100%;
margin-bottom:5%;
}

`;
const Collection2Div = styled.div`

display: flex;
width: 50%;
height:auto;

align-items:center;
flex-direction:column;

@media(max-width: 800px){

width: 100%;


}



`;
const Collection3Div = styled.div`

display: flex;
width: 50%;
height:auto;

align-items:center;
flex-direction:column;

@media(max-width: 800px){

width: 100%;





}



`;
const Collection2Div2 = styled.div`

display: flex;
width: 50%;
height:100%;


align-items:center;
flex-direction:column;




@media(max-width: 800px){

width: 100%;





}


`;


const CollectionDiv = styled.div`

display: flex;
width: 85%;
height:auto;

align-items:center;



@media(max-width: 1200px){


  width: 90%;
  }

@media(max-width: 800px){

flex-direction:column;
width: 95%;
}


`;
const CollectionDivBig = styled.div`

display: flex;
width: 85%;
height:auto;

align-items:center;


@media(max-width: 1200px){


  width: 90%;
  
  }

@media(max-width: 800px){

flex-direction:column;
width: 95%;

}


`;
const CollectionDivAbout = styled.div`

display: flex;
width: 85%;
height:auto;
margin-top:4%;
align-items:center;

@media(max-width: 1200px){


  width: 90%;
  
  }

@media(max-width: 800px){

flex-direction:column-reverse;
width: 95%;


}


`;
const CollectionDivInverted = styled.div`

display: flex;
width: 85%;
height:auto;

align-items:center;

@media(max-width: 1200px){


  width: 90%;
  
  }

@media(max-width: 800px){
margin-top:6%;
flex-direction: column-reverse;
width: 95%;

}


`;
const Text = styled.div`

display: flex;
flex-direction:column;
width: 70%;
margin-left:10%;

margin-bottom:10%;

@media(max-width:800px){
width:90%;
align-items:center;
margin-left:0%;
margin-bottom:5%;

}



`;

// Definisci il componente StyledLazyLoadImage utilizzando styled-components
const Immagine = styled.img`
width: 90%;

height: auto;

`;

const ImmagineAnello = styled.img`
width:90%;

height: auto;
`;
const Immagine2 = styled.img`
width:40%;

height:auto;

@media(max-width: 1200px){
width:45%;

}

@media(max-width: 800px){
  margin-top:5%;
  margin-bottom:0%;
  width:40%;
  
  }

@media(max-width: 680px){
margin-top:9%;
margin-bottom:0%;
width:50%;

}

`;
const Immagine3 = styled.img`
width:40%;
min-height: 10vh;

@media(max-width: 800px){
margin-top:0%;
margin-bottom:0%;
width:40%;

}

@media(max-width: 680px){
  margin-top:0%;
  margin-bottom:0%;
  width:50%;
  
  }

`;

const ImmagineMaison = styled.img`
width:90%;

height:auto;

`;

const HyperLink = styled.a`
  color: gray;
  position: relative;
  font-family: 'GTAmericaLight';
  font-size: 14px;
  text-decoration: none;  // Rimuove la sottolineatura predefinita del link

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1px; /* Sposta la linea della sottolineatura di 2px in basso */
    width: 100%;
    height: 1px;
    background-color: gray;
  }

  @media(max-width:1200px){
    font-size: 13px;
  }
`;



//FONT
const ABC = styled.p`
font-family: 'ABCGaisyr-Book';
font-size: 40px; 
margin-bottom: 0;

@media(max-width: 1200px){
font-size: 35px; 

}
@media(max-width: 800px){
  font-size: 40px; 
  
  }

@media(max-width: 680px){
  font-size: 30px; 
  
  }

`;
const ABC24 = styled.p`
font-family: 'ABCGaisyr-Book';
font-size: 24px; 
margin-bottom: 1.5%;
margin-top:6%;

@media(max-width: 1200px){
font-size: 24px; 
}

`;
const ABC24DUE = styled.p`
font-family: 'ABCGaisyr-Book';
font-size: 20px; 
margin-bottom: 2%;

@media(max-width: 1200px){
  font-size: 23px; 
  }

@media(max-width: 800px){
  font-size: 23px; 
  }




`;
const Gta = styled.p`
font-family: 'GTAmericaLight';
font-size: 16px;
margin-bottom: 3.5%;
margin-top:0.8%;
text-align: center;
width:70%;


@media(max-width: 1200px){
font-size: 13px; 
margin-bottom: 6%;
width:82%;
}
@media(max-width: 800px){
  font-size: 16px; 
  margin-bottom: 2%;
  width:82%;
  }

@media(max-width: 680px){
font-size: 13px; 
margin-bottom: 2%;
width:82%;
}
`;
const GtaTitle = styled.p`
font-family: 'GTAmericaLight';
font-size: 16px;
margin-bottom: 3.5%;
margin-top:0.8%;
text-align: center;
width:70%;


@media(max-width: 1200px){
font-size: 13px; 
margin-bottom: 6%;
width:82%;
}

@media(max-width: 800px){
font-size: 15px; 
margin-bottom: 8%;
width:62%;
}

@media(max-width: 680px){
  font-size: 13px; 
  margin-bottom: 8%;
  width:62%;
  }
`;

const GtaLeft = styled.p`
font-family: 'GTAmericaLight';
font-size: 16px;
margin-bottom: 5%;

width:100%;

@media(max-width: 1200px){
font-size: 15px; 

}
@media(max-width: 800px){
  text-align: center;
  font-size: 16px;
}
@media(max-width: 680px){
text-align: center;
width:95%;
font-size: 13px;
}
`;


const GtaDescription3 = styled.p`
font-family: 'GTAmericaLight';
font-size: 16px;
margin-bottom: 3.5%;
margin-top:1%;
text-align: center;
width:60%;
color:gray;


@media(max-width: 1200px){
font-size: 15px; 
margin-top:2%;
}

@media(max-width: 680px){
font-size: 14px;
}
`;
const GtaRegular = styled.p`
font-family: 'GTAmericaLight';
font-size: 12px;

margin-bottom:0;

@media(max-width: 1200px){
font-size: 13px; 
margin-top:0%;
}
@media(max-width: 680px){
font-size: 12px; 
}

`;
const GtaRegularMobile2 = styled.p`
font-family: 'GTAmericaLight';
font-size: 12px;

margin-bottom:0;

@media(max-width: 1200px){
font-size: 13px; 
margin-top:2%;
}
@media(max-width: 680px){
font-size: 12px; 
}

`;

const GtaRegularFleurie = styled.p`
font-family: 'GTAmericaLight';
font-size: 12px;
margin-top:5%;
margin-bottom:3%;


@media(max-width: 1200px){
font-size: 13px; 
margin-top:2%;
}



@media(max-width: 680px){
font-size: 12px; 
}

`;


const GtaRegular14gray = styled.p`
font-family: 'GTAmericaLight';
font-size: 14px;
margin-top:5%;
margin-bottom:0;
color:gray;

@media(max-width: 800px){
font-size: 13px; 
display:none;
`;

const GtaRegular14grayMobile = styled.p`
font-family: 'GTAmericaLight';
font-size: 14px;
margin-top:5%;
margin-bottom:0;
color:gray;
display:none;

@media(max-width: 800px){
font-size: 12px; 
display:flex;
margin-top:7%;

`;

const Video = styled.video`

width: 100%;
height: 90vh;
object-fit: cover;
object-position: center;


`;

const VideoSafari = styled.img`

width: 100%;
height: 90vh;
object-fit: cover;
object-position: center;


`;
const LazyLoadWrapper = styled.div`
opacity: ${({ loaded }) => (loaded ? 1 : 0)};
transition: opacity 1s ease-in-out;
`;

const Home = () => {
  const [loaded, setLoaded] = React.useState(false);
  const handleContentLoad = () => {
    setLoaded(true);
  };
  const { t } = useTranslation();

  const [item, setItem] = useState(null);
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);



  async function updateItem() {

    const itemId = 1; // ID del record che vuoi aggiornare
    const requestBody = {
        quantity: 5,
    };
  
    const response = await fetch("https://cusi-strapi-3690cb0bf021.herokuapp.com/api/items/2", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: requestBody }), // Includi un oggetto "data" nel corpo della richiesta
    });

    
  };

  const handleShopClickUrania = () => {

    navigate('/shopUrania');
  };
  const handleShopClickZingara = () => {

    navigate('/shopZingara');
  };
  const handleShopClickFleurie = () => {


  };
  const handleShopClickEarrings = () => {


  };

  const handleBoutiques = () => {

    navigate('/boutiques');
  };


  const handleImageLoad = () => {
    setImageLoaded(true);
  };


 




  return (
    <>
    <LazyLoad once>
    <LazyLoadWrapper loaded={loaded} onLoad={handleContentLoad}>
    
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>
      <Container>

      {isSafari ? (
              <GifBoxSafari >
                                 <VideoSafari src={video2}></VideoSafari>

              </GifBoxSafari>
            ) : null}

            {/* Condizionalmente renderizza il componente per i browser diversi da Safari */}
            {!isSafari ? (
              <GifBox >


                                                
                <Video autoPlay loop muted playsInline >              
                  <source src={video2} type="video/mp4" />
                  Il tuo browser non supporta la riproduzione di video MP4.
                </Video>
                                  
                                  
                                  

              </GifBox>
            ) : null}
















    {/* Iconic collection */}
        <IconicCollectionDiv>
          <ABC>{t('home.iconicCollections')}</ABC>
          <GtaTitle>{t('home.meetingTraditionInnovation')}</GtaTitle>
          <CollectionDivBig>
            <Collection1DivIconic>

            
            <Immagine src={Modella2}   effect="blur"/>

            <ABC24>Fleurie</ABC24>
            <Gta>{t('home.fleurieDescrizioni')}</Gta>

            
          </Collection1DivIconic>

            <Collection1DivIconic2Mobile>
              <GtaRegularFleurie><HyperLink href="/shopFleurie"  style={{ cursor: 'pointer' }}>{t('home.shopFleurie')}</HyperLink></GtaRegularFleurie>
            </Collection1DivIconic2Mobile>
            <MarginDiv></MarginDiv>

            <Collection2DivIconic>
            
            <Immagine src={Modella3} effect="blur"/>
            <ABC24>Zingara</ABC24>
            <Gta>{t('home.zingaraDescrizioni')}
            </Gta>

            </Collection2DivIconic>

          </CollectionDivBig>

          <CollectionDiv>
            <Collection1DivIconic2>
              <Collection1DivIconic2_2>
              <GtaRegularFleurie>
                <HyperLink 
                  href="/shopFleurie" 

                  style={{ cursor: 'pointer' }}
                >
                  {t('home.shopFleurie')}
                </HyperLink>
              </GtaRegularFleurie>
             </Collection1DivIconic2_2>
            </Collection1DivIconic2>

            <Collection2DivIconic>
            <Collection2DivIconic_2>
              <GtaRegularMobile2><HyperLink href="/shopZingara" style={{ cursor: 'pointer' }} >{t('home.shopZingara')}</HyperLink></GtaRegularMobile2>
              </Collection2DivIconic_2>
            </Collection2DivIconic>

          </CollectionDiv>



        </IconicCollectionDiv>
    {/* Specific collection */}
        <IconicCollectionDiv>

          <CollectionDiv>

            <Collection1Div>
              <ImmagineAnello src={Anello1}/>
            
            </Collection1Div>

            <Collection2Div>
            
            <Immagine3 src={Anello1White}/>


            <ABC24DUE>Madreperla</ABC24DUE>

            <Gta>{t('home.eleganceShiningHarmony')}
            </Gta>


            <GtaRegularMobile2><HyperLink   href='/shopEarrings' style={{ cursor: 'pointer' }} >{t('home.discoverEarrings')}</HyperLink></GtaRegularMobile2>
            </Collection2Div>

          </CollectionDiv>



        </IconicCollectionDiv>
    {/* Shopping List */}
        <ShoppingList />
    {/* Specific product */}
        <IconicCollectionDiv>

      <CollectionDivInverted>


        <Collection3Div>
        
        <Immagine2 src={SelectedItem1White}/>
        <ABC24DUE> {t('home.uraniaNecklace')}</ABC24DUE>
        <GtaDescription3> {t('home.uraniaDescrizione')} <br/>
        18 ct Urania.
        </GtaDescription3>
        <GtaRegular><HyperLink  href="/shopUrania" style={{ cursor: 'pointer' }} >{t('home.shopNow')}</HyperLink></GtaRegular>

        </Collection3Div>

        <Collection1Div>
          <Immagine src={SelectedItem1Model}/>
        
        </Collection1Div>


      </CollectionDivInverted>



        </IconicCollectionDiv>

    {/* About */}
    <IconicCollectionDiv>

      <CollectionDivAbout>
      <Collection1Div>
          <ImmagineMaison src={Maison}/>
          <GtaRegular14grayMobile><HyperLink  href="/boutiques" style={{ cursor: 'pointer' }} >{t('home.bookAnAppointment')}</HyperLink></GtaRegular14grayMobile>

        </Collection1Div>

        <Collection2Div2>
        
          <Text>
          <ABC>{t('home.comeVisitUs')}</ABC>
          <GtaLeft>{t('home.welcomeYou')}
          </GtaLeft>

          <GtaRegular14gray><HyperLink href="/boutiques" style={{ cursor: 'pointer' }} >{t('home.bookAnAppointment')}</HyperLink></GtaRegular14gray>
          </Text>
        </Collection2Div2>

      </CollectionDivAbout>



    </IconicCollectionDiv>
      </Container>


      <Footer/>

      </LazyLoadWrapper>
    </LazyLoad>  
    </>
  );
};

export default Home;
