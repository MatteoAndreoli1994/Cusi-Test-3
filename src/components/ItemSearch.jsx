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

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const InfoProdotto = styled.div`
  width: 100%;
  margin-bottom: 15px;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 8px;
  }
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

  @media (max-width: 768px) {
    width: 120px;
  }

  @media (max-width: 480px) {
    width: 100px;
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

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
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