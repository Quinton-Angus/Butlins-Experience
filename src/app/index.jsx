import { Image } from 'react-native'
import Styles from '../../styles/splash/splashScreen.js'
import SplashIcon from '../../Assets/splash/splashIcon.png'
import { LinearGradient } from 'expo-linear-gradient'
import { NavigationBar } from 'expo-navigation-bar'
import { useEffect } from 'react'
import { useLocalSearchParams } from 'expo-router'
import UserRouter from '../../scripts/router.js'

export default function splashScreen() {
  const { connectionToken } = useLocalSearchParams()

  useEffect(() => {
    UserRouter(connectionToken)
  }, [connectionToken])

  return (
    <LinearGradient style={Styles.container} start={{x:0, y:0}} end={{x:1, y:1}} colors={['#640707', '#DB2C2C', '#5e0909']}>
      <Image style={Styles.logo} source={SplashIcon} />
      <NavigationBar style="light" />
    </LinearGradient>
  )
}
