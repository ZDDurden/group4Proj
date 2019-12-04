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
import { NativeRouter, Route, Link } from "react-router-native";
import Header from '../Header'
import Fetches from '../Fetches'
import styles from '../Styles'

class UserProfile extends React.Component {
	constructor() {
		super();

		this.setState = {
			users: [],
			isLoaded: true
		};
	}
	componentDidMount() {
		fetch("https://localhost:3000/users")
			.then(response => response.json())
			.then(result => this.setState({ users: result }));
	}
	handleUserPost = async () => {
		fetch("https://localhost:3000/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				name: req.body.value,
				email: req.body.value,
				password: req.body.value,
				dob: req.body.value,
				location: req.body.value,
				likes: req.body.value,
				pic: req.body.value,
				bands: req.body.value,
				genres: req.body.value
			})
		})
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}></View>
				<Image style={styles.avatar} source={{ uri: 'https://icon-library.net/images/default-user-icon/default-user-icon-11.jpg' }} />
				<View style={styles.body}>
					<View style={styles.bodyContent}>
						<Text style={styles.name}>test</Text>
						<Text style={styles.info}>Bio</Text>


						<Link to="/Settings" underlayColor="#f0f4f7">
							<TouchableOpacity style={styles.buttonContainer} title="Settings">
								<Text>Settings</Text>
							</TouchableOpacity>
						</Link>
						<Link to="/Edit" underlayColor="#f0f4f7">
							<TouchableOpacity style={styles.buttonContainer} title="Edit">
								<Text>Edit</Text>
							</TouchableOpacity>
						</Link>
					</View>
				</View>
			</View>
		);
	}
}

export default UserProfile
