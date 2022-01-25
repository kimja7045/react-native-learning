import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { Share } from 'react-native';
import styled from 'styled-components/native';
import { useQuery } from 'react-query';
import { moviesApi } from '../api';
import { makeImgPath } from '../utils';
import { BlurView } from 'expo-blur';

const Container = styled.ScrollView`
  /* background-color: ${(props) => props.theme.mainBgColor}; */
`;

const View = styled.View`
  flex: 1;
`;

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const BgImg = styled.Image`
  /* flex: 1; */
  /* width: 100%;
  height: 100%;
  position: absolute; */
`;

const Poster = styled.Image`
  width: 100px;
  height: 160px;
  border-radius: 5px;
`;
const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: white;
`;
const Wrapper = styled.View`
  flex-direction: row;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const Column = styled.View`
  width: 40%;
  margin-left: 16px;
`;
const OverView = styled.Text`
  color: rgba(255, 255, 255, 0.6);
  margin-top: 8px;
`;
const Votes = styled(OverView)`
  font-size: 12px;
`;

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const Movies: React.FC<NativeStackScreenProps<any, 'Movies'>> = ({
  navigation: { navigate },
}) => {
  const isDark = useColorScheme() === 'dark';
  const {
    isLoading,
    data: movies,
    error,
    isError,
  } = useQuery('movies', moviesApi.defaultList);

  const {
    isLoading: isTrendingMovieLoading,
    data: trendingMovies,
    error: trendingMovieError,
  } = useQuery('trendingMovies', moviesApi.trending);

  console.log('movies', movies);
  console.log('trendingMovies', trendingMovies);
  console.log('error', error);

  return isLoading ? (
    <Loader>
      <ActivityIndicator size={'large'} />
    </Loader>
  ) : (
    <Container>
      <Swiper
        horizontal
        loop
        autoplay
        autoplayTimeout={3.5}
        showsButtons={false}
        showsPagination={false}
        containerStyle={{ width: '100%', height: SCREEN_HEIGHT / 4 }}
      >
        {movies?.results?.map((movie) => (
          <View key={movie.id}>
            <BgImg
              style={StyleSheet.absoluteFill}
              source={{ uri: makeImgPath(movie?.backdrop_path) }}
            />
            <BlurView
              tint={isDark ? 'dark' : 'light'}
              intensity={80}
              // style={{ width: '100%', height: '100%', position: 'absolute' }}
              style={StyleSheet.absoluteFill}
            >
              <Wrapper>
                <Poster source={{ uri: makeImgPath(movie.poster_path) }} />
                <Column>
                  <Title>{movie?.original_title}</Title>
                  <OverView>{movie.overview.slice(0, 90)}...</OverView>
                  {movie.vote_average > 0 && (
                    <Votes>🌟 {movie.vote_average}</Votes>
                  )}
                </Column>
              </Wrapper>
            </BlurView>
          </View>
        ))}
      </Swiper>
    </Container>
  );
};

export default Movies;
