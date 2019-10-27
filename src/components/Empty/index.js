import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TextLabel = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 30px;
`;

export default function Empty({ message }) {
  return (
    <Container>
      {message && <TextLabel>{message}</TextLabel>}
      <Icon name="sentiment-very-dissatisfied" size={150} color="#F94D6A" />
    </Container>
  );
}

Empty.propTypes = {
  message: PropTypes.string,
};

Empty.defaultProps = {
  message: null,
};
