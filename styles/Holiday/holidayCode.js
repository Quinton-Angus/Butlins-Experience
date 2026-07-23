import { StyleSheet } from "react-native";
import colours from '../colors'

export default StyleSheet.create({
    title: {
        fontFamily: 'Inter_600SemiBold',
        fontSize: 25,
        color: colours.red,
        marginBottom: 15
    },

    subTitle: {
        fontFamily: 'Inter_300Light',
        fontSize: 10,
        width: 275
    },

    inputWrapper: {
        flexDirection: 'row',
        gap: 5,
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'center'
    },

    inputBox: {
        height: 35,
        width: 25,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colours.black,
        fontSize: 12,
        fontFamily: 'Inter_400Regular',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },

    btn: {
        width: 90,
        height: 25,
        backgroundColor: colours.red,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnText: {
        fontFamily: 'Inter_600SemiBold',
        fontSize: 12,
        color: colours.white
    },
    
    dash: {
        width: 10,
        height: 1,
        backgroundColor: colours.black
    }
})