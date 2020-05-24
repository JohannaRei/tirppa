import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Animated,
} from 'react-native';
import Theme from '../theme';

const RecordButton = ({ onPress, recording }) => {
  const shapeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(shapeAnim, {
      toValue: recording ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [recording]);

  const dynamicStyle = () => {
    const smallButtonSize = Theme.recordButtonSize - 50;
    const buttonSize = Theme.recordButtonSize - 20;
    return {
      width: shapeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [smallButtonSize, buttonSize],
      }),
      height: shapeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [smallButtonSize, buttonSize],
      }),
      backgroundColor: 'red',
      borderRadius: shapeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [10, buttonSize / 2],
      }),
    };
  };

  return (
    <View style={styles.button}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.buttonOuter}>
          <Animated.View style={dynamicStyle()} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

RecordButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  recording: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: Theme.bottomMargin,
  },
  buttonOuter: {
    borderColor: '#000',
    borderWidth: 5,
    width: Theme.recordButtonSize,
    height: Theme.recordButtonSize,
    borderRadius: Theme.recordButtonSize / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RecordButton;
