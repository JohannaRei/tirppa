import React, { useEffect, useState } from 'react';
import { NetInfo } from '@react-native-community/netinfo';
import reactotron from 'reactotron-react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from '../state';

const reduxWrapper = (WrappedComponent) => (props) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <WrappedComponent {...props} />
    </PersistGate>
  </Provider>
);

const routeWrapper = (WrappedComponent) => ({ navigation, ...props }) => {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    NetInfo.addEventListener((state) => {
      reactotron.log(state);
      setShowError(!state.isInternetReachable);
    });
  }, []);

  const navigateTo = (route) => navigation.navigate(route);

  /*if (showError) {
    return <ErrorScene error={'jotain'} />;
  }*/
  return <WrappedComponent {...props} navigateTo={navigateTo} />;
};

export { routeWrapper, reduxWrapper };
