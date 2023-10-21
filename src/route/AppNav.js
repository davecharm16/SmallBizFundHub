import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import LoginOptions from '../screens/LoginOptions';
import RegisterInvestor from '../screens/RegisterInvestor';
import Login from '../screens/Login';

function AppNavigation(props) {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="LoginOptions" component={LoginOptions}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen name="RegisterInvestor" component={RegisterInvestor}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen name="Login" component={Login}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation
