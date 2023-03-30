import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const FeaturedStories = ({article}) => {
    console.log(article)
    return (
        <View className="flex-row space-x-2 py-3 ">
            <Image
                source={
                    article.urlToImage === null
                    ? require('../assets/placeholder.png')
                    : {
                    uri:article.urlToImage}
                }
                style={{ width: 116, height: 89 }}
                resizeMode="cover"
                className="grayscale"
            />
            <View className="space-y-6 px-2 flex-1 items-start">
                <Text
                    numberOfLines={3}
                    ellipsizeMode='tail'
                    className="text-[#121212] font-medium text-md"
                >
                    {article.title}
                </Text>


                <TouchableOpacity className="border-b-2 border-[#121212]">
                    <Text className="font-medium text-[#121212]">Read News</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FeaturedStories
