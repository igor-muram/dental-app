import React from 'react';

import styled from 'styled-components/native';

const Button = ({ children, color }) => (
  <ButtonWrapper color={color}>
    <ButtonText>{children}</ButtonText>
  </ButtonWrapper>
);

export default Button;

Button.defaultProps = {
  color: '#2a86ff',
};

const ButtonWrapper = styled.TouchableOpacity`
  border-radius: 30px;
  background: ${(props) => props.color};
  text-align: center;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 17px;
  font-weight: bold;
`;
