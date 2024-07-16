import React, { FC } from 'react';
import Home from './src/screens/home';
import { createStackNavigator } from '@react-navigation/stack';
import locale from './src/localization/locale';
import ProductDetail from './src/screens/productDetail';
import { IData, INavigationContainerProps } from './src/interfaces';
import ProductService from './lib/data_gen/productservice';

interface AppProps {
  language: string;
  dataUser: IData;
  navigationContainer: INavigationContainerProps;
  token: string;
  url: string;
  Camera: FC<any>;
}

const App = ({
  language,
  navigationContainer,
  dataUser,
  token,
  url,
  Camera,
}: AppProps) => {
  const Stack = createStackNavigator();

  locale.init();
  locale.setCurrentLanguage(locale.formatLanguageUnderscore(language));
  ProductService.BACK.authToken = token;
  ProductService.BACK.url = url;

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        initialParams={{ dataUser }}>
        {props => (
          <Home
            {...props}
            Camera={Camera}
            navigationContainer={navigationContainer}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        options={{ headerShown: false }}
        name="ProductDetail"
        initialParams={{ dataUser }}>
        {props => <ProductDetail Camera={Camera} {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export { App };
export default App;
