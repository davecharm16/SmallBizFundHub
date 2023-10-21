import React, { useState } from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native";
import { Button, TextInput, useTheme } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedIn, setUserType } from "../redux/slice/userSlice";


function Login({ navigation, route }) {
    const theme = useTheme();
    const { log_in_as } = route.params;
    const [showPass, setShowPass] = useState(false);
    const dispatch = useDispatch();

    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: theme.colors.secondary,
                justifyContent: "center",
                padding: 20,
                gap: 20,
            }}
        >
            <Text
                style={{
                    fontFamily: "Futura",
                    fontSize: 43,
                    fontWeight: "bold",

                    color: theme.colors.black,
                    alignSelf: "flex-start",
                }}
            >
                Log In
            </Text>
            <TextInput
                label={"Email Address"}
                placeholder="Enter your Email Address"
                style={{ width: "100%", backgroundColor: "#fff" }}
                mode="outlined"
            />
            <TextInput
                label={"Password"}
                placeholder="Enter your Password"
                style={{ width: "100%", backgroundColor: "#fff" }}
                secureTextEntry={showPass}
                mode="outlined"
                right={
                    <TextInput.Icon
                        icon={showPass ? "eye-off" : "eye"}
                        onPress={() => setShowPass(!showPass)}
                    />
                }
            />
            <Button
                buttonColor={theme.colors.primary}
                textColor={theme.colors.secondary}
                style={{ width: 300, padding: 5 }}
                onPress={() => {
                    dispatch(setLoggedIn(true));
                    dispatch(setUserType(log_in_as));
                    navigation.navigate('Home')
                }}
            >
                Login
            </Button>
            <View style={{ flexDirection: "row" }}>
                <Text style={{ fontFamily: "Futura", fontSize: 16 }}>
                    Don't have an account?{" "}
                </Text>
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate(
                            log_in_as === "investor" ? "RegisterInvestor" : "RegisterBusiness"
                        )
                    }
                >
                    <Text
                        style={{
                            fontFamily: "Futura-Bold",
                            fontSize: 16,
                            color: theme.colors.primary,
                        }}
                    >
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Login;
