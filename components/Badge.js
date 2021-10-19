import React from 'react';

import styled from 'styled-components/native';

const getColor = ({ active, color }) => {
  const colors = {
    green: {
      background: '#84d269',
      text: '#fff',
    },
    active: {
      background: '#2a86ff',
      text: '#fff',
    },
    default: {
      background: '#fff',
      text: '#2a86ff',
    },
  };

  if (active) {
    return colors.active;
  } else if (color && colors[color]) {
    return colors[color];
  } else {
    return colors.default;
  }
};

export default styled.Text`
  border-radius: 18px;
  background: ${(props) => getColor(props).background};
  color: ${(props) => getColor(props).text};
  font-weight: bold;
  font-size: 14px;
  width: 55px;
  height: 32px;
  text-align: center;
  line-height: 32px;
`;
