import React from "react";
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import BandProfile from './BandProfile'
import BandStats from './BandStats'
import BandTools from './BandTools'

class Profile extends React.Component { render(){return (<BandProfile />)} }
class Stats extends React.Component { render(){return (<BandStats />)} }
class Tools extends React.Component { render(){return (<BandTools />)} }

const TheStack = createMaterialTopTabNavigator({ Profile: Profile, Stats: Stats, Tools: Tools});

const BandView = createAppContainer(TheStack);

export default BandView

