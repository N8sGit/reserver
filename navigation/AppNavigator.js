import {createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation';

import ReservationDisplay from '../screens/reservationDisplay'
import ReservationAdd from '../screens/reservationAdd'

const MainNavigator = createBottomTabNavigator({
  Display: {screen: ReservationDisplay},
  Add: {screen: ReservationAdd},
  
},{
  initialRouteName: 'Display'
});



const AppContainer = createAppContainer(MainNavigator);
export default AppContainer;