import React from 'react'
import { View, Text } from 'react-native'
import { useTheme } from "react-native-paper";

function Login({ navigation, route }) {
    const theme = useTheme();
    const { log_in_as } = route.params;

    return (
        <View style={{
            flex: 1,
            alignContent: 'center',
            backgroundColor: theme.colors.secondary,
        }}>
            <Text style={{
                fontFamily: 'Futura-Bold',
                fontSize: 34,
                color: theme.colors.primary,
            }}>
                Log In
            </Text>

        </View>
    )
}

export default Login
