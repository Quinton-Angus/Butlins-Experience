import { View, Pressable, Text } from 'react-native'
import FooterStyles from '../styles/footer'

export default function Footer() {
    return (
        <View style={FooterStyles.footerWrapper}>
            <Pressable><Text style={FooterStyles.footerLink}>Terms</Text></Pressable>
            <Pressable><Text style={FooterStyles.footerLink}>Privacy</Text></Pressable>
            <Pressable><Text style={FooterStyles.footerLink}>Help</Text></Pressable>
        </View>
    )
}