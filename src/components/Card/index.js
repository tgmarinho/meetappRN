import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Content,
  Title,
  DateTime,
  EventOrganizer,
  Banner,
  Button,
  TextButton,
  Address,
  Span,
} from './styles';

export default function Card({ data: meetup, cancel = null, register = null }) {
  console.tron.log(meetup);
  // const { item: meetup } = meetup;

  const textButton = register ? 'Realizar Inscrição' : 'Cancelar Inscrição';

  return (
    <Container>
      <Banner
        source={{
          uri: meetup.banner,
        }}
      />
      <Content>
        <Title>{meetup.title}</Title>

        <Span>
          <Icon name="date-range" size={16} color="#999" />
          <DateTime>{meetup.date}</DateTime>
        </Span>
        <Span>
          <Icon name="location-on" size={16} color="#999" />
          <Address>{meetup.location}</Address>
        </Span>
        <Span>
          <Icon name="person" size={16} color="#999" />
          <EventOrganizer>Organizador: {meetup.user}</EventOrganizer>
        </Span>

        <Button onPress={register || cancel}>
          <TextButton>{textButton}</TextButton>
        </Button>
      </Content>
    </Container>
  );
}
