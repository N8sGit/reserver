import React from 'react';
import {
  AsyncStorage,
  Button,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import GetReservations from '../components/getReservations'

export default class ReservationDisplay extends React.PureComponent {
  
  render() {
    
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={{flex: 1}}>
          <GetReservations/>
        </ ScrollView >
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});