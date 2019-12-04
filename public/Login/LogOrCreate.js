import React from "react";
import { StyleSheet, Text, TouchableOpacity, View} from "react-native";

import { NativeRouter, Route, Link } from "react-router-native";
import Header from '../Components/Header'

class LogOrCreate extends React.Component {
    render() {
        return (
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
export default LogOrCreate
