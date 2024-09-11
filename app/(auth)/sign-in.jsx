import { Text, View, Alert, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView, ScrollView } from 'react-native-web'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, useRouter } from 'expo-router'
import { getCurrentUser, signIn } from '../../lib/appwrite'
import { router } from 'expo-router'

const SignIn = () => {
  
  const [form, setForm] = useState({
    email: '',
    password: ''
  })


  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const submit = async () => {
    if( form.email  === ""|| form.password === ""){
      Alert.alert('Error', 'Please fill in all fields')
      
    } 

    setIsSubmitting(true)

    try {
      await signIn(form.email, form.password)
      const result = await getCurrentUser()
      setUserId(result)
      setIsLogeed(true)
      
    } catch(error) {
      Alert.alert('Error', error.message)
    } finally {
      setIsSubmitting(false)
    }

    //set it to global state
    //fix this later to actually check if the database has a matching combo
    router.replace('/home')
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image source={images.logoEvolve}
            resizeMode='contain' className="w-[200px] h-[200px] -mx-20" />

          <Text className="text-2xl text-white text-semibold -mt-10 font-psemibold -mx-1">Log in to Evolve</Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            keyboardType="default"
            secureTextEntry={true}
          />

          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link href="/sign-up" className="text-lg font-psemibold text-secondary">
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
