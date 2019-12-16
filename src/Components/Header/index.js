import React from 'react';

import { Container, Logo, Wrapper, ItemCount, BasketContainer } from './styles';

function Header({ navigation }) {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <ItemCount>3</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}

export default Header;
