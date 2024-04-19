import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useDispatch } from 'react-redux';
import { clearCartAfterConfirmation } from '../../state/index.js';  // Assicurati di importare l'azione corretta
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
min-height: 200vh;
margin-top:120px;
align-items: center;
margin-bot:1%;
overflow:hidden;
background-color:red;
`;


const Confirmation = () => {
  const dispatch = useDispatch();

  // Azzeramento del carrello quando la pagina di conferma è montata
  dispatch(clearCartAfterConfirmation());

  return (
    <Box m="120px auto" width="80%" height="50vh">
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        You have successfully made an Order —{" "}
        <strong>Congrats on Making your Purchase</strong>
      </Alert>
      <Container></Container>
    </Box>

  );
};

export default Confirmation;
