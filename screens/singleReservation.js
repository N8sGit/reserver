import React from 'react';
import { Text, View, ScrollView, StyleSheet, Image, FlatList } from 'react-native';



const SingleReservation = (props) => {
   const data = props.navigation.getParam('reservation')
    return ( 
    <View style={styles.container}>
        <View
          style={styles.card}
        >
          <View>
            <Text style={styles.text}>Hotel :{data.hotelName}</Text>
            <Text style={styles.text}>Guest: {data.name}</Text>
            <Text style={styles.text}>Arrival: {data.arrivalDate}</Text>
            <Text style={styles.text}>Departure: {data.departureDate}</Text>
          </View>
        </View>
    </View>
  )};

  export default SingleReservation

  var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      text:{
        padding: 5,
      },
      card: {
        borderWidth: 3,
        borderRadius: 3,
        borderColor: 'blue',
        width: 300,
        height: 200,
        padding: 10
      },
    });