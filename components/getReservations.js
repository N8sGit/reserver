import React from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { graphql, ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';
import { Query } from "react-apollo";



 
const GET_RESERVATIONS = gql`
  query resList($last: Int) {
    reservations(last:$last) {
    	id,
      name,
  	  hotelName,
    	arrivalDate,
    	departureDate
    	}
  }
`;

const ReservationList = () => (
  <Query
    query={GET_RESERVATIONS}
    fetchPolicy="cache-and-network"
  >
    {({ loading, error, data, fetchMore }) => {
      const {reservations} = data;
      if(loading) return <Text>Loading</Text>;
      if (error) return <Text>>Error! ${error.message}</Text>;
     return (
     <View style={styles.outer}>
      {reservations.map(reservation => (
        <View key={reservation.id} style={styles.wrapper}>
          <View>
            <Text style={styles.header}>{reservation.hotelName}</Text>
            <View style={styles.subtextWrapper}>
              <Text>
                {reservation.arrivalDate} {' '}
                {reservation.departureDate} {' '}
              </Text>
            
            </View>
          </View>
        </View>
      ))}
      </View>
      )
    }}
  </Query>
);


const styles = {
  outer: {paddingLeft: 10, paddingRight: 10,flex:1, flexDirection:'column'  },
  wrapper: { height: 40, marginBottom:5 },
  header: { fontSize: 15 },
  subtextWrapper: { flex: 1, flexDirection: 'row' },
}
export default ReservationList