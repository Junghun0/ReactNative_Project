import React , {Component} from 'react';
import { StyleSheet,
         Text,
         View,
         Button,
         AppRegistry,
         ScrollView,
         Dimensions
     } from 'react-native';
     
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

import HorizontalScrollView from '../HorizontalScrollView'

class OnePage extends React.Component {
  render() {
    return (
      <HorizontalScrollView/>
    );
  }
}

AppRegistry.registerComponent('OnePage', ()=>OnePage);

export default OnePage;
