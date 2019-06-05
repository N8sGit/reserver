import React from 'react';
import { Text, View, ScrollView, Button, TextInput, FlatList } from 'react-native';
import gql from 'graphql-tag';
import { Mutation } from "react-apollo";
import DatePicker from 'react-native-datepicker'


const ADD_RESERVATION = gql`
 mutation createReservation($name: String!, 
 $hotelName: String!, $arrivalDate: String!,$departureDate: String! ){
   createReservation(data :{name: $name, hotelName: $hotelName, 
   arrivalDate: $arrivalDate, departureDate: $departureDate} ){ 
    id
    name
    hotelName
    arrivalDate
    departureDate
  }
}`;

 class Add extends React.PureComponent {
    state = {
      name: '',
      hotelName: '',
      arrivalDate: new Date(),
      departureDate: new Date()
    };
  
    render() {
      const {name, hotelName, arrivalDate, departureDate} = this.state
      return (
        <Mutation mutation={ADD_RESERVATION}>
          {(createReservation, { loading, error, data }) => {
              if(data){
                alert("Upload successful!")
              }
              if(error){
                alert("There was an error uploading.")
              }
            return (
              <View style={{flex: 1}}>
                <Text style={{textAlign: 'center', fontSize: 24}}>
                 Add a reservation
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder='Name'
                  onChangeText={name => this.setState({name})}
                />
                <TextInput
                  style={styles.input}
                  placeholder='Hotel'
                  onChangeText={hotelName => this.setState({hotelName})}
                />
                <Text style={{marginLeft:15}}>Arrival</Text>
                 <DatePicker
                  date={new Date(arrivalDate)}
                  mode="datetime"
                  format="MM-DD-YYYY"
                  style={{ margin: 15,
                    width: 380
                    }}
                  cancelBtnText = "Cancel"
                  confirmBtnText='Confirm'
                  onDateChange={(date)=> { this.setState({arrivalDate:date})}}
                />
                <Text style={{marginLeft:15}}>Departure</Text>
                <DatePicker
                  date={new Date(departureDate)}
                  mode="datetime"
                  format="MM-DD-YYYY"
                  style={{ margin: 15,
                    width: 380
                    }}
                  cancelBtnText = "Cancel"
                  confirmBtnText='Confirm'
                  onDateChange={(date)=> { this.setState({departureDate:date})}}
                />
                
                <Button
                  title="Add Reservation"
                  onPress={() => {
                  createReservation({
                    variables: {
                      name: name,
                      hotelName: hotelName,
                      arrivalDate: arrivalDate,
                      departureDate: departureDate
                    }
                  })
                }}
                />
                <View style={{flex: 1}}></View>
              </View>
            );
          }}
        </Mutation>
      );
    }
  }


const styles = {
  outer: {paddingLeft: 10, paddingRight: 10,flex:1, flexDirection:'column'  },
  wrapper: { height: 40, marginBottom:5 },
  header: { fontSize: 15 },
  subtextWrapper: { flex: 1, flexDirection: 'row' },
  input: {
    margin: 15,
    padding: 10,
    borderWidth: 2,
    borderColor: 'grey',
    marginBottom : 30
  }
}
export default Add