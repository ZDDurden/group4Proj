import { StyleSheet } from 'react-native'
import c from './Colors'

const styles = StyleSheet.create({
    bandBody: {
        backgroundColor: c.white,
        borderWidth: 0.5,
        borderColor: c.light1,
        borderRadius: 10,
        flex: 1,
        margin: 20,
        padding: 20,
        shadowColor: c.shadow,
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 1
    },
    spotView: {
        flex: .44,
        borderRadius: 10,
        // borderWidth: 0.5,

    },
    spotify: {
        flex: 1,
        borderRadius: 10,
        borderWidth: 0.45,
    },
    bandName: {
        backgroundColor: c.primary2,
        borderWidth: 0.5,
        borderColor: c.light2,
        borderRadius: 10,
        fontSize: 60,
        textAlign: "center",
        textTransform: "uppercase",
        fontWeight: "800",
        marginBottom: 20,
    },
    container: {
        marginTop: 60,
        // alignItems: 'center',
    },
    body: {
        flex: 1,
    },
    buttons: {
        margin: 30,
        fontSize: 80,
        backgroundColor: c.primary1,
        textAlign: 'center',
        paddingVertical: 30,
        borderRadius: 50,

    },
    buttonText: {
        textAlign: 'center',
        fontSize: 30,
        textTransform: "uppercase",

    },

    background: {
        flex: 1,
        width: null,
        height: null,
        backgroundColor: c.white
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: c.secondary1,
    },
    header: {
        backgroundColor: "#c24",
        height: 200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        marginTop: 40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600"
    },
    info: {
        fontSize: 16,
        color: "#00BFFF",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    },
});

export default styles