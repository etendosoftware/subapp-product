import React, {useEffect} from 'react';
import Home from './src/screens/home';
import {createStackNavigator} from '@react-navigation/stack';
import locale from './src/localization/locale';
const App = ({...props}) => {
  const Stack = createStackNavigator();
  useEffect(() => {
    console.log(props);
  }, []);
  locale.init();
  locale.setCurrentLanguage(locale.formatLanguageUnderscore(props.language));

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
        initialParams={props}
      />
    </Stack.Navigator>
  );
};

export {App};
export default App;
