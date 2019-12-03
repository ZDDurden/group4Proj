import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity } from "react-native";

import { NativeRouter, Route, Link } from "react-router-native";
import Header from './Components/Header'

class Login extends React.Component {
    render() {
        return (
            <>
                <View style={styles.body}>
                    <Header />
                    <NativeRouter>
                        <View >
                            <View >
                                <Link to="/" underlayColor="#f0f4f7" >
                                    <TouchableOpacity style={styles.buttons} title="Login">
                                        <Text style={styles.buttonText}>
                                            Login
                                    </Text>
                                    </TouchableOpacity>
                                </Link>
                                <Link to="/about" underlayColor="#f0f4f7">
                                    <TouchableOpacity style={styles.buttons} title="Create Account">
                                        <Text style={styles.buttonText}>
                                            Create Account
                                    </Text>
                                    </TouchableOpacity>
                                </Link>
                            </View>

                            <Route exact path="/" />
                            <Route path="/about" />
                            <Route path="/topics" />
                        </View>
                    </NativeRouter>
                </View>
            </>
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
export default Login
