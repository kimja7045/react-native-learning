import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from '../screens/Movies.';
import Search from '../screens/Search.';
import Tv from '../screens/Tv';
import { useColorScheme } from 'react-native';
import { BLACK_COLOR, YELLOW_COLOR } from '../colors';
import { Ionicons } from '@expo/vector-icons';
import Stack from './Stack';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === 'light'; // 'light' or 'dark'

  return (
    <Tab.Navigator
      initialRouteName='Movies'
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDark ? BLACK_COLOR : 'white',
        },
        //   tabBarLabelPosition: 'beside-icon', // iPad에서 많이 사용
        tabBarLabelStyle: {
          marginTop: -5,
          fontSize: 12,
          fontWeight: '600',
        },
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
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'film' : 'film-outline'}
              color={color}
              size={size}
            />
          ),
        }}
        //   options={{ headerTitleStyle: { color: 'tomato' } }}
      />
      <Tab.Screen
        name='TV'
        component={Tv}
        options={{
          // tabBarBadge: 5 ,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'tv' : 'tv-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Search'
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'search' : 'search-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
