import React from 'react';
import {Text, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

interface HomeProps {
  navigation: NavigationProp<any>;
  route: any;
}

const Home = ({...props}: HomeProps) => {
  // const {t} = useTranslation()
  return (
    <View>
      <Text>welcomesdfsd</Text>
    </View>
  );
};

export default Home;
