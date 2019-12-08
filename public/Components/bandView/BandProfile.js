import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ActivityIndicator, AsyncStorage, ImageBackground
} from "react-native";
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Transition } from 'react-native-reanimated';
import BandEditForm from '../bandEditForm'
import styles from "../Styles";

const id = '5de5848383c0259731bbe274'

export default class BandProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bands: [],
      isLoaded: false
    };
  }
  static navigationOptions = {
    header: null,
};
  componentDidMount() {
    // const fetchConfig = {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   }}
    fetch(`https://banderapi.herokuapp.com/bands/${id}`)
      .then(response => {
        return response.json();
      })
      .then(result => {
        this.setState({
          bands: result,
          isLoaded: true,
          // id: result._id
        })
        console.log(this.state.bands);
      })
      .catch(error => {
        alert("request failed", error);
      });
  }
  render() {
    if (!this.state.isLoaded) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    } else {
    return (
      <View style={styles.container}>
        <View style={styles.header}></View>
        <Image
          style={styles.avatar}
          source={{
            uri:
              "https://icon-library.net/images/default-user-icon/default-user-icon-11.jpg"
          }}
        />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>{this.state.bands.name}</Text>
            <Text style={styles.info}>{this.state.bands.location}</Text>
            <TouchableOpacity
              style={styles.buttonContainer}
              title="BandSettings"
            >
              <Text>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} title="BandEdit">
              <Text>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }}
}


