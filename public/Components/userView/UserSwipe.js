import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";
import WebView from 'react-native-webview';
import styles from '../Styles'

class UserSwipe extends React.Component {

  render() {
    return (
      <View style={styles.bandBody}>
        <Text style={styles.bandName}>Juco</Text>
        <View style={styles.spotView}>
        <WebView
          source={{uri: 'https://open.spotify.com/embed/artist/0JchnIvUBcPVdJMtlZToe0'}}
          style={styles.spotify}
        />
        </View>
      </View>
    );
  }
}

export default UserSwipe;
