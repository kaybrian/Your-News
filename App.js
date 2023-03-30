import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlashScreen from './screens/HomeScreen';
import FeedsScreen from './screens/FeedsScreen';
import { store } from './store';
import { Provider } from 'react-redux'
import FetchFailed from './screens/FetchFailed';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
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
          <Stack.Screen name="error" component={FetchFailed}
            options={{
              presentation: "modal",
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
