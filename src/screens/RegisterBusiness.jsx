import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Button, Checkbox, TextInput, useTheme } from "react-native-paper";

function RegisterBusiness({ navigation }) {
    const [checkStatus, setCheckStatus] = useState(false);
    const theme = useTheme();

    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: 20,
                gap: 10,
            }}
        >
            <Text
                style={{
                    fontFamily: "Futura-Bold",
                    fontSize: 32,
                }}
            >
                Create Account
            </Text>
            <TextInput
                label={"Full Name"}
                onChange={() => { }}
                placeholder="Enter your Name"
                style={{ width: "100%" }}
                mode="outlined"
            />
            <TextInput
                label={"Business Name"}
                onChange={() => { }}
                placeholder="Enter your Business Name"
                style={{ width: "100%" }}
                mode="outlined"
            />
            <TextInput
                label={"Email Address"}
                onChange={() => { }}
                placeholder="Enter your Email Address"
                style={{ width: "100%" }}
                mode="outlined"
            />
            <TextInput
                label={"Password"}
                onChange={() => { }}
                placeholder="Enter your Password"
                style={{ width: "100%" }}
                right={<TextInput.Icon icon="eye-off" />}
                secureTextEntry={true}
                mode="outlined"
            />
            <TextInput
                label={"Confirm Password"}
                onChange={() => { }}
                right={<TextInput.Icon icon="eye-off" />}
                placeholder="Enter your Confirm Password"
                secureTextEntry={true}
                style={{ width: "100%" }}
                mode="outlined"
            />
            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', alignSelf: 'flex-start' }}>
                <Checkbox status={(checkStatus ? "unchecked" : "checked")} onPress={() => setCheckStatus(!checkStatus)} />
                <Text>I agree to the Terms and Conditions</Text>
            </View>
            <Button
                mode="contained"
                style={{ width: "100%" }}
                onPress={() => { }}
            >
                Register as Business Owner
            </Button>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text> Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login', { log_in_as: 'business' })}>
                    <Text style={{ color: theme.colors.primary }}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default RegisterBusiness
