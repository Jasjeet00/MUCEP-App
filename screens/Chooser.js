import { View, Text, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const Chooser = () => {

    const navigation = useNavigation();
  return (
    <SafeAreaView>
        <Button onPress={()=>navigation.navigate("Oca")} title="OCA card" color={"maroon"}> </Button>
        <Button onPress={()=>navigation.navigate("Dpa")} title=" DPA card" color={"maroon"}></Button>
    </SafeAreaView>
  )
}

export default Chooser