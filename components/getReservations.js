import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import gql from 'graphql-tag';
import { Query } from "react-apollo";
import {NavigationEvents} from 'react-navigation'


 
const GET_RESERVATIONS = gql`
  query {
    reservations(orderBy:createdAt_DESC) {
    	id,
      name,
  	  hotelName,
    	arrivalDate,
    	departureDate
    	}
  }
`;

const ReservationList = (props) => {
  return ( 
  <Query
    query={GET_RESERVATIONS}
    fetchPolicy="cache-and-network"
   >
    {({ loading, error, data, refetch }) => {
      const {reservations} = data;
      if (error) return <Text>>Error! ${error.message}</Text>;
      if(loading) return <Text>Loading</Text>;
     else return (
     <View style={styles.outer}>
      <NavigationEvents
      onDidFocus={() => {refetch()}}
    />
       <FlatList
          data={reservations}
          renderItem={({item}) => <ReservationCard navigation={props.navigation}  reservation={item}/>}
        />
      </View>
      )
    }}
  </Query>
)};

const ReservationCard = (props) => {
  let data = props.reservation;
  return (
  <TouchableOpacity onPress={() =>{props.navigation.navigate('SingleReservation', {reservation: data})}}>
    <View key={data.id} style={styles.wrapper}>
    <Text style={styles.header}> Hotel: {data.hotelName} Visitor:{data.name}</Text>
      <View style={styles.subtextWrapper}>
        <Text>
          Arrival: {data.arrivalDate} {' '}
          Departure: {data.departureDate} {' '}
        </Text>
    </View>
  </View>
</TouchableOpacity>
)};

  

const styles = {
  outer: {paddingLeft: 10, margin:10, paddingRight: 10,flex:1, flexDirection:'column'  },
  wrapper: { height: 40, marginBottom:20, borderColor: 'grey', borderWidth: 1 },
  header: { fontSize: 15 },
  subtextWrapper: { flex: 1, flexDirection: 'row', marginLeft:5 },
}
export default ReservationList