import React from 'react';
import {Text, View} from 'react-native';
import Navbar from '../../components/navbar';

import {
  Button as ButtonUI,
  // TODO: add PlusIcon to the library export
  PencilIcon,
} from 'etendo-ui-library';

import Search from '../../components/search';
import Table from '../../components/table';
import {styles} from './style';
import {NavigationProp} from '@react-navigation/native';
import {isTablet} from '../../utils';
import locale from '../../localization/locale';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface NavigationContainerProps {
  navigate: (screenName: string, params?: any) => void;
}
interface HomeProps {
  navigation: NavigationProp<any>;
  route: any;
  navigationContainer: NavigationContainerProps;
}

const Home = ({navigation, route, navigationContainer}: HomeProps) => {
  const {dataUser} = route.params;
  return (
    <View style={styles.container}>
      <Navbar
        title={locale.t('Home.welcome')}
        username={dataUser?.username}
        onOptionSelected={() => {
          navigationContainer.navigate('Home');
        }}
      />
      <View style={styles.topView}>
        <Text style={styles.title}>{locale.t('Home.productList')}</Text>
        <View style={styles.buttonContainer}>
          <ButtonUI
            width={isTablet ? '100%' : '60%'}
            height={50}
            typeStyle="secondary"
            onPress={() => {
              navigation.navigate('ProductDetail');
            }}
            text={locale.t('Home.newProduct')}
            iconLeft={<PencilIcon style={styles.icon} />}
          />
        </View>
      </View>
      <Search />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigationContainer.navigate('Home');
        }}>
        <Text style={styles.textButton}>{locale.t('Common.goBack')}</Text>
      </TouchableOpacity>
      <Table navigation={navigation} />
    </View>
  );
};

export default Home;

// import React from 'react';
// import {Text, View} from 'react-native';
// import locale from '../../localization/locale';
// import {TouchableOpacity} from 'react-native-gesture-handler';
// import {styles} from './style';

// interface NavigationContainerProps {
//   navigate: (screenName: string, params?: any) => void;
// }

// interface HomeProps {
//   navigationContainer: NavigationContainerProps;
// }

// const Home: React.FC<HomeProps> = ({navigationContainer}) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>{locale.t('Home.welcome')}</Text>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => {
//           navigationContainer.navigate('Home');
//         }}>
//         <Text style={styles.textButton}>{locale.t('Common.goBack')}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Home;
