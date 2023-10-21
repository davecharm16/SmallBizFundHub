import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

export const MyTheme = {
    ...DefaultTheme,
    dark: false,
    colors: {
        ...DefaultTheme.colors,
        primary: '#314BCE',
        secondary: '#FFFFFF',
        accent: '#151940',
        black: '#1E1E1E'
    }
}


export default MyTheme;