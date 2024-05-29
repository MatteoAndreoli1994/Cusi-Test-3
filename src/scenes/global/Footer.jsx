import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
// Importa il componente Link da react-router-dom
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height:auto;
    color: black;
    margin-top: 4%;



    overflow: hidden;



`;

const RowContainer = styled.div`
  display: flex;
  width: 95%;

  height:auto;

  @media(max-width:800px){
    width: 95%;
  }

`;

const Column = styled.div`
  flex: 1;
  padding: 20px;
  text-align: left;

  height:auto;

  flex-direction:column;

  min-width:15%;
`;
const ColumnSocial = styled.div`
  flex: 1;
  padding: 20px;
  text-align: left;

  height:auto;

  flex-direction:column;

  min-width:15%;

  @media(max-width:800px){
    display:none;
  }

`;
const ColumnMobile = styled.div`
  flex: 1;
  padding: 20px;
  text-align: left;

  height:auto;

  flex-direction:column;

  min-width:15%;
  display:none;

  @media(max-width:800px){
    display:block;
  }
`;
const RawMobile = styled.div`
  display:flex;
`;

const ColumnLogo = styled.div`
  flex: 1;
  padding: 20px;
  text-align: left;

  height:auto;

  flex-direction:column;

  min-width:15%;

  @media(max-width:800px){
    display:none;
  }

`;

const LastColumn = styled.div`
  flex: 2;
  padding: 20px;
  text-align: left;

    @media(max-width:800px){
      display:none;
    }

`;
const LastColumnMobile = styled.div`
  flex: 2;
  padding: 20px;
  text-align: left;
  display:none;


  @media(max-width:800px){
    display:flex;
    flex-direction:column;
    width:95%;
  }


`;

const CopyrightContainer = styled.div`

  color: black;
  justify-content: space-between;
  display: flex;
  width: 95%;
  align-items: center;
  margin-top: auto; /* Imposta il margin-top a auto per spingere il div in basso */
  color:black;

  @media(max-width:800px){
    display:none;
  }

`;
const CopyrightContainerMobile = styled.div`

  color: black;
  justify-content: space-between;
  display: flex;
  width: 95%;
  align-items: center;
  margin-top: auto; /* Imposta il margin-top a auto per spingere il div in basso */
  color:black;
  display:none;

  @media(max-width:800px){
    display:flex;

  }
`;
const DivLingua = styled.div`

  color: black;
  display: flex;
  justify-content: space-between;
  width: 40%;
  align-items: center;
  padding: 10px;

  margin-right:1.5%;

  @media(max-width:900px){
    width: 50%;

  }
`;

const Logo = styled.div`
display: flex; /* Aggiunto display: flex; qui */
position:absolute;
margin-top:1%;



&:hover {
    cursor: pointer;
  }

`;

const ImmagineLogo = styled.img`
width: 60%;


`;

const SubscribeContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0; /* Rimuovi eventuali margini impostati precedentemente */
  height: 50px;

  
`;

const TextBox = styled.input`
  flex: 1;
  padding: 17px;
  border: 1px solid #000;
  margin: 0; /* Rimuovi eventuali margini impostati precedentemente */
  border-radius: 0;

  @media(max-width: 800px){

    margin-top: 1.5%;
  
  }

  @media(max-width: 680px){
    font-size: 14px;
    margin-top: 1.5%;
  
  }
  
  
`;

const SubscribeButton = styled.button`
  background-color: black;
  color: white;

  border: 1px solid #000;
  width:40%;
  cursor: pointer;
  font-size: 13px;
  margin: 0; /* Rimuovi eventuali margini impostati precedentemente */
  
  @media(max-width:800px){

    margin-top:1.5%;
  }

  @media(max-width:680px){
    font-size: 13px;
    margin-top:1.5%;
  }
  
`;

const GtaRegular = styled.p`
font-family: 'GTAmericaRegular';
font-size: 14px;

`;
const GtaRegularLegalPol = styled.p`
font-family: 'GTAmericaRegular';
font-size: 14px;
cursor: pointer;
margin-right:2%;
`;

const GtaLight = styled.p`
font-family: 'GTAmericaLight';
font-size: 14px;

`;
const Collegamento = styled.a`
  margin-right: 4%;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  &:hover, &:focus, &:active {
    text-decoration: none;
    color: inherit;
  }
`;


function Footer() {

    const navigate = useNavigate();


  
    

  return (
    <Container>



        <LastColumnMobile>
        <GtaRegular>SIGN UP TO OUR NEWSLATTER</GtaRegular> <GtaLight>Be the first to hear about new arrivals from our extraordinary and other news from the world of Cusi.</GtaLight>
        
        <SubscribeContainer>
            <TextBox type="text" placeholder="E-mail" />
            <SubscribeButton>SUBSCRIBE</SubscribeButton>
          </SubscribeContainer>
        
        </LastColumnMobile>


      <RowContainer>
        <ColumnLogo>
        
        <Logo
          onClick={() => navigate("/")}
          sx={{ "&:hover": { cursor: "pointer" } }}
          color={shades.secondary[500]}

        >
          <ImmagineLogo src={logo}/>
        </Logo>
        
        </ColumnLogo>

        <Column>
          <GtaRegular>CUSTOMER SERVICE</GtaRegular>
          
          <GtaRegular>
            <Collegamento onClick={() => navigate("/customerservice?category=Our Services")}>
              Our Services
            </Collegamento>
          </GtaRegular>

          <GtaRegular>
            <Collegamento onClick={() => navigate("/customerservice?category=Product Care")}>
              Product Care
            </Collegamento>
          </GtaRegular>

          <GtaRegular>
            <Collegamento onClick={() => navigate("/customerservice?category=Shipping")}>
              Shipping & Returns
            </Collegamento>
          </GtaRegular>

          <GtaRegular>
            <Collegamento onClick={() => navigate("/customerservice?category=Size Chart")}>
              Size Chart
            </Collegamento>
          </GtaRegular>

          <GtaRegular>
            <Collegamento onClick={() => navigate("/customerservice?category=FAQ")}>
              FAQ
            </Collegamento>
          </GtaRegular>
        
        </Column>
        <Column>
         <GtaRegular>CONTACT</GtaRegular>

         <GtaRegular><Collegamento  onClick={() => navigate("/contactus")}>Contact Us</Collegamento></GtaRegular>

         <GtaRegular>
          <Collegamento href="/boutiques#Book">
            Book An Appointment
          </Collegamento>
        </GtaRegular>

        <GtaRegular>
          <Collegamento href="/boutiques">
            Boutiques
          </Collegamento>
        </GtaRegular>
        
        </Column>
        <ColumnSocial>
        
          <GtaRegular>SOCIAL</GtaRegular>
          
          <GtaRegular><Collegamento href="https://www.instagram.com/cusimontenapoleone/">Instagram</Collegamento></GtaRegular>

          
        </ColumnSocial>

        <LastColumn>
        <GtaRegular>SIGN UP TO OUR NEWSLATTER</GtaRegular> <GtaRegular>Be the first to hear about new arrivals from our extraordinary and other news from the world of Cusi.</GtaRegular>
        
        <SubscribeContainer>
            <TextBox type="text" placeholder="Your email" />
            <SubscribeButton>SUBSCRIBE</SubscribeButton>
          </SubscribeContainer>
        
        </LastColumn>
        
      </RowContainer>
      
      <RowContainer>
      <ColumnMobile><GtaRegular>SOCIAL</GtaRegular><GtaRegular><Collegamento href="https://www.instagram.com/cusimontenapoleone/">Instagram</Collegamento></GtaRegular><GtaRegular>Facebook</GtaRegular></ColumnMobile>

      </RowContainer>
      

      
      <CopyrightContainer>
        <GtaRegular>Copyright © 2024 Your Company. All rights reserved.         

        </GtaRegular>


        <DivLingua>

        <Collegamento href="https://www.iubenda.com/privacy-policy/26885513" className="custom-link privacy-policy-link" title="Privacy Policy" style={{ textDecoration: 'none', color: 'black' }}>
          <GtaRegular>Privacy Policy</GtaRegular>
        </Collegamento>

        <Collegamento href="https://www.iubenda.com/privacy-policy/26885513/cookie-policy" className="custom-link cookie-policy-link" title="Cookie Policy" style={{ textDecoration: 'none', color: 'black' }}>
          <GtaRegular>Cookie Policy</GtaRegular>
        </Collegamento>


          <GtaRegularLegalPol onClick={() => navigate("/legal")}>Legal</GtaRegularLegalPol>





          <GtaRegular>IT/€</GtaRegular>
          <GtaRegular>English</GtaRegular>

        </DivLingua>









      </CopyrightContainer>

      <CopyrightContainerMobile>
        
      <ColumnMobile>

      <GtaRegular>© 2024 Cusi. All rights reserved </GtaRegular>
      
      
      
      </ColumnMobile>


      <DivLingua>
      <GtaRegularLegalPol onClick={() => navigate("/legal")}>Legal</GtaRegularLegalPol>
      <GtaRegular>IT/€</GtaRegular>
      <GtaRegular>English</GtaRegular>

      </DivLingua>



      

      </CopyrightContainerMobile>
      
    </Container>
  );
}

export default Footer;
