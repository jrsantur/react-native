import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, 
  Image, 
  TextInput, 
  TouchableOpacity,
  StatusBar
} from 'react-native';

export default class LoginForm extends Component {
    render() {
        return (
          <View  style={styles.container}>
              <StatusBar 
                barStyle = "light-content"/>
              <TextInput 
                placeholder = "Email"
                placeholderTextColor= "rgba(255,255,255,0.7)" 
                returnKeyType = "next"
                underlineColorAndroid={'transparent'} 
                onSubmitEditing = {()=> this.passwordInput.focus()} 
                keyboardType = "email-address"
                autoCapitalize = "none"
                selectionColor={ "#ffff" }
                autoCorrect = {false}
                style={styles.input} /> 
              <TextInput 
                placeholder = "Contraseña"
                placeholderTextColor= "rgba(255,255,255,0.7)" 
                underlineColorAndroid={'transparent'} 
                returnKeyType = "go"
                secureTextEntry
                ref= {input => this.passwordInput = input} 
                style={styles.input} /> 

              <TouchableOpacity onPress = {this.onLogin.bind(this)} style={styles.buttonContainer}>
                  <Text style={styles.buttonText} >Entrar</Text>
              </TouchableOpacity>
          </View>
        );
    }

    onLogin(){
        this.props.navigator.push({
            title : 'Main', 
            name : 'Main' ,
            passProps: {}
        }); 
    }; 
}




const styles = StyleSheet.create({

    container:{
        padding : 20
    }, 
    input : {
        height : 40 , 
        backgroundColor : 'rgba(255,255,255,0.2)',
        marginBottom : 10, 
        color : '#fff', 
        paddingHorizontal : 10 
    }, 
    buttonContainer : {
        backgroundColor: '#2980b9',
        paddingVertical: 10
    }, 

    buttonText: {
        textAlign: 'center',
        color: '#fff', 
        fontWeight: '700'
    }





}); 
