import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text } from 'react-native';

const Search: React.FC<NativeStackScreenProps<any, 'Movies'>> = ({
  navigation,
}) => {
  return (
    <View>
      <Text>search</Text>
    </View>
  );
};

export default Search;
