import React, { useEffect } from 'react';
import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useDispatch } from 'react-redux';
import { clearCartAfterConfirmation } from '../../state/index.js';  // Assicurati di importare l'azione corretta
import styled from 'styled-components';

const Confirmation = async () => {
  const dispatch = useDispatch();

  // Azzeramento del carrello quando la pagina di conferma è montata
  useEffect(() => {
    const fetchData = async () => {
      // Azzeramento del carrello
      dispatch(clearCartAfterConfirmation());

      try {
        // Esegui l'aggiornamento del content type
        const requestData = {
          data: {
            quantity: 123,
          },
        };

        const response = await fetch("https://prized-horses-45ff95e916.strapiapp.com/api/Items/5", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        });

        if (!response.ok) {
          throw new Error('Errore durante l\'aggiornamento del content type');
        }

        // Reindirizza l'utente a Google
        window.location.href = 'https://www.google.com';
      } catch (error) {
        console.error('Errore:', error);
      }
    };

    fetchData();
  }, [dispatch]);

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
