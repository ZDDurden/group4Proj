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
import Header from '../Components/Header'
import Fetches from '../Components/Fetches'

export default class UserProfile extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}></View>
				<Image style={styles.avatar} source={{ uri: 'https://icon-library.net/images/default-user-icon/default-user-icon-11.jpg' }} />
				<View style={styles.body}>
					<View style={styles.bodyContent}>
						<Text style={styles.name}>{this.props.userInfo.name}</Text>
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

const styles = StyleSheet.create({
	container: {flex:1},
	header:{
	  backgroundColor: "#c24",
	  height:200,
	},
	avatar: {
	  width: 130,
	  height: 130,
	  borderRadius: 63,
	  borderWidth: 4,
	  borderColor: "white",
	  marginBottom:10,
	  alignSelf:'center',
	  position: 'absolute',
	  marginTop:130
	},
	name:{
	  fontSize:22,
	  color:"#FFFFFF",
	  fontWeight:'600',
	},
	body:{
	  marginTop:40,
	},
	bodyContent: {
	  flex: 1,
	  alignItems: 'center',
	  padding:30,
	},
	name:{
	  fontSize:28,
	  color: "#696969",
	  fontWeight: "600"
	},
	info:{
	  fontSize:16,
	  color: "#00BFFF",
	  marginTop:10
	},
	description:{
	  fontSize:16,
	  color: "#696969",
	  marginTop:10,
	  textAlign: 'center'
	},
	buttonContainer: {
	  marginTop:10,
	  height:45,
	  flexDirection: 'row',
	  justifyContent: 'center',
	  alignItems: 'center',
	  marginBottom:20,
	  width:250,
	  borderRadius:30,
	  backgroundColor: "#c24",
	},
  });
   