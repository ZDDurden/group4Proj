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
import SwipeCards from 'react-native-swipe-cards';
import styles from '../Styles'

const id = '5de5848383c0259731bbe274'
let spotUrl = "https://open.spotify.com/embed/artist/";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <View style={styles.bandBody}>
        <Text>{this.props.name}</Text>
      </View>
    )
  }
}

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

class NoMoreCards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.noMoreCardsText}>No more cards</Text>
      </View>
    )
  }
}

class UserSwipeNEW extends React.Component {

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

  handleYup(card) {
    console.log(`Yup for ${card.text}`)
  }
  handleNope(card) {
    console.log(`Nope for ${card.text}`)
  }
  handleMaybe(card) {
    console.log(`Maybe for ${card.text}`)
  }
  render() {
    // If you want a stack of cards instead of one-per-one view, activate stack mode
    // stack={true}
    return (
      <SwipeCards
        cards={this.state.bands}
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}

        handleYup={this.handleYup}
        handleNope={this.handleNope}
        handleMaybe={this.handleMaybe}
        hasMaybeAction
      />
    )
  }
}
export default UserSwipe;
