/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, 
  Navigator,
  TouchableHighlight
} from 'react-native';

var navigatorBarRouterMapper = {
  LeftButton: function(router, navigator , index){
    return(
      <TouchableHighlight onPress={()=> {
          if(index >0){
            navigator.pop(); 
          }
        }}>
        <Text style = {{marginTop:10 , color:'#007AFF'}}>Atras</Text>
      </TouchableHighlight>
    )
  }, 
  RigthButton : function(router, navigator , index){
    return null; 
  },
  Title: function(router, navigator, index){
    return (
      <Text style = {{marginTop:10 , color:'#007AFF'}}>{router.name}</Text>
    )
  }
}


import Login from './src/components/Login'; 

var SQLite = require('react-native-sqlite-storage')


export default class App extends Component {
  
  renderScene(route, Navigator){
    switch(route.name){
      case 'Login': 
        return(
          <Login navigator={navigator} route = {route}/>
        ); 
      case 'Main': 
        return(
          <Main navigator={navigator} route = {route}/>
        )

    }
  }
  render() {
    return (
      //<View style={styles.container}>
      //<Login />
      //</View>
      <Navigator style= {{backgroundColor:'#fff'}}>
        initialRoute={{name:'Login'}}
        renderScene= {this.renderScene}
        configureScene= { (route)=>{
          if(route.scenaConfig){
            return route.scenaConfig; 
          }
          return route.scenaConfig.FloatFromRight; 
        }}
        navigationBar={
          <Navigator.NavigationBar routeMapper= {navigatorBarRouterMapper}/> 
        }

        
      </Navigator>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginBottom : 20
  },
  /*
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  */
});

AppRegistry.registerComponent('App', () => App);
