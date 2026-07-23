import { StyleSheet } from "react-native";
import colours from "../colors";

export default StyleSheet.create({
    Title: {
        fontFamily: 'Inter_600SemiBold',
        fontSize: 25,
        color: colours.red,
        marginBottom: 45
    },

    holidayIcon: {
        width: 50,
        height: 50
    },

    gap10: {
        gap: 10
    },

    gap5: {
        gap: 5
    },

    holidayName: {
        fontFamily: 'Inter_500Medium',
        fontSize: 20
    },

    holidayDates: {
        fontFamily: 'Inter_300Light',
        fontSize: 8
    },

    holidayHeaderDivider: {
        marginBottom: 15,
        marginTop: 15
    }
})