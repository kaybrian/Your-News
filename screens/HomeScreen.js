import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import * as Progress from 'react-native-progress';



const FlashScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("feeds");
        }, 5000)
    }, [])
    return (
        <SafeAreaView className="bg-white flex-1 justify-center items-center">
            <Animatable.Image
                source={require('../assets/news.gif')}
                animation="slideInUp"
                iterationCount={1}
                className="h-96 w-96"
            />

            <Animatable.Text
                animation="slideInUp"
                iterationCount={2}
                className="text-lg my-10 text-[#121212] font-bold text-center"
            >
                Fetching your News Ready ...

            </Animatable.Text>

            <Progress.Circle color="#121212" size={30} indeterminate={true} />
        </SafeAreaView>
    )
}

export default FlashScreen
