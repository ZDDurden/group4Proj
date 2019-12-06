import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image
} from "react-native";
import styles from "../Styles";

export default class BandProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bands: [],
      isLoaded: false
    };
  }
  componentDidMount() {
    return fetch("https://banderapi.herokuapp.com/bands/5de5848383c0259731bbe274")
      .then(response => {
        return response.json();
      })
      .then(result => {
        this.setState({
          bands: result,
          isLoaded: true
        });
      })
      .catch(error => {
        alert("request failed", error);
      });
  }
  render() {
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
  }
}
