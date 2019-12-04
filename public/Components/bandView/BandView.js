import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, StatusBar, ActivityIndicator, AsyncStorage, ImageBackground } from "react-native";
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { Transition } from 'react-native-reanimated';
import BandProfile from './BandProfile'
import BandStats from './BandStats'
import BandTools from './BandTools'

class Profile extends React.Component { render(){return (<BandProfile />)} }
class Stats extends React.Component { render(){return (<BandStats />)} }
class Tools extends React.Component { render(){return (<BandTools />)} }

const TheStack = createMaterialTopTabNavigator({ Profile: Profile, Stats: Stats, Tools: Tools});

const BandView = createAppContainer(TheStack);

export default BandView

