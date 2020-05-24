import HomeScene from '../scenes/Home';
import InfoScene from '../scenes/Info';
import ListenScene from '../scenes/Listen';
import MatchesScene from '../scenes/Matches';
import SettingsScene from '../scenes/Settings';
import ValidateScene from '../scenes/Validate';

import wrapper from './routeWrapper';

const routes = {
  homeScene: {
    name: '/home',
    component: wrapper(HomeScene),
  },
  infoScene: {
    name: '/info',
    component: InfoScene,
  },
  listenScene: {
    name: '/listen',
    component: ListenScene,
  },
  matchesScene: {
    name: '/matches',
    component: MatchesScene,
  },
  settingsScene: {
    name: '/settings',
    component: SettingsScene,
  },
  validateScene: {
    name: '/validate',
    component: ValidateScene,
  },
};

export default routes;
