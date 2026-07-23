import { View, Image, Pressable, Text} from 'react-native'
import Styles from '../../styles/Holiday/HolidayOverview.js'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BackHandler } from 'react-native'
import Header from '../../components/header.js'
import Footer from '../../components/footer.js'
import GearIcon from '../../assets/Holiday/GearIcon.png'

export default function HolidayScreenState1() {
  return (
    <SafeAreaView style={Styles.SAV}>
      <View style={Styles.container}>
        <Header Title={'Your holidays'}  CTAType={'exit'} CTAIconSrc={GearIcon} />
        <View style={Styles.contentWrapper}>
          <View style={Styles.noDataPlaceholder}>
            <Image style={Styles.beachBallGraphics} source={require('../../assets/Holiday/BeachBallGraphics.png')}/>
            <Text style={Styles.placeholderTitle}>No holidays yet</Text>
            <Text style={Styles.placeholderSubTitle}>Enter the 8-charecter code provided by your organiser.</Text>
            <Pressable><Text style={Styles.placeholderCTA}>Enter holiday code →</Text></Pressable>
          </View>
          <View style={Styles.dataContainer}></View>
        </View>
        
        <Footer/>
      </View>
    </SafeAreaView>
  )
}