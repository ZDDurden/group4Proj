import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, ImageBackground } from "react-native";

import { NativeRouter, Route, Link } from "react-router-native";

class Header extends React.Component {
    render() {
        return (
            <>
                <View style={styles.headerWindow}>
                    <ImageBackground source={require('../images/logo.png')} resizeMode='cover' style={{marginTop: 30,width: '100%', height:80}}/>
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 80,
        fontStyle: 'italic',
        color: '#eee',
        alignContent: 'center',
        textAlign: "center",

    },
    headerWindow: {
        height: 80,
        marginVertical: 50,
        alignContent: 'center'
    }
})

export default Header
