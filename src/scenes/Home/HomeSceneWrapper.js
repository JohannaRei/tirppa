import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMatches } from '../../state/matches/matchesActions';
import HomeScene from './HomeScene';

const mapStateToProps = (state) => ({
  matchesState: state.matches,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getMatches }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScene);
