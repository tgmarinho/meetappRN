import React, { useEffect, useState } from 'react';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import pt from 'date-fns/locale/pt';
import { format, parseISO } from 'date-fns';
import { showMessage } from 'react-native-flash-message';
import api from '~/services/api';
import Header from '~/components/Header';
import Background from '~/components/Background';
import Empty from '~/components/Empty';
import Card from '~/components/Card';
import { Container, List } from './styles';

function Registration({ isFocused }) {
  console.tron.log('REGISTRATION');
  const [registrations, setRegistrations] = useState([]);
  console.tron.log('Registration isFocused', isFocused);

  useEffect(() => {
    async function loadRegistrations() {
      console.tron.log('LOADING REGISTRATION');
      const response = await api.get('registration');
      console.tron.log(response);
      const data = response.data.registrations.map(registration => {
        console.tron.log('REG: ', registration);
        return {
          id: registration.id,
          title: registration.meetup.title,
          localization: registration.meetup.localization,
          user: registration.meetup.user,
          banner: registration.meetup.banner,
          date: format(
            parseISO(registration.meetup.date),
            "d 'de' MMMM', às ' h'h'",
            {
              locale: pt,
            }
          ),
        };
      });
      console.tron.log('novo: ', data);
      setRegistrations(data);
    }

    loadRegistrations();
  }, [isFocused]);

  async function handleCancelation(id) {
    try {
      await api.delete(`registration/${id}`);

      showMessage({
        message: 'Inscrição',
        description: `Inscrição cancelada com sucesso`,
        type: 'success',
      });
    } catch (error) {
      showMessage({
        message: 'Falha no cancelamento de inscrição',
        description: `${error.response.data.error}`,
        type: 'danger',
      });
    }
  }

  return (
    <Background>
      <Container>
        <Header />

        {registrations.length > 0 ? (
          <List
            data={registrations}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Card data={item} cancel={() => handleCancelation(item.id)} />
            )}
          />
        ) : (
          <Empty message="Sem inscrições em meetups!" />
        )}
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
