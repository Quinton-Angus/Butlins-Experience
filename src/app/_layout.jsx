import { Stack } from "expo-router";
import { useFonts } from 'expo-font'
import { Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold } from '@expo-google-fonts/inter'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import * as linking from 'expo-linking'
import deepLink from '../../scripts/deepLink'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  })

  useEffect(() => {
    const subscription = linking.addEventListener('url', ({url}) => { deepLink(url) })
  }, [])

  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}
    />
  )
}