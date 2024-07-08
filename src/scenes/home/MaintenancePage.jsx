// MaintenancePage.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import LogoC from '../../assets/C-logo.png';

// Keyframes for smooth shrinking and flipping animation
const smoothShrinkFlip = keyframes`
  0%, 100% {
    width: 25px;
    transform: scaleX(1);
  }
  20% {
    width: 0;
    transform: scaleX(1);
  }
  25% {
    width: 0;
    transform: scaleX(-1);
  }
  45% {
    width: 25px;
    transform: scaleX(-1);
  }
  70% {
    width: 0;
    transform: scaleX(-1);
  }
  75% {
    width: 0;
    transform: scaleX(1);
  }
  95% {
    width: 25px;
    transform: scaleX(1);
  }
`;

// Styled components
const MaintenanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f0f0f0;
  color: #333;
  font-family: Arial, sans-serif;
`;

const Logo = styled.img`
  height: 80px; /* Adjust the size as needed */

`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.25rem;
  max-width: 80%; /* Limit message width for better readability on smaller screens */
`;

// Maintenance Page Component
const MaintenancePage = () => {
  return (
    <MaintenanceContainer>
      <Logo src={LogoC} alt="Logo" />
      <Title>Sito in manutenzione</Title>
      <Message>Stiamo lavorando per migliorare la tua esperienza. Torneremo online a breve.</Message>
    </MaintenanceContainer>
  );
};

export default MaintenancePage;
