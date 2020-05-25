import HomeScene from '../scenes/Home';
import InfoScene from '../scenes/Info';
import MatchesScene from '../scenes/Matches';
import SettingsScene from '../scenes/Settings';

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
  matchesScene: {
    name: '/matches',
    component: wrapper(MatchesScene),
  },
  settingsScene: {
    name: '/settings',
    component: wrapper(SettingsScene),
  },
};

export default routes;
