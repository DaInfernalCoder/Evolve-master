import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { icons } from '../constants'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'


const FormField = ({ title, value, placeHolder, handleChangeText, otherStyles, ...props }) => {
    
    const [showPassword, setShowPassword] = useState(false)
    
    return (     
    <View className = {`space-y-2 ${otherStyles}`}>
      <Text 
        className = "text-base text-gray-100 font-pmedium">{title}
      </Text>
      
      <View className="w-full h-16 px-4 bg-black-100 z border-2 border-black-200 focus:border-secondary flex flex-row items-center">
        <TextInput
          className = "flex-1 text-white font-psemibold text-base"
          value = {value}
          placeHolder = {placeHolder}
          placeHolderColor = "#7b7b8b"
          onChangeText = {handleChangeText}
          secureTextEntry = { title === 'Password' && !showPassword}
        />

        {title === 'Password' && (
          <TouchableOpacity onPress = {() => setShowPassword(!showPassword)}>
            <Image source = {!showPassword ? icons.eye : icons.eyeHide} 
            className = "w-6 h-6" resizeMode = 'contain' />
          </TouchableOpacity>
        )}

      </View>


    </View>
  )
}

export default FormField