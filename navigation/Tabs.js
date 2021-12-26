import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from '../screens/Movies';
import Search from '../screens/Search';
import Tv from '../screens/Tv';
import { useColorScheme } from 'react-native';
import { BLACK_COLOR, YELLOW_COLOR } from '../colors';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === 'dark'; // 'light' or 'dark'

  return (
    <Tab.Navigator
      initialRouteName='Movies'
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDark ? BLACK_COLOR : 'white',
        },
        //   tabBarLabelPosition: 'beside-icon', // iPad에서 많이 사용
        // tabBarLabelStyle: {},
        tabBarActiveTintColor: isDark ? YELLOW_COLOR : BLACK_COLOR,
        tabBarInactiveTintColor: isDark ? '#d2dae2' : '#808e9b',
        headerStyle: {
          backgroundColor: isDark ? BLACK_COLOR : 'white',
        },
        headerTitleStyle: {
          color: isDark ? 'white' : BLACK_COLOR,
        },
      }}
    >
      <Tab.Screen
        name='Movies'
        component={Movies}
        //   options={{ headerTitleStyle: { color: 'tomato' } }}
      />
      <Tab.Screen name='Tv' component={Tv} options={{ tabBarBadge: 5 }} />
      <Tab.Screen name='Search' component={Search} />
    </Tab.Navigator>
  );
};

export default Tabs;
