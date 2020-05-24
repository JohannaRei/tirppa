import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import routes from './src/routes';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routes.homeScene.name}>
        <Stack.Screen {...routes.homeScene} />
        <Stack.Screen {...routes.infoScene} />
        <Stack.Screen {...routes.listenScene} />
        <Stack.Screen {...routes.matchesScene} />
        <Stack.Screen {...routes.settingsScene} />
        <Stack.Screen {...routes.validateScene} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
