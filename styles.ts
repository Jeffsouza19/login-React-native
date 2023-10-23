import {StyleSheet} from "react-native";

export const styles =StyleSheet.create({
    scrollView: {
        backgroundColor: "#FFF",
        paddingHorizontal: 15,
        paddingTop: 40
    },
    container: {
        alignItems: "center"
    },
    logo: {
        width: 150,
        height: 150
    },
    input: {
        backgroundColor: "#FFF",
        padding: 5
    },
    h1: {
        fontSize: 26,
        fontWeight: "bold",
        marginVertical: 10,
        color: '#000',

    },
    h2: {
        color: "#777"
    },
    forgotArea:{
      width: '100%'
    },
    forgotText: {
        paddingVertical: 20,
        textAlign: "right",
        color: "#2e537e",
        fontWeight: "bold"
    },
    btn: {
        backgroundColor: "#2e537e",
        paddingHorizontal: 15,
        paddingVertical: 10,
        textAlign: 'center',
        color: "#FFF",
        borderRadius: 5,
        fontSize: 17,
        width: '100%'
    },
    signUpArea: {
        flexDirection: "row",
        marginVertical: 30,
    },
    signUpText: {
        color: "#777",
        fontWeight: "bold"
    },
    signUpButton: {
        marginLeft: 5
    },
    signUpTextButton: {
        color: "#2e537e",
        fontWeight: "bold"
    },
    footer: {
        marginVertical: 50
    },
    footerText: {
        color: "#999"
    }
})