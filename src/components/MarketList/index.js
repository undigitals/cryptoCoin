import React, { Fragment } from 'react';
import { View, Text,StyleSheet, FlatList } from 'react-native';
import { useQuery } from 'react-query';
import { useNavigation } from '@react-navigation/native';
import RenderMarketList from '../RenderMarketList';
import { fetchCoinsMarket, apiKeys } from '../../api';
import TouchableScale from '../TouchableScale';


const MarketList = () => {
  const navigation = useNavigation();
  const { isLoading, error, data } = useQuery(
    apiKeys.coin_markets,
    fetchCoinsMarket,
  );
  if (isLoading) {
    return <Text>Loading...</Text>;
  } else if (error) {
    return <Text>🤷‍♂I guess something went wrong</Text>;
  }

  return (
    <View
      style={[
        {
          marginBottom: 15,
          marginVertical: 'auto',
          width: '100%',
        },
      ]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: '600',
            alignSelf: 'baseline',
            marginLeft: 15,
            color: '#3c4560',
          }}>
          Markets
        </Text>
      </View>

      <FlatList
        data={data}
        renderItem={
            ({item})=>(
                <Fragment>
                    <TouchableScale
                    onPress={() => navigation.navigate('CoinPage', { item })}>
                    <RenderMarketList {...item} />
                    </TouchableScale>
                    <View style={[mobileStyle.separator]} />
                </Fragment>
            )
        }
        keyExtractor={item=>item.id}
      />
    </View>
  );
};

export default MarketList;


const mobileStyle = StyleSheet.create({
    separator: {
      flex: 1,
      alignSelf: 'flex-end',
      width: '71%',
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      marginRight: 10,
    },
  });
  