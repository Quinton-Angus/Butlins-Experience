import { StyleSheet } from "react-native";
import colours from '../colors'

export default StyleSheet.create({

    noDataPlaceholder: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },

    beachBallGraphics: {
        width: 200,
        height: 200
    },

    placeholderTitle: {
        fontFamily: 'Inter_600SemiBold',
        fontSize: 25,
        color: colours.red,
        marginTop: 20,
        marginBottom: 20
    },

    placeholderSubTitle: {
        fontFamily: 'Inter_300Light',
        fontSize: 12,
        marginBottom: 25
    },

    placeholderCTA: {
        fontFamily: 'Inter_100Thin',
        color: colours.red,
        fontSize: 10,
        padding: 5,
        borderRadius: 5,
        borderColor: colours.red,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

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
    },

    dataContainer: {
        flex: 1,
        marginTop: 50,
        justifyContent: 'start',
        alignItems: 'start',
        marginLeft: 25,
        display: 'none'
    },

    dataWrapper: {
        flexDirection: 'column',
        gap: 10,
    },

    dataHeader: {
        flexDirection: 'row',
        gap: 10
    },

    dataIcon: {
        width: 50,
        height: 50
    },
    
    dataDivider: {
        width:200,
        borderBottomWidth: 0.5,
        borderBottomColor: '#B8B8B8'
    },

    dataTitle: {
        fontSize: 20,
        fontFamily: 'Inter_500Medium'
    },

    dataDate: {
        fontFamily: 'Inter_300Light',
        fontSize: 10
    },

    dataInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 200
    },

    dataOrganizer: {
        fontFamily: 'Inter_300Light',
        fontSize: 8
    },

    dataJoined: {
        fontFamily: 'Inter_300Light',
        fontSize: 8
    }
})