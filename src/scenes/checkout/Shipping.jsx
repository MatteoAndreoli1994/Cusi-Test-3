import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import AddressForm from "./AddressForm";
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';


const Container = styled.div`
margin-top:20px;


`;


const Shipping = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  setFieldValue,
}) => {
  const { t } = useTranslation();
  return (
    <Container m="30px auto">
      {/* BILLING FORM */}
      <Box>
        <Typography sx={{ mb: "15px" }} fontSize="18px">
          {t('checkout.billinginformation')}
        </Typography>
        <AddressForm
          type="billingAddress"
          values={values.billingAddress}
          touched={touched}
          errors={errors}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      </Box>



      {/* SHIPPING FORM */}
      {!values.shippingAddress.isSameAddress && (
        <Box>
          <Typography sx={{ mb: "15px" }} fontSize="18px">
            Shipping Information
          </Typography>
          <AddressForm
            type="shippingAddress"
            values={values.shippingAddress}
            touched={touched}
            errors={errors}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
        </Box>
      )}
    </Container>
  );
};

export default Shipping;