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

class UserSwipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bands: [],
      isLoaded: false
    };
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
      .catch(error => {
        alert("request failed", error);
      });
  }

  render() {
    return (
      <View style={styles.bandBody}>
        <ImageBackground style={styles.swipeBanner} imageStyle={{ borderRadius: 10 }} source={{uri: this.state.bands.banner}} >
        <View style={styles.bandDetails}>
          <Text style={styles.bandName}>{this.state.bands.name}</Text>
        <Text style={styles.bandGenre}>{this.state.bands.genre}</Text>
        <Text style={styles.bandLocation}>{this.state.bands.location}</Text>
        </View>
        </ImageBackground>
        <View style={styles.spotView}>
        <WebView  imageStyle={{ borderRadius: 10 }} 
          source={{uri: 'https://open.spotify.com/embed/artist/0JchnIvUBcPVdJMtlZToe0'}}
          style={styles.spotify}
        />
        </View>

      </View>
    );
  }
}

export default UserSwipe;
