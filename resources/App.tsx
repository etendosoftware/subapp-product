import React, {useEffect} from 'react';
import Home from './src/screens/home';
import {createStackNavigator} from '@react-navigation/stack';
import i18n from './src/localization';
const App = ({...props}) => {
  const Stack = createStackNavigator();
  useEffect(() => {
    i18n.locale = "en-US";
  }, []);

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
          component={Home}
          initialParams={{dataUser}}
        />
      </Stack.Navigator>
  );
};

export {App};
export default App;
