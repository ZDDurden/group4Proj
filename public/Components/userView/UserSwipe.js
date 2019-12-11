import React from "react";
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
	ImageBackground,
	AsyncStorage
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

	componentDidMount() {
		spotUrl = spotUrl.concat(this.props.spotify)
	}

	render() {
		return (

			<View style={styles.bandBody}>
				<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
					<ImageBackground style={styles.swipeBanner} imageStyle={{ borderRadius: 10 }} source={{ uri: this.props.banner }} >
						<View style={styles.bandDetails}>
							<Text style={styles.bandName}>{this.props.name}</Text>
							<Text style={styles.bandGenre}>{this.props.genre}</Text>
							<Text style={styles.bandLocation}>{this.props.location}</Text>
						</View>
					</ImageBackground>

					<View style={styles.spotView, { height: 235 }}>
						<WebView imageStyle={{ borderRadius: 10 }}
							source={{ uri: "https://open.spotify.com/embed/artist/" + this.props.spotify }}
							style={styles.spotify}
						/>
					</View>

					<View style={styles.bandDescript}>
						<Text style={styles.bandBio}>{this.props.bio}</Text>
					</View>

				</ScrollView>
			</View>
		)
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

class UserSwipe extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			bands: [],
			isLoaded: false
		};

		this.fetchBands = this.fetchBands.bind(this)
		this.bandLike = this.bandLike.bind(this)
		this.bandDislike = this.bandDislike.bind(this)
	}

	getUser = async () => {
		try {
			let user = await AsyncStorage.getItem('userId');
			this.setState({ userId: user })
		}
		catch (err) {
			alert(err)
		}
	}

	createSpotifyLink(id) {
		spotUrl = spotUrl.concat(id)
	}

	fetchBands() {
		fetch(`https://banderapi.herokuapp.com/bands/`)
			.then(response => {
				return response.json();
			})
			.then(result => {
				this.setState({
					bands: result,
					isLoaded: true,
				})
			})
			.then(result => {
				this.createSpotifyLink(this.state.bands.spotify)
			})
			.catch(error => {
				alert("request failed", error);
			});
	}

	componentDidMount() {
		this.getUser()

		this.fetchBands()

	}

	bandLike(card) {

		fetch(`https://banderapi.herokuapp.com/users/${this.state.userId}`, {
			// method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
		})
			.then(response => response.json())
			.then(data => {
				data.likes = data.likes + (", " + card._id)
				console.log(data.likes)
				fetch(`https://banderapi.herokuapp.com/users/${this.state.userId}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						name: "Alex",
						location: "Birmingham, AL",
						password: "alex123",
						email: "alex.townley@conserv.io",
						dob: "07/06/1903",
						likes: data.likes
					})
				})
			})

			.catch(error => {
				console.error(error);
			});
	}

	bandDislike(card) {


		fetch(`https://banderapi.herokuapp.com/users/${this.state.userId}`, {
			// method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
		})
			.then(response => response.json())
			.then(data => {
				console.log(data.bands)
				data.bands = data.bands + (", " + card._id)
				console.log(data.bands)
				fetch(`https://banderapi.herokuapp.com/users/${this.state.userId}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						name: "Alex",
						location: "Birmingham, AL",
						password: "alex123",
						email: "alex.townley@conserv.io",
						dob: "07/06/1903",
						bands: data.bands
					})
				})
			})

			.catch(error => {
				console.error(error);
			});

		// fetch(`https://banderapi.herokuapp.com/users/${this.state.userId}`, {
		// 	// method: "GET",
		// 	headers: {
		// 		"Content-Type": "application/json"
		// 	},
		// })
		// 	.then(response => response.json())
		// 	.then(data => {
		// 		data.dislikes = data.dislikes + (", " + card._id)
		// 		console.log(data.dislikes)
		// 		fetch(`https://banderapi.herokuapp.com/users/${this.state.userId}`, {
		// 			method: "PUT",
		// 			headers: {
		// 				"Content-Type": "application/json"
		// 			},
		// 			body: JSON.stringify({

		// 				dislikes: data.dislikes
		// 			})
		// 		})
		// 	})

		// 	.catch(error => {
		// 		console.error(error);
		// 	});
	}

	handleYup(card) {
		console.log(`Yup for ${card._id}`);
		this.handleNope
	}
	handleNope(card) {
		console.log(`Nope for ${card.name}`)
	}
	handleMaybe(card) {
		console.log(`Maybe for ${card.name}`)
	}
	render() {
		// If you want a stack of cards instead of one-per-one view, activate stack mode
		// stack={true}
		return (
			<SwipeCards
				style={styles.card}
				cards={this.state.bands}
				renderCard={(cardData) => <Card {...cardData} />}
				renderNoMoreCards={() => <NoMoreCards />}

				handleYup={this.bandLike}
				handleNope={this.bandDislike}
				handleMaybe={this.handleMaybe}
				hasMaybeAction
			/>
		)
	}
}
export default UserSwipe;
