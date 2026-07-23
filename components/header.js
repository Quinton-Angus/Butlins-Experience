import { View, Pressable, Image, Text } from 'react-native'
import HeaderStyles from '../styles/header.js'
import { router } from 'expo-router'
import { BackHandler } from 'react-native'

export default function Header({ CTAType, Title, IconSrc, CTAIconSrc }) {

    const type = {
        back:   () => router.back(),
        exit: () => BackHandler.exitApp()
    }

    return (
        <View style={HeaderStyles.header}>
            <View style={HeaderStyles.headerContent}>
                <Pressable onPress={type[CTAType]}><Image style={HeaderStyles.headerCTA} source={CTAIconSrc}/></Pressable>
                <Text style={HeaderStyles.headerTitle}>{Title}</Text>
            </View>
            {IconSrc && (<Pressable><Image style={HeaderStyles.headerIcon} source={IconSrc}/></Pressable>)}
        </View>
    )
}
