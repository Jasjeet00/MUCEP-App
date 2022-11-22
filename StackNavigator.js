import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home';
import Second from './screens/Second';
const Stack = createNativeStackNavigator();


const StackNavigator = () => {
  return (

    <Stack.Navigator screenOptions={{headershown: false}}>

        <Stack.Group>
            <Stack.Screen name='SignIn' component={Home}></Stack.Screen>
            <Stack.Screen name='SignUp' component={Second}></Stack.Screen>
        </Stack.Group>

    </Stack.Navigator>

    
    
  )
}

export default StackNavigator