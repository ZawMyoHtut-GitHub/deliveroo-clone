import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import RestauranScreen from './screens/RestauranScreen';
import BasketScreen from './screens/BasketScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Provider store={store}>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Restaurant" component={RestauranScreen} />
                    <Stack.Screen name="Basket" component={BasketScreen} 
                        options={{presentation:'modal',headerShown:false}}
                    />
                </Stack.Navigator>
            </Provider>
        </NavigationContainer>
    )
}
