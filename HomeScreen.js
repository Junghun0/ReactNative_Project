import React , {Component} from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      
        <View style={styles.imagecontainer}>
            <View style={styles.imagesone}>
                <Button title="GoTo One Page"
                    onPress={()=>this.props.navigation.navigate('One')}
                    color = '#f44242'/>
            </View>

            <View style={styles.imagestwo}>
                <Button title="GoTo Two  Page" style = {styles.imagestwo}
                    onPress={()=>this.props.navigation.navigate('Two')}
                    color = '#f47d41'/>
            </View>
            
            <View style={styles.imagesthree}>
                <Button title="GoTo ThreePage" style = {styles.imagesthree}
                    onPress={()=>this.props.navigation.navigate('Three')}
                    color = '#f4d941'/>
            </View>
        </View>


        <View style={styles.imagecontainer2}>
            <View style={styles.imagesfour}>
              <Button title="GoTo FourPage" style={styles.imagesfour}
                onPress={()=>this.props.navigation.navigate('FourPage')}
                color = '#5bf441'/> 
            </View>

            <View style={styles.logoimage}>
              <Button title="Logo Image!!" style={styles.logoimage}
                onPress={()=>this.props.navigation.navigate('null')}
                color = '#4176f4'/> 
            </View>

            <View style={styles.imagesfive}>
              <Button title="GoTo FivePage" style={styles.imagesfive}
                onPress={()=>this.props.navigation.navigate('FivePage')}
                color = '#4176f4'/> 
            </View>
        </View>


        <View style={styles.imagecontainer3}>

            <View style={styles.imagessix}>
                <Button title="GoTo SixPage" style={styles.imagessix}
                    onPress={()=>this.props.navigation.navigate('SixPage')}
                    color = '#1c278e'/> 
            </View>

            <View style={styles.imageseven}>
                <Button title="GoTo SevenPage" style={styles.imageseven}
                    onPress={()=>this.props.navigation.navigate('SevenPage')}
                    color = '#771b8e'/> 
            </View>

        </View>
      </View>
            
    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor:'#bbbcbf'
  },
  imagecontainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: "row"
  },
  imagecontainer2:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: "row"
  },
  imagecontainer3:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: "row"
  },
  imagesone:{
    flex: 1,
    backgroundColor:'#f44242'
  },
  imagestwo:{
    flex: 1,
    backgroundColor:'#f47d41'
  },
  imagesthree:{
    flex: 1,
    backgroundColor:'#f4d941'
  },
  imagesfour:{
    flex: 1,
    backgroundColor:'#5bf441'
  },
  imagesfive:{
    flex: 1,
    backgroundColor:'#4176f4'
  },
  logoimage:{
    flex: 1,
    backgroundColor:'#ffffff'
  },
  imagessix:{
    width: width/2,
    backgroundColor:'#1c278e'
  },
  imageseven:{
    width: width/2,
    backgroundColor:'#771b8e'
  }
});
