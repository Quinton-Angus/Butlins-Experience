import { StyleSheet } from "react-native";
import colours from '../colors.js';

export default StyleSheet.create({

    container: {
        flex: 1
    },

    logoWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    imageBackground: {
        aspectRatio: 390 / 600,
        resizeMode: 'cover',
        paddingTop: 125,
        alignItems: 'center'
    },

    logo: {
        width: 100,
        height: 100
    },

    title: {
        fontFamily: 'Inter_800ExtraBold',
        fontSize: 25,
        color: colours.white,
        marginBottom: 5
    },

    subTitle: {
        fontFamily: 'Inter_400Regular',
        color: colours.white,
        marginBottom: 150
    },

    continueBtn: {
        width: 150,
        height: 40,
        backgroundColor: colours.white,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },

    continueBtnText: {
        fontFamily: 'Inter_700Bold',
        color: colours.red
    },

    footerWrapper: {
        flexDirection: 'row',
        gap: 50,
        marginBottom: 75,
        marginTop: 'auto',
    },

    footerLink: {
        fontFamily: 'Inter_300Light',
        fontSize: 10,
        color: colours.white
    }
})