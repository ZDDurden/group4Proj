import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, StatusBar, ActivityIndicator, AsyncStorage, ImageBackground } from "react-native";
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { Transition } from 'react-native-reanimated';
import UserProfile from './UserProfile'
import UserSwipe from './UserSwipe'
import UserFeed from './UserFeed'

class Profile extends React.Component { render(){return (<UserProfile />)} }
class Swipe extends React.Component { render(){return (<UserSwipe />)} }
class Feed extends React.Component { render(){return (<UserFeed />)} }

const TheStack = createMaterialTopTabNavigator({ Profile: Profile, Swipe: Swipe, Feed: Feed });

const UserView = createAppContainer(TheStack);

export default UserView

