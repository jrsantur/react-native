import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, 
  Image,
  KeyboardAvoidingView
} from 'react-native';

import LoginForm from './LoginForm'; 

export default class Login extends Component {
    render() {
      return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style={styles.logoContainer}> 
            <Image 
              style = {styles.logo}
              source={require('../images/logo.png')}/> 
          </View>
          
          <View style={styles.formContainer}>
            <LoginForm/>
          </View>

        </KeyboardAvoidingView>
      );
    } 
  }


  const styles = StyleSheet.create({
    container : {
      flex : 1, 
      backgroundColor : '#3498db'
      //backgroundColor : '#e74c3c'
    },

    logoContainer : {
      alignItems : 'center', 
      flexGrow : 1, 
      justifyContent : 'center'
    },
    
    logo:{
        width : 100, 
        height : 100
    }
    

  }); 
  