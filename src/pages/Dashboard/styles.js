import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;

export const DateContainer = styled.View`
  margin-top: 30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const DateLabel = styled.Text`
  font-size: 24px;
  color: #fff;
  font-weight: bold;
`;

export const Button = styled(TouchableOpacity)``;
