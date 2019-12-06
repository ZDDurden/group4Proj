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
      name: "",
      location: "",
      bio: "",
      isLoaded: false
    };
  }
  componentDidMount() {
    return fetch("https://localhost:3000/bands/:id")
      .then(response => {
        alert(response.json());
        return response.json();
      })
      .then(result => {
        this.setState({
          name: result.name,
          location: result.location,
          bio: result.bio,
          isLoaded: true
        });
        alert(this.state.name);
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
            <Text style={styles.name}>band name</Text>
            <Text style={styles.info}>Bio</Text>
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
