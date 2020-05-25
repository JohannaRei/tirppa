import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { SceneContainer, RecordButton } from '../../components';

const HomeScene = ({
  navigation,
  matchesState: { fetchingMatches, matches },
  getMatches,
}) => {
  const [recording, setRecording] = useState(false);

  useEffect(() => {
    // if automatic recording is on, start it here
  }, []);

  useEffect(() => {
    if (fetchingMatches) {
      setRecording(false);
    }
  }, [fetchingMatches]);

  useEffect(() => {
    if (matches.length) {
      navigation.navigate('/matches');
    }
  }, [matches]);

  //const openMenu = () => navigation.navigate('/settings');

  const onPressRecord = () => {
    setRecording(!recording);
    getMatches();
  };

  const getText = () => {
    if (recording) return 'Recording...';
    if (fetchingMatches) return 'Searching...';
    return 'Start recording';
  };

  return (
    <SceneContainer>
      <Text>{getText()}</Text>
      <RecordButton onPress={onPressRecord} recording={recording} />
    </SceneContainer>
  );
};

HomeScene.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    setOptions: PropTypes.func,
  }),
  matchesState: PropTypes.shape({
    fetchingMatches: PropTypes.bool,
  }),
};

export default HomeScene;
