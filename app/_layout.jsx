import { StyleSheet, Text, View } from 'react-native'
import { Slot } from 'expo-router'
import { useFonts } from 'expo-font'


const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Manrope-ExtraBold": require("../assets/fonts/Manrope-ExtraBold.ttf"),
    "Manrope-Bold": require("../assets/fonts/Manrope-Bold.ttf"),
    "Manrope-SemiBold": require("../assets/fonts/Manrope-SemiBold.ttf"),
    "Manrope-Medium": require("../assets/fonts/Manrope-Medium.ttf"),
    "Manrope-Regular": require("../assets/fonts/Manrope-Regular.ttf"),
    "Manrope-Light": require("../assets/fonts/Manrope-Light.ttf"),
    "Manrope-Extralight": require("../assets/fonts/Manrope-Extralight.ttf"),
  })

  return (
    <>
      <Text>Header</Text>
      <Slot />
      <Text>Footer</Text>
    </>
  )
}

export default RootLayout

