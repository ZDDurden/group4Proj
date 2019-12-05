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
import styles from '../Styles'


export default class BandProfile extends React.Component {
	constructor() {
		super();

		this.setState = {
			bands: [],
			isLoaded: true
		};
	}
	componentDidMount() {
		fetch("https://localhost:3000/bands")
			.then(response => response.json())
			.then(result => this.setState({ bands: result }));
	}
	handleBandPost = async () => {
		fetch("https://localhost:3000/bands", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				name: req.body.value,
				email: req.body.value,
				password: req.body.value,
				location: req.body.value,
				genre: req.body.value,
				bio: req.body.value,
				spotify: req.body.value,
				social: req.body.value
			})
		})
			.then(response => response.json())
			.catch(error => {
				console.error(error);
			});
	};
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}></View>
				<Image style={styles.avatar} source={{ uri: 'https://icon-library.net/images/default-user-icon/default-user-icon-11.jpg' }} />
				<View style={styles.body}>
					<View style={styles.bodyContent}>
						<Text style={styles.name}>band name</Text>
						<Text style={styles.info}>Bio</Text>
						<TouchableOpacity style={styles.buttonContainer} title="BandSettings">
							<Text>Settings</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.buttonContainer} title="BandEdit">
							<Text>Edit Profile</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
}
