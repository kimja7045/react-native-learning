import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

const Movies = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => navigate('Stack', { screen: 'Three' })}
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <Text>movies</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Movies;
