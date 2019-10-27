import React, { useEffect, useState, useMemo } from 'react';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import pt from 'date-fns/locale/pt';
import { format, parseISO, subDays, addDays } from 'date-fns';
import { showMessage } from 'react-native-flash-message';
import api from '~/services/api';
import Header from '~/components/Header';
import Background from '~/components/Background';
import Loading from '~/components/Loading';
import Empty from '~/components/Empty';
import Card from '~/components/Card';
import { Container, DateContainer, DateLabel, List, Button } from './styles';

Icon.loadFont();

function Dashboard({ isFocused }) {
  console.tron.log('DASHBOARD');
  const [meetups, setMeetups] = useState([]);
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(true);

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadMeetups() {
      setLoading(true);
      const response = await api.get('meetups', {
        params: { date },
      });
      // console.tron.log(response.data);
      const data = response.data.map(meetup => {
        return {
          ...meetup,
          date: format(parseISO(meetup.date), "d 'de' MMMM', às ' h'h'", {
            locale: pt,
          }),
        };
      });
      setMeetups(data);
      setLoading(false);
      // console.tron.log(data);
    }

    loadMeetups();
  }, [date, isFocused]);

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  async function handleSubscription(id) {
    try {
      await api.post(`registration`, { meetup_id: id });

      showMessage({
        message: 'Meetups',
        description: `Inscrição realizada com sucesso`,
        type: 'success',
      });
    } catch (error) {
      showMessage({
        message: 'Falha na inscrição',
        description: `${error.response.data.error}`,
        type: 'danger',
      });
    }
  }

  return (
    <Background>
      <Container>
        <Header />
        <DateContainer>
          <Button onPress={handlePrevDay}>
            <Icon name="chevron-left" size={40} color="#fff" />
          </Button>

          <DateLabel>{dateFormatted}</DateLabel>

          <Button onPress={handleNextDay}>
            <Icon name="chevron-right" size={40} color="#fff" />
          </Button>
        </DateContainer>

        {meetups.length > 0 ? (
          <List
            data={meetups}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Card data={item} register={() => handleSubscription(item.id)} />
            )}
          />
        ) : (
          <Empty message="Sem eventos nessa data!" />
        )}
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
