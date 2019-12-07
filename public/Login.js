import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, StatusBar, ActivityIndicator, AsyncStorage, ImageBackground } from "react-native";
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import { Transition } from 'react-native-reanimated';
import Header from './Components/Header'
import UserView from './Components/userView/UserView'
import BandView from './Components/bandView/BandView'
import UserAccForm from './Components/userAccForm'
import BandAccForm from './Components/bandAccForm'
import styles from './Components/Styles'



class SignInScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <>
                <ImageBackground source={require('./images/background.jpg')} resizeMode='cover' style={styles.background}>
                    <Header />
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.buttons} title="Login" onPress={this._signInAsync}>
                            <Text style={styles.buttonText}>
                                Login
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttons} title="Login" onPress={this._createAccAsync}>
                            <Text style={styles.buttonText}>
                                CREATE ACCOUNT
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </>
        );
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };
    _createAccAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('Create');
    };
}

class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <>
                <ImageBackground source={require('./images/background.jpg')} resizeMode='cover' style={styles.background}>
                    <Header />
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.buttons} onPress={this._User}>
                            <Text style={styles.buttonText}>
                                USER
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttons} onPress={this._Band}>
                            <Text style={styles.buttonText}>
                                BAND
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </>
        );
    }

    _User = () => {
        this.props.navigation.navigate('User');
    };

    _Band = async () => {
        this.props.navigation.navigate('Band');
    };
}

class CreateScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <>
                <ImageBackground source={require('./images/background.jpg')} resizeMode='cover' style={styles.background}>
                    <Header />
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.buttons} onPress={this._createUserAsync}>
                            <Text style={styles.buttonText}>
                                USER
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttons} onPress={this._createBandAsync}>
                            <Text style={styles.buttonText}>
                                BAND
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </>
        );
    }

    _createUserAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('CreateUser');
    };
    _createBandAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('CreateBand');
    };
}

class UserScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (

            <>
                <UserView />
                <TouchableOpacity style={styles.buttonContainer} title="I'm done, sign me out" onPress={this._signOutAsync}>
                    <Text style={styles.buttonText}>
                        sign out
                    </Text>
                </TouchableOpacity>
            </>
        );
    }

    _Band = async () => {
        this.props.navigation.navigate('Band');
    };

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}

class BandScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <>
                <BandView />
                <TouchableOpacity style={styles.buttonContainer} onPress={this._signOutAsync}>
                    <Text style={styles.buttonText}>
                        sign out
                    </Text>
                </TouchableOpacity>
            </>
        );
    }

    _User = () => {
        this.props.navigation.navigate('User');
    };

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}

class UserForm extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <>
                <UserAccForm />
                <TouchableOpacity style={styles.buttonContainer} onPress={this._signOutAsync}>
                    <Text style={styles.buttonText}>
                        sign out
                    </Text>
                </TouchableOpacity>
            </>
        );
    }
    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}

class BandForm extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <>
                <BandAccForm />
                <TouchableOpacity style={styles.buttonContainer} onPress={this._signOutAsync}>
                    <Text style={styles.buttonText}>
                        sign out
                    </Text>
                </TouchableOpacity>
            </>
        );
    }
    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}

class BandEdit extends React.Component {
    static navigationOptions = {
        header: null,
    };
  
    render() {
        return (
            <>
                <BandEditForm />
                <TouchableOpacity style={styles.buttonContainer} onPress={this._signOutAsync}>
                    <Text style={styles.buttonText}>
                        sign out
                    </Text>
                </TouchableOpacity>
            </>
        );
    }
    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
  }


class AuthLoadingScreen extends React.Component {
    constructor() {
        super();
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    // Render any loading content that you like here
    render() {
        return (
            <View >
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

const AppStack = createStackNavigator({ Home: HomeScreen, User: UserScreen, Band: BandScreen, Create: CreateScreen, CreateUser: UserForm, CreateBand: BandForm, BandEd: BandEdit}, {
    // The previous screen will slide to the bottom while the next screen will fade in
    transition: (
        <Transition.Together>
            <Transition.Out
                type="slide-left"
                durationMs={4000}
                interpolation="easeIn"
            />
            <Transition.In type="fade" durationMs={4000} />
        </Transition.Together>
    ),
});
const AuthStack = createStackNavigator({ SignIn: SignInScreen });
const TheStack = createAppContainer(createSwitchNavigator(

    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));


class Login extends React.Component {
    render() {
        return (
            <TheStack  />
        )
    }
}


export default Login
