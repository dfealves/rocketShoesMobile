import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  background: ${colors.dark};
`;
export const Product = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  width: 220;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
`;

export const ProductPrice = styled.text`
  font-size: 14px;
`;
