import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect,useLayoutEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import * as Progress from 'react-native-progress';

import { useSelector, useDispatch } from 'react-redux';
import { getNewsStatus, fetchNews } from '../features/newsFeedSlice';


const FlashScreen = () => {
    const dispatch = useDispatch();
    const newsStatus = useSelector(getNewsStatus);

    const navigation = useNavigation();

    useLayoutEffect(() => {
        if (newsStatus === 'idle') {
            setTimeout(() => {
                console.log('fetching')
                dispatch(fetchNews())
            }, 5000)
        } else if (newsStatus === 'succeeded') {
            navigation.navigate('feeds')
        } else if (newsStatus === 'failed') {
            navigation.navigate('error')
        }
    }, [newsStatus, dispatch])

    console.log(newsStatus)
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
