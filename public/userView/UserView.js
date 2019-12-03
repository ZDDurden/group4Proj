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

class Main extends React.Component {

  // componentDidMount() {
  //   fetch();
  // }

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
        {/* <Text>yeet</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bandBody: {
    backgroundColor: "#e3e3e3",
    borderWidth: 0.5,
    borderColor: "#ccc",
    borderRadius: 10,
    flex: 1,
    margin: 20,
    padding: 20,
    shadowColor: "#999",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1
  },
  spotView: {
    flex: .44,
    borderRadius: 10,
    // borderWidth: 0.5,

  }, 
  spotify: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 0.45,
  },
  bandName: {
    // backgroundColor: "#59a",
    borderWidth: 0.5,
    borderColor: "#ccc",
    borderRadius: 10,
    fontSize: 60,
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "800",
    marginBottom: 20,
  }
});
export default Main;
