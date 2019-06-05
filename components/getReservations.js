import React, {useState} from 'react';
import { Text, View, FlatList, Picker, TouchableOpacity } from 'react-native';
import gql from 'graphql-tag';
import { Query } from "react-apollo";
import {NavigationEvents} from 'react-navigation'
import {client} from '../index'

 
const GET_RESERVATIONS = gql`
   query  reservation($orderBy: ReservationOrderByInput) {
    	reservations(orderBy: $orderBy ){
      id,
      name,
  	  hotelName,
    	arrivalDate,
    	departureDate
    	}
}`;

const ReservationList = (props) => {
  const [pickerVal, setVal] = useState(initialVal ="name_ASC");
  const [manualData, setData] = useState([])
  return ( 
  <Query
    query={GET_RESERVATIONS}
    fetchPolicy="cache-and-network"
   >
    {({ loading, error, data, refetch }) => {
      let {reservations} = data;
      if (error) return <Text>>Error! ${error.message}</Text>;
      if(loading) return <Text>Loading</Text>;
     else return (
     <View style={styles.outer}>
        <Text style={{textAlign:'center'}}>Select Orderby</Text>
      <View style={{ flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
        paddingBottom:250,
        backgroundColor: 'white',}}>
       
       <Picker
          selectedValue={pickerVal}
          style={ {width: 200,
          backgroundColor: 'white',
          marginBottom: 40,
          }}
        onValueChange={async (itemValue, itemIndex) =>{
           setVal(itemValue)
          const {data}= await client.query({
            query: GET_RESERVATIONS,
            variables: { orderBy: pickerVal }
          });
           setData(data)
          }}>
      <Picker.Item label="name_ASC" value="name_ASC" />
      <Picker.Item label="name_DESC" value="name_DESC" />
      <Picker.Item label="hotelName_ASC" value="hotelName_ASC" />
      <Picker.Item label="arrivalDate_ASC" value="arrivalDate_ASC" />
      <Picker.Item label="arrivalDate_DESC" value="arrivalDate_DESC" />
      <Picker.Item label="departureDate_ASC" value="departureDate_ASC" />
      <Picker.Item label="departureDate_DESC" value="departureDate_DESC" />
</Picker>
</View>
      <NavigationEvents
      onDidFocus={() => {refetch()}}
    />
       <FlatList
          data={manualData.reservations}
          renderItem={({item}) => <ReservationCard 
          key={item.id} 
          navigation={props.navigation}  
          reservation={item}
          />}
          keyExtractor={(item, index) => index.toString()}
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
  wrapper: { height: 80, marginBottom: 50, borderColor: 'blue', borderWidth: 1 },
  header: { fontSize: 15, paddingLeft:5, paddingTop:5 },
  subtextWrapper: { flex: 1, flexDirection: 'row', margin:10 },
  input: {
    margin: 15,
    padding: 10,
    borderWidth: 2,
    borderColor: 'grey',
    marginBottom : 30
  }
}
export default ReservationList