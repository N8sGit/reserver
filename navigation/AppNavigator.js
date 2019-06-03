import {createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation';

import ReservationDisplay from '../screens/displayContainer'
import ReservationAdd from '../screens/addContainer'
import SingleReservation from '../screens/singleReservation'
import ReservationList from '../components/getReservations'

const DisplayStack = createStackNavigator({
  ReservationDisplay,
  ReservationList,
  SingleReservation
})

const MainNavigator = createBottomTabNavigator({
  Display: DisplayStack,
  Add: {screen: ReservationAdd},
  
},{
  initialRouteName: 'Display'
});



const AppContainer = createAppContainer(MainNavigator);
export default AppContainer;