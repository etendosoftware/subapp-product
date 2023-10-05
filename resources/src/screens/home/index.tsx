import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import locale from '../../localization/locale';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './style';
interface HomeProps {
  navigation: NavigationProp<any>;
  route: any;
}

const Home = ({...props}: HomeProps) => {
  console.log({lea: props.route.params});
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{locale.t('Home.welcome')}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          props.route.params.navigationContainer.navigate('Home');
        }}>
        <Text style={styles.textButton}>{locale.t('Home.back')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
