import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity, ImageBackground } from "react-native";

import { NativeRouter, Route, Link } from "react-router-native";
import Header from './Components/Header'
import Login from './Login/Login'

const bg = './images/background.jpg'

function looog() {
    // this.SetState({})
    return <Login />;
}

function Home() {
    return <Text style={styles.header}>Yeet</Text>;
}

function About() {
    return <Text style={styles.header}>Abooooooooout</Text>;
}

function Topic({ match }) {
    return <Text style={styles.topic}>YOTE</Text>;
}

class Welcome extends React.Component {
    render() {
        return (

            <View style={styles.body}>
                <ImageBackground  source={require('./images/background.jpg')} resizeMode='cover' style={styles.background}>
                {/* source={require("./images/background.jpwg")} */}
                <Header />
                <NativeRouter>
                    <View >
                        <View>
                            <TouchableOpacity style={styles.buttons} title="Login">
                                <Link to="/login" underlayColor="#f0f4f7" >
                                    <Text style={styles.buttonText}>
                                        Login
                                    </Text>
                                </Link>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttons} title="Login">
                                <Link to="/topic" underlayColor="#f0f4f7" >
                                    <Text style={styles.buttonText}>
                                        CREATE ACCOUNT
                                    </Text>
                                </Link>
                            </TouchableOpacity>
                            
                        </View>

                        <Route exact path="/" />
                        <Route path="/login" component={looog} />
                        <Route path="/topic" component={Topic}/>
                    </View>
                </NativeRouter>
                </ImageBackground>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#2c2c2c'
    },
    background: {
        flex: 1,
        width: null,
        height: null,
        backgroundColor: '#999'
    },
    background2: {
        height: "100%"
        // backgroundColor: '#999'
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
    }
})
export default Welcome
