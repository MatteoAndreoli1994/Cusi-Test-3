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


import Anello1White from"../../assets/A2.png";


import { useNavigate } from "react-router-dom";
import LazyLoad from 'react-lazyload';

const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin-top:120px;

`;

const GifBox = styled.div`
display: ${({ isSafari }) => (isSafari ? 'none' : 'block')};

width:100vw;
min-height:auto;
  position: relative;
  display: flex;
  justify-content: center;
  width: 100vw;
  overflow: hidden;
  background-size: cover;
  margin-bottom: 2%;
`;

const GifBoxSafari = styled.div`
position: relative;

display: ${({ isSafari }) => (isSafari ? 'none' : 'block')};
min-height:auto;
justify-content:center;
width:100vw;

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


@media(max-width: 680px){
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

@media(max-width:680px){

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

@media(max-width:680px){

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

@media(max-width:680px){

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




@media(max-width:680px){

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

@media(max-width:680px){

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


@media(max-width:680px){

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

@media(max-width:680px){

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

@media(max-width: 680px){

width: 100%;


}



`;
const Collection3Div = styled.div`

display: flex;
width: 50%;
height:auto;

align-items:center;
flex-direction:column;

@media(max-width: 680px){

width: 100%;





}



`;
const Collection2Div2 = styled.div`

display: flex;
width: 50%;
height:100%;


align-items:center;
flex-direction:column;




@media(max-width: 680px){

width: 100%;





}


`;


const CollectionDiv = styled.div`

display: flex;
width: 85%;
height:auto;

align-items:center;



@media(max-width: 680px){

flex-direction:column;
width: 100%;
}


`;
const CollectionDivBig = styled.div`

display: flex;
width: 85%;
height:auto;

align-items:center;



@media(max-width: 680px){

flex-direction:column;
width: 100%;

}


`;
const CollectionDivAbout = styled.div`

display: flex;
width: 85%;
height:auto;
margin-top:4%;
align-items:center;



@media(max-width: 680px){

flex-direction:column-reverse;
width: 100%;


}


`;
const CollectionDivInverted = styled.div`

display: flex;
width: 85%;
height:auto;

align-items:center;



@media(max-width: 680px){

flex-direction: column-reverse;
width: 100%;

}


`;
const Text = styled.div`

display: flex;
flex-direction:column;
width: 70%;
margin-left:10%;

margin-bottom:10%;

@media(max-width:680px){
width:90%;
align-items:center;
margin-left:0%;
margin-bottom:5%;

}



`;

// Definisci il componente StyledLazyLoadImage utilizzando styled-components
const Immagine = styled.img`
width: 90%;
min-height: 40vh;
object-fit: cover;
`;

const ImmagineAnello = styled.img`
width:90%;
min-height: 40vh;
`;
const Immagine2 = styled.img`
width:40%;
min-height: 10vh;

@media(max-width: 1200px){
width:45%;

}

@media(max-width: 680px){
margin-top:9%;
margin-bottom:8%;
width:50%;

}

`;
const Immagine3 = styled.img`
width:40%;
min-height: 10vh;
@media(max-width: 680px){
margin-top:0%;
margin-bottom:0%;
width:55%;

}

`;

const ImmagineMaison = styled.img`
width:90%;
min-height: 40vh;

`;

const HyperLink = styled.a`
color: gray;
position: relative;
font-family: 'GTAmericaLight';
font-size: 14px;

&::after {
content: '';
position: absolute;
left: 0;
bottom: -1px; /* Sposta la linea della sottolineatura di 2px in basso */
width: 100%;
height: 1px;
background-color: gray;
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

`;
const ABC24 = styled.p`
font-family: 'ABCGaisyr-Book';
font-size: 24px; 
margin-bottom: 1.5%;
margin-top:7%;

@media(max-width: 1200px){
font-size: 24px; 
}

`;
const ABC24DUE = styled.p`
font-family: 'ABCGaisyr-Book';
font-size: 20px; 
margin-bottom: 0;

@media(max-width: 1200px){
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
@media(max-width: 680px){
font-size: 13px; 
margin-bottom: 6%;
width:62%;
}
`;
const Gta2 = styled.p`
font-family: 'GTAmericaLight';
font-size: 16px;
margin-bottom: 3.5%;
margin-top:1%;
text-align: center;
width:70%;

@media(max-width: 1200px){
font-size: 15px; 
}
@media(max-width: 680px){
font-size: 15px; 
width:80%;
margin-bottom: 0%;
margin-top: 0%;
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

@media(max-width: 680px){
text-align: center;
width:95%;
font-size: 13px;
}
`;
const GtaDescription = styled.p`
font-family: 'GTAmericaLight';
font-size: 16px;
margin-bottom: 3.5%;
margin-top:1%;
text-align: center;
width:60%;

@media(max-width: 1200px){
font-size: 15px; 
}

@media(max-width: 680px){
font-size: 15px; 
margin-top:5%;
margin-bottom: 7%;
width:100%;

}


`;
const GtaDescription2 = styled.p`
font-family: 'GTAmericaLight';
font-size: 16px;
margin-bottom: 3.5%;
margin-top:1%;
text-align: center;
width:60%;
color:gray;


@media(max-width: 1200px){
font-size: 15px; 
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
const GtaRegularFleurie = styled.p`
font-family: 'GTAmericaLight';
font-size: 12px;
margin-top:5%;
margin-bottom:3%;


@media(max-width: 1200px){
font-size: 13px; 
margin-top:0%;
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

@media(max-width: 680px){
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

@media(max-width: 680px){
font-size: 12px; 
display:flex;
margin-top:10%;

`;

const Video = styled.video`

width:100vw;
height:auto;


`;

const VideoSafari = styled.img`

width:100vw;
height:auto;


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


  const [item, setItem] = useState(null);
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);



  async function updateItem() {

    const itemId = 1; // ID del record che vuoi aggiornare
    const requestBody = {
        quantity: 5,
    };
  
    const response = await fetch("https://prized-horses-45ff95e916.strapiapp.com/api/items/2", {
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

    navigate('/shopFleurie');
  };
  const handleShopClickEarrings = () => {

    navigate('/shopEarrings');
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
          <ABC>Our Iconic Collections</ABC>
          <GtaTitle>A meeting between tradition and innovation for real works of art to wear</GtaTitle>
          <CollectionDivBig>
            <Collection1DivIconic>

            
            <Immagine src={Modella2}   effect="blur"/>

            <ABC24>Fleurie</ABC24>
            <Gta>Exquisite gemstones and refined cuts, embodying elegance and sophistication</Gta>

            
          </Collection1DivIconic>

            <Collection1DivIconic2Mobile>
              <GtaRegularFleurie><HyperLink onClick={ handleShopClickFleurie} style={{ cursor: 'pointer' }}>SHOP FLEURIE</HyperLink></GtaRegularFleurie>
            </Collection1DivIconic2Mobile>
            <MarginDiv></MarginDiv>

            <Collection2DivIconic>
            
            <Immagine src={Modella3} effect="blur"/>
            <ABC24>Zingara</ABC24>
            <Gta>Elegant, natural gold softness and a unique hammered finish, resulting in a captivating interplay of light and movement
            </Gta>

            </Collection2DivIconic>

          </CollectionDivBig>

          <CollectionDiv>
            <Collection1DivIconic2>
              <Collection1DivIconic2_2>
             <GtaRegular><HyperLink onClick={ handleShopClickFleurie} style={{ cursor: 'pointer' }}>SHOP FLEURIE</HyperLink></GtaRegular>
             </Collection1DivIconic2_2>
            </Collection1DivIconic2>

            <Collection2DivIconic>
            <Collection2DivIconic_2>
              <GtaRegular><HyperLink  onClick={ handleShopClickZingara} style={{ cursor: 'pointer' }} >SHOP ZINGARA</HyperLink></GtaRegular>
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

            <GtaDescription2>Elegance and shining harmony
            </GtaDescription2>


            <GtaRegular><HyperLink  onClick={ handleShopClickEarrings} style={{ cursor: 'pointer' }} >DISCOVER EARRINGS</HyperLink></GtaRegular>
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
        <ABC24DUE>Collana Urania </ABC24DUE>
        <GtaDescription2>Yellow Gold Necklace <br/>
        18 ct Urania.
        </GtaDescription2>
        <GtaRegular><HyperLink  onClick={ handleShopClickUrania} style={{ cursor: 'pointer' }} >SHOP NOW</HyperLink></GtaRegular>

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
          <GtaRegular14grayMobile><HyperLink  onClick={ handleBoutiques} style={{ cursor: 'pointer' }} >BOOK AN APPOINTMENT</HyperLink></GtaRegular14grayMobile>
        </Collection1Div>

        <Collection2Div2>
        
          <Text>
          <ABC>Come visit us</ABC>
          <GtaLeft>We would be delighted to welcome you so that 
          you may discover and try on your favorite creations.
          </GtaLeft>

          <GtaRegular14gray><HyperLink  onClick={ handleBoutiques} style={{ cursor: 'pointer' }} >BOOK AN APPOINTMENT</HyperLink></GtaRegular14gray>
          </Text>
        </Collection2Div2>

      </CollectionDivAbout>



    </IconicCollectionDiv>
      </Container>

      </LazyLoadWrapper>
    </LazyLoad>  
    </>
  );
};

export default Home;
