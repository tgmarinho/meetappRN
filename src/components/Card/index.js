import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Content,
  Title,
  DateTime,
  EventOrganizer,
  Banner,
  ButtonSubscribe,
  TextButton,
  Address,
  Span,
} from './styles';

export default function Card({ data: meetup }) {
  console.tron.log(meetup);
  // const { item: meetup } = meetup;

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

        <ButtonSubscribe>
          <TextButton>Realizar Inscrição</TextButton>
        </ButtonSubscribe>
      </Content>
    </Container>
  );
}
