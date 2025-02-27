import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const DivItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
`;

const InfoProdotto = styled.div`
  width: 100%;
  margin-bottom: 15px;
  text-align: center;
`;

const DivImmagine = styled.div`
  width: 200px;
  height: auto;
  overflow: hidden;
  
  .lazy-load-image-background {
    width: 100%;
    height: 100%;
  }


  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
`;

const ProductName = styled.p`
  font-family: 'GTAmericaRegular';
  font-size: 16px;
  margin: 0;
  color: #000;
  text-align: center;
  
  &:hover {
    color: rgba(0, 0, 0, 0.7);
  }
`;

const ItemSearch = ({ item }) => {
  const navigate = useNavigate();
  const { name, image } = item.attributes;
  const {
    data: {
      attributes: { url },
    },
  } = image;

  return (
    <DivItem onClick={() => navigate(`/item/${item.id}`)} style={{ cursor: "pointer" }}>
      <InfoProdotto>
        <ProductName>{name}</ProductName>
      </InfoProdotto>
      
      <DivImmagine>
        <LazyLoadImage
          src={url}
          alt={name}
          effect="blur"
        />
      </DivImmagine>
    </DivItem>
  );
};

export default ItemSearch;