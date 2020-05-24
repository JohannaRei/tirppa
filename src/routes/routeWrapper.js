import React, { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';

const routeWrapper = (WrappedComponent) => (props) => {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setShowError(!state.isInternetReachable);
    });
    return () => unsubscribe();
  }, []);

  const navigateTo = (route) => props.navigation.navigate(route);

  /*if (showError) {
    return <ErrorScene error={'jotain'} />;
  }*/
  return <WrappedComponent {...props} navigateTo={navigateTo} />;
};
export default routeWrapper;
