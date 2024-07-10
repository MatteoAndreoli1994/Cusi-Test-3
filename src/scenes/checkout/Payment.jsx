import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';

const Payment = ({ values, touched, errors, handleBlur, handleChange }) => {
  useEffect(() => {
    // Verifica se la larghezza dello schermo è inferiore a 600px (un'approssimazione di uno schermo mobile)
    if (window.innerWidth < 600) {
      // Reimposta la posizione dello schermo all'inizio della pagina
      window.scrollTo(0, 0);
    }
  }, []); // Questo effetto viene eseguito solo una volta quando il componente viene montato
  const { t } = useTranslation();
  return (
    <Box m="30px 0">
      {/* CONTACT INFO */}
      <Box>
        <Typography sx={{ mb: "15px" }} fontSize="18px">
        {t('checkout.contactinfo')}
        </Typography>
        <TextField
          fullWidth
          type="text"
          label="Email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
          name="email"
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
          sx={{ gridColumn: "span 4", marginBottom: "15px" }}
        />
        <TextField
          fullWidth
          type="text"
          label=          {t('checkout.phonenumber')}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.phoneNumber}
          name="phoneNumber"
          error={!!touched.phoneNumber && !!errors.phoneNumber}
          helperText={touched.phoneNumber && errors.phoneNumber}
          sx={{ gridColumn: "span 4" }}
        />
      </Box>
    </Box>
  );
};

export default Payment;