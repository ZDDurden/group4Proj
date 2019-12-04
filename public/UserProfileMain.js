import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import Header from './Components/Header'
import Fetches from './Components/Fetches'

export default class UserProfile extends React.Component{
    render() {
        return (
          <View style={styles.container}>
              <View style={styles.header}></View>
              <Image style={styles.avatar} source={{uri: 'https://icon-library.net/icon/default-user-icon-11.html'}}/>
              <View style={styles.body}>
                <View style={styles.bodyContent}>
                  <Text style={styles.name}>{this.props.userInfo.name}</Text>
                  <Text style={styles.info}>Bio</Text>


                  <Link to="/Settings" underlayColor="#f0f4f7">
                  <TouchableOpacity style={styles.buttonContainer} title="Settings">
                    <Text>Settings</Text>  
                  </TouchableOpacity>
                  </Link> 
                  <Link to="/Edit" underlayColor="#f0f4f7">             
                  <TouchableOpacity style={styles.buttonContainer} title="Edit">
                    <Text>Edit</Text> 
                  </TouchableOpacity>
                  </Link>
                </View>
            </View>
          </View>
        );
      }
    }

    const styles = StyleSheet.create({
        body: {
            flex: 1,
            backgroundColor: '#2c2c2c'
        },
        avatar: {
            width: 130,
            height: 130,
            borderRadius: 63,
            borderWidth: 4,
            borderColor: "white",
            marginBottom:10,
            alignSelf:'center',
            position: 'absolute',
            marginTop:130
          },
          name: {
            fontSize:22,
            color:"#FFFFFF",
            fontWeight:'600',
            buttons: {
                margin: 50,
                fontSize: 80,
                backgroundColor: "#c24",
                textAlign: 'center',
                paddingVertical: 30,
                borderRadius: 50,
            },
            buttonText: {
                textAlign: 'center',
                fontSize: 30,
                textTransform: "uppercase",
            }
    })