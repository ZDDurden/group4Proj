import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";
import styles from '../Styles'

class UserFeed extends React.Component {

  render() {
    return (
      <View style={styles.bandBody}>
        <Text style={styles.bandName}>Nothing here yet!</Text>
      </View>
    );
  }
}

export default UserFeed;
