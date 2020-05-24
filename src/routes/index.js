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
    component: wrapper(InfoScene),
  },
  listenScene: {
    name: '/listen',
    component: wrapper(ListenScene),
  },
  matchesScene: {
    name: '/matches',
    component: wrapper(MatchesScene),
  },
  settingsScene: {
    name: '/settings',
    component: wrapper(SettingsScene),
  },
  validateScene: {
    name: '/validate',
    component: wrapper(ValidateScene),
  },
};

export default routes;
