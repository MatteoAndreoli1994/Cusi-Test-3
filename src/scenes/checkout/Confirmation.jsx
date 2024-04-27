import React, { useEffect } from 'react';
import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

import { clearCartAfterConfirmation } from '../../state/index.js';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'; // Importa anche useSelector

//token

const apiToken =process.env.REACT_APP_API_TOKEN;

const Confirmation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

// Usa useSelector per accedere allo stato del carrello
const cartData = useSelector(state => state.cart);
  

  useEffect(() => {
    const fetchData = async () => {
      let testtestsResponse;

      try {

        //INFORMAZIONI CARRELLO
  
        const cartItems = cartData.cart || [];

        // Estrapola gli id e i count
        const ids = cartItems.map(item => item.id);
        const counts = cartItems.map(item => item.count);
        const quantity = cartItems.map(item => item.attributes.quantity);

        console.log("Cart: ", cartData);
        console.log("ID degli elementi comprati:", ids);
        console.log("Quantità degli elementi comprati:", counts);

        console.log("quantità nel magazzino: ", quantity);




      

  // Prima operazione: AGGIORNO QUANTITÀ
  for (let i = 0; i < ids.length; i++) {
    const requestData = {
      data: {
        quantity: quantity[i] - counts[i], // Calcolo della nuova quantità sottraendo la quantità acquistata
      },
    };

    const itemId = ids[i]; // ID dell'elemento corrente

    const testtestsResponse = await fetch(`https://prized-horses-45ff95e916.strapiapp.com/api/Items/${itemId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiToken}` // Aggiungi il token API come header Authorization
      },
      body: JSON.stringify(requestData),
    });

    const contentType = testtestsResponse.headers.get("content-type");

    if (contentType && contentType.indexOf("application/json") !== -1) {
      const testtestsResult = await testtestsResponse.json();

      // Reindirizza l'utente a Google
      // navigate('/checkout/success');
    } else {
      console.log("Risposta del server:", await testtestsResponse.text());
    }
  }




  

        


      } catch (error) {
        console.error("Errore durante la richiesta:", error);
        console.log("Dettagli della risposta:", await testtestsResponse?.text());
      }

    };

    fetchData();

      // seconda operazione: Azzeramento del carrello
      dispatch(clearCartAfterConfirmation());
      navigate('/checkout/success');


  }, [dispatch, navigate]); // Assicurati di includere 'cart' come dipendenza dell'effetto

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
