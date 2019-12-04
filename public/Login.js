import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, StatusBar, ActivityIndicator, AsyncStorage, ImageBackground } from "react-native";
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import { Transition } from 'react-native-reanimated';
import Header from './Components/Header'


class SignInScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <>
                <ImageBackground source={require('./images/background.jpg')} resizeMode='cover' style={styles.background}>
                    <Header />
                    <View>
                        <TouchableOpacity style={styles.buttons} title="Login" onPress={this._signInAsync}>
                            <Text style={styles.buttonText}>
                                Login
                    </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttons} title="Login">
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
        // await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
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
                    <View style={styles.body}>
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
        // await AsyncStorage.clear();
        this.props.navigation.navigate('Band');
    };
}

class UserScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <>
                <ImageBackground source={require('./images/background.jpg')} resizeMode='cover' style={styles.background}>
                    <Header />
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.buttons} onPress={this._Band}>
                            <Text style={styles.buttonText}>
                                BAND
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttons} title="I'm done, sign me out" onPress={this._signOutAsync}>
                            <Text style={styles.buttonText}>
                                sign out
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </>
        );
    }

    _Band = async () => {
        // await AsyncStorage.clear();
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
                <ImageBackground source={require('./images/background.jpg')} resizeMode='cover' style={styles.background}>
                    <Header />
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.buttons} onPress={this._User}>
                            <Text style={styles.buttonText}>
                                USER
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttons} title="I'm done, sign me out" onPress={this._signOutAsync}>
                            <Text style={styles.buttonText}>
                                sign out
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

const AppStack = createStackNavigator({ Home: HomeScreen, User: UserScreen, Band: BandScreen }, {
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
            <TheStack theme="dark" />
        )
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        // backgroundColor: '#000'
    },
    buttons: {
        margin: 50,
        fontSize: 80,
        backgroundColor: "#c24",
        textAlign: 'center',
        paddingVertical: 30,
        borderRadius: 50,

    },
    buttonText: {
        textAlign: 'center',
        fontSize: 30,
        textTransform: "uppercase",

    },
    stack: {
        backgroundColor: '#000'
    },
    background: {
        flex: 1,
        width: null,
        height: null,
        backgroundColor: '#999'
    },
})
export default Login
