import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { icons } from '../constants'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'


const SearchInput = ({ title, value, placeHolder, handleChangeText, otherStyles, ...props }) => {
    
    const [showPassword, setShowPassword] = useState(false)
    
    return (     
      <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center space-x-4">
        <TextInput
          className = "text-base mt-0.5 flex-1 text-white font-pregular"
          value = {value}
          placeholder = "Search for a Video Topic"
          placeholderTextColor = "#7b7b8b"
          onChangeText = {handleChangeText}
          secureTextEntry = { title === 'Password' && !showPassword}
        />

          <TouchableOpacity>
            <Image
                source={icons.search}
                className = 'w-5 h-5'
                resizeMode = 'contain'
            />
          </TouchableOpacity>
   

      </View>

  )
}

export default SearchInput