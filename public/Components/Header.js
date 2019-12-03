import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button } from "react-native";

import { NativeRouter, Route, Link } from "react-router-native";

class Header extends React.Component {
    render() {
        return (
            <>
                <View style={styles.headerWindow}>
                    <Text style={styles.header}>BANDER</Text>
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
