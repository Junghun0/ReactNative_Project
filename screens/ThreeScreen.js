import React , {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class ThreeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="This is 3 page / Go Home" 
            onPress={()=>this.props.navigation.navigate('Home')}/>
      </View>
    );
  }
}

export default ThreeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
