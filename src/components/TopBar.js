import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Theme from '../theme';

const { width } = Theme;

// todo: this should be in a scene wrapper
const TopBar = ({ showBackButton, rightButton, header }) => (
  <View style={styles.container}>
    <View style={styles.button}>
      {showBackButton && (
        <TouchableOpacity onPress={() => {}}>
          <Icon name="ios-arrow-back" size={30} />
        </TouchableOpacity>
      )}
    </View>
    <View style={styles.header}>{header}</View>
    <View style={styles.button}>
      {rightButton && (
        <TouchableOpacity onPress={rightButton?.onPress}>
          <Icon name={rightButton?.icon || 'ios-menu'} size={30} />
        </TouchableOpacity>
      )}
    </View>
  </View>
);

TopBar.propTypes = {
  showBackButton: PropTypes.bool,
  rightButton: PropTypes.shape({
    onPress: PropTypes.func,
    icon: PropTypes.string,
  }),
  header: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    width,
    height: 50,
    position: 'absolute',
    top: Theme.statusBarHeight,
    flexDirection: 'row',
  },
  button: {
    width: width * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: width * 0.6,
  },
});

export default TopBar;
