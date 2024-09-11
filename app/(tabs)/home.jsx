import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import { Image } from 'react-native-web'
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'


const Home = () => {
  return (
    <SafeAreaView className = "bg-primary">
      <FlatList
        
        data = {[{id: 1}, {id: 2}, {id: 3}]}
        keyExtractor = {(item) => item.$id}
        renderItem = {({item}) => (
          <Text className = "text-3xl text-white"> {item.id} </Text>
        )}
        ListHeaderComponent={() => (
          <View className = "my-9 px-4 space-y-6 bg-primary">
            <View className = "justify-between items-start flex-row mb-6">
              <View>
                <Text className = "font-pmedium text-sm text-gray-100">
                  Welcome Back
                </Text>
                <Text className = "text-2xl font-psemibold text-white">
                  Sumit
                </Text>
              </View>
            <View className = "mt-1.5">
              <Image
                source = {images.logoEvolve}
                className = "w-40 h-40 -mt-16 -mb-11 -mr-12"
                resizeMode = 'contain'

              />
            </View>
              
          </View>
          <SearchInput />

          <Text className = "text-gray-100 text-lg font-pregular mb-3">
            Latest Videos
          </Text>

          <Trending posts = {[{id:1}, {id:2}, {id:3}]}/>
      </View>

          
        )}

      />
    </SafeAreaView>
  )
}

export default Home