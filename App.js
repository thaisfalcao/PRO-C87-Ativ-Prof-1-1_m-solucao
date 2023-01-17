import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './screens/Home';
import IssLocationScreen from './screens/IssLocation';
import MeteorScreen from './screens/Meteor';
import UpdateScreen from './screens/Update';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen/>
      <IssLocationScreen/>
      <MeteorScreen/>
      <UpdateScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
