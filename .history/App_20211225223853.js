// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Asset } from 'expo-asset';

const loadFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));
export default function App() {
  const [ready, setReady] = useState(false);

  const onFinish = () => setReady(true);
  const loadAssets = (loadAssets) =>
    loadAssets.map((image) => Asset.loadAsync(image));

  const startLoading = async () => {
    // await Font.loadAsync(Ionicons.font);
    const fonts = await loadFonts([Ionicons.font]);
    const assets = loadAssets([
      require('./dami.png'),
      'https://reactnative.dev/img/oss_logo.png',
    ]);
    console.log(fonts);

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
  return <Text>We are done loading</Text>;
  // <StatusBar style='auto' />
}
