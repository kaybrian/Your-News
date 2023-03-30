import { View, Text, SafeAreaView, StatusBar, Image, ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import {  UserIcon, NewspaperIcon } from "react-native-heroicons/outline";
import moment from 'moment'
import { useNavigation } from '@react-navigation/native';



const ReadDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { article } = route.params

  return (
    <SafeAreaView className="bg-white">
      <View className="flex-row space-x-3 items-center justify-between px-4 mb-3">
        <NewspaperIcon onPress={() => {
          navigation.goBack();
        }} size={30} color="#121212" />
        <Image
          source={
            article.urlToImage === null
              ? require('../assets/placeholder.png')
              : {
                uri: article.urlToImage
              }
          }
          style={{ width: 50, height: 50 }}
          resizeMode="cover"
          className="rounded-full"
        />
      </View>

      <ScrollView className="pt-0">
        <View className="flex-row space-x-2 items-center mt-4 justify-between px-4">
          <View className="rounded-full bg-[#616161]">
            <Text className="font-light shadow-sm text-4xl px-4 py-2  rounded-lg text-white">{article.title.charAt(0).toUpperCase()}</Text>
          </View>

          <View className="flex-1 border-l-2 border-black px-4 ">
            <Text className="text-[#616161] text-medium font-normal">{moment(article.publishedAt).format("MMM Do YY")}</Text>
            <Text className="text-[#121212] text-lg font-bold">
              {
                article.source.name === null
                  ? "Unknown"
                  : article.source.name
              }
            </Text>
          </View>
        </View>

        <View className="px-6 py-5 mt-4">
          <Text className="text-[#121212]  text-2xl font-bold">{article.title}</Text>
          <Text className="text-[#616161] pt-7 font-light text-lg">{article.description}</Text>
        </View>
        <View className="mt-4 px-6">
          <Image
            source={
              article.urlToImage === null
                ? require('../assets/placeholder.png')
                : {
                  uri: article.urlToImage
                }
            }
            resizeMode="cover"
            className="object-cover h-60 w-full"
          />
        </View>

        <View className="px-6 py-5 mt-4">
          <Text className="text-[#616161] pt-7 font-light text-lg">{article.content}</Text>
        </View>


        <View className="flex-row space-x-2 items-center mt-4 justify-between px-4">
          <View className="rounded-full bg-[#616161] p-3">
            <UserIcon
              color="#FFFFFF"
            />
          </View>

          <View className="flex-1 border-l-2 border-black px-4 ">
            <Text className="text-[#616161] text-medium font-normal">
              Article Written By
              </Text>
            <Text className="text-[#121212] text-lg font-bold">
              {
                article.author === null
                  ? "Unknown"
                  : article.author
              }
            </Text>
          </View>
        </View>
      </ScrollView>


      <StatusBar
        barStyle="dark-content"
        hidden={false}
        translucent={true}
      />
    </SafeAreaView>

  )
}

export default ReadDetails
