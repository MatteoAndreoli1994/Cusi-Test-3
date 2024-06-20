import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import styled from 'styled-components';
import Footer from "../global/Footer";

const FullScreenBox = styled(Box)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;  // Altezza minima pari all'altezza della viewport
`;

const ContentBox = styled(Box)`
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;  // Align items at the start of the flex container (top)
  align-items: center;
  width: 100%;  // Ensure the ContentBox takes the full width
`;

const StyledAlert = styled(Alert)`
  width: 100%;  // Ensure the Alert takes the full width
  margin-top: 20px;  // Add some margin at the top to give some spacing from the top of the screen
`;

const Confirmation2 = () => {
  return (
    <FullScreenBox>
      <ContentBox>
        <StyledAlert severity="success">
          <AlertTitle>Success</AlertTitle>
          You have successfully made an Order —{" "}
          <strong>Congrats on Making your Purchase</strong>
        </StyledAlert>
      </ContentBox>
      <Footer />
    </FullScreenBox>
  );
};

export default Confirmation2;
