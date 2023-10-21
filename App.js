import { StyleSheet, StatusBar } from 'react-native';
import AppNavigation from './src/route/AppNav';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import MyTheme from './src/theme/theme';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';

SplashScreen.preventAutoHideAsync();


export default function App() {

  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/inter/Inter-Black.ttf'),
    'Inter': require('./assets/fonts/inter/Inter-Regular.ttf'),
    'Inter-Bold': require('./assets/fonts/inter/Inter-Bold.ttf'),
    'Futura': require('./assets/fonts/futura/futur.ttf'),
    'Futura-Bold': require('./assets/fonts/futura/Futura-Bold-font.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PaperProvider theme={MyTheme}>
        <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
          <StatusBar
            animated={true}
            backgroundColor="#61dafb"
            barStyle='default'
            hidden={false}
          />
          <AppNavigation />
        </SafeAreaView>
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
