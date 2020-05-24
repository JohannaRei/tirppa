import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { SceneContainer, RecordButton, MenuButton } from '../../components';

const HomeScene = ({ navigation, userName }) => {
  const [recording, setRecording] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <MenuButton onPress={openMenu} menuOpen={false} />,
    });
  });

  const openMenu = () => navigation.navigate('/settings');

  const onPressRecord = () => setRecording(!recording);

  return (
    <SceneContainer>
      <Text>{recording ? 'Recording...' : 'Start recording'}</Text>
      <Text>{userName}</Text>
      <RecordButton onPress={onPressRecord} recording={recording} />
    </SceneContainer>
  );
};

HomeScene.propTypes = {
  userName: PropTypes.string,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    setOptions: PropTypes.func,
  }),
};

HomeScene.defaultProps = {
  userName: '',
};

export default HomeScene;
