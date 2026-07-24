import { Text, Image, View, Pressable, ImageBackground } from 'react-native'
import Styles from '../../styles/welcome/welcomeScreen'
import RedVector from  '../../Assets/welcome/RedVector.png'
import Logo from '../../Assets/welcome/Logo.png'
import script from '../../scripts/welcome'

export default function welcomeScreen() {
  return (
    <View style={Styles.container}>
      <View style={Styles.logoWrapper}>
        <Image style={Styles.logo} source={Logo}/>
      </View>
      <ImageBackground style={Styles.imageBackground} source={RedVector}>
        <Text style={Styles.title} >Your holiday. Made easier</Text>
        <Text style={Styles.subTitle} >Log in to make your holiday a breeze</Text>
        <Pressable style={Styles.continueBtn} onPress={script()} >
          <Text style={Styles.continueBtnText}>Continue →</Text>
        </Pressable>
        <View style={Styles.footerWrapper} >
          <Pressable>
            <Text style={Styles.footerLink} >Terms</Text>
          </Pressable>
          <Pressable>
            <Text style={Styles.footerLink} >Privacy</Text>
          </Pressable>
          <Pressable>
            <Text style={Styles.footerLink} >Help</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  )
}