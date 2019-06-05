import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
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