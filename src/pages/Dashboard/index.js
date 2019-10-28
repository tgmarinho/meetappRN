import React, { useState, useEffect } from 'react';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import pt from 'date-fns/locale/pt';
import { format, parseISO, subDays, addDays } from 'date-fns';
import { showMessage } from 'react-native-flash-message';
import PropTypes from 'prop-types';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import api from '~/services/api';
import Header from '~/components/Header';
import Background from '~/components/Background';
import Loading from '~/components/Loading';
import Empty from '~/components/Empty';
import Card from '~/components/Card';
import { Container, DateContainer, DateLabel, List, Button } from './styles';

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20,
  },

  listItem: {
    backgroundColor: '#EEE',
    marginTop: 20,
    padding: 30,
  },

  loading: {
    alignSelf: 'center',
    marginVertical: 20,
  },
});

Icon.loadFont();

function Dashboard({ isFocused }) {
  const [date, setDate] = useState(new Date());
  const [meetups, setMeetups] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  async function loadMeetups(pageNumber = page, shouldRefresh = false) {
    if (!hasMore) return;
    if (loading) return;

    setLoading(true);

    const response = await api.get('meetups', {
      params: { date, page },
    });
    const data = response.data.map(meet => {
      return {
        ...meet,
        date: format(parseISO(meet.date), "d 'de' MMMM', às ' h'h'", {
          locale: pt,
        }),
      };
    });

    setLoading(false);
    setHasMore(data.length >= 10);
    setPage(pageNumber + 1);

    setMeetups(shouldRefresh ? data : [...meetups, ...data]);
  }

  async function refreshList() {
    setPage(1);
    setRefreshing(true);
    await loadMeetups(1, true);

    setRefreshing(false);
  }

  useEffect(() => {
    loadMeetups();
  }, [date, isFocused]); // eslint-disable-line

  function handlePrevDay() {
    setDate(subDays(date, 1));
    setPage(1);
    setHasMore(true);
    setMeetups([]);
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
    setPage(1);
    setHasMore(true);
    setMeetups([]);
  }

  function renderFooter() {
    if (!loading) return null;

    return (
      <View style={styles.loading}>
        <ActivityIndicator />
      </View>
    );
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

          <DateLabel>{format(date, "d 'de' MMMM", { locale: pt })}</DateLabel>

          <Button onPress={handleNextDay}>
            <Icon name="chevron-right" size={40} color="#fff" />
          </Button>
        </DateContainer>
        {loading && <Loading />}
        {meetups.length > 0 ? (
          <List
            data={meetups}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Card data={item} register={() => handleSubscription(item.id)} />
            )}
            onRefresh={refreshList}
            refreshing={refreshing}
            onEndReachedThreshold={0.1}
            onEndReached={() => loadMeetups()}
            ListFooterComponent={() => renderFooter()}
          />
        ) : (
          !loading && <Empty message="Sem eventos nessa data!" />
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

Dashboard.propTypes = {
  isFocused: PropTypes.bool,
};

Dashboard.defaultProps = {
  isFocused: false,
};
