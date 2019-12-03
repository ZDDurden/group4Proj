import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";

class Main extends React.Component {
  componentDidMount() {
    fetch();
  }

  render() {
    return (
      <View style={styles.bandBody}>
        <Text style={styles.bandName}>Juco</Text>
        <iframe
          src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
          width="300"
          height="380"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
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
  bandName: {
    backgroundColor: "#59a",
    borderWidth: 0.5,
    borderColor: "#ccc",
    borderRadius: 10,
    fontSize: 60,
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "800"
  }
});
export default Main;
