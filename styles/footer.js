import { StyleSheet } from "react-native";
import colours from './colors'

export default StyleSheet.create({
    footerWrapper: {
        height: 'auto',
        flexDirection: 'row',
        gap: 50,
        width: '100%',
        justifyContent: 'center'
    },

    footerLink: {
        fontFamily: 'Inter_300Light',
        fontSize: 10
    }
})