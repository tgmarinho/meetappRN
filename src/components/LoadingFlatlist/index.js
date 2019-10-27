import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  loading: {
    alignSelf: 'center',
    marginVertical: 20,
  },
});

export default function LoadingFlatlist() {
  return (
    <View style={styles.loading}>
      <ActivityIndicator />
    </View>
  );
}
