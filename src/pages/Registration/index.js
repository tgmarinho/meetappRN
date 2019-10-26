import React, { useEffect, useState } from 'react';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';
import Header from '~/components/Header';
import Background from '~/components/Background';
import Card from '~/components/Card';

import { Container, DateContainer, Date, List, Button } from './styles';

Icon.loadFont();

function Registration() {
  console.tron.log('teste2');
  const [meetups, setMeetups] = useState([
    {
      title: 'Meetup de React Native',
      date: '25 de Junho, as 20h',
      location: 'Rua Guilherme Gembala',
      user: 'Diego Fernandes',
      banner:
        'http://localhost:3333/files/c6d2832673f02e209f2b66bc78ef80b7.png',
    },
    {
      title: 'Meetup de React Native',
      date: '25 de Junho, as 20h',
      location: 'Rua Guilherme Gembala',
      user: 'Diego Fernandes',
      banner:
        'http://localhost:3333/files/c6d2832673f02e209f2b66bc78ef80b7.png',
    },
    {
      title: 'Meetup de React Native',
      date: '25 de Junho, as 20h',
      location: 'Rua Guilherme Gembala',
      user: 'Diego Fernandes',
      banner:
        'http://localhost:3333/files/c6d2832673f02e209f2b66bc78ef80b7.png',
    },
  ]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups');

      setMeetups(response.data);
      console.tron.log(response.data);
    }

    // loadMeetups();
  }, []);

  async function handleCancel(id) {
    // const response = await api.delete(`appointments/${id}`);
    // setAppointments(
    //   meetups.map(appointment =>
    //     appointment.id === id
    //       ? {
    //           ...appointment,
    //           canceled_at: response.data.canceled_at,
    //         }
    //       : appointment
    //   )
    // );
  }

  return (
    <Background>
      <Container>
        <Header />
        <List
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Card
              data={item}
              cancel={() => {
                console.tron.log('canceling');
              }}
            />
          )}
        />
      </Container>
    </Background>
  );
}

Registration.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" size={24} color={tintColor} />
  ),
};

export default withNavigationFocus(Registration);
