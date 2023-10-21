import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, useTheme } from 'react-native-paper';

function LoginOptions({ navigation }) {
    const theme = useTheme();
    return (
        <View style={[styles.container, { backgroundColor: theme.colors.accent }]}>
            <Text style={{ color: theme.colors.secondary, fontFamily: 'Futura-Bold', fontSize: 32 }}>Welcome!</Text>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ color: theme.colors.secondary, marginTop: 40 }}> Are you an</Text>
                <Button
                    style={{ marginTop: 10 }}
                    buttonColor={theme.colors.primary}
                    textColor={theme.colors.secondary}
                    onPress={() => navigation.navigate('RegisterInvestor')}
                >
                    Investor
                </Button>
                <Text style={{ color: theme.colors.secondary, marginTop: 10 }}> or</Text>
                <Button
                    style={{ marginTop: 10 }}
                    buttonColor={theme.colors.primary}
                    textColor={theme.colors.secondary}
                >
                    Business Owner
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default LoginOptions
