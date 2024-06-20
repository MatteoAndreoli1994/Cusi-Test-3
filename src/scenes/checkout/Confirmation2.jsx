import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useDispatch } from 'react-redux';
import { clearCartAfterConfirmation } from '../../state/index.js';  // Assicurati di importare l'azione corretta
import styled from 'styled-components';
import Footer from "../global/Footer"









const Confirmation2 =  () => {
  
  

  return (
    <>
    <Box m="120px auto" width="85%" height="50vh">
      <Alert>
        <AlertTitle>Success</AlertTitle>
        You have successfully made an Order —{" "}
        <strong>Congrats on Making your Purchase</strong>
      </Alert>

    </Box>

<Footer/>
</>
  );
};

export default Confirmation2;
