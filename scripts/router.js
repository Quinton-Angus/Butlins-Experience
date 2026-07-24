import * as secureStore from 'expo-secure-store'
import { router } from 'expo-router'

export default async function route(connectionToken) {
  function welcome() {
    router.replace('/welcome')
  }

  function holidaysOverview() {
    router.replace('/holidaysOverview')
  }

  if (connectionToken) {
    const appTokenRequest = await fetch('https://api.quintondev.com/butlins-experience/app/connect', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        connectionToken,
      }),
    })

    const appTokenResponse = await appTokenRequest.json()

    if (appTokenResponse.outcome === true) {
      await secureStore.setItemAsync('appToken', appTokenResponse.appToken)
      holidaysOverview()
    } else {
      welcome()
    }

    return
  }

  const appToken = await secureStore.getItemAsync('appToken')

  if (appToken) {
    const verifyToken = await fetch('https://api.quintondev.com/butlins-experience/app/tokenverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        appToken,
      }),
    })

    const verifyTokenResponse = await verifyToken.json()

    if (verifyTokenResponse.outcome === true) {
      holidaysOverview()
    } else {
      welcome()
    }
  } else {
    welcome()
  }
}
