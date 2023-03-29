import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlashScreen from './screens/HomeScreen';
import FeedsScreen from './screens/FeedsScreen';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="flashScreen" component={FlashScreen}
          options={{
            presentation: "fullScreenModal",
            headerShown: false
          }}
        />
        <Stack.Screen name="feeds" component={FeedsScreen}
          options={{
            presentation: "fullScreenModal",
            headerShown: false
          }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}
