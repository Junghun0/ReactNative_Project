import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from './HomeScreen.js';
import ThreeScreen from './screens/ThreeScreen.js';
import OnePage from './screens/OnePage';
import TwoPage from './screens/TwoPage';
import FourPage from './screens/FourPage';
import FivePage from './screens/FivePage';
import SixPage from './screens/SixPage';
import SevenPage from './screens/SevenPage';

export default class App extends React.Component {
  render() {
    return <AppContainer/>;
    }
}
const MyNavigator =  createStackNavigator({
  Home: HomeScreen,  
  Three: ThreeScreen,
  One : OnePage,
  Two : TwoPage,
  FourPage: FourPage,
  FivePage: FivePage,
  SixPage: SixPage,
  SevenPage: SevenPage
}, {
  initialRouteName: "Home"
});

const AppContainer =  createAppContainer(MyNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
