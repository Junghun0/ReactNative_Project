import React, {Component} from 'react';

import {
    AppRegistry,
    ScrollView,
    Text,
    View,
    Dimensions,
    StyleSheet
} from 'react-native';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
export default class HorizontalScrollView extends Component{
    render(){
        return(
            <ScrollView
                horizontal={true}
                pagingEnabled={true}>
                 <Text style={styles.container2}>This is Onepage_2</Text>
                 <Text style={styles.container3}>This is Onepage_3</Text>
                 <Text style={styles.container4}>This is Onepage_4</Text>
                 <Text style={styles.container5}>This is Onepage_5</Text>
                 <Text style={styles.container2}>This is Onepage_6</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: screenWidth,
      height: screenHeight,
      justifyContent: 'center',
      alignItems: 'center'
    },
    container2: {
      backgroundColor: '#4286f4',
      flex: 1,
      width: screenWidth,
      height: screenHeight,
      
      justifyContent: 'center',
      alignItems: 'center'
    },
    container3: {
      backgroundColor: '#42ed94',
      flex: 1,
      width: screenWidth,
      height: screenHeight,
    
      justifyContent: 'center',
      alignItems: 'center'
    },
    container4: {
      backgroundColor: '#d3eabb',
      flex: 1,
      width: screenWidth,
      height: screenHeight,
      
      justifyContent: 'center',
      alignItems: 'center'
    },
    container5: {
      backgroundColor: '#d1af36',
      flex: 1,
      width: screenWidth,
      height: screenHeight,
      
      justifyContent: 'center',
      alignItems: 'center'
    },
  });
AppRegistry.registerComponent('HorizontalScrollView', ()=>HorizontalScrollView);