import { StyleSheet } from "react-native";
import colours from './colors.js'

export default StyleSheet.create({
    header: {
        width: '100%',
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },

    headerIcon: {
        width: 20,
        height: 20
    },

    headerCTA: {
        width: 25,
        height: 16
    },

    headerContent: {
        flexDirection: 'row',
        gap: 30,
        justifyContent: 'center'
    },

    headerTitle: {
        fontFamily: 'Inter_600SemiBold',
        color: colours.red
    },
})