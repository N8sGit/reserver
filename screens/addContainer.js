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

import Add from '../components/addReservation'

export default class ReservationAdd extends React.PureComponent {

  render() {
    return (
      <SafeAreaView style={styles.container}>
       <Add/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});