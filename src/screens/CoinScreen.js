import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Text
} from 'react-native';
import { fetchCoinsById, apiKeys } from '../api';
import CoinPage from '../components/CoinPage';
import { useQuery } from 'react-query';


export default function CoinScreen({ route }) {
  const { params } = route;
  const { item } = params;
  const { isLoading, error, data } = useQuery(
    [apiKeys.coin_id, item?.id],
    ()=> fetchCoinsById(item?.id),
  );

  if(isLoading){
      return <Text>Loading...</Text>
  }else if (error) {
    return <Text>🤷‍♂I guess something went wrong</Text>;
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <CoinPage {...data} key={item.id} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f3f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
