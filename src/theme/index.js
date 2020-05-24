import { Dimensions, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

export const colors = {
  background: '#fff',
  testing: 'red',
};

export const headerStyle = {
  backgroundColor: colors.background,
};

const getStatusBarHeight = () => {
  if (Platform.OS === 'android') {
    return StatusBar.currentHeight;
  }
  return height >= 812 && width >= 375 ? 40 : 20;
};

export default {
  width,
  height,
  recordButtonSize: width * 0.25,
  bottomMargin: 50,
  statusBarHeight: getStatusBarHeight(),
};
