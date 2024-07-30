import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <View className = "bg-white h-full w-full">
        <StatusBar barStyle={'light-content'}/>
        <Image className="h-full w-full absolute" source={ require("../Assets/images/background.png")}/>
        <View className="flex-row justify-around w-full absolute">
            <Image className="h-[225] w-[90]" source={require("../Assets/images/light.png")}/>
            <Image className="h-[160] w-[65]" source={require("../Assets/images/light.png")}/>

            
        </View>
        <View className="h-full w-full flex justify-around pt-40 pb-10">
                <View className="flex items-center">
                    <Text className="text-black font-bold tracking-wider text-5xl">Login</Text>

                </View>
                <View className="flex items-center mx-4 space-y-4"></View>
            
        </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})