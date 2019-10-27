import styled from 'styled-components/native';
import React from 'react';
import { ActivityIndicator } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default function Loading() {
  return (
    <Container>
      <ActivityIndicator color="#F94D6A" size="large" />
    </Container>
  );
}
