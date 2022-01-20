import React from 'react';
import styled from 'styled-components/native';
import { Share, Platform } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const Container = styled.SafeAreaView`
  flex: 1;
`;

const ShareBtn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: blue;
  margin-top: 16px;
  height: 50px;
`;
const Title = styled.Text`
  color: ${(props) => props.theme.textColor};
`;

const MovieDetail: React.FC<NativeStackScreenProps<any, 'Movies'>> = ({
  navigation: { navigate },
  //   route: {params},
}) => {
  // const isMovie = 'original_title' in params
  const shareMedia = async () => {
    // url or title 1개는 필수
    // url - ios only
    // title - android only
    const isAndroid = Platform.OS === 'android';
    if (isAndroid) {
      await Share.share({
        // url을 텍스트로
        message:
          'sdnfkjnawkjefnkjwnefkjanwejkfnawjefawjehbfjwehbfjkwahebfjkhwaebfjkhawbekjfhbwaejkfhbwaejkfhbweajkhbf',
        title:
          'Title wenfakwebflkawbelfkbaweklfjbweklafjbwkaejfbklwajebfkjawbefkljawbefkjwaebfkjwaef',
      });
    } else {
      await Share.share({
        url: '',
        message:
          'sdnfkjnawkjefnkjwnefkjanwejkfnawjefawjehbfjwehbfjkwahebfjkhwaebfjkhawbekjfhbwaejkfhbwaejkfhbweajkhbf',
      });
    }
  };

  return (
    <Container>
      <ShareBtn onPress={shareMedia}>
        <Title>Share</Title>
      </ShareBtn>
    </Container>
  );
};

export default MovieDetail;
