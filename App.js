import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/state';
import routes from './src/routes';
import { headerStyle } from './src/theme';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

const Main = () => (
  <MainStack.Navigator
    initialRouteName={routes.homeScene.name}
    screenOptions={{ headerStyle }}>
    <MainStack.Screen {...routes.homeScene} />
    <MainStack.Screen {...routes.infoScene} />
    <MainStack.Screen {...routes.listenScene} />
    <MainStack.Screen {...routes.matchesScene} />
    <MainStack.Screen {...routes.validateScene} />
  </MainStack.Navigator>
);

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <RootStack.Navigator mode="modal">
          <RootStack.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false }}
          />
          <RootStack.Screen {...routes.settingsScene} />
        </RootStack.Navigator>
      </NavigationContainer>
    </PersistGate>
  </Provider>
);

export default App;
