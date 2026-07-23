import * as linking from 'expo-linking'
import * as secureStore from 'expo-secure-store'
import { router } from 'expo-router'


export default async function deepLink(url) {

    const parsed = linking.parse(url)

    const connectionToken = parsed.queryParams.connectionToken

    const storeCheck = await secureStore.getItemAsync('appToken')

    if (!storeCheck) {
        const appTokenRequest = await fetch('https://api.quintondev.com/butlins-experience/app/connect', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                connectionToken: connectionToken
            })
        })

        const appTokenResponse = await appTokenRequest.json()

        if (appTokenResponse.outcome === true) {
            const appToken = appTokenResponse.appToken

            await secureStore.setItemAsync('appToken', appToken)

            router.replace('/holidaysOverview')
        } else {
            router.replace('/welcome')
        }
    } else {
        router.replace('/holidaysOverview')
    }

    

}