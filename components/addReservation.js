import React from 'react';
import { Text, View, ScrollView, Button, TextInput, FlatList } from 'react-native';
import gql from 'graphql-tag';
import { Mutation } from "react-apollo";

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
      arrivalDate: '',
      departureDate: ''
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
                <TextInput
                  style={styles.input}
                  placeholder='Arrival'
                  onChangeText={arrivalDate => this.setState({arrivalDate})}
                
                />
                 <TextInput
                  style={styles.input}
                  placeholder='Departure'
                  onChangeText={arrivalDate => this.setState({departureDate})}
                />
                <Button
                  title="Add Reservation"
                  onPress={() => {
                  createReservation({
                    variables: {
                      name: this.state.name,
                      hotelName: this.state.hotelName,
                      arrivalDate: this.state.arrivalDate,
                      departureDate: this.state.departureDate
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