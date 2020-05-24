import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { SceneContainer, RecordButton, TopBar } from '../../components';

const HomeScene = ({ navigation: { navigate }, userName }) => {
  const [recording, setRecording] = useState(false);

  const openMenu = () => navigate('/settings');

  const onPressRecord = () => setRecording(!recording);
  const menuButton = {
    icon: 'ios-menu',
    onPress: openMenu,
  };

  return (
    <SceneContainer>
      <TopBar showBackButton rightButton={menuButton} />
      <Text>{recording ? 'Recording...' : 'Start recording'}</Text>
      <Text>{userName}</Text>
      <RecordButton onPress={onPressRecord} recording={recording} />
    </SceneContainer>
  );
};

HomeScene.propTypes = {
  userName: PropTypes.string,
  navigation: PropTypes.shape({
    navigate: PropTypes.any,
  }),
};

HomeScene.defaultProps = {
  userName: '',
};

export default HomeScene;
