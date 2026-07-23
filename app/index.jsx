import { useEffect } from "react";
import { Image, View, StyleSheet } from 'react-native'
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function splashScreen() {

        useEffect(() => {
            const timeout = setTimeout(() => {
                router.replace('/welcome')
            }, 2000)

            return () => clearTimeout(timeout)
        })

    const Styles = StyleSheet.create({
        container: {
            flex: 1,
            start: {x: 0, y:0},
            end: {x: 1, y: 1},
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        },

        logo: {
            height: 110
        }
    })

    return (
        <LinearGradient style={Styles.container} colors={['#FD3B3B', '#DB2C2C', '#C21C1C']} >
            <Image style={Styles.logo} source={require('../Assets/Logo(V)-WhiteText.png')} />
        </LinearGradient>
    )
}