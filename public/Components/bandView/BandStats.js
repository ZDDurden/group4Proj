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
import styles from "../Styles";

const id = '5de5848383c0259731bbe274'

export default class BandStats extends React.Component {
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
        <ImageBackground style={styles.header} source={{
            uri:
              this.state.bands.banner
          }}></ImageBackground>
        <Image
          style={styles.avatar}
          source={{
            uri:
              this.state.bands.logo
          }}
        />
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>User likes: 203</Text>
              <Text style={styles.name}>User listens: 500</Text>
              <Text style={styles.name}>Date joined: 12/01/19</Text>

            </View>
          </View>
        </View>
      );
    }
  }
}