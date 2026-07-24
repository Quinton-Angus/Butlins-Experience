import * as secureStore from 'expo-secure-store'
import { router } from 'expo-router'

export default async function route() {

    function welcome() {
        router.replace('/welcome')
    }

    function holidaysOverview() {
        router.replace('/holidaysOverview')
    }

    const appToken = await secureStore.getItemAsync('appToken')

    if (appToken) {

        const verifyToken = await fetch('https://api.quintondev.com/butlins-experience/app/tokenverify', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                appToken: appToken
            })
        })

        const verifyTokenResponse = await verifyToken.json()

        if (verifyTokenResponse.outcome === true) {
            holidaysOverview()
        } else {
            welcome()
        }
    } else if () {
        welcome()
    }

}