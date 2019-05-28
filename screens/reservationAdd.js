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


export default class ReservationAdd extends React.Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flex: 1}}></View>
        <Text>Add</Text>
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