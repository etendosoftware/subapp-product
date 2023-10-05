import React from 'react';
import {Text, View} from 'react-native';
import locale from '../../localization/locale';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './style';

interface NavigationContainerProps {
  navigate: (screenName: string, params?: any) => void;
}

interface HomeProps {
  navigationContainer: NavigationContainerProps;
}

const Home: React.FC<HomeProps> = ({navigationContainer}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{locale.t('Home.welcome')}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigationContainer.navigate('Home');
        }}>
        <Text style={styles.textButton}>{locale.t('Home.back')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
