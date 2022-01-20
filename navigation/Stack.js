import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity } from 'react-native';
import { YELLOW_COLOR } from '../colors';
import MovieDetail from '../screens/MovieDetail';

const ScreenOne = ({ navigation: { navigate } }) => (
  <View>
    <TouchableOpacity
      onPress={() => navigate('Two')}
      style={{ justifyContent: 'center', alignItems: 'center' }}
    >
      <Text>1</Text>
    </TouchableOpacity>
  </View>
);
const ScreenTwo = ({ navigation: { navigate } }) => (
  <View>
    <TouchableOpacity
      onPress={() => navigate('Three')}
      style={{ justifyContent: 'center', alignItems: 'center' }}
    >
      <Text>2</Text>
    </TouchableOpacity>
  </View>
);
const ScreenThree = ({ navigation: { goBack, setOptions } }) => (
  <View>
    <TouchableOpacity
      onPress={() => setOptions({ title: 'hello' })}
      style={{ justifyContent: 'center', alignItems: 'center' }}
    >
      <Text>Change Title</Text>
    </TouchableOpacity>
  </View>
);

const NativeStack = createNativeStackNavigator();

const Stack = () => (
  <NativeStack.Navigator
    screenOptions={{
      headerTintColor: YELLOW_COLOR,
      headerBackTitleVisible: false,
      //   presentation: 'modal',
      //   animation: 'flip', // only ios
    }}
  >
    <NativeStack.Screen name='One' component={ScreenOne}></NativeStack.Screen>
    <NativeStack.Screen name='Two' component={ScreenTwo}></NativeStack.Screen>
    <NativeStack.Screen
      name='Three'
      component={ScreenThree}
      options={{ presentation: 'modal' }}
    ></NativeStack.Screen>
    <NativeStack.Screen
      name='MovieDetail'
      component={MovieDetail}
      options={{ presentation: 'modal' }}
    ></NativeStack.Screen>
  </NativeStack.Navigator>
);

export default Stack;
