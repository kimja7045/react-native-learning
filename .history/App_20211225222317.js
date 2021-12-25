// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Asset } from 'expo-asset';

export default function App() {
  const [ready, setReady] = useState(false);

  const onFinish = () => setReady(true);
  const startLoading = async () => {
    await Font.loadAsync(Ionicons.font);
    await Asset.loadAsync(require('./dami.png'));
    await Image.prefetch('https://reactnative.dev/img/oss_logo.png');
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
