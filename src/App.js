import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import './App.css'; // Importa il file CSS
import Home from "./scenes/home/Home";
import Checkout from './scenes/checkout/Checkout';
import ItemDetails from "./scenes/itemDetails/itemDetails";
import Confirmation from './scenes/checkout/Confirmation';
import Navbar from './scenes/global/Navbar';
import CartMenu from './scenes/global/CartMenu';
import ShopRings from "./scenes/shop/ShopRings";
import ShopEarrings from "./scenes/shop/ShopEarrings";
import ShopBracelets from "./scenes/shop/ShopBracelets";
import ShopNecklaces from "./scenes/shop/ShopNecklaces";
import CollectionBollywood from "./scenes/shop/CollectionBollywood";
import CollectionFleurie from "./scenes/shop/CollectionFleurie";
import CollectionTycoon from "./scenes/shop/CollectionTycoon";
import CollectionUrania from "./scenes/shop/CollectionUrania";
import CollectionZingara from "./scenes/shop/CollectionZingara";
import Boutiques from "./scenes/about/boutiques";
import MaisonCusi from "./scenes/about/maisoncusi";
import ContactUs from "./scenes/about/contactus";
import CustomerService from "./scenes/about/customerservice";
import Footer from "./scenes/global/Footer";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import styled from 'styled-components';


// apollo client
const client = new ApolloClient({
  uri: 'https://prized-horses-45ff95e916.strapiapp.com/graphql',
  cache: new InMemoryCache()
})

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  return null;
}



const MyfontTest = styled.p`
  font-family: 'OldLondon', sans-serif;
  font-size: 20px;
`;

const MyfontTest2 = styled.p`
  font-family: 'ABCGaisyr-Regular';
  font-size: 20px;
`;

const MyfontTest3 = styled.p`
  font-size: 20px;
`;

const MyfontTest4 = styled.p`
  font-family: 'GTAmericaBold';
  font-size: 16px;
  font-weight: normal;
`;

const MyfontTest5 = styled.p`
  font-family: 'GTAmericaRegular';
  font-size: 16px;
  font-weight: normal;
`;

function App() {

  return (
    <div className="app">



      <BrowserRouter>
        <ApolloProvider client={client}>
          <Navbar />
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="item/:itemId" element={<ItemDetails />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="checkout/success" element={<Confirmation />} />
            <Route path="/shopRings" element={<ShopRings />} />
            <Route path="/shopEarrings" element={<ShopEarrings />} />
            <Route path="/shopNecklaces" element={<ShopNecklaces />} />
            <Route path="/shopBracelets" element={<ShopBracelets />} />
            <Route path="/shopBollywood" element={<CollectionBollywood />} />
            <Route path="/shopFleurie" element={<CollectionFleurie />} />
            <Route path="/shopTycoon" element={<CollectionTycoon />} />
            <Route path="/shopUrania" element={<CollectionUrania />} />
            <Route path="/shopZingara" element={<CollectionZingara />} />
            <Route path="/boutiques" element={<Boutiques />} />
            <Route path="/maisoncusi" element={<MaisonCusi />} />
            <Route path="/customerservice" element={<CustomerService />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
          <Footer />
          <CartMenu />
        </ApolloProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
