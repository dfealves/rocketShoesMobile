import React, { Component } from 'react';
import { connect } from 'react-redux';
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

import { formatPrice } from '../../util/format';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Main extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  };

  handleAddProduct = product => {
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
  };

  renderProduct = ({ item }) => {
    // const { amount } = this.props;

    return (
      <Product key={item.id}>
        <ProductImage source={{ uri: item.image }} />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{item.priceFormatted}</ProductPrice>
        <AddButton onPress={() => this.handleAddProduct(item)}>
          <Amount>
            <Icon name="add-shopping-cart" color="#FFF" size={20} />
            <AmountText>2</AmountText>
          </Amount>
          <ButtonText>ADICIONAR</ButtonText>
        </AddButton>
      </Product>
    );
  };

  render() {
    const { products } = this.state;
    return (
      <Container>
        <ProductList
          horizontal
          data={products}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderProduct}
        />
      </Container>
    );
  }
}

export default connect()(Main);
