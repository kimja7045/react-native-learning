// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useColorScheme } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Asset, useAssets } from 'expo-asset';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import Tabs from './navigation/Tabs';
import Stack from './navigation/Stack';
import Root from './navigation/Root';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './Styled';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();

const loadFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

const loadImages = (images) =>
  images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.loadAsync(image);
    }
  });

export default function App() {
  const [ready, setReady] = useState(false);
  // const [assets] = useAssets([
  //   require('./dami.png'),
  //   'https://reactnative.dev/img/oss_logo.png',
  // ]);
  // const [loaded] = Font.useFonts(Ionicons.font);

  const onFinish = () => setReady(true);

  const startLoading = async () => {
    // init db
    // get user avatar
    // count notification

    const fonts = loadFonts([Ionicons.font]);
    const images = loadImages([
      require('./dami.png'),
      'https://reactnative.dev/img/oss_logo.png',
    ]);
    await Promise.all([...fonts, ...images]);
    console.log(fonts);
    console.log('images = ', images);

    // await new Promise((resolve) => setTimeout(resolve, 1000));
  };
  const isDark = useColorScheme() === 'light'; // 'light' or 'dark'

  console.log(ready);
  if (!ready) {
    return (
      <AppLoading
        startAsync={startLoading}
        onFinish={onFinish}
        onError={console.error}
      />
    );
  }
  // if (!assets || !loaded) {
  //   return <AppLoading />;
  // }
  return (
    // <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Root />
          {/* <Tabs /> */}
          {/* <Stack /> */}
        </NavigationContainer>
      </QueryClientProvider>
    </ThemeProvider>
  );
  // <StatusBar style='auto' />
}
