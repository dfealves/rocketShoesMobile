import React from 'react';

import api from '../../services/api';

import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Products,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  ProductControls,
  ProductControlButton,
  ProductAmount,
  ProductSubtotal,
  TotalContainer,
  TotalText,
  TotalAmount,
  Order,
  OrderText,
  EmptyContainer,
  EmptyText,
} from './styles';

export default function Cart({ navigation, products, total }) {
  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  return (
    <Container>
      {/* {products.length ? ( */}
      <>
        <Products>
          {/* {products.map(product => ( */}
          <Product>
            <ProductInfo>
              <ProductImage source="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg" />
              <ProductDetails>
                <ProductTitle>Tênis de Caminhada Leve Confortável</ProductTitle>
                <ProductPrice>R$</ProductPrice>
              </ProductDetails>
              <ProductDelete onPress={() => removeFromCart(product.id)}>
                <Icon name="delete-forever" size={24} color={colors.primary} />
              </ProductDelete>
            </ProductInfo>
            <ProductControls>
              <ProductControlButton onPress={() => decrement(product)}>
                <Icon
                  name="remove-circle-outline"
                  size={20}
                  color={colors.primary}
                />
              </ProductControlButton>
              <ProductAmount value={3} />
              <ProductControlButton onPress={() => increment(product)}>
                <Icon
                  name="add-circle-outline"
                  size={20}
                  color={colors.primary}
                />
              </ProductControlButton>
              <ProductSubtotal>R$999,99</ProductSubtotal>
            </ProductControls>
          </Product>
          )
        </Products>
        <TotalContainer>
          <TotalText>TOTAL</TotalText>
          <TotalAmount>R$999,999</TotalAmount>
          <Order>
            <OrderText>FINALIZAR PEDIDO</OrderText>
          </Order>
        </TotalContainer>
      </>
      {/* ) : (
        <EmptyContainer>
          <Icon name="remove-shopping-cart" size={64} color="#eee" />
          <EmptyText>Seu carrinho está vazio.</EmptyText>
        </EmptyContainer>
      )} */}
    </Container>
  );
}
