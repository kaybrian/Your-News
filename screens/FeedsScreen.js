import { View, Text, SafeAreaView, StatusBar, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { ChevronDownIcon, UserIcon, NewspaperIcon } from "react-native-heroicons/outline";
import Categories from '../components/categories';
import FeaturedStories from '../components/FeaturedStories';

const FeedsScreen = () => {
    return (
        <SafeAreaView className="bg-white pt-6 mt-3 mb-10 pb-20">
            <View className="flex-row  space-x-2 items-center justify-between py-5 px-4 ">
                <Text className="text-lg font-bold text-[#121212]">Your News</Text>
                <UserIcon color="#121212" size={35} />
            </View>
            <View className="py-5 px-4 mb-2">
                <Text className="text-xs text-[#616161] mb-2">Hey, Reader</Text>
                <Text className="text-3xl font-Roboto text-[#121212] font-bold">Latest Updates</Text>

                <View className="flex-row space-x-2 bg-white">
                    <TextInput
                        editable
                        placeholder='Search For News'
                        keyboardType='default'
                        className="pr-2 rounded-md border-b w-full mt-5 p-1"

                    />
                </View>
            </View>

            <ScrollView className="bg-white px-2 pb-36 mb-10">
                <Categories />
                <View className="px-4 mt-10">
                    <Text className="text-lg font-medium text-[#121212] ">Featured Stories</Text>

                    <FeaturedStories />
                </View>
            </ScrollView>





            <StatusBar
                backgroundColor="#121212"
                barStyle="dark-content"
                hidden={false}
                translucent={true}
            />
        </SafeAreaView>
    )
}

export default FeedsScreen
