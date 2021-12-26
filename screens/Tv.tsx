import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text } from 'react-native';

const Tv: React.FC<NativeStackScreenProps<any, 'Movies'>> = ({
  navigation,
}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>tv</Text>
    </View>
  );
};

export default Tv;
