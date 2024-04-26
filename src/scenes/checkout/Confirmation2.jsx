import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useDispatch } from 'react-redux';
import { clearCartAfterConfirmation } from '../../state/index.js';  // Assicurati di importare l'azione corretta
import styled from 'styled-components';







        


const Confirmation = async () => {
  
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
    </Box>
  );
};

export default Confirmation;
