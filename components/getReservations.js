import React from 'react';
import { Text, View } from 'react-native';
import { graphql, ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';



// The data prop, which is provided by the wrapper below contains,
// a `loading` key while the query is in flight and posts when ready
function ReservationList({ data: { loading, reservations } }) {
  let first = reservations ? reservations.slice(0,10) : undefined
  if (loading) {
    return <Text style={styles.outer}>Loading</Text>;
  } else {
    return (
      <View style={styles.outer}>
        {first.map(reservation => (
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
    );
   }
}

const styles = {
  outer: {paddingLeft: 10, paddingRight: 10,flex:1, flexDirection:'column'  },
  wrapper: { height: 40, marginBottom:5 },
  header: { fontSize: 15 },
  subtextWrapper: { flex: 1, flexDirection: 'row' },
  votes: { color: '#999' },
}

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (ReservationList here)

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
export default graphql(GET_RESERVATIONS)(ReservationList);
        