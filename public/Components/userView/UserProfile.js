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
import { NativeRouter, Route, Link } from "react-router-native";
import Header from "../Header";
import Fetches from "../Fetches";
import styles from "../Styles";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      location: "",
      likes: "",
      isLoaded: false
    };
  }
  componentDidMount() {
    return fetch("https://localhost:3000/users/5de587643fab7bf2c5529383")
      .then(response => {
        alert(response.json());
        return response.json();
      })
      .then(result => {
        this.setState({
          name: result.name,
          location: result.location,
          likes: result.likes,
          isLoaded: true
        });
        alert(this.state.name);
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
              <Text style={styles.name}>{this.state.name}</Text>
              <Text style={styles.info}>Bio</Text>

              <Link to="/Settings" underlayColor="#f0f4f7">
                <TouchableOpacity
                  style={styles.buttonContainer}
                  title="Settings"
                >
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
}

export default UserProfile;
