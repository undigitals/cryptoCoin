import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import MarketList from '../components/MarketList';

export default function Home() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeCont}>
        <StatusBar barStyle="dark-content" />
          <MarketList />
      </SafeAreaView>
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
  safeCont: {
    flex: 1,
  },
});
