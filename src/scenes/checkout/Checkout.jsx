
import { Box, Button, Stepper, Step, StepLabel } from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import { shades } from "../../theme";
import Payment from "./Payment";
import Shipping from "./Shipping";
import {loadStripe} from '@stripe/stripe-js';
import styled from 'styled-components';
// Importa le seguenti funzioni da react-redux
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";




const Container = styled.div`
  margin-top: 130px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center; // Aggiunto per centrare verticalmente

`;

const ContainerContainer = styled.div`

width: 100%;
display:flex;
flex-direction:column;
justify-content:center;
align-content:center;


`;

const stripePromise = loadStripe(
  "pk_test_51OVHbvKBum0tDq2rqETCthy3a1ctwYBrhKQZ8hffdT7u6FRVMy3umFP41HNKDeUEigbqzSKnSKELUS2i0J803Vry00p9sVRga4"
  
);

const Checkout = () => {
  useEffect(() => {
    // Verifica se la larghezza dello schermo è inferiore a 600px (un'approssimazione di uno schermo mobile)
    if (window.innerWidth < 600) {
      // Reimposta la posizione dello schermo all'inizio della pagina
      window.scrollTo(0, 0);
    }
  }, []); // Questo effetto viene eseguito solo una volta quando il componente viene montato

  const [activeStep, setActiveStep] = useState(0);
  const cart = useSelector((state) => state.cart.cart);
  const isFirstStep = activeStep === 0;
  const isSecondStep = activeStep === 1;
   // Usa useDispatch per ottenere la funzione dispatch
   const dispatch = useDispatch();

   const handleFormSubmit = async (values, actions) => {
    setActiveStep(activeStep + 1);
  
    // this copies the billing address onto shipping address
    if (isFirstStep && values.shippingAddress.isSameAddress) {
      actions.setFieldValue("shippingAddress", {
        ...values.billingAddress,
        isSameAddress: true,
      });
    }
  
    if (isSecondStep) {
      makePayment(values);
    }
  
    actions.setTouched({});
  
    // Scrolla verso l'alto quando si preme qualsiasi pulsante
    window.scrollTo(0, 0);
  };
  

  async function makePayment(values) {
    
    const stripe = await stripePromise;


    const requestBody = {


        userName: [values.billingAddress.firstName , values.billingAddress.lastName].join(" "),
        email: values.email,
        phoneNumber: values.phoneNumber, 
        zipCode: values.billingAddress.zipCode,
        street1: values.billingAddress.street1,
        city: values.billingAddress.city,
        country: values.billingAddress.country,
        state: values.billingAddress.state,






      products: cart.map(({ id, count }) => ({
        id,
        count,

      })),
    };

    console.log("post: "+JSON.stringify(requestBody));

    const response = await fetch("https://cusi-strapi-3690cb0bf021.herokuapp.com/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });










  ///TEST UPDATE QUANTITY  ///TEST UPDATE QUANTITY  ///TEST UPDATE QUANTITY  ///TEST UPDATE QUANTITY



    const session = await response.json();

    await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    // Scrolla verso l'alto quando si preme "Place Order"
    window.scrollTo(0, 0);

    
  }

  async function makePayment2() {
    // Dati da inviare nella richiesta POST
    const requestData = {
        data: {
            prova: 42,
        },
    };

    console.log("post (testtests): " + JSON.stringify(requestData));

    let testtestsResponse;

    try {
        testtestsResponse = await fetch("https://cusi-strapi-3690cb0bf021.herokuapp.com/api/testtests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // Aggiungi eventuali altri header necessari
            },
            body: JSON.stringify(requestData),
        });

        const contentType = testtestsResponse.headers.get("content-type");

        if (contentType && contentType.indexOf("application/json") !== -1) {
            const testtestsResult = await testtestsResponse.json();
            console.log("Risposta del server (JSON):", testtestsResult);
            // Puoi fare qualcosa con il risultato se necessario
        } else {
            console.log("Risposta del server:", await testtestsResponse.text());
        }
    } catch (error) {
        console.error("Errore durante la richiesta:", error);
        console.log("Dettagli della risposta:", await testtestsResponse?.text());
    }
}




  return (
    <ContainerContainer>
    <Container width="80%">
      <Stepper activeStep={activeStep} >
        <Step>
          <StepLabel>Billing</StepLabel>
        </Step>
        <Step>
          <StepLabel>Contact Info</StepLabel>
        </Step>
      </Stepper>
      <Box>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema[activeStep]}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              {isFirstStep && (
                <Shipping
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                />
              )}
              {isSecondStep && (
                <Payment
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                />
              )}
              <Box display="flex" justifyContent="space-between" gap="50px" marginTop="20px" marginBottom="20px">
                {!isFirstStep && (
                  <Button
                    fullWidth
                    color="primary"
                    variant="contained"
                    sx={{
                      backgroundColor: shades.primary[200],
                      boxShadow: "none",
                      color: "white",
                      borderRadius: 0,
                      padding: "15px 12px",
                    }}
                    onClick={() => setActiveStep(activeStep - 1)}
                  >
                    Back
                  </Button>
                )}
                <Button
                  fullWidth
                  type="submit"
                  color="primary"
                  variant="contained"
                  sx={{
                    backgroundColor: shades.primary[400],
                    boxShadow: "none",
                    color: "white",
                    borderRadius: 0,
                    padding: "15px 12px",
                  }}
                >
                  {!isSecondStep ? "Next" : "Place Order"}
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Container>
    </ContainerContainer>
  );
};

const initialValues = {
  billingAddress: {
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  },
  shippingAddress: {
    isSameAddress: true,
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  },
  email: "",
  phoneNumber: "",
};

const checkoutSchema = [
  yup.object().shape({
    billingAddress: yup.object().shape({
      firstName: yup.string().required("required"),
      lastName: yup.string().required("required"),
      country: yup.string().required("required"),
      street1: yup.string().required("required"),
      street2: yup.string(),
      city: yup.string().required("required"),
      state: yup.string().required("required"),
      zipCode: yup.string().required("required"),
    }),
    shippingAddress: yup.object().shape({
      isSameAddress: yup.boolean(),
      firstName: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      lastName: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      country: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      street1: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      street2: yup.string(),
      city: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      state: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      zipCode: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
    }),
  }),

  
  yup.object().shape({
    email: yup.string().required("required"),
    phoneNumber: yup.string().required("required"),
  }),
];

export default Checkout;