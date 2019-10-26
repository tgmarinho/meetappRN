import React from 'react';
import styled from 'styled-components/native';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';

export const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 20px;
  z-index: -1;
`;

export default function Header() {
  return (
    <ImageContainer>
      <Image source={logo} style={{ width: 32, height: 34 }} />
    </ImageContainer>
  );
}
