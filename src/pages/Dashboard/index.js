import React, { useEffect, useState } from 'react';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

import Background from '~/components/Background';
import Card from '~/components/Card';

import { Container, DateContainer, Date, List, Button } from './styles';

Icon.loadFont();

function Dashboard() {
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
        <DateContainer>
          <Button>
            <Icon name="chevron-left" size={40} color="#fff" />
          </Button>

          <Date>12 de maio</Date>
          <Button>
            <Icon name="chevron-right" size={40} color="#fff" />
          </Button>
        </DateContainer>

        <List
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Card
              data={item}
              register={() => {
                console.tron.log('registering');
              }}
            />
          )}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="list" size={24} color={tintColor} />
  ),
};

export default withNavigationFocus(Dashboard);
