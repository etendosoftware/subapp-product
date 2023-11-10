import React, {useEffect} from 'react';
import Home from './src/screens/home';
import {createStackNavigator} from '@react-navigation/stack';
import locale from './src/localization/locale';
import ProductDetail from './src/screens/productDetail';
import {IData, INavigationContainerProps} from './src/interfaces';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProductService from './lib/data_gen/productservice';

interface AppProps {
  language: string;
  dataUser: IData;
  navigationContainer: INavigationContainerProps;
  token: string;
}

const App = ({language, navigationContainer, dataUser, token}: AppProps) => {
  const Stack = createStackNavigator();

  locale.init();
  locale.setCurrentLanguage(locale.formatLanguageUnderscore(language));
  ProductService.BACK.authToken = token;

  useEffect(() => {
    const excec = async () => {
      await AsyncStorage.setItem('tokenSubapp', token);
    };
    excec();
  }, []);

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        initialParams={{dataUser}}>
        {props => <Home {...props} navigationContainer={navigationContainer} />}
      </Stack.Screen>
      <Stack.Screen
        options={{headerShown: false}}
        name="ProductDetail"
        initialParams={{dataUser}}>
        {props => <ProductDetail {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export {App};
export default App;
