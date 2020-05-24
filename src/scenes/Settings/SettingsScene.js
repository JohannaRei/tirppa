import React, { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import { SceneContainer, MenuButton } from '../../components';

const SettingsScene = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <MenuButton onPress={closeMenu} menuOpen />,
      headerLeft: null,
    });
  });

  const closeMenu = () => navigation.goBack();

  return (
    <SceneContainer>
      <Text>Settings</Text>
    </SceneContainer>
  );
};

export default SettingsScene;
