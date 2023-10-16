import React from 'react';
import Home from './src/screens/home';
import {createStackNavigator} from '@react-navigation/stack';
import locale from './src/localization/locale';
import ProductDetail from './src/screens/productDetail';

interface NavigationContainerProps {
  navigate: (screenName: string, params?: any) => void;
}

interface HomeProps {
  language: string;
  navigationContainer: NavigationContainerProps;
}

const App = ({language, navigationContainer}: HomeProps) => {
  const Stack = createStackNavigator();

  locale.init();
  locale.setCurrentLanguage(locale.formatLanguageUnderscore(language));

  // TODO: delete this data and use the data from the API
  const dataUser = {
    username: 'test',
    email: 'a@a.com',
    id: '1',
    role: 'admin',
    status: 'active',
  };

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
