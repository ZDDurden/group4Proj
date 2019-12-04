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
import Login from './Login'
import styles from './Components/Styles'

class Main extends React.Component {

  // componentDidMount() {
  //   fetch();
  // }

  render() {
    return (
      <Login style={styles.bandBody}/>
    );
  }
}

export default Main;
