import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Theme from '../theme';

const MenuButton = ({ onPress, menuOpen }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Icon name={menuOpen ? 'ios-close' : 'ios-menu'} size={30} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: Theme.width * 0.2,
    alignItems: 'center',
  },
});

MenuButton.propTypes = {
  onPress: PropTypes.func,
  menuOpen: PropTypes.bool,
};

export default MenuButton;
