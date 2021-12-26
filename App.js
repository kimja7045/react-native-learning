// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Asset, useAssets } from 'expo-asset';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/Tabs';

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
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
  // <StatusBar style='auto' />
}
