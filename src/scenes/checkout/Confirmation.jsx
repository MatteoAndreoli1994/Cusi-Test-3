import React, { useEffect } from 'react';
import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useDispatch } from 'react-redux';
import { clearCartAfterConfirmation } from '../../state/index.js';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      let testtestsResponse;

      try {
        // Log delle informazioni del carrello
        console.log("Carrello:");
        console.log(cart);

        // Prima operazione: Cambio della quantità a 123
        const requestData = {
          data: {
            quantity: 123,
          },
        };

        console.log("post (testtests): " + JSON.stringify(requestData));

        testtestsResponse = await fetch("https://prized-horses-45ff95e916.strapiapp.com/api/Items/5", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        });

        const contentType = testtestsResponse.headers.get("content-type");

        if (contentType && contentType.indexOf("application/json") !== -1) {
          const testtestsResult = await testtestsResponse.json();
          console.log("Risposta del server (JSON):", testtestsResult);

          // Reindirizza l'utente a Google
          navigate('/checkout/success');
        } else {
          console.log("Risposta del server:", await testtestsResponse.text());
        }
      } catch (error) {
        console.error("Errore durante la richiesta:", error);
        console.log("Dettagli della risposta:", await testtestsResponse?.text());
      }
    };

    fetchData();

    
    // seconda operazione: Azzeramento del carrello
    dispatch(clearCartAfterConfirmation());

  }, [dispatch, navigate]);

  return (
    <Box m="120px auto" width="80%" height="50vh">
      <Alert severity="success">
        <AlertTitle>Pre - Success</AlertTitle>
        You have successfully made an Order —{" "}
        <strong>Congrats on Making your Purchase</strong>
      </Alert>
    </Box>
  );
};

export default Confirmation;
