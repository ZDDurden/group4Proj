import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground
} from "react-native";
import WebView from 'react-native-webview';
import styles from '../Styles'

const id = '5de5848383c0259731bbe274'
let spotUrl = "https://open.spotify.com/embed/artist/";

class UserSwipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bands: [],
      isLoaded: false
    };
  }

  createSpotifyLink(id) {
    spotUrl = spotUrl.concat(id)
  }

  componentDidMount() {
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
      .then(result => {
          this.createSpotifyLink(this.state.bands.spotify)
          console.log(spotUrl)
        })
      .catch(error => {
        alert("request failed", error);
      });
  }

  render() {
    return (
      <View style={styles.bandBody}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <ImageBackground style={styles.swipeBanner} imageStyle={{ borderRadius: 10 }} source={{ uri: this.state.bands.banner }} >
            <View style={styles.bandDetails}>
              <Text style={styles.bandName}>{this.state.bands.name}</Text>
              <Text style={styles.bandGenre}>{this.state.bands.genre}</Text>
              <Text style={styles.bandLocation}>{this.state.bands.location}</Text>
            </View>
          </ImageBackground>

          <View style={styles.spotView, { height: 235 }}>
            <WebView imageStyle={{ borderRadius: 10 }}
              source={{ uri: "https://open.spotify.com/embed/artist/" + this.state.bands.spotify }}
              style={styles.spotify}
            />
          </View>

          <View style={styles.bandDescript}>
            <Text style={styles.bandBio}>{this.state.bands.bio}</Text>
          </View>

        </ScrollView>
      </View>
    );
  }
}

export default UserSwipe;
