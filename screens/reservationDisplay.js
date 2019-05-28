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
export default class ReservationDisplay extends React.Component {
  
  render() {
    
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flex: 1}}></View>
          <GetReservations/>
        <View style={{flex: 1}}></View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});