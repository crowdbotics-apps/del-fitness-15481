import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps26064Navigator from '../features/Maps26064/navigator';
import Tutorial26063Navigator from '../features/Tutorial26063/navigator';
import Messaging26062Navigator from '../features/Messaging26062/navigator';
import EmailAuth26061Navigator from '../features/EmailAuth26061/navigator';
import Camera26060Navigator from '../features/Camera26060/navigator';
import CalendarView26059Navigator from '../features/CalendarView26059/navigator';
import Maps26058Navigator from '../features/Maps26058/navigator';
import Tutorial26057Navigator from '../features/Tutorial26057/navigator';
import Messaging26056Navigator from '../features/Messaging26056/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Maps26064: { screen: Maps26064Navigator },
Tutorial26063: { screen: Tutorial26063Navigator },
Messaging26062: { screen: Messaging26062Navigator },
EmailAuth26061: { screen: EmailAuth26061Navigator },
Camera26060: { screen: Camera26060Navigator },
CalendarView26059: { screen: CalendarView26059Navigator },
Maps26058: { screen: Maps26058Navigator },
Tutorial26057: { screen: Tutorial26057Navigator },
Messaging26056: { screen: Messaging26056Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
