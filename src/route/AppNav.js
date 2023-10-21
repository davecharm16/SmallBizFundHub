import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'
import LoginOptions from '../screens/LoginOptions';
import RegisterInvestor from '../screens/RegisterInvestor';
import Login from '../screens/Login';
import RegisterBusiness from '../screens/RegisterBusiness';
import { useSelector } from 'react-redux';
import Home from '../screens/Investor/Home';
import HomeBusiness from '../screens/BusinessOwner/HomeBusiness';

function AppNavigation(props) {
    const Stack = createNativeStackNavigator();
    const isLogged = useSelector(state => state.user.isLogged)
    const userType = useSelector(state => state.user.userType)
    const [activeStack, setActiveStack] = useState(<></>);

    const investorStack = () => {
        return (
            <>
                <Stack.Screen name="Home" component={Home}
                    options={{
                        headerShown: false,
                    }}
                />
            </>
        )
    }

    const businessStack = () => {
        return (
            <>
                <Stack.Screen name="Home" component={HomeBusiness}
                    options={{
                        headerShown: false,
                    }}
                />
            </>
        )
    }

    useEffect(() => {
        if (userType === 'investor') {
            setActiveStack(investorStack())
        }
        else {
            setActiveStack(businessStack())
        }
    }, [isLogged, userType])

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {
                    !isLogged && <>
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
                        <Stack.Screen name="RegisterBusiness" component={RegisterBusiness}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen name="Login" component={Login}
                            options={{
                                headerShown: false,
                            }}
                        />
                    </>
                }
                {
                    activeStack
                }

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation
