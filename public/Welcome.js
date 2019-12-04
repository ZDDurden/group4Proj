import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import Header from './Components/Header'
import LogOrCreate from './Login/LogOrCreate'
import Login from './Login'
import UserProfile from './userView/UserProfileMain'



class Welcome extends React.Component {
    render() {
        return (

            <View style={styles.body}>
                <ImageBackground source={require('./images/background.jpg')} resizeMode='cover' style={styles.background}>
                    {/* source={require("./images/background.jpwg")} */}
                    <Header />
                        <View style={{ flex: 1 }}>
                            <Login/>
                        </View>
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



