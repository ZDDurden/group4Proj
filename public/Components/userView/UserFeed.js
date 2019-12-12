import React from "react";
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
	TouchableOpacity,
	Image,
	FlatList,
	ActivityIndicator,
	AsyncStorage
} from "react-native";
import {
	ListItem,
	SearchBar
} from "react-native-elements";
import styles from "../Styles";


class UserFeed extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			data: [],
			error: null,
		};

		this.arrayholder = [];
		this.getUserLikes = this.getUserLikes.bind(this)
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

	getUserLikes() {

	}

	makeRemoteRequest = () => {
		const url = `https://banderapi.herokuapp.com/bands/`;
		this.setState({ loading: true });

		let theLikes;
		let theBands = [];

		// fetches bands
		fetch(url)
			// jsonifies bands
			.then(res => res.json())
			// sets userId to state
			.then(res => {
				this.getUser()
				// console.log(res)
				return res
			})
			// sets userLikes to state
			.then(res => {
				fetch(`https://banderapi.herokuapp.com/users/${this.state.userId}`, {
					// method: "GET",
					headers: {
						"Content-Type": "application/jsonHTML"
					},
				})
					.then(response => response.json())
					.then(data => {
						this.setState({ userLikes: data.likes })
						return data
					})
					.then(data => {
						theLikes = this.state.userLikes
						res.map(function (val) {
							if (theLikes.includes(val._id)) {
								theBands.push(val);
							}
						})
						return data
					})
					.then(data => {
						console.log(data)
						this.setState({ theBands: theBands })
					})

					.catch(err => { console.log(err) })
			})
	}

	renderSeparator = () => {
		return (
			<View
				style={{
					height: 1,
					width: '86%',
					backgroundColor: '#CED0CE',
					marginLeft: '14%',
				}}
			/>
		);
	};

	searchFilterFunction = text => {
		this.setState({
			value: text,
		});

		const newData = this.arrayholder.filter(item => {
			const itemData = `${item.name.title.toUpperCase()} ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
			const textData = text.toUpperCase();

			return itemData.indexOf(textData) > -1;
		});
		this.setState({
			data: newData,
		});
	};

	renderHeader = () => {
		return (
			<SearchBar
				placeholder="Type Here..."
				lightTheme
				round
				onChangeText={text => this.searchFilterFunction(text)}
				autoCorrect={false}
				value={this.state.value}
			/>
		);
	};

	componentDidMount() {
		this.makeRemoteRequest();
		this.getUser();

	}

	componentDidUpdate() {
		// console.log("an update happened")
	}


	render() {
		// if (this.state.loading) {
		// 	return (
		// 		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
		// 			<ActivityIndicator />
		// 		</View>
		// 	);
		// }
		// console.log("rerender")
		return (
			<View style={{ flex: 1 }}>
				<FlatList
					data={this.state.theBands}
					renderItem={({ item }) => (
						<ListItem
							leftAvatar={{ source: { uri: item.banner } }}
							title={`${item.name}`}
							subtitle={`${item.location} • ${item.genre}`}
						/>
					)}
					keyExtractor={item => item.email}
					ItemSeparatorComponent={this.renderSeparator}
					ListHeaderComponent={this.renderHeader}
				/>
			</View>
		);
	}
}

export default UserFeed;
