import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import './App.css'; // Importa il file CSS
import Home from "./scenes/home/Home";
import Checkout from './scenes/checkout/Checkout';
import ItemDetails from "./scenes/itemDetails/itemDetails";
import Confirmation from './scenes/checkout/Confirmation';
import Confirmation2 from './scenes/checkout/Confirmation2';

import Navbar from './scenes/global/Navbar';
import CartMenu from './scenes/global/CartMenu';
import ShopRings from "./scenes/shop/ShopRings";
import ShopEarrings from "./scenes/shop/ShopEarrings";
import ShopBracelets from "./scenes/shop/ShopBracelets";
import ShopNecklaces from "./scenes/shop/ShopNecklaces";

import ShopEnamelledChains from "./scenes/shop/ShopEnamelledChains";
import ShopAnimals from "./scenes/shop/ShopAnimals";
import ShopSea from "./scenes/shop/ShopSea";
import { gsap } from "gsap";
import axios from 'axios';
import { I18nextProvider } from 'react-i18next';


import CollectionBollywood from "./scenes/shop/CollectionBollywood";
import CollectionFleurie from "./scenes/shop/CollectionFleurie";
import CollectionTycoon from "./scenes/shop/CollectionTycoon";
import CollectionUrania from "./scenes/shop/CollectionUrania";
import CollectionZingara from "./scenes/shop/CollectionZingara";
import Boutiques from "./scenes/about/boutiques";
import MaisonCusi from "./scenes/about/maisoncusi";
import ContactUs from "./scenes/about/contactus";
import CustomerService from "./scenes/about/customerservice";
import Legal from "./scenes/about/legal";
import Footer from "./scenes/global/Footer";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

import CookieBanner from './CookieBanner'; // new

import MaintenancePage from './scenes/home/MaintenancePage';
import i18n from "./config/i18n"



const LazyLoadWrapper = styled.div`
opacity: ${({ loaded }) => (loaded ? 1 : 0)};
transition: opacity 1s ease-in-out;
`;


// apollo client
const client = new ApolloClient({
  uri: 'https://cusi-strapi-3690cb0bf021.herokuapp.com/graphql',
  cache: new InMemoryCache()
})

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  return null;
}





function App() {
  const [loaded, setLoaded] = useState(false);
  const [isMaintenanceMode, setIsMaintenanceMode] = useState(null); // Impostato su null inizialmente

  useEffect(() => {
    const fetchConfiguration = async () => {
      try {
        const response = await axios.get('https://cusi-strapi-3690cb0bf021.herokuapp.com/api/configurations');
        if (response.data && response.data.data && response.data.data.length > 0) {
          const configuration = response.data.data[0].attributes;
          setIsMaintenanceMode(configuration.maintenanceMode);
        } else {
          console.error('Nessun dato di configurazione trovato');
          setIsMaintenanceMode(true); // Imposta la modalità manutenzione se non ci sono dati
        }
      } catch (error) {
        console.error('Errore nel recuperare la configurazione:', error.message);
        setIsMaintenanceMode(true); // Gestione errore: impostare la modalità manutenzione
      }
    };

    fetchConfiguration();
  }, []);

  // Aggiungi un messaggio di caricamento fino a quando isMaintenanceMode non è stato determinato
  if (isMaintenanceMode === null) {
    return <div></div>;
  }


  const handleContentLoad = () => {
    setLoaded(true);
  };

  

  return (
    <div className="app">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>


      <BrowserRouter>
      



        {isMaintenanceMode ? (
        <>
        <ApolloProvider client={client}>
        <Routes><Route path="*" element={<MaintenancePage />} /></Routes>
        </ApolloProvider>
          </>

        ) : (
          <>
        <ApolloProvider client={client}>
          <Navbar />
          
          <ScrollToTop />


            <I18nextProvider i18n={i18n}>
              <Routes>
   
                <Route path="/" element={<Home />} />
                <Route path="item/:itemId" element={<ItemDetails />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="/shopRings" element={<ShopRings />} />
                <Route path="/shopEarrings" element={<ShopEarrings />} />
                <Route path="/shopNecklaces" element={<ShopNecklaces />} />
                <Route path="/shopBracelets" element={<ShopBracelets />} />

                <Route path="/shopEnamelledChains" element={<ShopEnamelledChains />} />
                <Route path="/shopAnimals" element={<ShopAnimals />} />
                <Route path="/shopSea" element={<ShopSea />} />




                <Route path="/shopBollywood" element={<CollectionBollywood />} />
                <Route path="/shopFleurie" element={<CollectionFleurie />} />
                <Route path="/shopTycoon" element={<CollectionTycoon />} />
                <Route path="/shopUrania" element={<CollectionUrania />} />
                <Route path="/shopZingara" element={<CollectionZingara />} />
                <Route path="/boutiques" element={<Boutiques />} />
                <Route path="/maisoncusi" element={<MaisonCusi />} />
                <Route path="/customerservice" element={<CustomerService />} />
                <Route path="/legal" element={<Legal />} />
                <Route path="/contactus" element={<ContactUs />} />
              </Routes>
            </I18nextProvider>


                      {/* Renderizza direttamente le route checkout/success e checkout/conf */}
          <Routes>
            <Route path="checkout/Yy266huhcdhu78huwbi" element={<Confirmation/>} />
            <Route path="checkout/success" element={<Confirmation2 />} />

          </Routes>






          <CartMenu />



        </ApolloProvider>
          </>
        )}

        
      </BrowserRouter>

      


      
    </div>
  );
}

export default App;
