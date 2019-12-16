import React, { Component } from 'react';
import {
  Container,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
} from './styles';

import api from '../../services/api';

export default class Main extends Component {
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
      price: product.price,
    }));

    this.setState({ products: data });
  };

  renderProduct = ({ item }) => {
    const { amount } = this.props;

    const { products } = this.state;

    return (
      <Product key={item.id}>
        <ProductImage source={{ uri: item.image }} />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{item.price}</ProductPrice>
      </Product>
    );
  };

  render() {
    const { products } = this.state;
    return (
      <Container>
        {/* <FlatList
          horizontal
          data={products}
          extraData={this.props}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderProduct}
        /> */}
      </Container>
    );
  }
}
