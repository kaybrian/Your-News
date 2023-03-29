import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'

const Categories = () => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row flex-1 items-center space-x-3 jusitfy-between">

                <View className="items-center px-3 ">
                    <View className="bg-gray-200 p-2 rounded-full">
                        <Image
                            source={require('../assets/innovation.png')}
                            className="h-10 w-10 p-4 rounded-full"
                        />
                    </View>
                    <Text className="text-xs mt-1 text-[#121212] font-bold">All</Text>
                </View>

                <View className="items-center px-3 ">
                    <View className="bg-gray-200 p-2 rounded-full">
                        <Image
                            source={require('../assets/startup.png')}
                            className="h-10 w-10 p-4 rounded-full"
                        />
                    </View>
                    <Text className="text-xs mt-1 text-[#121212] font-light">Tech</Text>
                </View>

                <View className="items-center px-3 ">
                    <View className="bg-gray-200 p-2 rounded-full">
                        <Image
                            source={require('../assets/pie-chart.png')}
                            className="h-10 w-10 p-4 rounded-full"
                        />
                    </View>
                    <Text className="text-xs mt-1 text-[#121212] font-light">Market</Text>
                </View>

                <View className="items-center px-3 ">
                    <View className="bg-gray-200 p-2 rounded-full">
                        <Image
                            source={require('../assets/hospital.png')}
                            className="h-10 w-10 p-4 rounded-full"
                        />
                    </View>
                    <Text className="text-xs mt-1 text-[#121212] font-light">Health</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default Categories
