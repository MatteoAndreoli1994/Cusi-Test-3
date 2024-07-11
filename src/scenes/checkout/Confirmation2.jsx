import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useDispatch } from 'react-redux';
import { clearCartAfterConfirmation } from '../../state/index.js';  // Assicurati di importare l'azione corretta
import styled from 'styled-components';
import Footer from "../global/Footer"
import { useTranslation } from 'react-i18next';








const Confirmation2 =  () => {
  
  
  const { t } = useTranslation();
  return (
    <>
    <Box m="120px auto" width="85%" height="50vh">
      <Alert>
        <AlertTitle>{t('confirmation.success')}</AlertTitle>
        {t('confirmation.messaggio1')}{" "}
        <strong>{t('confirmation.messaggio2')}</strong>
      </Alert>

    </Box>

<Footer/>
</>
  );
};

export default Confirmation2;
