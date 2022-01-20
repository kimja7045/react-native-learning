import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Share } from 'react-native';
import styled from 'styled-components/native';
import { useQuery } from 'react-query';
import { moviesApi } from '../api';

// const Container = styled.SafeAreaView`
//   flex: 1;
// `;

// const Btn = styled.TouchableOpacity`
//   justify-content: center;
//   align-items: center;
//   height: 50px;
//   background-color: ${(props) => props.theme.mainBgColor};
// `;

// const Title = styled.Text`
//   color: ${(props) => props.theme.textColor};
// `;

const Movies: React.FC<NativeStackScreenProps<any, 'Movies'>> = ({
  navigation: { navigate },
}) => {
  const {
    isLoading,
    data: movies,
    error,
  } = useQuery('movies', moviesApi.defaultList);
  const {
    isLoading: isTrendingMovieLoading,
    data: trendingMovies,
    error: trendingMovieError,
  } = useQuery('trendingMovies', moviesApi.trending);

  console.log('movies', movies);
  console.log('trendingMovies', trendingMovies);
  console.log('error', error);

  return (
    <></>
    // <Container>
    //   <Btn onPress={() => navigate('Stack', { screen: 'MovieDetail' })}>
    //     <Title>move Detail</Title>
    //   </Btn>
    // </Container>
  );
};

export default Movies;
