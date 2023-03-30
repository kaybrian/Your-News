import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const FeaturedStories = ({article}) => {
    // console.log(article)
    const navigation = useNavigation();
    return (
        <View className="flex-row space-x-2 py-3 px-4">
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


                <TouchableOpacity
                    className="border-b-2 border-[#121212]"
                    onPress={() =>{
                        navigation.navigate('readMore', {
                            article: article
                        })
                    }}
                >
                    <Text className="font-medium text-[#121212]">Read News</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FeaturedStories
