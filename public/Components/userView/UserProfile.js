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

const id = '5de587643fab7bf2c5529383'

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
      isLoaded: false
    };
  }
  componentDidMount() {
    fetch(`https://banderapi.herokuapp.com/users/${id}`)
      .then(response => {
        return response.json();
      })
      .then(result => {
        this.setState({
          user: result,
          isLoaded: true
        });
      })
      .catch(error => {
        alert(error);
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
              <Text style={styles.name}>{this.state.user.name}</Text>
              <Text style={styles.info}>{this.state.user.location}</Text>

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
