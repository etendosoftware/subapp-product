import React from 'react';
import {Text, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import locale from '../../localization/locale';

interface HomeProps {
  navigation: NavigationProp<any>;
  route: any;
}

const Home = ({...props}: HomeProps) => {
  return (
    <View>
      <Text>{locale.t('Home.welcome')}</Text>
    </View>
  );
};

export default Home;
