import React from 'react';
import {
 SafeAreaView,
 StyleSheet,
} from 'react-native';

import GetReservations from '../components/getReservations'

export default class ReservationDisplay extends React.PureComponent {
  
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <GetReservations navigation ={this.props.navigation}/>
       </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});