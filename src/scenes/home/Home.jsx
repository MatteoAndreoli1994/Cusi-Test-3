import React, { useState } from 'react';
import styled from 'styled-components';
import video2 from '../../assets/video2.mp4';
import ShoppingList from './ShoppingList';
import Modella2 from"../../assets/modellasmeraldo.avif";
import Modella3 from"../../assets/modellazingara.avif";
import Anello1 from"../../assets/modella2.avif";
import SelectedItem1White from"../../assets/A58.avif";
import SelectedItem1Model from"../../assets/urania.avif";
import Maison from"../../assets/maison1.avif";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useEffect } from "react";



import Anello1White from"../../assets/A2.jpg";


import { useNavigate } from "react-router-dom";

const Home = () => {

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
  const handleShopClickTycoon = () => {

    navigate('/shopTycoon');
  };

  const handleBoutiques = () => {

    navigate('/boutiques');
  };


  const handleImageLoad = () => {
    setImageLoaded(true);
  };


  const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top:120px;

  `;

  const GifBox = styled.div`
    position: relative;
    display:flex;
    justify-content:center;
  width:100vw;
    overflow: hidden;

  `;

  const Gif = styled.img`
    width: 100%;
    height:auto;
    object-fit: cover;
  `;
  const LazyLoadedGif = styled(LazyLoadImage)`
  width: 100vw; // Regola la larghezza in base alle tue esigenze
  height: auto; // Altezza automatica per mantenere le proporzioni
  `;

  const Box1 = styled.div`
    display: flex;
    width: 100%;
    height: auto;
  `;

  const Box2 = styled.div`

    display: flex;
    width: 100%;
    height:auto;
  `;

  const IconicCollectionDiv = styled.div`

  display: flex;
  width: 100%;


  align-items:center;
  flex-direction:column;
  margin-bottom:6.5%;


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
  margin-bottom:8%;
  display:flex;
}
`;
const Collection1DivIconic2 = styled.div`
display: flex;
width: 50%;
height: auto;
align-items: center;
flex-direction: column;
justify-content: flex-start;

align-self: flex-start; /* Aggiungi questa riga per allineare l'altezza al massimo tra i due div */

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
justify-content: flex-start;

align-self: flex-start; /* Aggiungi questa riga per allineare l'altezza al massimo tra i due div */

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

}


`;
const CollectionDivAbout = styled.div`

display: flex;
width: 85%;
height:auto;

align-items:center;



@media(max-width: 680px){

  flex-direction:column-reverse;

}


`;
const CollectionDivInverted = styled.div`

display: flex;
width: 85%;
height:auto;

align-items:center;



@media(max-width: 680px){

flex-direction: column-reverse;


}


`;
const Text = styled.div`

display: flex;
flex-direction:column;
width: 70%;
margin-left:27%;


@media(max-width:680px){
  width:100%;
  align-items:center;
  margin-left:0%;
  margin-bottom:5%;

}



`;
const Immagine = styled.img`
width: 95%;
height: 100%;
object-fit: cover;

`;
const ImmagineAnello = styled.img`
width:100%;

`;
const Immagine2 = styled.img`
width:40%;

@media(max-width: 680px){
  margin-top:7%;
  margin-bottom:8%;
  width:40%;

}

`;

const ImmagineMaison = styled.img`
width:100%;


`;

const HyperLink = styled.a`
  color: gray;
  text-decoration: underline; /* Aggiungi questa riga per il sottolineato */
  text-decoration-thickness: 1px; /* Aggiungi questa riga per la spessore del sottolineato */

`;


//FONT
const ABC = styled.p`
font-family: 'ABCGaisyr-Book';
font-size: 40px; 
margin-bottom: 0;

@media(max-width: 1200px){
  font-size: 30px; 

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
}
`;
const GtaLeft = styled.p`
font-family: 'GTAmericaLight';
font-size: 16px;
margin-bottom: 5%;

width:100%;

@media(max-width: 1200px){
  font-size: 15px; 
  text-align: center;
}

@media(max-width: 680px){
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
font-size: 14px;
margin-bottom: 3.5%;
margin-top:1%;
text-align: center;
width:60%;
color:gray;


@media(max-width: 1200px){
  font-size: 15px; 
}
`;
const GtaRegular = styled.p`
font-family: 'GTAmericaLight';
font-size: 12px;
margin-top:5%;
margin-bottom:0;

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

@media(max-width: 1200px){
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

`;

const DivImmagini = styled.div`
  width: 85%;
  height: auto;
  font-size: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 5%;

`;

const ImmagineCollectionStyle = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
  margin-right:2%;
`;

const ImmagineCollection2Style = styled.img`
  width: 50%;
  height: auto; /* Imposta l'altezza su auto per calcolarla automaticamente */
  object-fit: cover;
  margin-left:2%;
`;

const LazyLoadedImmagine = styled(LazyLoadImage)`
  width: 95%;
  height: 100%;
  object-fit: cover;
`;
const Video = styled.video`

width:100vw;
height:auto;


`;




  return (
    <>

      <Container>

      <GifBox>          <Video src={video2} type="video/mp4" autoPlay muted loop onLoad={handleImageLoad}/></GifBox>












    {/* Iconic collection */}
        <IconicCollectionDiv>
          <ABC>Our Iconic Collection</ABC>
          <Gta>A meeting between tradition and innovation for real works of art to wear</Gta>
          <CollectionDiv>
            <Collection1DivIconic>

            
            <Immagine src={Modella2} />

            <ABC24>Fleurie</ABC24>
            <Gta2>Timeless and wearable earrings with a modern twist that 
            add a touch of style to any outfit.
            </Gta2>

            
          </Collection1DivIconic>

            <Collection1DivIconic2Mobile>
              <GtaRegular><HyperLink onClick={ handleShopClickFleurie} style={{ cursor: 'pointer' }}>SHOP FLEURIE</HyperLink></GtaRegular>
            </Collection1DivIconic2Mobile>

            <Collection2DivIconic>
            
            <Immagine src={Modella3}/>
            <ABC24>Zingara</ABC24>
            <Gta2>Our signature pieces designed to be worn everyday with 
            subtle details in contemporary shapes.
            </Gta2>

            </Collection2DivIconic>

          </CollectionDiv>

          <CollectionDiv>
            <Collection1DivIconic2>
             <GtaRegular><HyperLink onClick={ handleShopClickFleurie} style={{ cursor: 'pointer' }}>SHOP FLEURIE</HyperLink></GtaRegular>
            </Collection1DivIconic2>

            <Collection2DivIconic>
              <GtaRegular><HyperLink  onClick={ handleShopClickZingara} style={{ cursor: 'pointer' }} >SHOP ZINGARA</HyperLink></GtaRegular>
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
            
            <Immagine2 src={Anello1White}/>


            <ABC24DUE>Tycoon</ABC24DUE>
            <GtaDescription>Our signature pieces designed to be worn everyday with 
            subtle details in contemporary shapes.
            </GtaDescription>
            <GtaRegular><HyperLink  onClick={ handleShopClickTycoon} style={{ cursor: 'pointer' }} >DISCOVER TYCOON</HyperLink></GtaRegular>
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
        <GtaDescription2>Collana Oro Giallo <br/>
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
          <GtaRegular14grayMobile><HyperLink  onClick={ handleBoutiques} style={{ cursor: 'pointer' }} >PRENOTA UN APPUNTAMENTO</HyperLink></GtaRegular14grayMobile>
        </Collection1Div>

        <Collection2Div2>
        
          <Text>
          <ABC>Come visit us</ABC>
          <GtaLeft>We would be delighted to welcome you so that 
          you may discover and try on your favorite creations.
          </GtaLeft>

          <GtaRegular14gray><HyperLink  onClick={ handleBoutiques} style={{ cursor: 'pointer' }} >PRENOTA UN APPUNTAMENTO</HyperLink></GtaRegular14gray>
          </Text>
        </Collection2Div2>

      </CollectionDivAbout>



    </IconicCollectionDiv>
      </Container>
    </>
  );
};

export default Home;
