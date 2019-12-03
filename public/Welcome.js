import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity } from "react-native";

import { NativeRouter, Route, Link } from "react-router-native";
import Header from './Components/Header'
import Login from './Login/Login'

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

            <ScrollView style={styles.body}>
                <Header />
                <NativeRouter>
                    <View >
                        <View >
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
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#2c2c2c'
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
