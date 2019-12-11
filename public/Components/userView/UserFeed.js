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
			console.log(this.state.userId)
		}
		
		catch (err) {
			alert(err)
		}
	}

	getUserLikes() {


		fetch(`https://banderapi.herokuapp.com/users/${this.state.userId}`, {
			// method: "GET",
			headers: {
				"Content-Type": "application/jsonHTML"
			},
		})
			.then(response => response.json())
			.then(data => console.log(data)) 
			.catch(err => { console.log(err) })
		


	}

	makeRemoteRequest = () => {
		const url = `https://banderapi.herokuapp.com/bands/`;
		this.setState({ loading: true });

		fetch(url)
			.then(res => res.json())
			.then(res => {
				console.log(res)
				this.setState({
					data: res,
					error: res.error || null,
					loading: false,
				});
				this.arrayholder = res.results;
				

			})
			.then(data => {console.log(this.state.data)})
			.catch(error => {
				this.setState({ error, loading: false });
			});
	};

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
		// this.getUserLikes();
	}


	render() {
		if (this.state.loading) {
			return (
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<ActivityIndicator />
				</View>
			);
		}
		return (
			<View style={{ flex: 1 }}>
				<FlatList
					data={this.state.data}
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
