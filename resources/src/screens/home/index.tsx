import React from 'react';
import {Text, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

interface HomeProps {
  navigation: NavigationProp<any>;
  route: any;
}

const Home = ({navigation, route}: HomeProps) => {
  const {dataUser} = route.params;
  const {t} = useTranslation();
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
