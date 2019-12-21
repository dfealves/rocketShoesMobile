import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductList,
  AddButton,
  ButtonText,
  Amount,
  AmountText,
} from './styles';

import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/format';

export default function Main() {
  const [products, setProducts] = useState([]);
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function getProducts() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
      setProducts(data);
    }
    getProducts();
  }, []);

  function handleAddProduct(id) {
    // essa função não necessita do useCallBack, pois ela não depende de uma outra informação contida nas variaveis do componente, ela depende somente do parametro que ela recebe
    dispatch(CartActions.addToCartRequest(id));
  }

  function renderProduct({ item }) {
    return (
      <Product key={item.id}>
        <ProductImage source={{ uri: item.image }} />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{item.priceFormatted}</ProductPrice>
        <AddButton onPress={() => handleAddProduct(item.id)}>
          <Amount>
            <Icon name="add-shopping-cart" color="#FFF" size={20} />
            <AmountText> {amount[item.id] || 0}</AmountText>
          </Amount>
          <ButtonText>ADICIONAR</ButtonText>
        </AddButton>
      </Product>
    );
  }

  return (
    <Container>
      <ProductList
        horizontal
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={renderProduct}
      />
    </Container>
  );
}
