import styled from 'styled-components/native';
import { TouchableOpacity, Image } from 'react-native';

export const Container = styled.View`
  background: #fff;
  border-radius: 4px;
  margin-top: 20px;
`;

export const Banner = styled(Image)`
  width: 100%;
  height: 150px;
`;

export const Content = styled.View`
  padding: 10px;
  background: #fff;
`;

export const Span = styled.View`
  margin-left: 20px;
  margin-top: 15px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.Text`
  margin-top: 15px;
  font-size: 20px;
  font-weight: bold;
`;
export const TextLabel = styled.Text`
  margin-left: 10px;
  font-size: 16px;
  color: #999;
`;

export const Button = styled(TouchableOpacity)`
  background: #e5556e;
  margin: 10px;
  padding: 10px;
  align-items: center;
  border-radius: 4px;
`;

export const TextButton = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;
