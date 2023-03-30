import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';



const ReadDetails = () => {
    const route = useRoute();

    const {article} =route.params

    console.log(article)
  return (
    <ScrollView>
      <Text>{article.title}</Text>
    </ScrollView>
  )
}

export default ReadDetails
