import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

const SceneContainer = ({ children, containerStyle }) => (
  <View style={[styles.container, containerStyle]}>{children}</View>
);

SceneContainer.propTypes = {
  children: PropTypes.node.isRequired,
  containerStyle: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default SceneContainer;
