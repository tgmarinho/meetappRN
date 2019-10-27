import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Content,
  Title,
  Banner,
  Button,
  TextButton,
  Span,
  TextLabel,
} from './styles';

export default function Card({ data: meetup, cancel = null, register = null }) {
  const textButton = register ? 'Realizar Inscrição' : 'Cancelar Inscrição';

  return (
    <Container>
      <Banner
        source={{
          uri: meetup.banner.url,
        }}
      />
      <Content>
        <Title>{meetup.title}</Title>

        <Span>
          <Icon name="date-range" size={16} color="#999" />
          <TextLabel>{meetup.date}</TextLabel>
        </Span>
        <Span>
          <Icon name="location-on" size={16} color="#999" />
          <TextLabel>{meetup.localization}</TextLabel>
        </Span>
        <Span>
          <Icon name="person" size={16} color="#999" />
          <TextLabel>Organizador: {meetup.user.name}</TextLabel>
        </Span>

        <Button onPress={register || cancel}>
          <TextButton>{textButton}</TextButton>
        </Button>
      </Content>
    </Container>
  );
}
