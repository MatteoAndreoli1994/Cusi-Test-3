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
  justify-content: center;
  align-items: center;
`;

const Confirmation2 = () => {
  return (
    <FullScreenBox>
      <ContentBox>
        <Alert>
          <AlertTitle>Success</AlertTitle>
          You have successfully made an Order —{" "}
          <strong>Congrats on Making your Purchase</strong>
        </Alert>
      </ContentBox>
      <Footer />
    </FullScreenBox>
  );
};

export default Confirmation2;
